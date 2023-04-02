const router = require('express').Router();
const nodemailer = require('nodemailer');

const { google } = require('googleapis');

const CLIENT_ID = '99566570303-ihggptatuoinbe0hsmlvvr1tmbjv327j.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//047MXBmPf_Q6PCgYIARAAGAQSNwF-L9IrgWgZ3qpswf6ueEEvoGch-9-UvuAYZ06VUCUh6Yh3i4t-CsAbWFnsa7kRZZI8de-Zkoc';

// Configurar las credenciales de OAuth2
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID, // Cliente ID obtenido desde Google Cloud Console
    CLIENT_SECRET, // Cliente secreto obtenido desde Google Cloud Console
    REDIRECT_URI // URL de redireccionamiento
);

oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN // Obtén el refresh token mediante la API de OAuth 2.0 Playground o sigue las instrucciones en https://developers.google.com/gmail/api/auth/web-server para obtenerlo
});

router.post( '/contact', async (req,res) => {
    let data = req.body;
    
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        console.log("entra aquí primero");
        return res.json({msg: "Por favor llene todos los campos"});

    }
    
    const accessToken = await oauth2Client.getAccessToken();
    
    let smtTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'portafolio.alexis.temoche@gmail.com',
            pass: 'portafolio_password',
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken
        },
        // tls: {
        //   rejectUnauthorized: false
        // }
    });

    let mailOptions = {
        from: data.email,
        to: 'alexistemoche21@gmail.com',
        subject: `Mensaje de ${data.name}`,
        html: `
            <h3> Información <h3/>
            <ul>
                <li> Nombres: ${data.name} <li/>
                <li> Correo: ${data.email} <li/>
            <ul/>
            <h3> Mensaje <h3/>
            <p> ${data.message} <p/>
        `
    }

    smtTransporter.sendMail( mailOptions, (error) => {
        try {
            console.log("entra aquí segundo => ", error);
            if(error) return res.status(400).json({msg: 'Por favor llene todos los campos'});
            res.status(200).json({msg: 'Gracias por contactar a Alexis'});
        } catch (error) {
            if(error) return res.status(500).json({msg: 'Hay un error del servidor'})
        }
    });
    
});

module.exports = router;