import express from 'express';
import cors from 'cors';
import routes from './api/routes/index';
import {AppConfig} from './config/AppConfig';
import swaggerDocs from "./utils/swagger/swagger";

import { createCourses } from './utils/fetchMock/createCourse';
import { createCategory } from './utils/fetchMock/categoryMock';
import { createVideo } from './utils/fetchMock/createVideo';
import { createLesson } from './utils/fetchMock/createLesson';
import { createInstrument } from './utils/fetchMock/createInstrument';

const app = express();

// Use built-in Express middleware to parse JSON request bodies
app.use(express.json());

// Enable All CORS Requests
app.use(cors({
    origin: 'http://localhost:3000', // restrict calls to those this address
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // only allow GET, HEAD, PUT, PATCH, POST, DELETE requests
    credentials: true // allow session cookie from browser to pass through
}));

app.use(routes);

(async () => {
    try {
      // await createCourses();
      // await createVideo();
      // await createLesson();
      // await createCategory();
      // await createInstrument();
    } catch (error) {
      console.log("erreur mock", error);
    }
  })();

app.listen(AppConfig.PORT, () => {
    // console.log(`Server listening on port ${AppConfig.PORT}`);
    // console.log('hello man')
    swaggerDocs(app, AppConfig.PORT)
});