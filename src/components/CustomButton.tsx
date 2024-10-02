import { Button } from "@react-email/components";
import { FC, HTMLAttributes } from "react";
import { Typography } from "./Typography";
import { Colors } from "@/constants";

interface ICustomButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  text?: string;
  href?: string;
}

export const CustomButton: FC<ICustomButtonProps> = ({ text, href, style }) => {
  return (
    <Button
      target="_blank"
      href={href}
      style={{
        padding: "17px 62px",
        display: "block",
        maxWidth: "fit-content",
        borderRadius: "40px",
        backgroundColor: Colors.blue,
        textAlign: "center",
        transition: "scale 0.25s, filter 0.3s",
        ...style,
      }}
      className="custom-button"
    >
      <Typography type="Body" size="lg" text={text} color="white" />
    </Button>
  );
};
