import { _courseMock } from "../../mocks/CourseMock";
import { fetchWrapper } from "../fetch-wrapper";

const courseMock = _courseMock();
const url = `http://localhost:4000/course/create`;

export const createCourses = async() => {
    for (let i = 0; i < courseMock.length; i++) {
        var raw = JSON.stringify(courseMock[i]);
        const config = {
            method: 'POST', 
            body: raw
        }
    
        await fetchWrapper(url, config);
    }
}
