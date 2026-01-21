import { Icon } from '../atoms/Icon';

interface AuthorSectionProps {
  authorName?: string;
  authorTitle?: string;
  authorImage?: string;
}

export function AuthorSection({
  authorName = 'Arjun Mehta',
  authorTitle = 'Senior Financial Analyst',
  authorImage,
}: AuthorSectionProps) {
  return (
    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
      <div className="flex items-center gap-3">
        {authorImage ? (
          <img
            src={authorImage}
            alt={authorName}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
            {authorName.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-black">{authorName}</div>
          <div className="text-sm text-gray-500">{authorTitle}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
          <Icon name="like" />
          <span className="text-sm">Like</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
          <Icon name="comment" />
          <span className="text-sm">Comment</span>
        </button>
      </div>
    </div>
  );
}
