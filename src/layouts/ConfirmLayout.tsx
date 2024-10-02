import { FC, ReactNode } from "react";
import { DocumentTemplate } from "@/templates";
import { CustomLink, Divider, Typography } from "@/components";

interface IConfirmLayoutProps {
  title?: string;
  text?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

export const ConfirmLayout: FC<IConfirmLayoutProps> = ({ children, title, text, footer }) => {
  return (
    <DocumentTemplate
      footer={
        <>
          <Typography type="Body" size="sm">
            Вы получили это письмо, так как дали согласие на участие в проекте{" "}
            <CustomLink href="{{ baseUrl | safe }}" text="социологическаяпанель.рф" />
          </Typography>
          {footer}
        </>
      }
    >
      <Typography type="Heading" level="h1" text={title} />
      {children}
      <Typography type="Heading" level="h3" text={text} style={{ marginTop: "24px" }} weight={600} />
      <Typography type="Code" text="{{ code | safe }}" style={{ marginTop: "8px" }} />

      <Divider style={{ marginTop: "24px" }} />
      <Typography type="Body" size="lg" text="Если у вас остались вопросы — напишите" style={{ marginTop: "24px" }} />
      <Typography type="Body" size="lg" text="в нашу службу поддержки" />
    </DocumentTemplate>
  );
};
