import * as yup from "yup";

const base_text_regex = /^[a-zA-Z0-9.;,?!+-/:'"@=&() ]+$/;

const morse_text_schema = yup.object().shape({
  base_text: yup.string().matches(base_text_regex, "Invalid morse text"),
  morse_code: yup.string(),
});

export { morse_text_schema };
