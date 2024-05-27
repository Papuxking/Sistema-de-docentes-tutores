import React from 'react';

function StudentList({ students, onSelectStudent }) {
    return (
        <div>
            {students.map((student) => (
                <div key={student.EstudianteID} onClick={() => onSelectStudent(student)} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
                    <div style={{ width: '50px', height: '50px', backgroundColor: 'red', marginRight: '10px' }}></div>
                    <p>{student.Nombre} {student.Apellido}</p>
                </div>
            ))}
        </div>
    );
}

export default StudentList;
