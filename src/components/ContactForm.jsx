import "./ContactForm.css";
import { useState } from "react";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";
import Textarea from "../shared/Textarea/TextArea";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", { name, email, phone });
    alert("Message sent successfully!");
  };

  return (
    <div className="generalcontact">
      <div className="generalcontact1">
        <div className="contact1">
          <h3>Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>

        <div className="contact2">
          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
      <div className="contact3">
        <form onSubmit={handleSubmit}>
          <div className="aboutform">
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="contact4">
            <Textarea
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button className="contactformbutton" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
