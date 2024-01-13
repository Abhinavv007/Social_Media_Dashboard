
import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'black',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        left: '0',
        bottom: '0',
        width: '100%',
        
      
    };

    return (
        <footer style={footerStyle}>
            <p style={{ margin: '0' ,fontWeight:500}}>Copyright &copy; {new Date().getFullYear()} Designed By: Abhinav Sharma </p>
        </footer>
    );
};

export default Footer;
