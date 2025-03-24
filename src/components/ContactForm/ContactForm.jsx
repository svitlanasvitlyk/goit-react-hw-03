import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ initialValues, submit }) => {
  const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([' -][a-zA-Zа-яА-ЯіІїЇєЄ ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$/;
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required field")
      .min(3, "Too short name")
      .max(50, "Too long name")
      .matches(nameRegex, "Invalid name"),
    number: Yup.string()
      .required("Required field")
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number"),
  });

  const handleNumberChange = (e, setFieldValue) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 3 && value.length <= 5) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 5) {
      value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5, 7)}`;
    }
    setFieldValue("number", value);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue }) => (
          <Form className={s.form}>
            <div className={s.inputGroup}>
              <label className={s.label}>
                <span>Name</span>
                <Field type="text" name="name" className={s.input} />
              </label>
              <ErrorMessage name="name" component="p" className={s.error} />
            </div>
            <div className={s.inputGroup}>
              <label className={s.label}>
                <span>Number</span>
                <Field
                  name="number"
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      className={s.input}
                      onChange={(e) => handleNumberChange(e, setFieldValue)}
                    />
                  )}
                />
              </label>
              <ErrorMessage name="number" component="p" className={s.error} />
            </div>
            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
