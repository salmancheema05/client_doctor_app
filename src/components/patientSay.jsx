import React, { useState, useEffect } from "react";
import DefaultGrid, { ThemeGrid } from "./grids";
import DefaultGridItem from "./gridItems";
import DefaultHeading from "./headings";
import DefaultParagraph from "./paragraphs";
import DefaultImage from "./images";
import Doctor2 from "../images/doctorimage2.jpg";
let isMobile = "";
const PatientSay = () => {
  const [peopleSay, setPeopleSay] = useState([
    {
      id: 1,
      image: Doctor2,
      firstname: "Salman",
      lastName: "Akbar",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam corrupti animi eligendi sunt ipsum quam doloremque eveni",
    },
    {
      id: 2,
      image: Doctor2,
      firstname: "Salman",
      lastName: "Akbar",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam corrupti animi eligendi sunt ipsum quam doloremque eveni",
    },
    {
      id: 3,
      image: Doctor2,
      firstname: "Salman",
      lastName: "Akbar",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam corrupti animi eligendi sunt ipsum quam doloremque eveni",
    },
    {
      id: 4,
      image: Doctor2,
      firstname: "Salman",
      lastName: "Akbar",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam corrupti animi eligendi sunt ipsum quam doloremque eveni",
    },
    {
      id: 5,
      image: Doctor2,
      firstname: "Salman",
      lastName: "Akbar",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam corrupti animi eligendi sunt ipsum quam doloremque eveni",
    },
    {
      id: 6,
      image: Doctor2,
      firstname: "Salman",
      lastName: "Akbar",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam corrupti animi eligendi sunt ipsum quam doloremque eveni",
    },
    {
      id: 7,
      image: Doctor2,
      firstname: "Salman",
      lastName: "Akbar",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam corrupti animi eligendi sunt ipsum quam doloremque eveni",
    },
  ]);
  const [sliderdots, setSiderDots] = useState([]);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const sliderDots = () => {
    const length = peopleSay.length;
    const divide = Math.ceil(isMobile ? length / 2 : length / 3);
    const dotsArray = new Array(divide).fill(null);
    setSiderDots(dotsArray);
  };

  const DotActive = (dotindex) => {
    setActiveDotIndex(dotindex);
    slider(dotindex);
  };

  const slider = (dotindex) => {
    const startIndex = isMobile ? dotindex * 2 : dotindex * 3;
    const endIndex = Math.min(
      isMobile ? startIndex + 2 : startIndex + 3,
      peopleSay.length
    );
    const updatedPeopleSay = peopleSay.map((item, index) => ({
      ...item,
      display: index >= startIndex && index < endIndex ? "block" : "none",
    }));
    setPeopleSay(updatedPeopleSay);
  };
  useEffect(() => {
    const handleResize = () => {
      isMobile = window.innerWidth < 1200;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    sliderDots();
    slider(activeDotIndex);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <ThemeGrid styles={{ padding: "3% 10%" }}>
      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{ textAlign: "center" }}
      >
        <DefaultHeading>What our Patient say</DefaultHeading>
      </DefaultGridItem>
      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{ textAlign: "center", marginBottom: "5%" }}
      >
        <DefaultParagraph styles={{ marginBottom: "10px" }}>
          World-class care for everyone. Our Health System offers
        </DefaultParagraph>
        <DefaultParagraph>unmatched,expert health care</DefaultParagraph>
      </DefaultGridItem>

      {peopleSay.map((item) => (
        <DefaultGridItem
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
          styles={{
            width: "100%",
            padding: "0px 2%",
            display: item.display,
          }}
        >
          <div style={{ display: "flex", paddingLeft: "1%" }}>
            <div style={{ margin: "5% 0%" }}>
              <DefaultImage src={item.image} width="70" height="70" />
            </div>
            <div style={{ margin: "10% 3%" }}>
              <DefaultHeading tag="h4">
                {item.firstname + " " + item.lastName + " " + item.id}
              </DefaultHeading>
            </div>
          </div>
          <div>
            <DefaultParagraph styles={{ marginBottom: "30px" }}>
              {item.comment}
            </DefaultParagraph>
          </div>
        </DefaultGridItem>
      ))}

      <DefaultGridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        styles={{ display: "flex", justifyContent: "center" }}
      >
        {sliderdots.map((_, index) => (
          <div
            key={index}
            onClick={() => DotActive(index)}
            style={{
              border: "1px solid gray",
              background: index === activeDotIndex ? "blue" : "",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              margin: "0px 5px",
            }}
          ></div>
        ))}
      </DefaultGridItem>
    </ThemeGrid>
  );
};

export default PatientSay;
