import express from 'express';
// import routes from './api/routes/index';
import {AppConfig} from './config/AppConfig';

const app = express();

// Use built-in Express middleware to parse JSON request bodies
app.use(express.json());

// app.use(routes);

app.listen(AppConfig.PORT, () => {
    console.log(`Server listening on port ${AppConfig.PORT}`);
});