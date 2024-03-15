import React from "react";
import { DefaultInput } from "../../../components/Inputs";
import { DefaultButton } from "../../../components/buttons";
import { useForm, FormProvider } from "react-hook-form";

const Form = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div style={{ margin: "3% 0%" }}>
          <DefaultInput
            type="text"
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            placeholder="Email"
          />
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
