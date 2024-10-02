import { CustomButton } from "@/components";
import { NewsLayout } from "@/layouts";
import { Img } from "@react-email/components";

const News = () => {
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
      <CustomButton text="{{ linkText | safe }}" href="{{ link | safe }}" style={{ marginTop: "32px" }} />
    </NewsLayout>
  );
};

export default News;
