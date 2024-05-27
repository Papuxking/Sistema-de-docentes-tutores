import React from 'react';
import './StudentList.css';

function StudentList({ students, onSelectStudent }) {
    return (
        <div>
            {students.map((student) => (
                <div key={student.EstudianteID} onClick={() => onSelectStudent(student)} className="student-list-item">
                    <div className="student-list-image"></div>
                    <p>{student.Nombre} {student.Apellido}</p>
                </div>
            ))}
        </div>
    );
}

export default StudentList;

