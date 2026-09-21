export const blogUrl = (import.meta.env.VITE_BLOG_URL || 'https://jaerrylee.github.io').replace(/\/+$/, '')

export const blogPostUrl = (slug: string) => `${blogUrl}/posts/${slug}/`
