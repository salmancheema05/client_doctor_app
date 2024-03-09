const DefaultParagraph = ({
  handler = () => {},
  textAlign = "left",
  styles,
  children,
  ...rest
}) => {
  return (
    <div style={{ textAlign: textAlign, ...styles }}>
      <p onClick={handler}>{children}</p>
    </div>
  );
};
export default DefaultParagraph;
