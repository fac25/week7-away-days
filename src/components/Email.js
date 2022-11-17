import { useEffect, useState } from "react";

const Email = ({ hostData }) => {
  const [email, setEmail] = useState();
  useEffect(() => {
    async function setCurrentEmail() {
      setEmail(hostData.email);
    }

    setCurrentEmail();
  });
  return (
    <div>
      <h1>Contact Host</h1>
      <form action={`mailto:${email}`}>
        <button>Contact</button>
      </form>
    </div>
  );
};

export default Email;
