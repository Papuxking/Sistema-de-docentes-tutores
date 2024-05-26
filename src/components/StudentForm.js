import React from 'react';
import './StudentForm.css';

function StudentForm() {
    return (
        <div className="student-form">
            <h2>Gestionar Estudiante</h2>
            <form>
                {/* Agregar campos del formulario aquí */}
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}

export default StudentForm;
