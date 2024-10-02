import { CustomLink, Typography } from "@/components";
import { ConfirmLayout } from "@/layouts";
import { FC } from "react";

const Reset: FC = () => {
  return (
    <ConfirmLayout
      title="Сброс пароля"
      text="Ваш код для сброса пароля:"
      footer={
        <Typography type="Body" size="sm">
          Если вы больше не хотите принимать участие в проекте, вы можете удалить свой аккаунт в{" "}
          <CustomLink href="{{ profilePage | safe }}" text="личном кабинете" />
        </Typography>
      }
    >
      <Typography type="Body" size="lg" text="Здравствуйте!" style={{ marginTop: "24px" }} />
      <Typography type="Body" size="lg">
        Вы регистрируетесь на портале! <CustomLink href="{{ baseUrl | safe }}" text="социологическаяпанель.рф." />
      </Typography>
      <Typography
        type="Body"
        size="lg"
        text="Остался лишь шаг, и можно будет получить доступ ко всем сервисам портала."
        style={{ marginTop: "24px" }}
      />
    </ConfirmLayout>
  );
};

export default Reset;
