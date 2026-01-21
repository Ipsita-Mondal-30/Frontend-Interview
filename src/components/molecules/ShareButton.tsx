import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

interface ShareButtonProps {
  onClick?: () => void;
}

export function ShareButton({ onClick }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      }).catch(() => {});
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Button variant="grey" size="sm" onClick={handleShare} className="gap-2">
      <Icon name="share" />
      Share Article
    </Button>
  );
}
