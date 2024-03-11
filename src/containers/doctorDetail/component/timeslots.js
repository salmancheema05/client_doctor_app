import React from "react";
import { DefaultDiv } from "../../../components/divs";
import DefaultHeading from "../../../components/headings";
import DefaultParagraph from "../../../components/paragraphs";
import { DefaultButton } from "../../../components/buttons";

const TimeSlots = () => {
  return (
    <DefaultDiv
      style={{
        paddingLeft: "5%",
        paddingRight: "5%",
        boxShadow: " 2px 2px 25px 5px lightgray",
      }}
    >
      <DefaultDiv style={{ display: "flex", justifyContent: "space-between" }}>
        <DefaultParagraph
          styles={{
            marginTop: "5%",
            marginBottom: "1.5%",
            fontSize: "20px",
          }}
        >
          Ticket Price
        </DefaultParagraph>
        <DefaultHeading
          tag="h2"
          styles={{ marginTop: "4.5%", marginBottom: "1%" }}
        >
          700BDT
        </DefaultHeading>
      </DefaultDiv>
      <DefaultDiv>
        <DefaultHeading
          tag="h3"
          styles={{ marginTop: "5%", marginRight: "2%", marginBottom: "1%" }}
        >
          Available Time slots:
        </DefaultHeading>
      </DefaultDiv>
      <DefaultDiv>
        <DefaultDiv
          styles={{ display: "flex", justifyContent: "space-between" }}
        >
          <DefaultParagraph
            styles={{
              marginTop: "1.5%",
              marginBottom: "1.5%",
              fontSize: "20px",
            }}
          >
            Sunday
          </DefaultParagraph>
          <DefaultParagraph
            styles={{
              marginTop: "1.5%",
              marginBottom: "1.5%",
              fontSize: "20px",
            }}
          >
            4:30pm -9:30pm
          </DefaultParagraph>
        </DefaultDiv>
        <DefaultDiv
          styles={{ display: "flex", justifyContent: "space-between" }}
        >
          <DefaultParagraph
            styles={{
              marginTop: "1.5%",
              marginBottom: "1.5%",
              fontSize: "20px",
            }}
          >
            Sunday
          </DefaultParagraph>
          <DefaultParagraph
            styles={{
              marginTop: "1.5%",
              marginBottom: "1.5%",
              fontSize: "20px",
            }}
          >
            4:30pm -9:30pm
          </DefaultParagraph>
        </DefaultDiv>
        <DefaultDiv
          styles={{ display: "flex", justifyContent: "space-between" }}
        >
          <DefaultParagraph
            styles={{
              marginTop: "1.5%",
              marginBottom: "1.5%",
              fontSize: "20px",
            }}
          >
            Tuesday
          </DefaultParagraph>
          <DefaultParagraph
            styles={{
              marginTop: "1.5%",
              marginBottom: "1.5%",
              fontSize: "20px",
            }}
          >
            4:30pm -9:30pm
          </DefaultParagraph>
        </DefaultDiv>
        <DefaultButton
          buttonKey="request_an_appointment"
          styles={{
            width: "100%",
            marginTop: "50px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          Book Appointment
        </DefaultButton>
      </DefaultDiv>
    </DefaultDiv>
  );
};

export default TimeSlots;
