import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Modal = ({ active, setActive, children }) => {
  return (
    <div className="flex flex-col p-2 bg-black opacity-30">
      <div className="bg-reg p-1 h-3 w-3">
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="bg-white p-3">
        <h3>Modal View</h3>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut corporis
          non beatae impedit dolor sequi. Veniam nulla amet veritatis eius!
        </p>
      </div>
    </div>
  );
};

export default Modal;
