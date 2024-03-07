const DefaultParagraph = ({
  handler = () => {},
  styles,
  children,
  ...rest
}) => {
  return (
    <p style={{ ...styles }} onClick={handler} {...rest}>
      {children}
    </p>
  );
};
export default DefaultParagraph;
