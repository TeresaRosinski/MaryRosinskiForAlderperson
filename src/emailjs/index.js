import emailjs from "emailjs-com";
import reset from "emailjs-com"



/**
 *
 * @param {string} serviceId
 * @param {string} templateId
 * @param {string} userId
 * @param {*} data
 */
export function SendForm(data) {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId =
    process.env.REACT_APP_EMAILJS_PETITION_PROSPECT_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  emailjs.sendForm(serviceId, templateId, data, userId).then(
    (result) => {
      console.log(result.text).then();
    },
    (error) => {
      console.log(error.text);
    }
  );
}
