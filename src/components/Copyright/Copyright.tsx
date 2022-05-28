import React from "react";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export interface ICopyrightProps {}

const defaultProps: Partial<ICopyrightProps> = {};

export const Copyright: React.FC<ICopyrightProps> = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

Copyright.defaultProps = defaultProps;

export default Copyright;
