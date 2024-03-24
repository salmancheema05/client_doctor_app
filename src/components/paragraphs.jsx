import { useTheme } from "@mui/material/styles";
const DefaultParagraph = ({ handler = null, styles, children, ...rest }) => {
  const theme = useTheme();
  return (
    <p
      style={{
        color: theme.paragraph.main,
        cursor: handler ? "pointer" : " ",
        ...styles,
      }}
      onClick={handler}
      {...rest}
    >
      {children}
    </p>
  );
};
export default DefaultParagraph;
