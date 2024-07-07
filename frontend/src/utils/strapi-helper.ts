// Get base url of strapi API
export function strapiGetUrl(path: string = ''): string {
  return `${process.env.STRAPI_URL || 'http://localhost:1337'}${path}`
}

// Get path of media from strapi (can be external media or media hosted by strapi)
export function strapiGetMedia(url: string | null | undefined): string {
  if (!url) {
    return '/image-not-found.jpg'
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith('http') || url.startsWith('//')) {
    return url
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${strapiGetUrl()}${url}`
}
