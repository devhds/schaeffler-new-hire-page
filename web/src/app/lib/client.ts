import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: '1mrwp9a5',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: false,
    perspective: 'published',
})
