import React from 'react';

function StudentDetails({ student, onDelete, setEditingStudent }) {
    if (!student) {
        return <div>Seleccione un estudiante para ver los detalles</div>;
    }

    return (
        <div>
            <div style={{ width: '100px', height: '100px', backgroundColor: 'red', marginBottom: '20px' }}></div>
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
