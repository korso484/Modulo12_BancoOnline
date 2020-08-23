import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementsById = id => Axios.get(`${url}`).then(response => {
    const resume = response.data;
    let movementList = [];
    resume.forEach(element => {
        if (element.accountId === id) {
            movementList.push(element);
        }
    });
    return movementList;
});