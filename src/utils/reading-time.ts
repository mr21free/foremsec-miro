const WORDS_PER_MINUTE = 265;

function countWords(text: string) {
  const normalized = text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/[#>*_~\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!normalized) return 0;
  return normalized.split(' ').length;
}

function getImageSeconds(imageCount: number) {
  let seconds = 0;
  for (let index = 0; index < imageCount; index += 1) {
    seconds += Math.max(3, 12 - index);
  }
  return seconds;
}

export function getReadingTime(text: string, imageCount = 0) {
  const words = countWords(text);
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE + getImageSeconds(imageCount) / 60));

  return {
    words,
    minutes,
    text: `${minutes} min read`,
  };
}

