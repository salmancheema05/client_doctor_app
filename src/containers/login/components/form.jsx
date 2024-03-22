import React from "react";
import { DefaultInput } from "../../../components/Inputs";
import { DefaultButton } from "../../../components/buttons";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userLoginReducer } from "../../../store/features/login";
import { auth, db } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const dispatch = useDispatch();
  // const authorization = useSelector((state) => state.user?.authorization);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const userCollection = collection(db, "users");
      const userQuery = query(
        userCollection,
        where("auth_id", "==", response.user.uid)
      );
      const querySnapshot = await getDocs(userQuery);
      const userObject = querySnapshot.docs[0].data();
      userObject.token = response._tokenResponse.idToken;
      dispatch(userLoginReducer(userObject));
      console.log(userObject);

      if (userObject.user_status == "doctor") {
        navigate("/doctoradmin");
      } else if (userObject.user_status == "patient") {
        navigate("/patientadmin");
      }
    } catch (error) {
      console.log("login form", error);
    }
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
