import { Formik, Form, Field } from "formik";

export const Contact = () => {
  return (
    <div>
      <h3>Contact</h3>
      <Formik
        initialValues={{
          name: "Hasan",
          about: "",
          accept: false,
          gender: 2,
          skills: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Field name="name" />
            <br />
            <Field component="textarea" cols={10} rows={10} name="about" />
            <br />
            <label>
              <Field type="checkbox" name="accept" />
              Sertlerimizi qebul edin.
            </label>{" "}
            <br />
            <Field component="select" name="gender">
              <option value={1}>Female</option>
              <option value={2}>Male</option>
            </Field>
            <Field component="select" name="skills" multiple={true}>
              <option value="javascript">Javascript</option>
              <option value="css">CSS</option>
              <option value="python">Python</option>
              <option value="csharp">CSHarp</option>
            </Field>
            <button disabled={!values.accept} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
