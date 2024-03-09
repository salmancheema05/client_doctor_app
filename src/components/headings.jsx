import { textAlign } from "@mui/system";

const DefaultHeading = ({
  Tag = "h1",
  handler = () => {},
  textAlign = "left",
  styles,
  children,
  ...rest
}) => {
  return (
    <div style={{ textAlign: textAlign, ...styles }}>
      <Tag>{children}</Tag>
    </div>
  );
};
export default DefaultHeading;
