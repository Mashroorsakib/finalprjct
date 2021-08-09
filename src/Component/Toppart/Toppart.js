import React from 'react';
import './Toppart.css'
import Button from 'react-bootstrap/Button'
const Toppart = () => {
    return (
        <div className="first-part">
              <div className="first-text">
                <h1>Be confident to take service from us</h1>
                <h5>Rate our service</h5>
                <Button variant="success">Explore now</Button>
            </div>
        </div>
    );
};

export default Toppart;