import { _categoryMock } from "../../mocks/CategoryMock";
import { fetchWrapper } from "../fetch-wrapper";

const categoryMock = _categoryMock();
const url = `http://localhost:4000/categories/create`;

export const createCategory = async() => {
    for (let i = 0; i < categoryMock.length; i++) {
        var raw = JSON.stringify(categoryMock[i]);
        const config = {
            method: 'POST', 
            body: raw
        }
    
        await fetchWrapper(url, config);
    }
}