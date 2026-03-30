// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { getEntry } from 'astro:content';

export async function getSite() {
	// Try to read the `site` entry and fallback to constants
	const author = await getEntry('site', 'author');
	const social = await getEntry('site', 'social');
	const contact = await getEntry('site', 'contact');
	return {
		author: author?.data,
		social: social?.data,
		contact: contact?.data,
	};
}

export function getSiteName(site?: { author?: { name?: string } }) {
	const authorName = site?.author?.name?.trim();
	return authorName || 'Miro Remias';
}

export function formatPageTitle(pageTitle?: string, site?: { author?: { name?: string } }) {
	const siteName = getSiteName(site);
	const normalizedPageTitle = pageTitle?.trim();

	if (!normalizedPageTitle || normalizedPageTitle === siteName) {
		return siteName;
	}

	return `${normalizedPageTitle} | ${siteName}`;
}

export function getAuthorSummary(author?: { role?: string; bio?: string }) {
	const role = author?.role?.trim();
	const bio = author?.bio?.trim();
	if (role && bio) return `${role}. ${bio}`;
	return role || bio || '';
}
