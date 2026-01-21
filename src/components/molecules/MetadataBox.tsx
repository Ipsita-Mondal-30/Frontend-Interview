import type { Blog } from '../../types/blog';
import { calculateReadTime } from '../../utils/helpers';

interface MetadataBoxProps {
  blog: Blog;
}

export function MetadataBox({ blog }: MetadataBoxProps) {
  const readTime = calculateReadTime(blog.content);

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <div className="text-gray-500 font-medium mb-1">CATEGORY</div>
          <div className="text-black font-semibold">
            {blog.category.join(' & ')}
          </div>
        </div>
        <div>
          <div className="text-gray-500 font-medium mb-1">READ TIME</div>
          <div className="text-black font-semibold">
            {readTime} {readTime === 1 ? 'Min' : 'Mins'}
          </div>
        </div>
        <div>
          <div className="text-gray-500 font-medium mb-1">DATE</div>
          <div className="text-black font-semibold">
            {new Date(blog.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
