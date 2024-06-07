import React from 'react';
import axios from 'axios';
import Input from './Input';
import Button from './Button';
import Select from './Select';
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

    // Verificar si algún campo está vacío
    const { name, lastname, career, tesis, dateAprob, state } = formulario;
    if (!name || !lastname || !career || !tesis || !dateAprob || !state) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    try {
      // Enviar los datos al backend
      await axios.post('http://localhost:5000/api/estudiantes', {
        Nombre: name,
        Apellido: lastname,
        Carrera: career,
        TemaTesis: tesis,
        FechaAprobacion: dateAprob,
        Estado: state
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
        label="Fecha de Aprobación"
        type="date"
        name="dateAprob"
        value={formulario.dateAprob}
        onChange={handleChange}
      />
      <Select
        label="Estado"
        name="state"
        value={formulario.state}
        onChange={handleChange}
        options={[
          { value: 'Activo', label: 'Activo' },
          { value: 'Graduado', label: 'Graduado' },
          { value: 'Retirado', label: 'Retirado' },
        ]}
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
