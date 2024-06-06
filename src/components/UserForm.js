import React from 'react';
import axios from 'axios';
import Input from './Input';
import Button from './Button';
import useFormulario from '../hooks/useFormulario';

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: '',
    lastname: '',
    career: '',
    tesis: '',
    dateAprob: '',
    state: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar los datos al backend
      await axios.post('http://localhost:5000/api/estudiantes', {
        Nombre: formulario.name,
        Apellido: formulario.lastname,
        Carrera: formulario.career,
        TemaTesis: formulario.tesis,
        FechaAprobacion: formulario.dateAprob,
        Estado: formulario.state
      });
      // Llamar a la función de submit (opcional, si quieres hacer algo más con los datos en el frontend)
      submit(formulario);
      // Resetear el formulario
      reset();
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="name"
        value={formulario.name}
        onChange={handleChange}
        placeholder='Nombre'
      />
      <Input
        label="Apellido"
        name="lastname"
        value={formulario.lastname}
        onChange={handleChange}
        placeholder='Apellido'
      />
      <Input
        label="Carrera"
        name="career"
        value={formulario.career}
        onChange={handleChange}
        placeholder='Carrera'
      />
      <Input
        label="Tema de tesis"
        name="tesis"
        value={formulario.tesis}
        onChange={handleChange}
        placeholder='Tema de tesis'
      />
      <Input
        label="Fecha Aprobacion"
        name="dateAprob"
        value={formulario.dateAprob}
        onChange={handleChange}
        placeholder='Fecha de aprobacion'
      />
      <Input
        label="Estado"
        name="state"
        value={formulario.state}
        onChange={handleChange}
        placeholder='Estado'
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
