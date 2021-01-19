import React from "react";
import { SendForm } from "../../emailjs/index";
import "./Connect_Form.styles.css";
import { upsertUser } from "../../firebase/database";

export default function Connnect_Form() {
  function sendEmail(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const user = {
      email: e.target.email.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      phone: e.target.phone.value,
      address: {
        address: e.target.address.value,
        city: e.target.city.value,
        zip: e.target.zip.value,
      },
      message: e.target.message.value,
      sign: e.target.sign.value,
      attendZoom: e.target.attendZoom.value,
      hostZoom: e.target.hostZoom.value,
      volunteer: e.target.volunteer.value,
    };

    upsertUser(user);
    SendForm(e.target);
  }

  return (
    <section id="ContactForm">
      <h2>Let's Connect</h2>
      <div className="MailingList_Long-content">
        <form className="MailingList_Long-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />

          <input
            type="text"
            className="form-input-long"
            name="first_name"
            placeholder="First Name"
          />

          <input
            type="text"
            className="form-input-long"
            name="last_name"
            placeholder="Last Name"
          />

          <input
            type="email"
            name="email"
            className="form-input-long"
            placeholder="Email Address"
          />

          <input
            type="tel"
            name="phone"
            className="form-input-long"
            placeholder="Phone"
          />

          <input
            type="text"
            className="form-input-long"
            name="address"
            placeholder="Address"
          />

          <input
            type="text"
            className="form-input-long"
            name="city"
            placeholder="City"
          />

          <input
            type="text"
            className="form-input-long"
            name="zip"
            placeholder="Zip-Code"
          />

          <textarea
            name="message"
            type="textbox"
            className="form-input-longs"
            placeholder="Message Mary:  She wants to know what's important to you."
          ></textarea>

          <div class="NewCheck">
            <input type="checkbox" name="sign" />
            <small className="smallContact">Sign</small>
          </div>

          <div class="NewCheck">
            <input type="checkbox" name="attendZoom" />
            <small className="smallContact">
              Attend A Zoom Coffee With Mary
            </small>
          </div>

          <div class="NewCheck">
            <input type="checkbox" name="hostZoom" />
            <small className="smallContact">Host A Zoom Coffee For Mary</small>
          </div>

          <div class="NewCheck">
            <input type="checkbox" name="volunteer" />
            <small className="smallContact">Volunteer</small>
          </div>

          <input
            type="submit"
            value="SEND"
            className="btn-mailing-list-long"
            onSubmit={sendEmail}
          />
        </form>
      </div>
    </section>
  );
}
