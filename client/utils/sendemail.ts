import { FormData ,FormSchema } from "@/components/contact";
import { ZodError, z } from "zod";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const apiEndpoint = '/api/email';

const extractZodErrors = (error: ZodError) => {
  const result = error.issues.map(a => a.message);
  // console.error('ERROR', result);
  return result;
};

const sendEmail = async (data: FormData) => {
  try {
    // console.log("SENDING EMAIL", data);
    const parsedData = FormSchema.parse(data);
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(parsedData),
    });
    const body = await res.json();
    
    console.log("SENDING EMAIL", body);
    toast.success('Email Sent!', {
      theme: 'dark',
      closeOnClick: true,
    });
  } catch(error) {
    const errorMessages = extractZodErrors(error as ZodError);
    let errMsg = 'Failed to send email: ';
    if (errorMessages.length == 1) {
      errMsg += `${errorMessages[0]}`;
    } else {
      errMsg += `${errorMessages.slice(0,-1).join(`, `)}, and ${errorMessages.slice(-1)}`;
    }
    console.error("ERROR: ", errMsg);
    toast.error(errMsg, {
      theme: 'dark',
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};

export default sendEmail;