import { _courseMock } from "../../mocks/CourseMock";
import { _lessonMock } from "../../mocks/LessonMock";
import { fetchWrapper } from "../fetch-wrapper";

const courseMock = _courseMock();
const lessonMock = _lessonMock(courseMock.map(course => course.id));
const url = `http://localhost:4000/lesson/create`;

export const createLesson = async() => {
    for (let i = 0; i < lessonMock.length; i++) {
        var raw = JSON.stringify(lessonMock[i]);
        const config = {
            method: 'POST', 
            body: raw
        }
    
        await fetchWrapper(url, config);
    }
}