import React from "react";
import MailLayout from "../components/Mailbox/MailLayout";
import Mails from "../components/Mailbox/Mails";
const Inbox = () => {
  return (
    <div className="container">
      <div className="row bg-light">
        <MailLayout>
          <Mails />
        </MailLayout>
      </div>
    </div>
  );
};

export default Inbox;
