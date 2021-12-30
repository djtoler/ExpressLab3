import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

const port = 8787;








app.listen(port, () => console.log(`"Now listening on port:${8787}"`));