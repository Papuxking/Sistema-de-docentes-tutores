import React, { useEffect, useState } from 'react';
import axios from './api/axiosConfig';

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    const fetchEstudiantes = async () => {
      try {
        const response = await axios.get('/estudiantes');
        setEstudiantes(response.data);
      } catch (error) {
        console.error('Error fetching estudiantes:', error);
      }
    };

    fetchEstudiantes();
  }, []);

  return (
    <div>
      <h1>Lista de Estudiantes</h1>
      <ul>
        {estudiantes.map((estudiante) => (
          <li key={estudiante.EstudianteID}>
            {estudiante.Nombre} {estudiante.Apellido}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Estudiantes;
