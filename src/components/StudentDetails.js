import React from 'react';
import './StudentDetails.css';

function StudentDetails({ student, onDelete, setEditingStudent }) {
    if (!student) {
        return <div>Seleccione un estudiante para ver los detalles</div>;
    }

    return (
        <div>
            <div className="student-image"></div>
            <p>Nombre: {student.Nombre} {student.Apellido}</p>
            <p>Carrera: {student.Carrera}</p>
            <p>Tema: {student.TemaTesis}</p>
            <p>Fecha Aprobación: {student.FechaAprobacion}</p>
            <p>Estado: {student.Estado}</p>
            <button onClick={() => setEditingStudent(student)}>Editar</button>
            <button onClick={() => onDelete(student.EstudianteID)}>Eliminar</button>
        </div>
    );
}

export default StudentDetails;
