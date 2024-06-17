import nodemailer from 'nodemailer';

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
                host: config.server.host,
                port: config.server.port,
                secure: true,
                auth: {
                    user: config.server.user,
                    pass: config.server.pass
                }
            }
        );
        const options = {
            from: 'Rashnotech',
            to: email,
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