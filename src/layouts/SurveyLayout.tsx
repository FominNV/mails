import { FC, ReactNode } from "react";
import { DocumentTemplate } from "@/templates";
import { CustomButton, CustomLink, Divider, Typography } from "@/components";

interface ISurveyLayoutProps {
  invitation?: string;
  additional?: ReactNode;
  children?: ReactNode;
}

export const SurveyLayout: FC<ISurveyLayoutProps> = ({ children, invitation, additional }) => {
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
      <Typography type="Body" size="sm">
        При возникновении технических неполадок в работе опроса, пожалуйста, сообщите нам о проблеме, напишите на{" "}
        <CustomLink href="{{ supportMail | safe }}" text="{{ supportMail | safe }}" /> , указав номер опроса - [ID
        опроса в рассылке].
      </Typography>
      <Typography type="Body" size="sm" text="Пожалуйста, проверяйте почту регулярно, чтобы не пропускать опросы." />
      <Typography type="Body" size="sm">
        А чтобы письма не попадали в спам, добавьте адрес{" "}
        <CustomLink href="{{ supportMail | safe }}" text="{{ supportMail | safe }}" /> в адресную книгу.
      </Typography>
      <Typography type="Body" size="sm">
        О наших новостях и результатах опросов можно узнать <CustomLink href="{{ newsLink | safe }}" text="тут." />
      </Typography>
    </>
  );

  return (
    <DocumentTemplate footer={footer}>
      <Typography type="Heading" level="h1" text="Здравствуйте, {{ name | safe }}!" />
      {children}
      <Typography type="Heading" level="h3" text={invitation} style={{ marginTop: "24px" }} />
      <CustomButton href="{{ surveyLink | safe }}" text="Пройти опрос" style={{ marginTop: "16px" }} />
      <Divider style={{ marginTop: "24px" }} />
      <Typography
        type="Heading"
        level="h3"
        text="Если опрос не открывается, скопируйте ссылку в адресную строку вашего браузера."
        style={{ marginTop: "24px" }}
      />
      <Typography type="Body" size="lg" text="{{ surveyLink | safe }}" style={{ marginTop: "4px" }} />
      {additional}
      <Divider style={{ marginTop: "24px" }} />
      <Typography type="Heading" level="h3" style={{ marginTop: "24px" }} weight={500}>
        С уважением, команда <CustomLink href="{{ baseUrl | safe }}" text="Социологическаяпанель.рф" />
      </Typography>
    </DocumentTemplate>
  );
};
