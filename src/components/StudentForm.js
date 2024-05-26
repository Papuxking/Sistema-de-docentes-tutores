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
    const [errors, setErrors] = useState({});

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

    const validate = () => {
        let newErrors = {};
        if (!student.name) newErrors.name = 'Nombre es requerido';
        if (!student.status) newErrors.status = 'Estado es requerido';
        if (!student.carrera) newErrors.carrera = 'Carrera es requerida';
        if (!student.tema) newErrors.tema = 'Tema es requerido';
        if (!student.fechaAprobacion) newErrors.fechaAprobacion = 'Fecha de aprobación es requerida';
        if (!student.estado) newErrors.estado = 'Estado es requerido';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

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
                {errors.name && <div className="error">{errors.name}</div>}
                <input type="text" name="status" value={student.status} onChange={handleChange} placeholder="Estado" required />
                {errors.status && <div className="error">{errors.status}</div>}
                <input type="text" name="carrera" value={student.carrera} onChange={handleChange} placeholder="Carrera" required />
                {errors.carrera && <div className="error">{errors.carrera}</div>}
                <input type="text" name="tema" value={student.tema} onChange={handleChange} placeholder="Tema" required />
                {errors.tema && <div className="error">{errors.tema}</div>}
                <input type="date" name="fechaAprobacion" value={student.fechaAprobacion} onChange={handleChange} required />
                {errors.fechaAprobacion && <div className="error">{errors.fechaAprobacion}</div>}
                <input type="text" name="estado" value={student.estado} onChange={handleChange} placeholder="Estado" required />
                {errors.estado && <div className="error">{errors.estado}</div>}
                <button type="submit">Guardar</button>
                {student.id && <button type="button" onClick={() => setEditingStudent(null)}>Cancelar</button>}
            </form>
        </div>
    );
}

export default StudentForm;
