import React from "react";
import COntactCard from "../components/ContactDetail/COntactCard";
import ContactTabs from "../components/ContactDetail/Timeline";
const ContactDetail = () => {
  return (
    <section className="contact-detail container-fluid bg-light">
      <article className="row mx-2">
        <COntactCard />
        <ContactTabs />
      </article>
    </section>
  );
};

export default ContactDetail;
