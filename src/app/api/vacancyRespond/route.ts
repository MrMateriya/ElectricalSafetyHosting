// @ts-nocheck
import {NextResponse} from 'next/server'
import {MailService} from "@/services/Mail";
export async function POST(request: Request) {
    try {
        const res = await request.formData();

        const data = {
            username: res.get('username'),
            email: res.get('email'),
            phone: res.get('phone'),
            profession: res.get('profession'),
            file: res.get('file'),
        }
        if(res.get('additionalInformation')) {
            data.additionalInformation = res.get('additionalInformation')
        }

        await MailService.sendVacancyRespond(data)

        return NextResponse.json({
            message: "successful sending of a call order",
        })
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            error: 'failed to send a call order'
        }, {
            status: 500,
            statusText: 'failed to send a call order',
        })
    }
}