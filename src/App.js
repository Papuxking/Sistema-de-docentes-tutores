import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentForm from './components/StudentForm';
import './App.css';

const initialStudents = [
    { id: 1, name: 'Nombre Apellido 1', status: 'Activo', carrera: 'Software', tema: 'Tema 1', fechaAprobacion: '2023-05-10', estado: 'En progreso' },
    { id: 2, name: 'Nombre Apellido 2', status: 'Inactivo', carrera: 'Software', tema: 'Tema 2', fechaAprobacion: '2023-05-11', estado: 'Completado' },
    { id: 3, name: 'Nombre Apellido 3', status: 'Activo', carrera: 'Software', tema: 'Tema 3', fechaAprobacion: '2023-05-12', estado: 'En progreso' }
];

function App() {
    const [selectedSection, setSelectedSection] = useState('estudiantes');
    const [students, setStudents] = useState(initialStudents);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [editingStudent, setEditingStudent] = useState(null);

    const handleAddStudent = (student) => {
        setStudents([...students, { ...student, id: students.length + 1 }]);
    };

    const handleUpdateStudent = (updatedStudent) => {
        setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
    };

    const handleDeleteStudent = (studentId) => {
        setStudents(students.filter(student => student.id !== studentId));
        setSelectedStudent(null);
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 'estudiantes':
                return (
                    <div className="content">
                        <StudentList students={students} onSelectStudent={setSelectedStudent} />
                        <StudentDetails student={selectedStudent} onDelete={handleDeleteStudent} setEditingStudent={setEditingStudent} />
                        <StudentForm onAddStudent={handleAddStudent} onUpdateStudent={handleUpdateStudent} editingStudent={editingStudent} setEditingStudent={setEditingStudent} />
                    </div>
                );
            case 'historial':
                return <div>Historial</div>;
            case 'progreso':
                return <div>Progreso</div>;
            case 'reportes':
                return <div>Reportes</div>;
            default:
                return <div>Estudiantes</div>;
        }
    };

    return (
        <div className="app">
            <Header />
            <div className="main">
                <Sidebar onSelectSection={setSelectedSection} />
                {renderContent()}
            </div>
        </div>
    );
}

export default App;
