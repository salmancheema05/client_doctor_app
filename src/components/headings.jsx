import { textAlign } from "@mui/system";

const DefaultHeading = ({
  tag = "h1",
  handler = null,
  styles,
  children,
  ...rest
}) => {
  const Tag = tag;
  return (
    <Tag
      style={{ cursor: handler ? "pointer" : "", ...styles }}
      handler={handler}
      {...rest}
    >
      {children}
    </Tag>
  );
};
export default DefaultHeading;
