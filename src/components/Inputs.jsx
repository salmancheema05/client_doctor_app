import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
const DefaultInput = ({ name, rules, style, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input
        {...register(name, rules)}
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
          ...style,
        }}
      />
      {errors[name] && (
        <span style={{ color: "red" }}>{errors[name].message}</span>
      )}
    </>
  );
};
const DefaultSelectInput = ({
  onChange,
  handler,
  style,
  placeholder,
  ...rest
}) => {
  return (
    <select name="cars" id="cars" form="carform">
      <option value="">patient</option>
      <option value="">Doctor</option>
    </select>
  );
};
export { DefaultInput, DefaultSelectInput };
