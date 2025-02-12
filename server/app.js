import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const PORT = 4000

const app = express()

const __dirname = path.resolve();



app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));
    app.use("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Listening to server ${PORT}`);
});