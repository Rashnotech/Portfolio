import Mailer from './Mailer.js'

export default class Contact {
    static async Sendmail (req, res) {
        const data = req.body;

        if (!data) return res.status(404).json({'error': 'Not found'});
        const validate = ['fullname', 'email', 'message'];
        for (const [key, value] of Object.entries(data)) {
            if (!validate.includes(key)) {
                return res.status(400).json({'error': `Missing ${key}`})
            }
        }
        const {email, fullname, message} = data;
        const mailResponse = await Mailer.mail(email,
        {
            title: `Website:<${email}>`,
            body: `
                <html>
                    <body>
                        <h1>Contact me</h1>
                            Hi Rashnotech, <br>
                            ${message}
                        <strong>${fullname}</strong>
                    </body>
                <html>
            `
        });
        if (mailResponse.error) return res.status(500).json({error: 'An error occured while sending mail'});
        return res.status(200).json({'message': 'Message sent successfully'});
    }
}