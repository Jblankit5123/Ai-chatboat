import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    address: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Registered:", values);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Register
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField name="fullName" label="Full Name" />
                <FormField name="username" label="Username" />
                <FormField name="email" label="Email" type="email" />
                <FormField name="password" label="Password" type="password" />
                <FormField name="country" label="Country" />
                <FormField name="city" label="City" />
              </div>
              <FormField name="address" label="Address" textarea />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Register
              </button>

              <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <span
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
};

const FormField = ({ name, label, type = "text", textarea = false }: FieldProps) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-200">
      {label}
    </label>
    {textarea ? (
      <Field
        as="textarea"
        name={name}
        rows={3}
        className="p-3 border rounded-lg resize-none dark:bg-gray-700 dark:text-white"
      />
    ) : (
      <Field
        type={type}
        name={name}
        className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
      />
    )}
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm"
    />
  </div>
);

export default Register;
