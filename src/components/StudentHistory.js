import React from 'react';
import './StudentDetails.css';
import './StudentList.css';
function StudentHistory({ students }) {
   
    

    return (
        <div>
            {students.map((student) => (
                <div key={student.EstudianteID} className="student-list-item">
                    <div className="student-list-image"></div>
                    <p>{student.Nombre} {student.Apellido}</p>
                    <p>Carrera: {student.Carrera}</p>
                    <p>Tema: {student.TemaTesis}</p>
                    <p>Fecha Aprobación: {student.FechaAprobacion}</p>
                    <p>Estado: {student.Estado}</p>
                </div>
            ))}
        </div>
    );
}

export default StudentHistory;
