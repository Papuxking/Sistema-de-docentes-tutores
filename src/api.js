import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getEstudiantes = async () => {
    const response = await axios.get(`${API_URL}/estudiantes`);
    return response.data;
};

export const getEstudianteById = async (id) => {
    const response = await axios.get(`${API_URL}/estudiantes/${id}`);
    return response.data;
};

export const createEstudiante = async (estudiante) => {
    const response = await axios.post(`${API_URL}/estudiantes`, estudiante);
    return response.data;
};

export const updateEstudiante = async (id, estudiante) => {
    const response = await axios.put(`${API_URL}/estudiantes/${id}`, estudiante);
    return response.data;
};

export const deleteEstudiante = async (id) => {
    const response = await axios.delete(`${API_URL}/estudiantes/${id}`);
    return response.data;
};
