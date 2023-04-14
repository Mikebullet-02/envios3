import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

const mimeTypes = {
    "html": "text/html",
    "css": "text/css",
    "js": "text/javascript",
    "png": "image/png",
    "jpg": "image/jpeg",
    "gif": "image/gif",
}

app.use(express.static(path.join(__dirname, "public"), {
    setHeaders: (res, path) => {
        const ext = path.split(".").pop();
        if (mimeTypes[ext]) {
            res.setHeader("Content-Type", mimeTypes[ext]);
        }
    }
}));

app.post("/sendEmail", (req, res) => {
    const {
        url,
        telefono,
        empresa,
        ciudad,
        email,
        selectedOption
    } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "desarrollowebodm@gmail.com",
            pass: "dwjxplmpaluexeun",
        },
    });

    const mailOptions = {
        from: "desarrollowebodm@gmail.com",
        to: "jcmurillo@odm.com.mx",
        cc: ['cma@odm.com.mx', 'jefedigitalodm@gmail.com'],
        subject: "Nuevo cliente potencial",
        html: `
        <div>
        <img src="https://odm.com.mx/images/ODMenvios.png" alt="logo" border="0" width="300" height="auto" />
        <h1>¡Nuevo cliente potencial!</h1>
        <p>Nombre: ${url}</p>
        <p>Teléfono: ${telefono}</p>
        <p>Empresa: ${empresa}</p>
        <p>Ciudad: ${ciudad}</p>
        <p>Email: ${email}</p>
        <p>Opción elegida: ${selectedOption}</p></div>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Ocurrió un error al enviar el correo electrónico.");
        } else {
            console.log("Correo enviado", info.response);
            res.status(200).send("¡Tus datos se han enviado correctamente!");
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});
