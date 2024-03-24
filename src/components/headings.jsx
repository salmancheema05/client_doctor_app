import { useTheme } from "@mui/material/styles";
const DefaultHeading = ({
  tag = "h1",
  handler = null,
  styles,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const Tag = tag;
  return (
    <Tag
      style={{
        color: theme.heading.main,
        cursor: handler ? "pointer" : "",
        ...styles,
      }}
      onClick={handler}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default DefaultHeading;
