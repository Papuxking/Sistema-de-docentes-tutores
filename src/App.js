import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentForm from './components/StudentForm';
import './App.css';

const mockStudents = [
    { name: 'Nombre Apellido 1', status: 'Activo', carrera: 'Software', tema: 'Tema 1', fechaAprobacion: '2023-05-10', estado: 'En progreso' },
    { name: 'Nombre Apellido 2', status: 'Inactivo', carrera: 'Software', tema: 'Tema 2', fechaAprobacion: '2023-05-11', estado: 'Completado' },
    { name: 'Nombre Apellido 3', status: 'Activo', carrera: 'Software', tema: 'Tema 3', fechaAprobacion: '2023-05-12', estado: 'En progreso' }
];

function App() {
    const [selectedSection, setSelectedSection] = useState('estudiantes');
    const [selectedStudent, setSelectedStudent] = useState(null);

    const renderContent = () => {
        switch (selectedSection) {
            case 'estudiantes':
                return (
                    <div className="content">
                        <StudentList students={mockStudents} onSelectStudent={setSelectedStudent} />
                        <StudentDetails student={selectedStudent} />
                        <StudentForm />
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
