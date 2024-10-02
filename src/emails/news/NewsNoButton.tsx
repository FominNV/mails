import { CustomLink, Typography } from "@/components";
import { NewsLayout } from "@/layouts";
import { Img } from "@react-email/components";

const NewsNoButton = () => {
  return (
    <NewsLayout
      image={
        <Img
          style={{
            width: "100%",
            maxWidth: "540px",
            maxHeight: "232px",
            borderRadius: "16px",
            marginTop: "32px",
          }}
          src="data:image/png;base64,{{ mainImg | safe }}"
          // src="https://avatars.mds.yandex.net/i?id=61959f7bebd83572bdde4dd832a8c091_l-4863449-images-thumbs&n=13"
          alt="news-image"
        />
      }
    >
      <Typography type="Heading" level="h3" style={{ marginTop: "32px" }}>
        С уважением, команда!{" "}
        <CustomLink href="{{ baseUrl | safe }}" text="Социологическаяпанель.рф" style={{ fontWeight: 500 }} />
      </Typography>
    </NewsLayout>
  );
};

export default NewsNoButton;
