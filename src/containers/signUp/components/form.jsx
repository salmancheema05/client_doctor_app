import React from "react";
import { DefaultInput, DefaultSelectInput } from "../../../components/Inputs";
import { DefaultButton } from "../../../components/buttons";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    whoAreYou: yup.string().required("Option is required"),
    gender: yup.string().required("Option is required"),
  });
  const methods = useForm({ resolver: yupResolver(schema) });
  const whoAreYouOptional = [
    { label: "Doctor", value: "doctor" },
    { label: "Patient", value: "patient" },
  ];
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
            rules={{ required: "Enter the you password" }}
            placeholder="Password"
          />
        </div>
        <div
          style={{
            margin: "5% 0%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <DefaultSelectInput
            name="whoAreYou"
            label="who Are You"
            options={whoAreYouOptional}
          />
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
