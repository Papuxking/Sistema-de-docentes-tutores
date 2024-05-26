import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header-title">Nombre Apellido</div>
            <div className="header-actions">
                <i className="icon-settings"></i>
                <i className="icon-minimize"></i>
                <i className="icon-maximize"></i>
                <i className="icon-close"></i>
            </div>
        </div>
    );
}

export default Header;
