import { Typography } from "@/components";
import { SurveyLayout } from "@/layouts";
import { FC } from "react";

const Reminder: FC = () => {
  return (
    <SurveyLayout invitation="Чтобы принять участие в опросе, нажмите:">
      <Typography
        type="Heading"
        level="h3"
        text="Напоминаем, что для Вас доступен новый опрос"
        style={{ marginTop: "24px" }}
      />
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

export default Reminder;
