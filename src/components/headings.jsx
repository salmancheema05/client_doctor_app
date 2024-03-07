import { Typography } from "@mui/material";

const DefaultHeading = ({
  variant = "h2",
  handler = () => {},
  styles,
  children,
  ...rest
}) => {
  return (
    <Typography
      variant={variant}
      sx={{ ...styles }}
      onClick={handler}
      {...rest}
    >
      {children}
    </Typography>
  );
};
export default DefaultHeading;
