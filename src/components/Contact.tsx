import { FormEvent, useState } from "react";
import Mail from "../types/Mail";
import { sendMail } from "../services/MailService";

const Contact = () => {
  const [formData, setFormData] = useState<Mail>({
    subject: "",
    email: "",
    message: "",
    name: "",
    phone: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const mutation = sendMail();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData, {
      onSuccess: () => {
        setFormData({
          subject: "",
          email: "",
          message: "",
          name: "",
          phone: "",
        });
        setShowSuccessMessage((_) => true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 10000);
      },
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Feel free to reach out for collaboration, freelance projects, or any
          inquiries. I'm always open to discussing new opportunities.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>1000 N 4th Street, Fairfield, IA.</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>+1 641 233 9537</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Me</h3>
                  <p>
                    <a href="mailto:marioezeobele@yahoo.com">
                      marioezeobele@yahoo.com
                    </a>
                  </p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.42678593844!2d-91.9711765235883!3d41.01591787134952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e6678d8d1ba4e3%3A0xf5a0cc6c5e85cd7e!2s1000%20N%204th%20St%2C%20Fairfield%2C%20IA%2052557!5e0!3m2!1sen!2sus!4v1727340151700!5m2!1sen!2sus"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
              onSubmit={onSubmit}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="subject" className="pb-2">
                    <span className="text-danger">*</span> Message Title
                    (Subject)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    value={formData?.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="pb-2">
                    <span className="text-danger">*</span> Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={formData?.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="pb-2">
                    <span className="text-danger">*</span> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={formData?.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="phone" className="pb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    value={formData?.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                    }}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message" className="pb-2">
                    <span className="text-danger">*</span> Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    id="message"
                    value={formData?.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                    }}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {mutation.isPending && <div className="loading">Loading</div>}
                  {mutation.isError && (
                    <div className="error-message">
                      {mutation.error.message}
                    </div>
                  )}
                  {showSuccessMessage && mutation.isSuccess && (
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  )}

                  <button type="submit">
                    <i className="bi bi-send"></i> Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
