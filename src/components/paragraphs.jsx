const DefaultParagraph = ({ handler = null, styles, children, ...rest }) => {
  return (
    <p
      style={{
        color: "gray",
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
