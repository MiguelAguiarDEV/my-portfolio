// resources/js/Pages/Maintenance.tsx
import React from 'react';

const Maintenance = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f2f2f2'
        }}>
            <h1 style={{ color: '#333' }}>¡Sitio en Mantenimiento!</h1>
            <p style={{ color: '#666', fontSize: '1.2rem' }}>
                Estamos realizando mejoras. Por favor, vuelve más tarde.
            </p>
        </div>
    );
};

export default Maintenance;
