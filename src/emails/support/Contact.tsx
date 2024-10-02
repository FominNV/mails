import { CustomLink, Divider, Typography } from "@/components";
import { SupportLayout } from "@/layouts";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <SupportLayout>
      <Divider style={{ marginTop: "20px" }} />

      <Typography type="Body" size="md" style={{ marginTop: "20px" }}>
        <strong>Тема:</strong>
        {" {{ themeTitle | safe }}"}
      </Typography>
      <Typography type="Body" size="md" style={{ marginTop: "8px" }}>
        <strong>Опрос:</strong>
        {" {{ surveyTitle | safe }}"}
      </Typography>
      <Typography type="Body" size="lg" text="{{ text | safe }}" style={{ marginTop: "20px" }} />
      <Typography type="Body" size="md" style={{ marginTop: "20px" }}>
        <strong>Файл:</strong> <CustomLink href="{{ fileLink | safe }}" text="{{ filename | safe }}" />
      </Typography>
    </SupportLayout>
  );
};

export default Contact;
