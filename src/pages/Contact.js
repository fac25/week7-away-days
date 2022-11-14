export default function Contact() {
  return (
    <div className="contact-us">
      <div className="contact-us-wrapper">
        <h2>Get In Touch</h2>
        <form action="#">
          <div className="input-wrapper">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="name"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text"
                className="subject"
                name="subject"
                id="subject"
                placeholder="Subject"/>
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            id="email"
            placeholder="Email"
          />
          <label htmlFor="message"> Message</label>
          <textarea
            className="message"
            name="message"
            id="message"
            placeholder="Your message ..."
          ></textarea>
          <div className="consent-wrapper">
            <input id="consent" name="consent" type="checkbox" />
            <label htmlFor="consent">I would like to receive future updates</label>
          </div>
          <button type="submit" id="submit">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
