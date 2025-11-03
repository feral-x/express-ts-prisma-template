import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", router);


const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
