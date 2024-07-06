import { Button, Stack, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { setUserData, showRandomText } from "../store/slices/userSlice";

const UserDetailsForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values) => {
          // console.log(values);
          dispatch(setUserData(values));
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{ border: "2px solid blue", padding: "1rem", width: "30%" }}
          >
            <Stack sx={{ gap: "1rem" }}>
              <TextField label='email' {...formik.getFieldProps("email")} />
              <TextField
                label='password'
                type='password'
                {...formik.getFieldProps("password")}
              />
              <Button type='submit' variant='contained' fullWidth>
                Submit
              </Button>
              <TextField
                onChange={(event) =>
                  dispatch(showRandomText(event.target.value))
                }
              />
            </Stack>
          </form>
        )}
      </Formik>
    </>
  );
};

export default UserDetailsForm;
