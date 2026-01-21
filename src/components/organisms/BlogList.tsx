import { useBlogs } from '../../api/blogs';
import { BlogCard } from '../molecules/BlogCard';
import { LoadingSkeleton } from '../atoms/LoadingSkeleton';
import { ErrorMessage } from '../atoms/ErrorMessage';

interface BlogListProps {
  selectedBlogId?: string;
  onSelectBlog: (id: string) => void;
}

export function BlogList({ selectedBlogId, onSelectBlog }: BlogListProps) {
  const { data, isLoading, isError, error } = useBlogs();

  if (isLoading) {
    return <LoadingSkeleton count={5} />;
  }

  if (isError) {
    return <ErrorMessage message={error?.message || 'Failed to load blogs'} />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No blogs found. Create your first blog!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelectBlog(blog.id)}
          isSelected={selectedBlogId === blog.id}
        />
      ))}
    </div>
  );
}
