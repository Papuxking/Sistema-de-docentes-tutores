import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import Button from './Button';
import Select from './Select';
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
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (student.EstudianteID) {
        await axios.put(`http://localhost:5000/api/estudiantes/${student.EstudianteID}`, {
          Nombre: student.Nombre,
          Apellido: student.Apellido,
          Estado: student.Estado,
          Carrera: student.Carrera,
          TemaTesis: student.TemaTesis,
          FechaAprobacion: student.FechaAprobacion,
        });
        
        onUpdateStudent(student);
      } else {
        const response = await axios.post('http://localhost:5000/api/estudiantes', {
          Nombre: student.Nombre,
          Apellido: student.Apellido,
          Estado: student.Estado,
          Carrera: student.Carrera,
          TemaTesis: student.TemaTesis,
          FechaAprobacion: student.FechaAprobacion,
        });
        student.EstudianteID = response.data.EstudianteID;
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
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="student-form">
      <h2>{student.EstudianteID ? 'Editar Estudiante' : 'Agregar Estudiante'}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          name="Nombre"
          value={student.Nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        {errors.Nombre && <div className="error">{errors.Nombre}</div>}
        
        <Input
          label="Apellido"
          name="Apellido"
          value={student.Apellido}
          onChange={handleChange}
          placeholder="Apellido"
        />
        {errors.Apellido && <div className="error">{errors.Apellido}</div>}
        
        <Select
          label="Estado"
          name="Estado"
          value={student.Estado}
          onChange={handleChange}
          options={[
            { value: 'Activo', label: 'Activo' },
            { value: 'Graduado', label: 'Graduado' },
            { value: 'Retirado', label: 'Retirado' },
          ]}
        />
        {errors.Estado && <div className="error">{errors.Estado}</div>}
        
        <Input
          label="Carrera"
          name="Carrera"
          value={student.Carrera}
          onChange={handleChange}
          placeholder="Carrera"
        />
        {errors.Carrera && <div className="error">{errors.Carrera}</div>}
        
        <Input
          label="Tema de tesis"
          name="TemaTesis"
          value={student.TemaTesis}
          onChange={handleChange}
          placeholder="Tema de tesis"
        />
        {errors.TemaTesis && <div className="error">{errors.TemaTesis}</div>}
        
        <Input
          label="Fecha de Aprobación"
          type="date"
          name="FechaAprobacion"
          value={student.FechaAprobacion}
          onChange={handleChange}
        />
        {errors.FechaAprobacion && <div className="error">{errors.FechaAprobacion}</div>}
        
        <Button>Guardar</Button>
        {student.EstudianteID && <Button type="button" onClick={() => setEditingStudent(null)}>Cancelar</Button>}
      </form>
    </div>
  );
}

export default StudentForm;
