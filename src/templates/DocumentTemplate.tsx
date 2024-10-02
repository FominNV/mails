import { FC, ReactNode } from "react";
import { Body, Container, Head, Html, Img } from "@react-email/components";
import { Colors } from "@/constants";

interface IDocumentTemplateProps {
  footer?: ReactNode;
  children?: ReactNode;
}

export const DocumentTemplate: FC<IDocumentTemplateProps> = ({ children, footer }) => {
  return (
    <Html lang="ru">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&family=Poppins:ital,wght@0,300;0,400;1,300;1,400&family=Roboto:wght@400;500&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap" />
        <style>
          {`
            .custom-link:hover {
              border-color: ${Colors.blue} !important;
            }
            .custom-button:hover {
              filter: brightness(120%) !important;
            }
            .custom-button:active {
              scale: 0.95 !important;
            }
          `}
        </style>
        <style>
          {`@media screen and (max-width: 576px) and (max-device-width: 576px) {
              .container {
                padding: 0 !important;
              }
              .content {
                border-radius: 0 !important;
              }
              .logo {
                width: 140px !important;
                height: 35px !important;
              }
              .main {
                padding: 40px 24px !important;
              }
              .footer {
                padding: 20px 24px !important;
              }
              .heading-h3 {
                font-size: 14px !important;
                font-weight: 600 !important;
                line-height: 18px !important;
              }
              .body-lg {
                font-size: 14px !important;
                line-height: 18px !important;
              }
              .custom-button {
                max-width: 100% !important;
              }
            }
          `}
        </style>
      </Head>

      <Body style={{ padding: 0, margin: 0 }}>
        <Container
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            backgroundColor: Colors.body,
            margin: 0,
            padding: "20px",
          }}
          className="container"
        >
          <Container
            style={{
              maxWidth: "620px",
              backgroundColor: Colors.white,
              borderRadius: "16px",
              overflow: "hidden",
            }}
            className="content"
          >
            <Container
              className="main"
              style={{
                padding: "40px",
                maxWidth: "100%",
                margin: 0,
              }}
            >
              <Img
                style={{
                  width: "220px",
                  height: "55px",
                  marginBottom: "40px",
                }}
                className="logo"
                src="https://pics.dialog-regions.ru/sym/a750f89fab461355e34b9acdcb23787a9df4841d82d7b92b0b34c1dd03528f07.png"
              />
              <Container>{children}</Container>
            </Container>
            {footer && (
              <Container
                style={{ padding: "24px 40px", backgroundColor: Colors.blueDark, margin: 0, maxWidth: "100%" }}
                className="footer"
              >
                {footer}
              </Container>
            )}
          </Container>
        </Container>
      </Body>
    </Html>
  );
};
