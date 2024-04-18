import React from 'react';

interface props {
    onClick :()=> void;
    children: string;

}

const MyButton = ({children, onClick} :props) => {
    
  return (
    <div>
<button className="btn btn-primary" onClick={onClick} type="submit">{children}</button>
    </div>
  );
}

export default MyButton;
