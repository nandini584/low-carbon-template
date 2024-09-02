import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const contentType = searchParams.get('content_type');
  const token = searchParams.get('token');
  const slug = searchParams.get('slug');
  console.log(searchParams);

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (!token) {
    return new Response('Invalid token', { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable();

  console.log('redirect');

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(`/preview?${searchParams.toString()}`);
}
