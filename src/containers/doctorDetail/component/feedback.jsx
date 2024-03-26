import React from "react";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import DefaultHeading from "../../../components/headings";
import DoctorImage2 from "../../../images/doctorimage3.jpg";
import { CircleImage } from "../../../components/images";
import DefaultParagraph from "../../../components/paragraphs";
import { DefaultRating, ReadRating } from "../../../components/rating";

const Feedback = () => {
  return (
    <DefaultGrid>
      <DefaultGridItem sm={12} md={12} lg={12} xl={12}>
        <DefaultHeading tag="h2">All Views (2)</DefaultHeading>
      </DefaultGridItem>

      <DefaultGridItem
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{
          marginTop: "10px",
        }}
      >
        <DefaultGrid styles={{ margin: "10px 0px" }}>
          <DefaultGridItem
            sm={12}
            md={10}
            lg={9}
            xl={9}
            styles={{ display: "flex" }}
          >
            <div>
              <CircleImage src={DoctorImage2} />
            </div>
            <div>
              <DefaultHeading
                tag="h3"
                styles={{
                  color: "blue",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                Ali Khan
              </DefaultHeading>
              <DefaultParagraph
                styles={{
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                July,15,2015
              </DefaultParagraph>
              <DefaultParagraph
                styles={{
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum magnam, quod optio ipsa illo consequatur, tempore
                laboriosam at minus labore quo, voluptates ipsum ratione eaque
                quas itaque corrupti dolore alias?
              </DefaultParagraph>
            </div>
          </DefaultGridItem>
          <DefaultGridItem sm={12} md={2} lg={3} xl={3}>
            <ReadRating selectedStar={4.5} />
          </DefaultGridItem>
        </DefaultGrid>
      </DefaultGridItem>

      <DefaultGridItem
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{
          marginTop: "10px",
        }}
      >
        <DefaultGrid styles={{ margin: "10px 0px" }}>
          <DefaultGridItem
            sm={12}
            md={10}
            lg={9}
            xl={9}
            styles={{ display: "flex" }}
          >
            <div>
              <CircleImage src={DoctorImage2} />
            </div>
            <div>
              <DefaultHeading
                tag="h3"
                styles={{
                  color: "blue",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                Ali Khan
              </DefaultHeading>
              <DefaultParagraph
                styles={{
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                July,15,2015
              </DefaultParagraph>
              <DefaultParagraph
                styles={{
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum magnam, quod optio ipsa illo consequatur, tempore
                laboriosam at minus labore quo, voluptates ipsum ratione eaque
                quas itaque corrupti dolore alias?
              </DefaultParagraph>
            </div>
          </DefaultGridItem>
          <DefaultGridItem sm={12} md={2} lg={3} xl={3}>
            <ReadRating selectedStar={4.5} />
          </DefaultGridItem>
        </DefaultGrid>
      </DefaultGridItem>

      <DefaultGridItem sm={12} md={12} lg={12} xl={12}>
        <DefaultHeading tag="h3">
          How would you rate the overall experience?
        </DefaultHeading>
      </DefaultGridItem>

      <DefaultGridItem sm={12} md={12} lg={12} xl={12}>
        <DefaultRating />
      </DefaultGridItem>

      <DefaultGridItem sm={12} md={12} lg={12} xl={12}>
        <DefaultHeading tag="h3">
          Share you feedback or suggestions
        </DefaultHeading>
      </DefaultGridItem>
    </DefaultGrid>
  );
};

export default Feedback;
