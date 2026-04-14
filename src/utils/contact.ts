export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

const FALLBACK_WEBSITE = 'https://miroremias.com/';

export function getContactPageUrl(socialLinks: SocialLink[] = []) {
  const website = socialLinks.find((item) => item.id.toLowerCase() === 'website')?.href || FALLBACK_WEBSITE;
  return new URL('/contact', website).toString();
}
