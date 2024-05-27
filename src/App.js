import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentForm from './components/StudentForm';
import { getEstudiantes, createEstudiante, updateEstudiante, deleteEstudiante } from './api';
import './App.css';

function App() {
    const [selectedSection, setSelectedSection] = useState('estudiantes');
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [editingStudent, setEditingStudent] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchEstudiantes = async () => {
            const estudiantes = await getEstudiantes();
            setStudents(estudiantes);
        };
        fetchEstudiantes();
    }, []);

    const handleAddStudent = async (student) => {
        const newStudent = await createEstudiante(student);
        setStudents([...students, { ...student, EstudianteID: newStudent.EstudianteID }]);
        setMessage('Estudiante añadido con éxito');
    };

    const handleUpdateStudent = async (updatedStudent) => {
        await updateEstudiante(updatedStudent.EstudianteID, updatedStudent);
        setStudents(students.map(student => student.EstudianteID === updatedStudent.EstudianteID ? updatedStudent : student));
        setMessage('Estudiante actualizado con éxito');
    };

    const handleDeleteStudent = async (studentId) => {
        await deleteEstudiante(studentId);
        setStudents(students.filter(student => student.EstudianteID !== studentId));
        setSelectedStudent(null);
        setMessage('Estudiante eliminado con éxito');
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 'estudiantes':
                return (
                    <div className="content">
                        {message && <div className="message">{message}</div>}
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
