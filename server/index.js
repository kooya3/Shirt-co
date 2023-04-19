
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());

app.use('/api/v1/dalle', dalleRoutes);

app.use(express.json({ limit: "50mb" }))
app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from DALL.E"})
})

app.listen(5000, () => console.log('server started on localhost://5000'))