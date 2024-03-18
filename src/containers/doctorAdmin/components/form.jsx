import React, { useState, Fragment } from "react";
import DefaultGrid from "../../../components/grids";
import {
  DefaultInput,
  DynamicInput,
  DefaultSelectInput,
  DynmaicSelectInput,
  DefaultTextArea,
} from "../../../components/Inputs";
import DefaultGridItem from "../../../components/gridItems";
import { DefaultButton } from "../../../components/buttons";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is a required"),
    email: yup.string().email().required("Email is a required"),
    phone: yup.string().required("Phone number  is a required "),
    bio: yup.string().required("Bio  is a required "),
    gender: yup.string().required("Select Gender is required"),
    specialization: yup.string().required("Specialization  is a required "),
    ticketPrice: yup.string().required("Ticket Price  is a required "),
    education: yup.array().of(
      yup.object().shape({
        startDate: yup.date().typeError("Start Date is a required"),
        endDate: yup.date().typeError("End Date is a required"),
        degree: yup.string().required("Degree is a required"),
        institute: yup.string().required("Institute is a required"),
      })
    ),
    timeslots: yup.array().of(
      yup.object().shape({
        days: yup.string().required("Select the Day"),
        startingtime: yup.string().required("Starting time is a required"),
        endingtime: yup.string().required("Ending Time is a required"),
      })
    ),
    experience: yup.array().of(
      yup.object().shape({
        start_date: yup.date().typeError("Start Date is a required"),
        end_date: yup.date().typeError("End Date is a required"),
        position: yup.string().required("Your Position is a required"),
        hospital: yup.string().required("Hospital Name is a required"),
      })
    ),
  });
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const [educationDynamicFields, setEducationDynamicFields] = useState([]);
  const [timeSlotsDynamicFields, setTimeSlotsDynamicFields] = useState([]);
  const [experienceDynamicFields, setExperienceDynamicFields] = useState([]);
  const gender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const days = [
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
  ];
  const educationFields = () => {
    setEducationDynamicFields([
      ...educationDynamicFields,
      {
        startDate: "",
        endDate: "",
        degree: "",
        institute: "",
      },
    ]);
  };
  const timeSlotsFields = () => {
    setTimeSlotsDynamicFields([
      ...timeSlotsDynamicFields,
      {
        Day: "",
        startingTime: "",
        endingTime: "",
      },
    ]);
  };
  const createExperienceFields = () => {
    setExperienceDynamicFields([
      ...experienceDynamicFields,
      {
        start_date: "",
        end_date: "",
        position: "",
        hospital: "",
      },
    ]);
  };
  const onSubmit = (data) => {
    // event.preventDefault();
    console.log(data);
    methods.reset();
  };

  return (
    <DefaultGridItem xs={12} sm={12} md={12} lg={12} xl={12}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div style={{ margin: "2% 0%" }}>
            <DefaultInput
              type="text"
              name="fullName"
              label="Full Name"
              placeholder="Full Name"
              styles={{ border: "1px solid lightgray" }}
            />
          </div>
          <div style={{ margin: "2% 0%" }}>
            <DefaultInput
              type="text"
              name="email"
              label="Email"
              placeholder="Email"
              styles={{ border: "1px solid lightgray" }}
            />
          </div>
          <div style={{ margin: "2% 0%" }}>
            <DefaultInput
              type="number"
              name="phone"
              label="Phone"
              placeholder="Phone"
              styles={{ border: "1px solid lightgray" }}
            />
          </div>
          <div style={{ margin: "2% 0%" }}>
            <DefaultInput
              type="text"
              name="bio"
              label="Bio"
              placeholder="Bio"
              styles={{ border: "1px solid lightgray" }}
            />
          </div>
          <DefaultGrid>
            <DefaultGridItem
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              styles={{ width: "100%" }}
            >
              <DefaultSelectInput
                name="gender"
                options={gender}
                label="Gender"
                styles={{
                  border: "1px solid lightgray",
                  width: "100%",
                  height: "57px",
                  marginTop: "5%",
                }}
              />
            </DefaultGridItem>
            <DefaultGridItem xs={12} sm={6} md={6} lg={4} xl={4}>
              <DefaultInput
                type="text"
                name="specialization"
                label="Specialization"
                placeholder="Specialization"
                styles={{ border: "1px solid lightgray", marginTop: "5%" }}
              />
            </DefaultGridItem>
            <DefaultGridItem xs={12} sm={12} md={12} lg={4} xl={4}>
              <DefaultInput
                type="text"
                name="ticketPrice"
                label="Ticket Price"
                placeholder="Ticket Price"
                styles={{ border: "1px solid lightgray", marginTop: "5%" }}
              />
            </DefaultGridItem>
          </DefaultGrid>
          {/* Start Education  field */}
          <DefaultGrid styles={{ marginTop: "5px" }}>
            {educationDynamicFields.map((_, index) => (
              <Fragment key={index}>
                <DefaultGridItem xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DynamicInput
                    type="date"
                    name="education"
                    label="Start Date"
                    index={index}
                    fieldName="startDate"
                    styles={{ border: "1px solid lightgray" }}
                  />
                </DefaultGridItem>
                <DefaultGridItem xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DynamicInput
                    type="date"
                    name="education"
                    label="End Date"
                    index={index}
                    fieldName="endDate"
                    styles={{ border: "1px solid lightgray" }}
                  />
                </DefaultGridItem>
                <DefaultGridItem xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DynamicInput
                    type="text"
                    name="education"
                    label="Degree"
                    index={index}
                    fieldName="degree"
                    placeholder="Degree"
                    styles={{ border: "1px solid lightgray" }}
                  />
                </DefaultGridItem>
                <DefaultGridItem xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DynamicInput
                    type="text"
                    name="education"
                    label="Institute"
                    index={index}
                    fieldName="institute"
                    placeholder="Institute"
                    styles={{ border: "1px solid lightgray" }}
                  />
                </DefaultGridItem>
              </Fragment>
            ))}
            <DefaultGridItem xs={6} sm={6} md={6} lg={3} xl={6}>
              <DefaultButton
                styles={{ backgroundColor: "black", marginTop: "30px" }}
                onClick={educationFields}
              >
                Add Education
              </DefaultButton>
            </DefaultGridItem>
          </DefaultGrid>
          {/* end Education field */}

          {/* Start Experience Dynamic Fields  field */}

          <DefaultGrid styles={{ marginTop: "5px" }}>
            {experienceDynamicFields.map((_, index) => (
              <Fragment key={index}>
                <DefaultGridItem xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DynamicInput
                    type="date"
                    name="experience"
                    label="Start Date"
                    index={index}
                    fieldName="start_date"
                    styles={{ border: "1px solid lightgray" }}
                  />
                </DefaultGridItem>
                <DefaultGridItem xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DynamicInput
                    type="date"
                    name="experience"
                    label="End Date"
                    index={index}
                    fieldName="end_date"
                    styles={{ border: "1px solid lightgray" }}
                  />
                </DefaultGridItem>
                <DefaultGridItem xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DynamicInput
                    type="text"
                    name="experience"
                    label="position"
                    index={index}
                    fieldName="position"
                    placeholder="Position"
                    styles={{ border: "1px solid lightgray" }}
                  />
                </DefaultGridItem>
                <DefaultGridItem xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DynamicInput
                    type="text"
                    name="experience"
                    label="hospital"
                    index={index}
                    fieldName="hospital"
                    placeholder="Hospital"
                    styles={{ border: "1px solid lightgray" }}
                  />
                </DefaultGridItem>
              </Fragment>
            ))}
            <DefaultGridItem xs={6} sm={6} md={6} lg={3} xl={6}>
              <DefaultButton
                styles={{ backgroundColor: "black", marginTop: "30px" }}
                onClick={createExperienceFields}
              >
                Add Experience
              </DefaultButton>
            </DefaultGridItem>
          </DefaultGrid>

          {/* end Experience Dynamic Fields  field  field */}

          {/* Start Time Slots field */}
          <DefaultGrid styles={{ marginTop: "5px" }}>
            {timeSlotsDynamicFields.map((_, index) => (
              <Fragment key={index}>
                <DefaultGridItem xs={6} sm={6} md={6} lg={4} xl={4}>
                  <DynmaicSelectInput
                    name="timeslots"
                    label="Select Day"
                    options={days}
                    index={index}
                    fieldName="days"
                    styles={{
                      border: "1px solid lightgray",
                      width: "100%",
                      height: "63px",
                      marginTop: "5%",
                    }}
                  />
                </DefaultGridItem>
                <DefaultGridItem xs={6} sm={6} md={6} lg={4} xl={4}>
                  <DynamicInput
                    type="time"
                    name="timeslots"
                    label=" Start Time"
                    index={index}
                    fieldName="startingtime"
                    placeholder="Institute"
                    styles={{ border: "1px solid lightgray", marginTop: "5%" }}
                  />
                </DefaultGridItem>
                <DefaultGridItem xs={12} sm={12} md={12} lg={4} xl={4}>
                  <DynamicInput
                    type="time"
                    name="timeslots"
                    label="Ending Time"
                    index={index}
                    fieldName="endingtime"
                    placeholder="Institute"
                    styles={{ border: "1px solid lightgray", marginTop: "5%" }}
                  />
                </DefaultGridItem>
              </Fragment>
            ))}
            <DefaultGridItem xs={6} sm={6} md={6} lg={3} xl={6}>
              <DefaultButton
                styles={{ backgroundColor: "black", marginTop: "30px" }}
                onClick={timeSlotsFields}
              >
                Add Time Slots
              </DefaultButton>
            </DefaultGridItem>
          </DefaultGrid>
          {/* ending Time Slots field */}
          <div style={{ margin: "5% 0px" }}>
            <DefaultTextArea
              name="about"
              label="About US"
              placeholder="About"
            />
          </div>
          <div style={{ margin: "5% 0%" }}>
            <DefaultButton type="submit">Update Profile</DefaultButton>
          </div>
        </form>
      </FormProvider>
    </DefaultGridItem>
  );
};

export default Form;
