import type { Blog } from '../../types/blog';
import { Badge } from '../atoms/Badge';
import { Icon } from '../atoms/Icon';
import { getCategoryIcon, formatTimeAgo } from '../../utils/helpers';

interface BlogCardProps {
  blog: Blog;
  onClick: () => void;
  isSelected?: boolean;
}

export function BlogCard({ blog, onClick, isSelected = false }: BlogCardProps) {
  const primaryCategory = blog.category[0] || 'FINANCE';
  const categoryIcon = getCategoryIcon(primaryCategory);

  return (
    <div
      className={`bg-white rounded-lg border p-4 cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'ring-2 ring-gray-400 border-gray-400' : 'border-gray-300'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1 text-gray-600">
          <Icon name={categoryIcon} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-1">
            <span className="text-xs font-medium text-gray-600 uppercase">
              {primaryCategory}
            </span>
            <span className="text-xs text-gray-500 ml-2">
              {formatTimeAgo(blog.date)}
            </span>
          </div>
          <h3 className="text-base font-semibold mb-2 text-black overflow-hidden text-ellipsis line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-600 overflow-hidden text-ellipsis line-clamp-2 mb-2">
            {blog.description}
          </p>
          {blog.category.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {blog.category.slice(0, 2).map((cat) => (
                <Badge key={cat} variant="secondary">
                  {cat}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
