import React, { useState, useEffect } from 'react';
import './StudentForm.css';

function StudentForm({ onAddStudent, onUpdateStudent, editingStudent, setEditingStudent }) {
    const [student, setStudent] = useState({
        EstudianteID: null,
        Nombre: '',
        Apellido: '',
        Estado: '',
        Carrera: '',
        TemaTesis: '',
        FechaAprobacion: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editingStudent) {
            setStudent(editingStudent);
        } else {
            setStudent({
                EstudianteID: null,
                Nombre: '',
                Apellido: '',
                Estado: '',
                Carrera: '',
                TemaTesis: '',
                FechaAprobacion: '',
            });
        }
    }, [editingStudent]);

    const validate = () => {
        let newErrors = {};
        if (!student.Nombre) newErrors.Nombre = 'Nombre es requerido';
        if (!student.Apellido) newErrors.Apellido = 'Apellido es requerido';
        if (!student.Estado) newErrors.Estado = 'Estado es requerido';
        if (!student.Carrera) newErrors.Carrera = 'Carrera es requerida';
        if (!student.TemaTesis) newErrors.TemaTesis = 'Tema es requerido';
        if (!student.FechaAprobacion) newErrors.FechaAprobacion = 'Fecha de aprobación es requerida';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { Nombre, value } = e.target;
        setStudent({
            ...student,
            [Nombre]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        if (student.EstudianteID) {
            onUpdateStudent(student);
        } else {
            onAddStudent(student);
        }
        setStudent({
            EstudianteID: null,
            Nombre: '',
            Apellido: '',
            Estado: '',
            Carrera: '',
            TemaTesis: '',
            FechaAprobacion: '',
        });
        setEditingStudent(null);
    };

    return (
        <div className="student-form">
            <h2>{student.EstudianteID ? 'Editar Estudiante' : 'Editar Estudiante'}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={student.Nombre} onChange={handleChange} placeholder="Nombre" required />
                {errors.Nombre && <div className="error">{errors.Nombre}</div>}
                <input type="text" name="apellido" value={student.Apellido} onChange={handleChange} placeholder="Apellido" required />
                {errors.Apellido && <div className="error">{errors.Apellido}</div>}
                <input type="text" name="status" value={student.Estado} onChange={handleChange} placeholder="Estado" required />
                {errors.Estado && <div className="error">{errors.Estado}</div>}
                <input type="text" name="carrera" value={student.Carrera} onChange={handleChange} placeholder="Carrera" required />
                {errors.Carrera && <div className="error">{errors.Carrera}</div>}
                <input type="text" name="tema" value={student.TemaTesis} onChange={handleChange} placeholder="Tema" required />
                {errors.TemaTesis && <div className="error">{errors.TemaTesis}</div>}
                <input type="date" name="fechaAprobacion" value={student.FechaAprobacion} onChange={handleChange} required />
                {errors.FechaAprobacion && <div className="error">{errors.FechaAprobacion}</div>}
                <button type="submit">Guardar</button>
                {student.EstudianteID && <button type="button" onClick={() => setEditingStudent(null)}>Cancelar</button>}
            </form>
        </div>
    );
}

export default StudentForm;
