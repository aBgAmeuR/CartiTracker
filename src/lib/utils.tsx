import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const extractNoticeAndName = (name: string | null) => {
  const notices = {
    '⭐': 'Best Of',
    '✨': 'Special',
    '🏆': 'Grails',
    '🗑️': 'Worst Of',
    '🤖': 'AI Ref Track',
  } as const;
  const notice =
    Object.entries(notices).find(([notice]) => name?.startsWith(notice))?.[1] ??
    null;

  return {
    notice,
    name: name?.replace(/^(?:⭐|✨|🏆|🗑|🤖) ?/, '') ?? '',
  };
};

export const extractLinks = (links: string | null) =>
  links && links !== 'N/A' ? links.split('\n').map((link) => link.trim()) : [];

export const getLinks = (links: string[]) => {
  const returnLinks: { link: string; isPillowcase: boolean }[] = [];
  links.forEach((link) => {
    if (
      link.includes('https://pillowcase.su') ||
      link.includes('https://plwcse.top')
    ) {
      const id = link.match(/\/f\/([a-f0-9]{32})/)?.[1];
      if (id) {
        return returnLinks.push({
          link: `https://api.plwcse.top/api/download/${id}`,
          isPillowcase: true,
        });
      }
    }
    return returnLinks.push({ link, isPillowcase: false });
  });
  return returnLinks;
};

export function formatDuration(durationInSeconds: number) {
  if (isNaN(durationInSeconds) || durationInSeconds < 0) {
    return '0:00';
  }

  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${minutes}:${formattedSeconds}`;
}

export function highlightText(text: string, query: string | undefined) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));

  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-yellow-200 text-black">
        {part}
      </mark>
    ) : (
      part
    )
  );
}
