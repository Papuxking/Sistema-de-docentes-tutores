import React from 'react';
import './Sidebar.css';

function Sidebar({ onSelectSection }) {
    return (
        <div className="sidebar">
            <div className="sidebar-item" onClick={() => onSelectSection('estudiantes')}>Estudiantes</div>
            <div className="sidebar-item" onClick={() => onSelectSection('historial')}>Historial</div>
            <div className="sidebar-item" onClick={() => onSelectSection('progreso')}>Progreso</div>
            <div className="sidebar-item" onClick={() => onSelectSection('reportes')}>Reportes</div>
        </div>
    );
}

export default Sidebar;
