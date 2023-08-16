import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

export const Input = React.forwardRef((props, ref) => {
  const { id, label, value, isValid, onChange, onBlur } = props;
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus,
    };
  });

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="type">{label}</label>
      <input
        ref={inputRef}
        type={id}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
});
