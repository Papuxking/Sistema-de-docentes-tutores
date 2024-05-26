import React, { useState, useEffect } from 'react';
import './StudentForm.css';

function StudentForm({ onAddStudent, onUpdateStudent, editingStudent, setEditingStudent }) {
    const [student, setStudent] = useState({
        id: null,
        name: '',
        status: '',
        carrera: '',
        tema: '',
        fechaAprobacion: '',
        estado: ''
    });

    useEffect(() => {
        if (editingStudent) {
            setStudent(editingStudent);
        } else {
            setStudent({
                id: null,
                name: '',
                status: '',
                carrera: '',
                tema: '',
                fechaAprobacion: '',
                estado: ''
            });
        }
    }, [editingStudent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (student.id) {
            onUpdateStudent(student);
        } else {
            onAddStudent(student);
        }
        setStudent({
            id: null,
            name: '',
            status: '',
            carrera: '',
            tema: '',
            fechaAprobacion: '',
            estado: ''
        });
        setEditingStudent(null);
    };

    return (
        <div className="student-form">
            <h2>{student.id ? 'Editar Estudiante' : 'Agregar Estudiante'}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Nombre" required />
                <input type="text" name="status" value={student.status} onChange={handleChange} placeholder="Estado" required />
                <input type="text" name="carrera" value={student.carrera} onChange={handleChange} placeholder="Carrera" required />
                <input type="text" name="tema" value={student.tema} onChange={handleChange} placeholder="Tema" required />
                <input type="date" name="fechaAprobacion" value={student.fechaAprobacion} onChange={handleChange} required />
                <input type="text" name="estado" value={student.estado} onChange={handleChange} placeholder="Estado" required />
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}

export default StudentForm;
