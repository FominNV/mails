import { Typography } from "@/components";
import { SupportLayout } from "@/layouts";
import { FC } from "react";

const Admin: FC = () => {
  return (
    <SupportLayout>
      <Typography type="Body" size="lg" text="{{ text | safe }}" style={{ marginTop: "20px" }} />
    </SupportLayout>
  );
};

export default Admin;
