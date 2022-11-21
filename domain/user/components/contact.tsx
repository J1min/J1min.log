import React from "react";
import type { NextPage } from "next";
import { Li, Title, Ul } from "./index.style";
import { getContact } from "../api";
import { UserContactType } from "../interface/index.type";

const Contact: NextPage = () => {
  const [contactData, setContactData] = React.useState<UserContactType>();

  React.useEffect(() => {
    getContact().then((response) => {
      setContactData(response.userData);
    });
  }, []);
  return (
    <main>
      <Title>💡 Contact</Title>
      {contactData ? (
        <Ul>
          <Li>{contactData.email}</Li>
          <Li>{contactData.phone_number}</Li>
        </Ul>
      ) : (
        <></>
      )}
    </main>
  );
};
export default Contact;
