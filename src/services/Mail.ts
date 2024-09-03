// @ts-nocheck
import nodeMailer, {Transporter} from 'nodemailer'
interface OrderCallData {
  username: string,
  email: string,
  phone: number,
}
interface VacancyRespondData {
  username: string,
  email: string,
  phone: string,
  profession: string,
  userText: string,
  resume: File,
}
class MailService {
  transport: Transporter
  constructor() {
    this.transport = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }
  async sendCallOrder(data : OrderCallData) {
    try {
      await this.transport.sendMail({
        from: {
          name: 'elbez54@gmail.com',
          address: process.env.EMAIL_SHOPPE_USER
        },
        to: "gamearashow@gmail.com",
        subject: "Заказ звонка",
        text: `${data.username}`,
        html: `
              <table border="0" cellpadding="0" cellspacing="0" style="background-color: #0F0F00; width: 100%; height: 100%; padding: 50px 0 50px 0; margin: 0">
                <tr>
                    <td align='center'>
                        <h1 style="color: #FAE82E; margin: 0; font-size: 40px;">
                            ${data.username}
                        </h1>
                    </td>
                </tr>
                <tr align='center'>
                    <td style="color: #E1E1DC; font-size: 16px; padding-bottom: 20px;">заказал звонок 📞</td>
                </tr>
                <tr align="center">
                  <table style="border: 2px solid #FAE82E; margin: 0; padding: 10px" border="0" cellpadding="0" cellspacing="0">
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px">Номер телефона 📱</td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #FFFF9C; font-size: 16px; padding-bottom: 10px;">
                          <a style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none" href="tel:${data.phone}">${data.phone}</a>
                        </td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px;">Электронная почта ✉️</td>
                    </tr>
                    <tr align='center'>
                        <td>
                          <a style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none" href="mailto:${data.email}" target="_blank">${data.email}</a>
                        </td>
                    </tr>
                  </table>
                </tr>
            </table>
            `
      })
    } catch (e) {
      console.log(e)
    }
  }
  async sendVacancyRespond(data) {
    const arrayBuffer = await data.file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    let mailHTML;

    if (data.additionalInformation) {
      mailHTML = `
              <table border="0" cellpadding="0" cellspacing="0" style="background-color: #0F0F00; width: 100%; height: 100%; padding: 50px; margin: 0">
                <tr>
                    <td align='center'>
                        <h1 style="color: #FAE82E; margin: 0; font-size: 40px;">
                            ${data.username}
                        </h1>
                    </td>
                </tr>
                <tr align='center'>
                    <td style="color: #E1E1DC; font-size: 16px; padding-bottom: 20px;">Ответ на вакансию 💼</td>
                </tr>
                <tr align="center">
                  <table style="border: 2px solid #FAE82E; margin: 0; padding: 10px" border="0" cellpadding="0" cellspacing="0">
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px">Номер телефона 📱</td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #FFFF9C; font-size: 16px; padding-bottom: 10px;">
                          <a style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none" href="tel:${data.phone}">${data.phone}</a>
                        </td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px;">Электронная почта ✉️</td>
                    </tr>
                    <tr align='center'>
                        <td>
                          <a style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none" href="mailto:${data.email}" target="_blank">${data.email}</a>
                        </td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px;">Должность 🤵</td>
                    </tr>
                    <tr align='center'>
                        <td>
                          <p style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none; margin: 0">${data.profession}</p>
                        </td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px;">Дополнительная информация 📃</td>
                    </tr>
                    <tr align='center'>
                        <td>
                          <p style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none; margin: 0; word-break: break-word;">${data.additionalInformation}</p>
                        </td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px;">Резюме 📩</td>
                    </tr>
                    <tr align='center'>
                        <td>
                          <p style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none; margin: 0">${data.file.name}</p>
                        </td>
                    </tr>
                  </table>
                </tr>
            </table>
            `
    } else {
      mailHTML = `
              <table border="0" cellpadding="0" cellspacing="0" style="background-color: #0F0F00; width: 100%; height: 100%; padding: 50px; margin: 0">
                <tr>
                    <td align='center'>
                        <h1 style="color: #FAE82E; margin: 0; font-size: 40px;">
                            ${data.username}
                        </h1>
                    </td>
                </tr>
                <tr align='center'>
                    <td style="color: #E1E1DC; font-size: 16px; padding-bottom: 20px;">Ответ на вакансию 💼</td>
                </tr>
                <tr align="center">
                  <table style="border: 2px solid #FAE82E; margin: 0; padding: 10px" border="0" cellpadding="0" cellspacing="0">
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px">Номер телефона 📱</td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #FFFF9C; font-size: 16px; padding-bottom: 10px;">
                          <a style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none" href="tel:${data.phone}">${data.phone}</a>
                        </td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px;">Электронная почта ✉️</td>
                    </tr>
                    <tr align='center'>
                        <td>
                          <a style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none" href="mailto:${data.email}" target="_blank">${data.email}</a>
                        </td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px;">Должность 🤵</td>
                    </tr>
                    <tr align='center'>
                        <td>
                          <p style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none; margin: 0">${data.profession}</p>
                        </td>
                    </tr>
                    <tr align='center'>
                        <td style="color: #E1E1DC; font-size: 22px; padding-bottom: 5px;">Резюме 📩</td>
                    </tr>
                    <tr align='center'>
                        <td>
                          <p style="color: #FFFF9C; font-size: 16px; padding-bottom: 5px; text-decoration: none; margin: 0">${data.file.name}</p>
                        </td>
                    </tr>
                  </table>
                </tr>
            </table>
            `
    }

    try {
      await this.transport.sendMail({
        from: {
          name: 'elbez54@gmail.com',
          address: process.env.EMAIL_SHOPPE_USER
        },
        to: "gamearashow@gmail.com",
        subject: "Ответ на вакансию",
        attachments:  [
          {
            filename: data.file.name,
            content: buffer,
          }
        ],
        html: mailHTML,
      })
    } catch (e) {
      console.log('Mail service error' + e)
      throw new Error(e)
    }
  }
}
const mailService = new MailService()
export {mailService as MailService}