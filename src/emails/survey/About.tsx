import { Typography } from "@/components";
import { SurveyLayout } from "@/layouts";
import { FC } from "react";

const About: FC = () => {
  return (
    <SurveyLayout invitation="Чтобы рассказать о себе подробнее, нажмите:">
      <Typography
        type="Body"
        size="lg"
        text="Расскажите о себе подробнее, мы узнаем вас лучше и сможем подобрать больше опросов лично для вас."
        style={{ marginTop: "24px" }}
      />
    </SurveyLayout>
  );
};

export default About;
