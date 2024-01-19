import React from 'react';

const Overlay: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div
        onClick={onClick}
        style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            zIndex: 2,
        }}
    />
);

export default Overlay;