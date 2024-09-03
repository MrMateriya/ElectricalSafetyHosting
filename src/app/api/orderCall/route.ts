import {NextResponse} from 'next/server'
import {MailService} from "@/services/Mail";

export async function POST(request: Request) {
    try {
        const {username, email, phone} = await request.json()

        await MailService.sendCallOrder({username, email, phone})

        return NextResponse.json({
            message: "successful sending of a call order",
        })
    } catch (e) {
        return NextResponse.json({
            error: 'failed to send a call order'
        }, {
            status: 500,
            statusText: 'failed to send a call order',
        })
    }
}