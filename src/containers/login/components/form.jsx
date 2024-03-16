import React from "react";
import { DefaultInput } from "../../../components/Inputs";
import { DefaultButton } from "../../../components/buttons";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Form = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div style={{ margin: "3% 0%" }}>
          <DefaultInput type="text" name="email" placeholder="Email" />
        </div>
        <div style={{ margin: "3% 0%" }}>
          <DefaultInput
            type="password"
            name="password"
            rules={{ required: "Enter the you password" }}
            placeholder="Password"
          />
        </div>
        <div style={{ margin: "5% 0%" }}>
          <DefaultButton type="submit">Login</DefaultButton>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
