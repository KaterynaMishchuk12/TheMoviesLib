// import * as React from "react";
import Rating from "@mui/material/Rating";

export default function RatingStars({ value }) {
  return (
    <Rating
      name="half-rating-read"
      value={value / 2}
      precision={0.5}
      readOnly
    />
  );
}
