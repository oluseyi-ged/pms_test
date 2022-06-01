/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
// import { Subscribe, Footer, Download } from "@modules/application"
import { Container } from "./styles"
import Input from "@components/application/Input"
import Button from "@components/application/Button"
import Link from "next/link"
import { Formik } from "formik"
import * as yup from "yup"
import { RootState, useAppDispatch, useAppSelector } from "store"
import { useRouter } from "next/router"
import { clearMessage } from "slices/message"
import { login } from "slices/auth"

const schemaCheck = yup.object().shape({
  email: yup.string().email().required("Email Address is required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
})

const Login = () => {
  const [successful, setSuccessful] = useState(false)
  const { message } = useAppSelector<any>((store: RootState) => store.message)
  // const dispatch = useAppDispatch()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const { user: currentUser } = useAppSelector<any>(
    (store: RootState) => store.auth
  )
  const { loader } = useAppSelector<any>((store: RootState) => store.loader)

  useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  console.log("the user", currentUser)

  const doLogin = (values: { email: string; password: string }) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        setSuccessful(true)
      })
      .catch(() => {
        setSuccessful(false)
      })
  }
  return (
    <Container>
      <div className="page__form">
        <div className="page__formContent">
          <div className="page__formTitles">
            <p className="form__title">
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1653948085/pms_lg_kgphlt.svg"
                alt=""
              />
            </p>
            <p className="form__subTitle">Sign in to your account</p>
          </div>

          <Formik
            validationSchema={schemaCheck}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => doLogin(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <div className="page__mainForm">
                <Input
                  placeholder="Enter Email Address"
                  type="email"
                  label="Email"
                  error={errors.email}
                  onChange={handleChange("email")}
                  onBlur={() => handleBlur("email")}
                  value={values.email}
                />
                <Input
                  type="password"
                  placeholder="Enter Password"
                  label="Password"
                  error={errors.password}
                  onChange={handleChange("password")}
                  onBlur={() => handleBlur("password")}
                  value={values.password}
                />
                <div className="page__cta">
                  <p className="remeber__me">
                    <input
                      type="checkbox"
                      id="remember__user"
                      name="remember__user"
                      value="remember__user"
                    />
                    Remember me
                  </p>
                  <p className="forgot__pass">Forgot Password?</p>
                </div>
                <Button
                  title={!loader ? "Sign in" : "Loading"}
                  btnStyle={{ marginTop: "20px" }}
                  onClick={handleSubmit}
                />
                <Link href="/auth/register">
                  <p className="page__toRegister">
                    Don’t have an account? <span>Sign up</span>
                  </p>
                </Link>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  )
}

export default Login
