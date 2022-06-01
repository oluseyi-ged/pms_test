/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
// import { Subscribe, Footer, Download } from "@modules/application"
import { Container } from "./styles"
import Input from "@components/application/Input"
import Button from "@components/application/Button"
import Link from "next/link"
import { Formik } from "formik"
import * as yup from "yup"
import { clearMessage } from "slices/message"
import { AppDispatch, RootState, useAppDispatch, useAppSelector } from "store"
import { register } from "slices/auth"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

const schemaCheck = yup.object().shape({
  name: yup.string().required("Organization name is required"),
  email: yup.string().email().required("Email Address is required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please re-enter password"),
})

const Register = () => {
  const [successful, setSuccessful] = useState(false)
  const { message } = useAppSelector<any>((store: RootState) => store.message)
  // const dispatch = useAppDispatch()
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  const doSubmit = (values: {
    name: string
    email: string
    password: string
    password_confirmation: string
  }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        setSuccessful(true)
        router.push("/auth/success")
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
            <p className="form__subTitle">Create your organization</p>
          </div>

          <Formik
            validationSchema={schemaCheck}
            initialValues={{
              name: "",
              email: "",
              password: "",
              password_confirmation: "",
            }}
            onSubmit={(values) => doSubmit(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <div className="page__mainForm">
                <Input
                  placeholder="Organization Name"
                  type="text"
                  label="Organization Name"
                  error={errors.name}
                  onChange={handleChange("name")}
                  value={values.name}
                  onBlur={() => handleBlur("name")}
                />
                <Input
                  label="Email"
                  placeholder="info@company.com"
                  type="email"
                  error={errors.email}
                  onChange={handleChange("email")}
                  onBlur={() => handleBlur("email")}
                  value={values.email}
                />
                <Input
                  type="password"
                  placeholder="********"
                  label="Password"
                  error={errors.password}
                  onChange={handleChange("password")}
                  onBlur={() => handleBlur("password")}
                  value={values.password}
                />
                <Input
                  type="password"
                  placeholder="********"
                  label="Confirm Password"
                  error={errors.password_confirmation}
                  onChange={handleChange("password_confirmation")}
                  onBlur={() => handleBlur("password_confirmation")}
                  value={values.password_confirmation}
                />
                <Button
                  title="Create"
                  btnStyle={{ marginTop: "20px" }}
                  onClick={handleSubmit}
                />
                <p>{message}</p>
                <Link href="/auth/login">
                  <p className="page__toRegister">
                    Already have an account? <span>Sign in</span>
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

export default Register
