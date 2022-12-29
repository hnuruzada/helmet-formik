import { Formik, Form, Field } from "formik";
import { Helmet } from "react-helmet";
import "./App.css";
import { Contact } from "./contact";

function App() {
  //   const { handleSubmit, handleChange, values } = useFormik({
  //     initialValues: {
  //       username: "",
  //       password: "",
  //     },
  //     onSubmit: (values) => {
  //       console.log(values);
  //     },
  //   });
  return (
    <div className="App">
      <Helmet>
        <title>Bu bir react App`dir</title>
        <meta name="description" content="REact project" />
      </Helmet>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form>
            <Field name="username" />
            <Field name="password" type="password" />
            <button type="submit">Sign in</button>
          </Form>
        )}
      </Formik>

      {/* {<form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" value={values.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input id="password" value={values.password} onChange={handleChange} />
        <button type="submit">Sign in</button>
      </form>} */}

      <Contact />
    </div>
  );
}

export default App;
