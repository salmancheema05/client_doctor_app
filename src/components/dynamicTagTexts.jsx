import { DefaultSpan } from "./spans";
import { useTheme } from "@mui/material/styles";
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
  styles = {
    tag: {},
    part1: {},
    part2: {},
  },
  part1,
  part2,
}) => {
  const theme = useTheme();
  const Tag = tag;
  return (
    <Tag
      style={{ cursor: handler.tag ? "pointer" : "", ...styles.tag }}
      onClick={handler.tag}
    >
      <DefaultSpan
        handler={handler.part1}
        styles={{ color: theme.highLight.main, ...styles.part1 }}
      >
        {part1 + " "}
      </DefaultSpan>

      <DefaultSpan
        handle={handler.part2}
        styles={{ color: theme.highLight.main, ...styles.part2 }}
      >
        {part2 + " "}
      </DefaultSpan>
    </Tag>
  );
};

const DynamicTagTextWithThreeParts = ({
  tag = "h1",
  handler = { tag: null, part1: null, part2: null, part3: null },
  styles = {
    tag: {},
    part1: {},
    part2: {},
    part3: {},
  },
  part1,
  part2,
  part3,
}) => {
  const theme = useTheme();
  const Tag = tag;
  return (
    <Tag
      style={{ cursor: handler.tag ? "pointer" : "", ...styles.tag }}
      onClick={handler.tag}
    >
      <DefaultSpan
        styles={{
          cursor: handler.part2 ? "pointer" : "",
          color: theme.highLight.main,
          ...styles.part1,
        }}
        handler={handler.part1}
      >
        {part1 + " "}
      </DefaultSpan>

      <DefaultSpan
        styles={{
          cursor: handler.part2 ? "pointer" : "",
          color: theme.highLight.main,
          ...styles.part2,
        }}
        onClick={handler.part2}
      >
        {part2 + " "}
      </DefaultSpan>

      <DefaultSpan
        styles={{ color: theme.highLight.main, ...styles.part3 }}
        handler={handler.part3}
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
