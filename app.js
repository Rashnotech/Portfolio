import router from "./routers/router.js";
import express from 'express';
import cors from 'cors'


const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen();

export default app;