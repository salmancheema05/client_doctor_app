import { DefaultSpan } from "./spans";

const DefaultDynamicTagText = ({
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
      onClick={handler}
      {...rest}
    >
      {children}
    </Tag>
  );
};

const DynamicTagTextWithTwoParts = ({
  tag = "h1",
  handler = { tag: null, part1: null, part2: null },
  styles = { tag: {}, part1: {}, part2: {} },
  part1,
  part2,
}) => {
  const Tag = tag;
  return (
    <Tag
      style={{ cursor: handler.tag ? "pointer" : "", ...styles.tag }}
      onClick={handler.tag}
    >
      <DefaultSpan
        style={{ cursor: handler.part1 ? "pointer" : "", ...styles.part1 }}
        onClick={handler.part1}
      >
        {part1 + " "}
      </DefaultSpan>
      <DefaultSpan
        style={{ cursor: handler.part2 ? "pointer" : "", ...styles.part2 }}
        onClick={handler.part2}
      >
        {part2 + " "}
      </DefaultSpan>
    </Tag>
  );
};

const DynamicTagTextWithThreeParts = ({
  tag = "h1",
  handler = { tag: null, part1: null, part2: null, part3: null },
  styles = { tag: {}, part1: {}, part2: {}, part3: {} },
  part1,
  part2,
  part3,
}) => {
  const Tag = tag;
  return (
    <Tag
      style={{ cursor: handler.tag ? "pointer" : "", ...styles.tag }}
      onClick={handler.tag}
    >
      <DefaultSpan
        style={{ cursor: handler.part1 ? "pointer" : "", ...styles.part1 }}
        onClick={handler.part1}
      >
        {part1 + " "}
      </DefaultSpan>
      <DefaultSpan
        style={{ cursor: handler.part2 ? "pointer" : "", ...styles.part2 }}
        onClick={handler.part2}
      >
        {part2 + " "}
      </DefaultSpan>
      <DefaultSpan
        style={{ cursor: handler.part3 ? "pointer" : "", ...styles.part3 }}
        onClick={handler.part3}
      >
        {part3}
      </DefaultSpan>
    </Tag>
  );
};

export {
  DefaultDynamicTagText,
  DynamicTagTextWithThreeParts,
  DynamicTagTextWithTwoParts,
};
