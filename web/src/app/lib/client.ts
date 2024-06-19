import { createClient, QueryParams } from 'next-sanity'

export const client = createClient({
    projectId: '1mrwp9a5',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: process.env.NODE_ENV === 'development',
})

export async function sanityFetch<QueryResponse>({
    query,
    qParams = {},
    tags,
}: {
    query: string
    qParams?: QueryParams
    tags: string[]
}): Promise<QueryResponse> {
    return client.fetch<QueryResponse>(query, qParams, {
        cache:
            process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
        next: { tags },
    })
}
