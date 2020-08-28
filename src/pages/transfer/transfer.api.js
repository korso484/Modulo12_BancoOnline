import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/transfer`;

export const sendTransfer = transfer =>
    Axios.post(`${url}/${params.id}`, transfer).then(response => {
        return response.data;
    });
