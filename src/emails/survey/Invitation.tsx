import { Divider, Typography } from "@/components";
import { SurveyLayout } from "@/layouts";
import { FC } from "react";

const Invitation: FC = () => {
  const additional = (
    <>
      <Divider style={{ marginTop: "24px" }} />
      <Typography type="Heading" level="h3" text="Важно:" style={{ marginTop: "24px" }} />
      <Typography
        type="Body"
        size="lg"
        text="Опрос будет автоматически закрыт, как только наберется достаточное количество заполненных анкет."
      />
    </>
  );

  return (
    <SurveyLayout invitation="Чтобы принять участие в опросе, нажмите:" additional={additional}>
      <Typography type="Heading" level="h3" text="Для вас доступен новый опрос" style={{ marginTop: "24px" }} />
      <Typography
        type="Heading"
        level="h2"
        text="«{{ surveyTitle | safe }}»"
        color="blue"
        style={{ marginTop: "12px" }}
        weight={600}
      />
    </SurveyLayout>
  );
};

export default Invitation;
