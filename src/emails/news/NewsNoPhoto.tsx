import { CustomLink, Typography } from "@/components";
import { NewsLayout } from "@/layouts";

const NewsNoPhoto = () => {
  return (
    <NewsLayout>
      <Typography type="Heading" level="h3" style={{ marginTop: "32px" }}>
        С уважением, команда!{" "}
        <CustomLink href="{{ baseUrl | safe }}" text="Социологическаяпанель.рф" style={{ fontWeight: 500 }} />
      </Typography>
    </NewsLayout>
  );
};

export default NewsNoPhoto;
