import React from 'react';

const Notification = ({ message, color  }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                backgroundColor: 'lightgrey',
                color: 'black',
                width: '25%',
                borderRadius: '12px',
                padding: '10px',
                border: `4px solid ${color || 'var(--icon-color-green)'}`,
                marginTop: '45px',
                textAlign: 'center',
                fontSize: '12px',
            }}>
        {message}
        </div>
    );
};

export default Notification;
