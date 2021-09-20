import React from "react";
import MailLayout from "../components/Mailbox/MailLayout";
import Mails from "../components/Mailbox/Mails";
const Inbox = () => {
  return (
    <MailLayout>
      <Mails />
    </MailLayout>
  );
};

export default Inbox;
