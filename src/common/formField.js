import React from "react";
import PropTypes from "prop-types";

export function FormField({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  children,
  label,
  ...props
}) {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        required
      />
    </React.Fragment>
  );
}

FormField.defaultProps = {
  type: "text",
  className: "",
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};
