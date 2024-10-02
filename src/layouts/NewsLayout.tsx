import { FC, ReactNode } from "react";
import { DocumentTemplate } from "@/templates";
import { CustomLink, Typography } from "@/components";

interface INewsLayoutProps {
  image?: ReactNode;
  children?: ReactNode;
}

export const NewsLayout: FC<INewsLayoutProps> = ({ children, image }) => {
  const footer = (
    <>
      <Typography type="Body" size="sm">
        Вы получили это письмо, так как дали согласие на участие в проекте{" "}
        <CustomLink href="{{ baseUrl | safe }}" text="социологическаяпанель.рф" />
      </Typography>
      <Typography type="Body" size="sm">
        Если вы больше не хотите принимать участие в проекте, вы можете удалить свой аккаунт в{" "}
        <CustomLink href="{{ profilePage | safe }}" text="личном кабинете" />
      </Typography>
      <Typography type="Body" size="sm" style={{ marginTop: "12px" }}>
        По любым вопросам вы всегда можете обратиться в{" "}
        <CustomLink href="{{ supportMail | safe }}" text="{{ supportMail | safe }}" />
      </Typography>
    </>
  );

  return (
    <DocumentTemplate footer={footer}>
      <Typography type="Heading" level="h2" text="Здравствуйте, {{ name | safe }}!" />
      {image}
      <Typography type="Heading" level="h1" text="{{ title | safe }}" style={{ marginTop: "32px" }} />
      <Typography type="Body" size="lg" text="{{ text | safe }}" style={{ marginTop: "24px" }} />
      {children}
    </DocumentTemplate>
  );
};
