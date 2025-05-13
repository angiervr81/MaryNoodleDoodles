//basic express dependencies
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

// set up the express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add /send route for handing form submission(nodemalier)

app.post('/send', async (req, res) => {
    const { name, email,subject, message } = req.body;
    
    // create a nodemailer transporter  
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        } 
    });

const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Message from ${name}: ${subject}`,
        text: message,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong><br>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
