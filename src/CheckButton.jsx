import React from "react";

export default function CheckButton({ checked=false, baseColor='primary', label, onClicked }){

    let buttonClasses = `mb-3 btn `;
    buttonClasses += checked ? `btn-` : 'btn-outline-';
    buttonClasses += `${baseColor}`;

  return (
    <button type="button" className={buttonClasses} onClick={onClicked}>{label}</button>
  );
}
