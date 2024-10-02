import { FC, ReactNode } from "react";
import { DocumentTemplate } from "@/templates";
import { CustomLink, Divider, Typography } from "@/components";

interface ISupportLayoutProps {
  children?: ReactNode;
}

export const SupportLayout: FC<ISupportLayoutProps> = ({ children }) => {
  return (
    <DocumentTemplate>
      <Typography type="Heading" level="h1" text="Новое обращение" />
      {children}
      <Divider style={{ marginTop: "20px" }} />
      <Typography type="Body" size="md" style={{ marginTop: "20px" }}>
        <strong>Имя:</strong>
        {" {{ name | safe }}"}
      </Typography>
      <Typography type="Body" size="md" style={{ marginTop: "4px" }}>
        <strong>Фамилия:</strong>
        {" {{ surname | safe }}"}
      </Typography>
      <Typography type="Body" size="md" style={{ marginTop: "4px" }}>
        <strong>Email:</strong> <CustomLink href="mailto:{{ mail | safe }}" text="{{ mail | safe }}" />
      </Typography>
    </DocumentTemplate>
  );
};
