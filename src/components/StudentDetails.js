import React from 'react';
import './StudentDetails.css';

function StudentDetails({ student }) {
    if (!student) {
        return <div className="student-details">Selecciona un estudiante</div>;
    }

    return (
        <div className="student-details">
            <div className="student-photo-large"></div>
            <div className="student-info">
                <h2>{student.name}</h2>
                <p>Carrera: {student.carrera}</p>
                <p>Tema: {student.tema}</p>
                <p>Fecha Aprobación: {student.fechaAprobacion}</p>
                <p>Estado: {student.estado}</p>
                <button>Detalles</button>
            </div>
        </div>
    );
}

export default StudentDetails;
