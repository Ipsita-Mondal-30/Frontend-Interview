import React, { useState } from 'react';
import { useCreateBlog } from '../../api/blogs';
import { Button } from '../atoms/Button';
import { FormField } from '../molecules/FormField';
import { ErrorMessage } from '../atoms/ErrorMessage';

interface CreateBlogFormProps {
  onSuccess: () => void;
}

export function CreateBlogForm({ onSuccess }: CreateBlogFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    coverImage: '',
    content: '',
  });

  const createBlog = useCreateBlog();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const categories = formData.category
      .split(',')
      .map((cat) => cat.trim().toUpperCase())
      .filter((cat) => cat.length > 0);

    createBlog.mutate(
      {
        title: formData.title,
        category: categories,
        description: formData.description,
        coverImage: formData.coverImage,
        content: formData.content,
        date: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          setFormData({
            title: '',
            category: '',
            description: '',
            coverImage: '',
            content: '',
          });
          onSuccess();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        label="Title"
        name="title"
        value={formData.title}
        onChange={(value) => setFormData({ ...formData, title: value })}
        placeholder="Enter blog title"
        required
      />

      <FormField
        label="Categories (comma-separated)"
        name="category"
        value={formData.category}
        onChange={(value) => setFormData({ ...formData, category: value })}
        placeholder="e.g., FINANCE, TECH, CAREER"
      />

      <FormField
        label="Description"
        name="description"
        value={formData.description}
        onChange={(value) => setFormData({ ...formData, description: value })}
        placeholder="Enter blog description"
        required
      />

      <FormField
        label="Cover Image URL"
        name="coverImage"
        value={formData.coverImage}
        onChange={(value) => setFormData({ ...formData, coverImage: value })}
        placeholder="https://example.com/image.jpg"
      />

      <FormField
        label="Content"
        name="content"
        value={formData.content}
        onChange={(value) => setFormData({ ...formData, content: value })}
        type="textarea"
        rows={10}
        placeholder="Enter blog content"
        required
      />

      {createBlog.isError && (
        <ErrorMessage message={createBlog.error?.message || 'Failed to create blog'} />
      )}

      <div className="flex gap-2">
        <Button type="submit" disabled={createBlog.isPending}>
          {createBlog.isPending ? 'Creating...' : 'Create Blog'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setFormData({
              title: '',
              category: '',
              description: '',
              coverImage: '',
              content: '',
            });
          }}
        >
          Clear
        </Button>
      </div>
    </form>
  );
}
