import nodemailer from 'nodemailer';
import 'dotenv/config';

class Mailer {
    /**
     * a class that handles email validation
     * mail - static class method
     */
    static async mail (email, message) {
        /**
         * @param {string} receiver email
         * @param {string} message
         */
        const transporter = nodemailer.createTransport(
            {
                host: 'smtp-relay.brevo.com',
                port: 587,
                secure: true,
                auth: {
                    user: '772a58001@smtp-brevo.com',
                    pass: 'afmI80WNBghtFdJz'
                }
            }
        );
        const options = {
            from: email,
            to: 'rashnotech@gmail.com',
            subject: message.title,
            html: message.body
        }
        const response = await transporter.sendMail(options)
        if (response.messageId) {
            return response
        }
        return {error: 'Failed to send email'};
    }
}

export default Mailer;