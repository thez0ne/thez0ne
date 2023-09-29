import { FormData } from "@/components/contact";

const apiEndpoint = '/api/email';

const sendEmail = (data: FormData) => {
  // console.log("SENDING EMAIL", data);

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      console.error('ERROR', err);
      alert(err);
    });
};

export default sendEmail;