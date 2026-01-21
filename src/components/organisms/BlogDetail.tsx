import { useBlog } from '../../api/blogs';
import { LoadingSkeleton } from '../atoms/LoadingSkeleton';
import { ErrorMessage } from '../atoms/ErrorMessage';
import { Badge } from '../atoms/Badge';
import { ShareButton } from '../molecules/ShareButton';
import { MetadataBox } from '../molecules/MetadataBox';
import { AuthorSection } from '../molecules/AuthorSection';
import { calculateReadTime } from '../../utils/helpers';

interface BlogDetailProps {
  blogId: string;
}

export function BlogDetail({ blogId }: BlogDetailProps) {
  const { data, isLoading, isError, error } = useBlog(blogId);

  if (isLoading) {
    return <LoadingSkeleton single />;
  }

  if (isError) {
    return <ErrorMessage message={error?.message || 'Failed to load blog'} />;
  }

  if (!data) {
    return (
      <div className="text-center py-8 text-gray-500">
        Blog not found
      </div>
    );
  }

  const readTime = calculateReadTime(data.content);
  const primaryCategory = data.category[0] || 'FINANCE';

  return (
    <article className="space-y-6">
      {data.coverImage && (
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-96 object-cover rounded-lg"
        />
      )}
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant="default">{primaryCategory}</Badge>
            <span className="text-sm text-gray-500">
              {readTime} min read
            </span>
          </div>
          <ShareButton />
        </div>

        <h1 className="text-4xl font-bold text-black">
          {data.title}
        </h1>

        <MetadataBox blog={data} />

        <div className="prose max-w-none">
          <p className="text-lg text-black mb-6 leading-relaxed">
            {data.description}
          </p>
          <div className="text-black whitespace-pre-wrap leading-relaxed">
            {data.content}
          </div>
        </div>

        <AuthorSection />
      </div>
    </article>
  );
}
