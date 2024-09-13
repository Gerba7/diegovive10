const { google } = require("googleapis");
const nodemailer = require("nodemailer");



const oAuth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT
);



export async function DiegoMail(course, data) {
    
    try {

        
        oAuth.setCredentials({ 
            refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
            tls: {
                rejectUnauthorized: false
            }
        })

        const accessToken = await oAuth.getAccessToken()

        const gmailTransport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                type: 'OAuth2',
                user: 'sales.abya@gmail.com',
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                accessToken: accessToken.token
            },
        })
        

        const mailOptions = {
            from: 'Abya Group <sales.abya@gmail.com>',
            bcc: 'sales.abya@gmail.com',
            subject: `${course} - Nuevo cliente`,
            html: 
            `<html>
                <body>
                    <h3><b>Nombre y Apellido:</b></h3>
                    <p>${data.name} ${data.surname}</p>
                    <br>
                    <h3><b>Email:</b></h3>
                    <p>${data.email}</p>
                    <br>
                    <h3><b>Telefono:</b></h3>
                    <p>${data.phone}</p>
                    <br>
                    <h3><b>Pais:</b></h3>
                    <p>${data.country}</p>
                    <br>
                </body>
            </html>`,
        };

        const res = await gmailTransport.sendMail(mailOptions);

        return res;
        
        
    } catch(err) {

        console.log(err);

    }



}



export async function diegoMailSubmit(course, data) {
    
    try {

        
        oAuth.setCredentials({ 
            refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
            tls: {
                rejectUnauthorized: false
            }
        })

        const accessToken = await oAuth.getAccessToken()

        const gmailTransport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                type: 'OAuth2',
                user: 'sales.abya@gmail.com',
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                accessToken: accessToken.token
            },
        })
        

        const mailOptions = {
            from: 'Abya Group <sales.abya@gmail.com>',
            bcc: 'operaciones@abyagroup.org',
            subject: `${course} - Consulta`,
            html: 
            `<html>
                <body>
                    <h3><b>Nombre y Apellido:</b></h3>
                    <p>${data.name} ${data.surname}</p>
                    <br>
                    <h3><b>Email:</b></h3>
                    <p>${data.email}</p>
                    <br>
                    <h3><b>Telefono:</b></h3>
                    <p>${data.phone}</p>
                    <br>
                    <h3><b>Mensaje:</b></h3>
                    <p>${data.message}</p>
                    <br>
                </body>
            </html>`,
        };

        const res = await gmailTransport.sendMail(mailOptions);

        return res;
        
        
    } catch(err) {

        console.log(err);

    }



}
