import type { APIRoute } from 'astro';
import QRCode from 'qrcode';
import { getSite } from '../utils/consts';
import { getContactPageUrl, type SocialLink } from '../utils/contact';

export const GET: APIRoute = async () => {
  const site = await getSite();
  const socialLinks = ((site.social || []) as SocialLink[]);
  const contactUrl = getContactPageUrl(socialLinks);
  const png = await QRCode.toBuffer(contactUrl, {
    type: 'png',
    errorCorrectionLevel: 'M',
    margin: 1,
    width: 960,
    color: {
      dark: '#ffffff',
      light: '#000000',
    },
  });

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

