import React from "react";
import DefaultGrid from "../../../components/grids";
import { DefaultTextArea } from "../../../components/Inputs";
import { DefaultButton } from "../../../components/buttons";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Form = () => {
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.login.user?.user_status);
  const schema = yup.object().shape({
    comment: yup.string().required("Comment is a required"),
  });
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    // event.preventDefault();
    console.log(data);
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div style={{ margin: "5% 0px" }}>
          <DefaultTextArea
            name="comment"
            placeholder="Comment"
            disabled={userStatus === "doctor" || userStatus == null}
            // onClick={
            //   userStatus == "patient"
            //     ? null
            //     : () => {
            //         navigate("/login");
            //       }
            // }
          />
        </div>
        <div style={{ margin: "5% 0%" }}>
          <DefaultButton type="submit">Commet</DefaultButton>
        </div>
      </form>
    </FormProvider>
  );
};
export default Form;
