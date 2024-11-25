import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import authImg from "../assets/hero-image2.png";
import UseShowPassword from "../hooks/UseShowPassword";

const SignUp = () => {
  const { signUp, loading } = useAuth();
  const { showPassword, handleShowPassword } = UseShowPassword();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    // form validation

    validationSchema: Yup.object({
      firstName: Yup.string()
      .required("First Name is required"),
      lastName: Yup.string()
      .required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
      .required("Password is required")
      .min(6, "Minimum of 6 characters"), 
    }),
    onSubmit: async (values) => {
      console.log(values);
      await signUp(values);
    },
  });
  return (
    <>
      <div className="bg-black flex items-center lg:gap-10 px-4 lg:px-4 rounded-lg pt-24 ">
        <div className="hidden lg:block lg:basis-1/2">
          <img src={authImg} alt="heroimage" className="object-cover h-full" />
        </div>
        <div className="basis-full lg:basis-1/2 px-4">
          <Card
            color="transparent"
            shadow={false}
            className="w-full p-4 md:p-6"
          >
            <Typography
              variant="h3"
              className="text-center text-yellow-600 max-w-xs mx-auto"
            >
              Registration Form
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal text-center text-yellow-600 max-w-xs mx-auto"
            >
              Create Account To Continue
            </Typography>
            <form
              onSubmit={formik.handleSubmit}
              className="mt-4 w-full max-w-md mx-auto"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <Typography variant="h6" className="mb-3 text-white">
                    First Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Emeka"
                    className=" bg-black px-2 !border-t-gray-100 focus:!border-yellow-600"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="firstName"
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p className="text-red-300">{formik.errors.firstName}</p>
                  )}
                </div>
                <div>
                  <Typography variant="h6" className="mb-3 text-white">
                    Last Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Adeola"
                    className="bg-black px-2 !border-t-gray-100 focus:!border-t-yellow-600"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="lastName"
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="text-red-300">{formik.errors.lastName}</p>
                  )}
                </div>
                <div>
                  <Typography variant="h6" className="mb-3 text-white">
                    Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className="bg-black px-2 !border-t-gray-100 focus:!border-t-yellow-600"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-300">{formik.errors.email}</p>
                  )}
                </div>
                <div className="relative">
                  <Typography variant="h6" className="mb-3 text-white">
                    Password
                  </Typography>
                  <Input
                    type={`${showPassword ? "text" : "password"}`}
                    size="lg"
                    placeholder="********"
                    className="bg-black px-2 !border-t-gray-100 focus:!border-t-yellow-600"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                  />
                  <span className="absolute top-[50px] right-[25px] cursor-pointer">
                    {showPassword ? (
                      <FaEye
                        color="gray"
                        size={20}
                        onClick={handleShowPassword}
                      />
                    ) : (
                      <FaEyeSlash
                        color="gray"
                        size={20}
                        onClick={handleShowPassword}
                      />
                    )}
                  </span>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-300">{formik.errors.password}</p>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                className="mt-6 w-full bg-yellow-600"
                fullWidth
                disabled={loading}
              >
                {loading ? <Spinner color="gray text-center" /> : "Sign Up"}
              </Button>
              <p className="mt-3 text-white">
                Already have an account ?{" "}
                <Link to={"/login"}>
                  <span className="underline text-gray-100 font-bold hover:text-yellow-600 ">Log In</span>
                </Link>{" "}
              </p>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignUp;