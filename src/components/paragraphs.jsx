const DefaultParagraph = ({ handler = null, styles, children, ...rest }) => {
  return (
    <p
      style={{ cursor: handler ? "pointer" : " ", ...styles }}
      onClick={handler}
      {...rest}
    >
      {children}
    </p>
  );
};
export default DefaultParagraph;
