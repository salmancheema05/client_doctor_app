import React from "react";
import DefaultBox from "./boxs";
import DefaultGrid from "./grids";
import DefaultGridItem from "./gridItems";
import DefaultImage from "./images";
import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";
import map from "../images/map.png";
import DefaultIconsButtons from "./iconsButtons";

const Serverices = () => {
  return (
    <DefaultBox styles={{ marginLeft: "100px", marginRight: "100px" }}>
      <DefaultGrid>
        <DefaultGridItem sm="12" md="12" lg="12" styles={{ margin: "5%" }}>
          <DefaultHeading
            variant="h4"
            styles={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            Providing the Best
          </DefaultHeading>
          <DefaultHeading
            variant="h4"
            styles={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            medical services
          </DefaultHeading>
          <DefaultParagraph
            styles={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </DefaultParagraph>
        </DefaultGridItem>
      </DefaultGrid>
      <DefaultGrid>
        <DefaultGridItem
          sm="6"
          md="4"
          lg={4}
          styles={{ marginTop: "2%", marginBottom: "2%" }}
        >
          <DefaultBox
            styles={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
            }}
          >
            <DefaultImage src={map} styles={{ width: "20%" }} />
          </DefaultBox>
          <DefaultBox
            styles={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
            }}
          >
            <DefaultHeading
              variant="h4"
              styles={{
                fontWeight: "bold",
              }}
            >
              Find a Location
            </DefaultHeading>
          </DefaultBox>
          <DefaultBox
            styles={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
              textAlign: "center",
            }}
          >
            <DefaultParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </DefaultParagraph>
          </DefaultBox>
          <DefaultIconsButtons Iconalign="center" />
        </DefaultGridItem>
        <DefaultGridItem
          sm="6"
          md="4"
          lg={4}
          styles={{ marginTop: "2%", marginBottom: "2%" }}
        >
          <DefaultBox
            styles={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
            }}
          >
            <DefaultImage src={map} styles={{ width: "20%" }} />
          </DefaultBox>
          <DefaultBox
            styles={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
            }}
          >
            <DefaultHeading
              variant="h4"
              styles={{
                fontWeight: "bold",
              }}
            >
              Find a Location
            </DefaultHeading>
          </DefaultBox>
          <DefaultBox
            styles={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
              textAlign: "center",
            }}
          >
            <DefaultParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </DefaultParagraph>
          </DefaultBox>
          <DefaultIconsButtons Iconalign="center" />
        </DefaultGridItem>
        <DefaultGridItem
          sm="6"
          md="4"
          lg={4}
          styles={{ marginTop: "2%", marginBottom: "2%" }}
        >
          <DefaultBox
            styles={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
            }}
          >
            <DefaultImage src={map} styles={{ width: "20%" }} />
          </DefaultBox>
          <DefaultBox
            styles={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
            }}
          >
            <DefaultHeading
              variant="h4"
              styles={{
                fontWeight: "bold",
              }}
            >
              Find a Location
            </DefaultHeading>
          </DefaultBox>
          <DefaultBox
            styles={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
              textAlign: "center",
            }}
          >
            <DefaultParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </DefaultParagraph>
          </DefaultBox>
          <DefaultIconsButtons Iconalign="center" />
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultBox>
  );
};

export default Serverices;
