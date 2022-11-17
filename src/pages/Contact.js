export default function Contact() {
  return (
    <div className="get-in-touch" id="get-in-touch">
                <h2>Get In Touch</h2>
                <form action="#">
                    <div className="input-wrapper">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" className="name" name="name" id="name" placeholder="Name" required/>
                        </div>
                        <div>
                            <label htmlFor="subject">Subject</label>
                            <input className="subject" type="text" placeholder="Subject"/>
                        </div>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="email" id="email" placeholder="Email" required/>
                    <label htmlFor="message"> Message</label>
                    <textarea className="message" name="message" id="message" placeholder="Your message ..."
                        required></textarea>
                    <div className="consent-wrapper">
                        <input id="consent" name="consent" type="checkbox" required />
                        <label htmlFor="consent">I would like to receive future updates</label>
                    </div>
                    <button type="submit" id="submit">Send message</button>
                </form>
            </div>
  );
}
