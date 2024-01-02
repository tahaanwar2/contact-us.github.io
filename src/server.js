const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'taha.anwar2@yahoo.com', // Replace with your email address
        pass: '36930618taha.TAAA', // Replace with your email password
    },
});

app.post('/send', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const mailOptions = {
        from: email,
        to: 'taha.anwar2@yahoo.com', // Replace with the recipient's email address
        subject: 'New message from your website',
        text: `You have received a new message from ${firstName} ${lastName}.\n\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});

const PORT = 3003; // Replace with your desired port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
