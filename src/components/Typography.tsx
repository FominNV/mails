import { Text } from "@react-email/components";
import { CSSProperties, FC, ReactNode } from "react";
import { Colors } from "@/constants";

type TypographyType = "Heading" | "Body" | "Code";

interface TypographyBaseProps {
  type?: TypographyType;
  weight?: 400 | 500 | 600;
  text?: string;
  color?: keyof typeof Colors;
  style?: CSSProperties;
  children?: ReactNode;
}

interface HeadingTypographyProps extends TypographyBaseProps {
  type?: "Heading";
  level?: "h1" | "h2" | "h3";
}

interface BodyTypographyProps extends TypographyBaseProps {
  type?: "Body";
  size?: "sm" | "md" | "lg";
}

interface CodeTypographyProps extends TypographyBaseProps {
  type?: "Code";
}

type ITypographyProps = HeadingTypographyProps | BodyTypographyProps | CodeTypographyProps;

export const Typography: FC<ITypographyProps> = (props) => {
  const getBodyProperties = (p: BodyTypographyProps): CSSProperties => {
    switch (p.size) {
      case "lg": {
        return {
          fontSize: "16px",
          fontWeight: p.weight || 400,
          lineHeight: "20px",
        };
      }
      case "md": {
        return {
          fontSize: "14px",
          fontWeight: p.weight || 400,
          lineHeight: "18px",
          letterSpacing: "0.32px",
        };
      }
      default: {
        return {
          fontSize: "12px",
          fontWeight: p.weight || 400,
          lineHeight: "16px",
          letterSpacing: "0.32px",
        };
      }
    }
  };

  const getHeadingProperties = (p: HeadingTypographyProps): CSSProperties => {
    switch (p.level) {
      case "h2": {
        return {
          fontSize: "18px",
          fontWeight: p.weight || 600,
          lineHeight: "24px",
        };
      }
      case "h3": {
        return {
          fontSize: "16px",
          fontWeight: p.weight || 500,
          lineHeight: "22px",
        };
      }
      default: {
        return {
          fontSize: "24px",
          fontWeight: p.weight || 600,
          lineHeight: "30px",
        };
      }
    }
  };

  const getTextComponent = (p: ITypographyProps): ReactNode => {
    const commonStyles: CSSProperties = {
      fontFamily: '"Golos Text", Arial, "Helvetica", sans-serif',
      padding: 0,
      margin: 0,
      color: Colors[p.color || "black"],
      ...p.style,
    };
    switch (p.type) {
      case "Code": {
        return (
          <Text
            style={{
              fontSize: "36px",
              fontWeight: p.weight || 600,
              lineHeight: "42px",
              letterSpacing: "0.1em",
              ...commonStyles,
            }}
          >
            {p.text}
            {p.children}
          </Text>
        );
      }
      case "Heading": {
        return (
          <Text style={{ ...getHeadingProperties(p), ...commonStyles }} className={`heading-${p.level}`}>
            {p.text}
            {p.children}
          </Text>
        );
      }
      default: {
        return (
          <Text
            style={{ ...getBodyProperties(p as BodyTypographyProps), ...commonStyles }}
            className={`body-${(p as BodyTypographyProps).size}`}
          >
            {p.text}
            {p.children}
          </Text>
        );
      }
    }
  };

  return getTextComponent(props);
};
