import React from "react";
import { Box, Typography } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

const SearchPage = () => {
  const handleSearchClick = () => {};
  return (
    <ArgonBox pr={1}>
      <ArgonTypography
        variant="h4"
        fontWeight="medium"
        sx={{ color: "white", mb: 1 }}
      >
        Search
      </ArgonTypography>
    </ArgonBox>
  );
};

export default SearchPage;
