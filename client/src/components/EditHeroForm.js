import React, { useState } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { _apiBase } from "../server_setting";
import { useNavigate, useParams } from "react-router-dom";



const EditHeroForm = ({setOpen}) => {
  const {heroId} = useParams(); 
  const navigation = useNavigate();

  return (
    <Box sx={{ padding: 10 }}>
      <h1 style={{ textAlign: "center" }}>Edit a character!</h1>
      <Formik
        initialValues={{}}
        onSubmit={async (values) => {
           await axios.put(`${_apiBase}/${heroId}`, {
                ...values
            }).then(function (response) {
                console.log(response);
                
              })
            .catch(function (error) {
              console.log(error);
            })
            setOpen(false);
        }}
      >

        <Form style={formStyle}>
          <Field
            id="nickname"
            name="nickname"
            placeholder="Nickname"
            style={fieldStyle}
          />


          <Field
            id="real_name"
            name="real_name"
            placeholder="Real name"
            style={fieldStyle}
          />

          <Field
            id="origin_description"
            name="origin_description"
            placeholder="Origin"
            style={fieldStyle}
          />


          <Field
            id="superpowers"
            name="superpowers"
            placeholder="Superpowers"
            style={fieldStyle}
          />

          <Field
            id="catch_phrase"
            name="catch_phrase"
            placeholder="Catch phrase"
            style={fieldStyle}
          />

          <Button type="submit" variant="outlined" sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  padding: 20,
};

const fieldStyle = {
  padding: 5,
  fontSize: "1.4em",
  outline: "none",
  border: 0,
  borderBottom: "#222 2px solid",
};

const error = {
  color: 'red',
  marginBottom: 25,
}

export default EditHeroForm;
