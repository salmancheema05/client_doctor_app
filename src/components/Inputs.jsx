import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
const DefaultInput = ({ name, style, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input
        {...register(name)}
        {...rest}
        style={{
          width: "100%",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          paddingBottom: "20px",
          paddingTop: "20px",
          backgroundColor: "transparent",
          outline: "none",
          borderBottomColor: "lightgray",
          marginBottom: "2%",
          ...style,
        }}
      />
      {errors[name] && (
        <span style={{ color: "red" }}>{errors[name].message}</span>
      )}
    </>
  );
};
const DefaultSelectInput = ({ name, label, options, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      {label && <label htmlFor={name}>{label}:</label>}
      <select
        {...register(name)}
        {...rest}
        style={{
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
          borderBottom: "none",
          outline: "none",
        }}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div style={{ marginTop: "5%" }}>
        {errors[name] && (
          <span style={{ color: "red" }}>{errors[name].message}</span>
        )}
      </div>
    </div>
  );
};
export { DefaultInput, DefaultSelectInput };
