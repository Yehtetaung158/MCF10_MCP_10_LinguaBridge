import React from "react";
import Container from "../../../components/Container";
import AddressSection from "./components/AddressSection";
import MessageBox from "./components/MessageBox";
import FaqSection from "./components/FaqSection";
import OverlaySection from "./components/OverlaySection";

const ContactPage = () => {
  return (
    <>
      <Container>
        <AddressSection />
        <MessageBox />
        <FaqSection />
        <OverlaySection />
      </Container>
    </>
  );
};

export default ContactPage;
