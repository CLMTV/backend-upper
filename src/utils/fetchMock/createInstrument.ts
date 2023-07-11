import { _categoryMock } from "../../mocks/CategoryMock";
import { _instrumentMock } from "../../mocks/InstrumentMock";
import { fetchWrapper } from "../fetch-wrapper";

const categoryMock = _categoryMock();
const instrumentMock = _instrumentMock(categoryMock.map(course => course.id))
const url = `http://localhost:4000/categories/create`;

export const createInstrument = async() => {
    for (let i = 0; i < instrumentMock.length; i++) {
        var raw = JSON.stringify(instrumentMock[i]);
        const config = {
            method: 'POST', 
            body: raw
        }
    
        await fetchWrapper(url, config);
    }
}