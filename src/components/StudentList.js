import React from 'react';
import './StudentList.css';

function StudentList({ students, onSelectStudent }) {
    
    const activeStudents = students.filter(student => student.Estado === 'Activo');

    return (
        <div>
            {activeStudents.map((student) => (
                <div key={student.EstudianteID} onClick={() => onSelectStudent(student)} className="student-list-item">
                    <div className="student-list-image"></div>
                    <p>{student.Nombre} {student.Apellido} Tema de Tesis: {student.Estado}</p>
                </div>
            ))}
        </div>
    );
}

export default StudentList;


