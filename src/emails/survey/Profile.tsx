import { Typography } from "@/components";
import { SurveyLayout } from "@/layouts";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <SurveyLayout invitation="Чтобы принять участие в профильном опросе, нажмите:">
      <Typography
        type="Body"
        size="lg"
        text="Вы уже заполняли информацию о себе 6 месяцев назад."
        style={{ marginTop: "24px" }}
      />
      <Typography
        type="Body"
        size="lg"
        text="Но мы знаем, что за это время в вашей жизни могло много всего измениться."
      />
      <Typography
        type="Body"
        size="lg"
        text="Расскажите нам об этом, чтобы мы могли подбирать интересные вам опросы!"
      />
      <Typography type="Heading" level="h3" text="Пройдите профильный опрос" style={{ marginTop: "24px" }} />
      <Typography
        type="Heading"
        level="h2"
        text="«{{ surveyTitle | safe }}»"
        style={{ marginTop: "8px" }}
        color="blue"
      />
    </SurveyLayout>
  );
};

export default Profile;
