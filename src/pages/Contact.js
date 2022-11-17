export default function Contact() {
  return (
    <div class="get-in-touch" id="get-in-touch">
                <h2>Get In Touch</h2>
                <form action="#">
                    <div class="input-wrapper">
                        <div>
                            <label for="name">Name</label>
                            <input type="text" class="name" name="name" id="name" placeholder="Name" required/>
                        </div>
                        <div>
                            <label for="subject">Subject</label>
                            <input className="subject" type="text" placeholder="Subject"/>
                        </div>
                    </div>
                    <label for="email">Email</label>
                    <input type="email" class="email" id="email" placeholder="Email" required/>
                    <label for="message"> Message</label>
                    <textarea class="message" name="message" id="message" placeholder="Your message ..."
                        required></textarea>
                    <div class="consent-wrapper">
                        <input id="consent" name="consent" type="checkbox" required />
                        <label for="consent">I would like to receive future updates</label>
                    </div>
                    <button type="submit" id="submit">Send message</button>
                </form>
            </div>
  );
}
