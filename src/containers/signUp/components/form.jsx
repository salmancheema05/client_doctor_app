import React from "react";
import { DefaultInput, DefaultSelectInput } from "../../../components/Inputs";
import { DefaultButton } from "../../../components/buttons";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
const Form = () => {
  const schema = yup.object().shape({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    user_status: yup.string().required("Option is required"),
    gender: yup.string().required("Option is required"),
  });
  const methods = useForm({ resolver: yupResolver(schema) });
  const user_status = [
    { label: "Doctor", value: "doctor" },
    { label: "Patient", value: "patient" },
  ];
  const gender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const onSubmit = async (data) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const docRef = collection(db, "users");
      await addDoc(docRef, {
        full_name: data.full_name,
        email: data.email,
        gender: data.gender,
        user_status: data.user_status,
        auth_id: response.user.uid,
      });
      console.log(response);
      methods.reset();
    } catch (error) {
      console.log("sign up form", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div style={{ margin: "2% 0%" }}>
          <DefaultInput type="text" name="full_name" placeholder="Full Name" />
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
            name="user_status"
            label="who Are You"
            options={user_status}
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
