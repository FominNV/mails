import { Button } from "@react-email/components";
import { FC, HTMLAttributes } from "react";
import { Colors } from "@/constants";

interface ICustomLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  text?: string;
  href?: string;
}

export const CustomLink: FC<ICustomLinkProps> = ({ text, href, style }) => {
  return (
    <Button
      target="_blank"
      href={href}
      style={{
        color: Colors.blue,
        borderBottom: "1px solid transparent",
        transition: "border 0.3s",
        ...style,
      }}
      className="custom-link"
    >
      {text}
    </Button>
  );
};
