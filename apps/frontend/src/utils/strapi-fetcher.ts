import qs from 'qs'
import { strapiGetUrl } from '@utils/strapi-helper'
import { env } from '@/env.mjs'

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

// Function to call any endpoint of the strapi api
export async function strapiFetcher(
	path: string,
	urlParamsObject = {},
	options = {},
) {
	try {
		const cacheDuration: number = env.NODE_ENV === 'development' ? 0 : 60

		// Merge default and user options
		const mergedOptions = {
			next: { revalidate: cacheDuration },
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${env.STRAPI_API_PUBLIC_TOKEN}`,
			},
			...options,
		}

		// Build request URL
		const queryString = qs.stringify(urlParamsObject)
		const requestUrl = `${strapiGetUrl(
			`/api${path}${queryString ? `?${queryString}` : ''}`,
		)}`

		if (env.NODE_ENV === 'development') {
			await delay(2000)
		}

		// Trigger API call
		const response = await fetch(requestUrl, mergedOptions)
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
		throw new Error(
			`Please check if your server is running and you set all the required tokens.`,
		)
	}
}
