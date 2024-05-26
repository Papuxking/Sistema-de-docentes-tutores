import React from 'react';
import './StudentList.css';

function StudentList({ students, onSelectStudent }) {
    return (
        <div className="student-list">
            {students.map((student, index) => (
                <div key={index} className="student-item" onClick={() => onSelectStudent(student)}>
                    <div className="student-photo"></div>
                    <div className="student-info">
                        <div>{student.name}</div>
                        <div>{student.status}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StudentList;
