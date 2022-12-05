import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormFormik = () => {
  const credencialLogins = {
    email: "",
    password: "",
  };
  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={credencialLogins}
        validationSchema={loginSchema} // yum validation schema
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credenctials", values);
        }}
      >
        {/* These are props from formik */}
        {(props) => {
          const {
            //values,
            touched,
            errors,
            //isSubmitting,
            //handleBlur,
            // handleChange,
          } = props;

          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
              />

              {/* Email errors validation */}
              {errors.email && touched.email ? <div>{errors.email}</div> : null}

              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />

              {/* Password errors validation */}
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormFormik;
