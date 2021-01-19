import React, { useState } from "react";
import "./Lets_Connect_Visual.styles.css";
import Modal_Form_Holder from "../Modal_Form_Holder/Modal_Form_Holder.component.jsx";

export default function MailingList_Short({ element }) {
  const [showModal, setShowModal] = useState(false);

  const setShowModalTrue = () => {
    setShowModal(true);
  };
  return (
    <section id="mailing-list-short" ref={element}>
      <div className="Mailing-List-Short">
        <h2>Let's Connect</h2>
        <p className="long-copy">
          Join the mailing list to stay up-to-date with my campaign and all
          things Evanston and 7th ward.
        </p>
        <button onClick={setShowModalTrue} className="btn-mailing-list-short">
          CLICK TO JOIN US
        </button>
        <Modal_Form_Holder isShown={showModal} setShown={setShowModal} />
      </div>
    </section>
  );
}
