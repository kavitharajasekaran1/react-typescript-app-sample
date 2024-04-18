import React, { ReactNode } from 'react';

interface props {
    onClose:() => void;
    children: ReactNode;
}

const Alert = ({onClose, children}:props) => {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{children}</strong> 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
</div>

    </div>
  );
}

export default Alert;
