import React from "react";
import { DefaultBox } from "../../../components/boxs";
import DefaultGrid from "../../../components/grids";
import DefaultGridItem from "../../../components/gridItems";
import { CardWithImage } from "../../../components/cards";
import doctorImage2 from "../../../images/doctorimage2.jpg";
import DefaultInput from "../../../components/Inputs";

const DoctorList = () => {
  return (
    <DefaultBox style={{ padding: "5%" }}>
      <DefaultGrid>
        <DefaultGridItem
          sm={12}
          md={12}
          lg={12}
          styles={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <DefaultInput placeholder="Doctor Search" />
        </DefaultGridItem>
      </DefaultGrid>
      <DefaultGrid>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <CardWithImage
            src={doctorImage2}
            imageWidth="100%"
            imageHight="100%"
            headingText="Find a location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <CardWithImage
            src={doctorImage2}
            imageWidth="100%"
            imageHight="100%"
            headingText="Find a location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <CardWithImage
            src={doctorImage2}
            imageWidth="100%"
            imageHight="100%"
            headingText="Find a location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <CardWithImage
            src={doctorImage2}
            imageWidth="100%"
            imageHight="100%"
            headingText="Find a location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <CardWithImage
            src={doctorImage2}
            imageWidth="100%"
            imageHight="100%"
            headingText="Find a location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <CardWithImage
            src={doctorImage2}
            imageWidth="100%"
            imageHight="100%"
            headingText="Find a location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          />
        </DefaultGridItem>
        <DefaultGridItem sm={6} md={4} lg={4}>
          <CardWithImage
            src={doctorImage2}
            imageWidth="100%"
            imageHight="100%"
            headingText="Find a location"
            paragraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quia, vero, tempore, 
            sit quis eum obcaecati ipsam mollitia minima ea repudiandae accusamus."
          />
        </DefaultGridItem>
      </DefaultGrid>
    </DefaultBox>
  );
};

export default DoctorList;
