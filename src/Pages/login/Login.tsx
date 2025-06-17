import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    login(values.username);
    navigate("/chat");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Login
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            <FormField name="username" label="Username" />
            <FormField name="password" label="Password" type="password" />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

type FieldProps = {
  name: string;
  label: string;
  type?: string;
};

const FormField = ({ name, label, type = "text" }: FieldProps) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-200">
      {label}
    </label>
    <Field
      type={type}
      name={name}
      className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm"
    />
  </div>
);
export default Login;
