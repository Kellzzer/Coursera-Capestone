import React from "react";
import "CcouersaCapstone-app/src/Components/Button/Button.css";

const Button = ({ title, onClick, type }) => {
  const handleClick = (e) => {
    if (type !== 'submit') {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;