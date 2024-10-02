import { FC, HTMLAttributes } from "react";

export const Divider: FC<HTMLAttributes<HTMLDivElement>> = ({ style, ...props }) => {
  return <div style={{ border: "1px solid rgba(0, 0, 0, 0.1)", boxSizing: "border-box", ...style }} {...props} />;
};
