import router from "./routers/router.js";
import express from 'express';
import cors from 'cors'


const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`server running on localhost:${port}`)
});

export default app;