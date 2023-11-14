import express from 'express';
import cors from 'cors';
import reportRouter from './routes/index.js'
import { mongoDB } from './database/index.js'


const app = express();
mongoDB();
// ------------ middlewares ------------

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))
app.use("/api/data", reportRouter)
const PORT =8000
app.get("/", (req, res) => {
   res.status(200).json({
   message:"server is running successfully"
   })
})


app.listen(PORT, (req, res) => {
    console.log(`Server is active on Port ${PORT}`)
})