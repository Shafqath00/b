import express from "express"
import bodyParser from "body-parser"
import path from "path";
import { fileURLToPath } from 'url';
import { MailtrapClient } from "mailtrap"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
const TOKEN = "3f5517d4d15601a03f6541a010128a79";
const SENDER_EMAIL = "hello@demomailtrap.com";
const RECIPIENT_EMAIL = "newbiemill72@gmail.com";
const client = new MailtrapClient({ token: TOKEN });
const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})
app.get("/treatments", (req, res) => {
    res.sendFile(__dirname + "/public/in.html");

})
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");

})
app.post("/submet", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const city = req.body.city;
    const text = req.body.req;
    console.log(name, email, number, city, text);
    client
        .send({
            from: sender,
            to: [{ email: RECIPIENT_EMAIL }],
            template_uuid: "3251dbbf-5eb4-4b88-8734-7fa70e570cd0",
            template_variables: {
                "name":name,
                "email":email,
                "number":number,
                "city":city,
                "message":text
            }
        })
        .then(console.log)
        .catch(console.error);
        res.redirect("/contact");
})
app.listen(port, () => {
    console.log(`Server is running on ${port} successfuly `);
})