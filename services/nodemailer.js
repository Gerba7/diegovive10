const nodemailer = require("nodemailer");





export async function diegoMail(data) {
    
    try {

        
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: 'info@diegovivetour.com',
                pass: process.env.EMAIL_PASS,
            },
            tls : { rejectUnauthorized: false }
        })
        

        const mailOptions = {
            from: 'Diego Vive Tour <info@diegovivetour.com>',
            bcc: 'info@diegovivetour.com',
            subject: `Consulta de ${data.name} ${data.surname}`,
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

        const res = await transporter.sendMail(mailOptions);

        return res;
        
        
        
    } catch(err) {

        console.log(err);

    }



}


