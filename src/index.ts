import express from 'express';
import cors from 'cors';
import routes from './api/routes/index';
import {AppConfig} from './config/AppConfig';
import swaggerDocs from "./utils/swagger/swagger";
import { _courseMock } from './mocks/CourseMock';
import { _lessonMock } from './mocks/LessonMock';
import { _videoMock } from './mocks/VideoMock';
import { _categoryMock } from './mocks/CategoryMock';
import { _instrumentMock } from './mocks/InstrumentMock';

const app = express();

// Initialisation des mocks
const courseMock = _courseMock();
const lessonMock = _lessonMock(courseMock.map(course => course.id));
const videoMock = _videoMock(lessonMock.map(course => course.id));
const categoryMock = _categoryMock();
const instrumentMock = _instrumentMock(categoryMock.map(course => course.id))

// Use built-in Express middleware to parse JSON request bodies
app.use(express.json());

// Enable All CORS Requests
app.use(cors({
    origin: 'http://localhost:3000', // restrict calls to those this address
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // only allow GET, HEAD, PUT, PATCH, POST, DELETE requests
    credentials: true // allow session cookie from browser to pass through
}));

app.use(routes);

app.listen(AppConfig.PORT, () => {
    // console.log(`Server listening on port ${AppConfig.PORT}`);
    // console.log('hello man')
    swaggerDocs(app, AppConfig.PORT)
});

// for (let i = 0; i < courseMock.length; i++) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify(courseMock[i]);

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//     };

//     fetch("http://localhost:4000/course/create", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }

// for (let i = 0; i < videoMock.length; i++) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify(videoMock[i]);

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//     };

//     fetch("http://localhost:4000/video/create", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }

// for (let i = 0; i < lessonMock.length; i++) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     // myHeaders.append("Authorization", "Bearer lV2fO4Ir89DDDMkpFkguyw==");

//     var raw = JSON.stringify(lessonMock[i]);

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//     };

//     fetch("http://localhost:4000/lesson/create", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }


// for (let i = 0; i < categoryMock.length; i++) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify(categoryMock[i]);

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//     };

//     fetch("http://localhost:4000/categories/create", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }

// for (let i = 0; i < instrumentMock.length; i++) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify(instrumentMock[i]);

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//     };

//     fetch("http://localhost:4000/instrument/create", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }