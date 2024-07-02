import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    if (!process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET) {
        return new Response('Secret Missing', { status: 500 })
    }

    try {
        const auth = req.headers.get('Authorization')

        if (!auth || auth !== process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET) {
            return new Response('Unauthorized', { status: 401 })
        }

        revalidateTag('marketContent')

        return NextResponse.json({
            status: 200,
            revalidated: true,
            now: Date.now(),
        })
    } catch (error: any) {
        console.error(error)
        return new Response(error.message, { status: 500 })
    }
}
