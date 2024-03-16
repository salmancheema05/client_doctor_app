import React from "react";
import { DefaultInput, DefaultSelectInput } from "../../../components/Inputs";
import { DefaultButton } from "../../../components/buttons";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is a required field"),
    email: yup.string().email().required("Email is a required field"),
    password: yup.string().min(6).required("Password is a required field"),
    bloodGroup: yup.string().required("Blood is a required field"),
    gender: yup.string().required("Select Gender is required"),
  });
  const methods = useForm({ resolver: yupResolver(schema) });

  const gender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const onSubmit = (data) => {
    console.log(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div style={{ margin: "2% 0%" }}>
          <DefaultInput type="text" name="fullName" placeholder="Full Name" />
        </div>
        <div style={{ margin: "2% 0%" }}>
          <DefaultInput type="text" name="email" placeholder="Email" />
        </div>
        <div style={{ margin: "2% 0%" }}>
          <DefaultInput
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div style={{ margin: "2% 0%" }}>
          <DefaultInput
            type="password"
            name="bloodGroup"
            placeholder="Blood Group"
          />
        </div>
        <div
          style={{
            margin: "5% 0%",
          }}
        >
          <DefaultSelectInput name="gender" label="Gender" options={gender} />
        </div>
        <div style={{ margin: "5% 0%" }}>
          <DefaultButton type="submit">Sign Up</DefaultButton>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
