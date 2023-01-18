import { Button as MUILink } from "@mui/material";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ILink } from "./Link.interface";

export const Link: FC<ILink> = ({
  sx,
  to,
  children,
  size,
  variant = "text",
  startIcon = undefined,
  endIcon = undefined,
}) => {
  return (
    <MUILink
      to={to}
      sx={sx}
      component={RouterLink}
      variant={variant}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </MUILink>
  );
};
