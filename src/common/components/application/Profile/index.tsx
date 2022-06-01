/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect, useState } from "react"
// import { Subscribe, Footer, Download } from "@modules/application"
import { Container } from "./styles"
import Button from "@components/application/Button"
import Link from "next/link"
import Input from "@components/application/Input"
import { Formik } from "formik"
import * as yup from "yup"
import { clearMessage } from "slices/message"
import { RootState, useAppDispatch, useAppSelector } from "store"
import { login } from "slices/auth"
import userService from "services/user.service"

interface Props {
  setRoute?: any
  setting?: any
  setSetting?: any
}

const schemaCheck = yup.object().shape({
  id: yup.string(),
  name: yup.string().required("Organisation name cannot be blank"),
  street: yup.string().required("Street cannot be blank"),
  city: yup.string().required("City cannot be blank"),
  state: yup.string().required("State cannot be blank"),
  country: yup.string().required("Country cannot be blank"),
})

const Profile: FC<Props> = ({ setRoute, setting, setSetting }) => {
  const { user: currentUser } = useAppSelector<any>(
    (store: RootState) => store.auth
  )
  const udata = currentUser?.data?.user

  console.log("checkout", udata)

  const [content, setContent] = useState({})
  useEffect(() => {
    userService.getOrganization(`${udata?.id}`).then(
      (response) => {
        setContent(response.data)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
        setContent(_content)
      }
    )
  }, [])

  console.log(content)

  const [successful, setSuccessful] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  const doUpdate = (values: {
    id: string
    name: string
    street: string
    city: string
    state: string
    country: string
  }) => {
    console.log(values)
  }

  return (
    <Container>
      <div className="profile__container">
        <h4>System Settings</h4>
        <p className="page__subtext">Organization Profile</p>
        <Formik
          validationSchema={schemaCheck}
          initialValues={{
            id: udata?.id,
            name: `${udata?.name}`,
            street: "",
            city: "",
            state: "",
            country: "",
          }}
          onSubmit={(values) => doUpdate(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <div className="name__box">
                <div className="name__boxContainer">
                  <div className="name__imgContainer">
                    <img src="" alt="" />
                  </div>
                  <div className="name__inputContainer">
                    <p>
                      Organization Name <sup>*</sup>
                    </p>
                    <Input
                      placeholder="Organization Name"
                      error={errors.name}
                      onChange={handleChange("name")}
                      onBlur={() => handleBlur("name")}
                      value={values.name}
                    />
                  </div>
                </div>
              </div>
              <div className="vision__box">
                <p>Organization Vision</p>
                <div className="vision__input">
                  <Input
                    placeholder="Vision goes here"
                    label="Vision"
                    value="To be the preferred technology partner by 2025"
                  />
                </div>
              </div>
              <div className="organization__box">
                <p>Organization Address</p>
                <div className="organization__input">
                  <Input
                    placeholder="street goes here"
                    label="Street"
                    error={errors.street}
                    onChange={handleChange("street")}
                    onBlur={() => handleBlur("street")}
                    value={values.street}
                  />
                  <div className="organization__inputGrid">
                    <Input
                      placeholder="city goes here"
                      label="City"
                      error={errors.city}
                      onChange={handleChange("city")}
                      onBlur={() => handleBlur("city")}
                      value={values.city}
                    />
                    <Input
                      placeholder="state goes here"
                      label="State"
                      error={errors.state}
                      onChange={handleChange("state")}
                      onBlur={() => handleBlur("state")}
                      value={values.state}
                    />
                    <Input
                      placeholder="country goes here"
                      label="Country"
                      error={errors.country}
                      onChange={handleChange("country")}
                      onBlur={() => handleBlur("country")}
                      value={values.country}
                    />
                  </div>
                </div>
              </div>
              <div className="btn_container">
                <Button title="Save" />
              </div>
            </>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default Profile
