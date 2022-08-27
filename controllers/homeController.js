const nodemailer = require('nodemailer')

module.exports.home = (req, res) => {
    
    res.render('home')
}

module.exports.sentEmail = (req, res) => {
    const { from, to, subject, body } = req.body;
    console.log(req.body)

    try {
            const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                pass: 'cbhsaduobpsosiij',
                user: 'testdarshana123@gmail.com',
            }
        })

        const mailoptions = {

            to: to,
            from: from,
            html: body,
            subject: subject
        }

        transporter.sendMail(mailoptions, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log('email sent')
                res.json('ok')
            }
        })
    } catch (error) {
        res.status(400).json(error)
    }
}