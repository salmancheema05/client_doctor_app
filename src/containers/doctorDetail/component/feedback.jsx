import React from "react";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import DefaultHeading from "../../../components/headings";
import DoctorImage2 from "../../../images/doctorimage3.jpg";
import { CircleImage } from "../../../components/images";
import DefaultParagraph from "../../../components/paragraphs";
import { DefaultRating, ReadRating } from "../../../components/rating";
import Form from "./form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useResponsive from "../../../hooks/useResponsive";
const Feedback = () => {
  const { isSmallScreen, isMediumScreen, isExtraSmallScreen, isLargeScreen } =
    useResponsive();
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.login.user?.user_status);

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
              {isExtraSmallScreen || isSmallScreen || isMediumScreen ? (
                <div
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  <ReadRating selectedStar={4.5} />
                </div>
              ) : null}

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
          {isLargeScreen ? (
            <DefaultGridItem sm={12} md={2} lg={3} xl={3}>
              <ReadRating selectedStar={4.5} />
            </DefaultGridItem>
          ) : null}
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
              {isExtraSmallScreen || isSmallScreen || isMediumScreen ? (
                <div
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  <ReadRating selectedStar={4.5} />
                </div>
              ) : null}

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
          {isLargeScreen ? (
            <DefaultGridItem sm={12} md={2} lg={3} xl={3}>
              <ReadRating selectedStar={4.5} />
            </DefaultGridItem>
          ) : null}
        </DefaultGrid>
      </DefaultGridItem>

      <DefaultGridItem sm={12} md={12} lg={12} xl={12}>
        <DefaultHeading tag="h3">
          How would you rate the overall experience?
        </DefaultHeading>
      </DefaultGridItem>

      <DefaultGridItem sm={12} md={12} lg={12} xl={12}>
        <DefaultRating
          handler={
            userStatus == "patient"
              ? null
              : userStatus == "doctor"
              ? () => {
                  alert(
                    "Patients are only able to give ratings and submit comments "
                  );
                }
              : () => {
                  navigate("/login");
                }
          }
        />
      </DefaultGridItem>

      <DefaultGridItem
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{ width: "100%" }}
      >
        <DefaultHeading tag="h3">
          Share you feedback or suggestions
        </DefaultHeading>
        <Form />
      </DefaultGridItem>
    </DefaultGrid>
  );
};

export default Feedback;
