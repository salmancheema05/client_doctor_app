import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
const DefaultInput = ({ name, label, styles, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label htmlFor={name}>{label}</label>
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
          marginTop: "1%",
          marginBottom: "2%",
          ...styles,
        }}
      />
      {errors[name] && (
        <span style={{ color: "red" }}>{errors[name].message}</span>
      )}
    </>
  );
};
const DefaultTextArea = ({ name, label, children, styles, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        {...register(name)}
        rows="10"
        cols="50"
        {...rest}
        style={{
          width: "100%",
          paddingBottom: "20px",
          paddingTop: "20px",
          backgroundColor: "transparent",
          outline: "none",
          borderBottomColor: "lightgray",
          marginTop: "1%",
          marginBottom: "2%",
          ...styles,
        }}
      >
        {children}
      </textarea>
      {errors[name] && (
        <span style={{ color: "red" }}>{errors[name].message}</span>
      )}
    </>
  );
};
const DynamicInput = ({ name, index, label, fieldName, styles, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldNameWithIndex = `${name}[${index}].${fieldName}`;
  return (
    <>
      <lable htmlFor={fieldName}>{label}</lable>
      <input
        {...register(fieldNameWithIndex)}
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
          marginTop: "2%",
          marginBottom: "2%",
          ...styles,
        }}
      />
      {errors[name] &&
        errors[name][index] &&
        errors[name][index][fieldName] && (
          <span style={{ color: "red" }}>
            {errors[name][index][fieldName].message}
          </span>
        )}
    </>
  );
};

const DefaultSelectInput = ({ name, label, options, styles, ...rest }) => {
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
          border: "none",
          outline: "none",
          ...styles,
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

const DynmaicSelectInput = ({
  name,
  label,
  options,
  fieldName,
  index,
  styles,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // Create a dynamic name by including the index
  const dynamicName = `${name}[${index}].${fieldName}`;

  return (
    <div>
      {label && <label htmlFor={dynamicName}>{label}:</label>}
      <select
        {...register(dynamicName)} // Register with the dynamic name
        {...rest}
        style={{
          border: "none",
          outline: "none",
          ...styles,
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
        {errors[name] &&
          errors[name][index] &&
          errors[name][index][fieldName] && (
            <span style={{ color: "red" }}>
              {errors[name][index][fieldName].message}
            </span>
          )}
      </div>
    </div>
  );
};

export {
  DefaultInput,
  DynamicInput,
  DefaultSelectInput,
  DynmaicSelectInput,
  DefaultTextArea,
};
