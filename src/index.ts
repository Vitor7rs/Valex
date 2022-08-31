import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import router from './routers/index.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})