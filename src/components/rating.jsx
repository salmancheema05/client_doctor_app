import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const DefaultRating = ({ length = 5, selectedStar = 0, handler = null }) => {
  return (
    <Stack spacing={1}>
      <Rating
        onMouseOver={handler}
        name="rating"
        max={length}
        color="blue"
        defaultValue={selectedStar}
        precision={0.5}
      />
    </Stack>
  );
};
const ReadRating = ({ length = 5, selectedStar = 0 }) => {
  return (
    <Stack spacing={1}>
      <Rating
        name="ratingread"
        max={length}
        defaultValue={selectedStar}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
};
export { DefaultRating, ReadRating };
