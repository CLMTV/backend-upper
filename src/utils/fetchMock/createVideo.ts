import { _courseMock } from "../../mocks/CourseMock";
import { _videoMock } from "../../mocks/VideoMock";
import { _lessonMock } from "../../mocks/LessonMock";
import { fetchWrapper } from "../fetch-wrapper";

const courseMock = _courseMock();
const lessonMock = _lessonMock(courseMock.map(course => course.id));
const videoMock = _videoMock(lessonMock.map(course => course.id));

const url = `http://localhost:4000/video/create`;

export const createVideo = async() => {
    for (let i = 0; i < videoMock.length; i++) {
        var raw = JSON.stringify(videoMock[i]);
        const config = {
            method: 'POST', 
            body: raw
        }
    
        await fetchWrapper(url, config);
    }
}