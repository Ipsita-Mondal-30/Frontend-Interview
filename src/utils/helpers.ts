export function getCategoryIcon(category: string): 'finance' | 'career' | 'regulations' | 'skills' | 'technology' {
  const categoryUpper = category.toUpperCase();
  if (categoryUpper.includes('FINANCE') || categoryUpper.includes('FINTECH')) {
    return 'finance';
  }
  if (categoryUpper.includes('CAREER') || categoryUpper.includes('EDUCATION')) {
    return 'career';
  }
  if (categoryUpper.includes('REGULATION') || categoryUpper.includes('TAX')) {
    return 'regulations';
  }
  if (categoryUpper.includes('SKILL') || categoryUpper.includes('DEVELOPMENT')) {
    return 'skills';
  }
  if (categoryUpper.includes('TECH') || categoryUpper.includes('AI') || categoryUpper.includes('AUTOMATION')) {
    return 'technology';
  }
  return 'finance'; // default
}

export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);

  if (diffInSeconds < 60) {
    return 'just now';
  }
  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
  }
  if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
  }
  if (diffInDays < 7) {
    return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
  }
  if (diffInWeeks < 4) {
    return `${diffInWeeks} ${diffInWeeks === 1 ? 'week' : 'weeks'} ago`;
  }
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
