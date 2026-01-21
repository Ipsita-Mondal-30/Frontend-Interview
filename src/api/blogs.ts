import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { Blog, NewBlogInput } from '../types/blog';

const API_BASE = 'http://localhost:3001';

export function useBlogs() {
  return useQuery<Blog[], Error>({
    queryKey: ['blogs'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/blogs`);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      return response.json();
    },
  });
}

export function useBlog(id: string | undefined) {
  return useQuery<Blog, Error>({
    queryKey: ['blog', id],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/blogs/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }
      return response.json();
    },
    enabled: !!id,
  });
}

export function useCreateBlog() {
  const queryClient = useQueryClient();
  return useMutation<Blog, Error, NewBlogInput>({
    mutationFn: async (newBlog: NewBlogInput) => {
      const response = await fetch(`${API_BASE}/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });
      if (!response.ok) {
        throw new Error('Failed to create blog');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
}
