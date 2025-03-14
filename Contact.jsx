function Contact(){
    return(
        <div className="contact-body">
        <div className="contact-page">
          <div className="form">
            <form className="contact-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" required></textarea>
              <button className="btn">Send</button>
            </form>
          </div>
        </div>
        </div>
    );
}

export default Contact;