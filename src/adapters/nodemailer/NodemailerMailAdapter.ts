import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b65bd15ec09611",
        pass: "dcedfa8cb0cd3f"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <danielsobrinho.dev@gmail.com>',
            to: 'Daniel Sobrinho <danielcunha_sobrinho@hotmail.com>',
            subject,
            html: body,
        })
    }

}