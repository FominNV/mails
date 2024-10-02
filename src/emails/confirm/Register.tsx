import { CustomLink, Typography } from "@/components";
import { ConfirmLayout } from "@/layouts";
import { FC } from "react";

const Register: FC = () => {
  return (
    <ConfirmLayout title="Почти готово!" text="Ваш код подтверждения почты:">
      <Typography type="Body" size="lg" text="Здравствуйте!" style={{ marginTop: "24px" }} />
      <Typography type="Body" size="lg">
        Вы регистрируетесь на портале! <CustomLink href="{{ baseUrl | safe }}" text="социологическаяпанель.рф." />
      </Typography>
      <Typography
        type="Body"
        size="lg"
        text="Остался лишь шаг, и можно будет получить доступ ко всем сервисам портала."
      />
    </ConfirmLayout>
  );
};

export default Register;
