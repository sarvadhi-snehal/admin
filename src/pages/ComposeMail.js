import React from "react";
import MailLayout from "../components/Mailbox/MailLayout";
import Compose from "../components/Mailbox/Compose";
const ComposeMail = () => {
  return (
    <MailLayout className="d-none">
      <Compose />
    </MailLayout>
  );
};

export default ComposeMail;
