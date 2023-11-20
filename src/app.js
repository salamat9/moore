import express from 'express';
import { config } from 'dotenv';
import connect from './config/db.js'
import routes from './routes/index.js'

const app = express();

app.use(express.json());
app.use('/api', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    try {
        config();
        connect();
        console.log(`Server is running on http://localhost:${port}`);
    } catch (err) {
        console.log(`Error: ${err}`)
    } 
});
