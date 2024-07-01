import axios from 'axios';

const API_BASE_URL = 'https://wizard-world-api.herokuapp.com';

export const getHouses = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/houses`);
        return response.data;
    } catch (error) {
        console.error('Error fetching houses:', error);
        throw error;
    }
};

export const getHouseDetails = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/houses/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching house details for ID ${id}:`, error);
        throw error;
    }
};
