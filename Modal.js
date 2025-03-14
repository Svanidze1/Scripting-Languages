import React from 'react';
import './modal.css';

const Modal = ({ show, onClose, destination }) => {
  if (!show) {
    return null;
  }

  const { imgSrc, destTitle, location, fees, description } = destination;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={imgSrc} alt={destTitle} className="modal-img" />
        <h2>{destTitle}</h2>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Price:</strong> {fees}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Modal;
