import React, { useState } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { _apiBase } from "../server_setting";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  real_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  origin_description: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  superpowers: Yup.string()
    .min(2, 'Too Short!')
    .max(150, 'Too Long!')
    .required('Required'),
  catch_phrase: Yup.string()
    .min(2, 'Too Short!')
    .max(80, 'Too Long!')
    .required('Required'),
  
});


const CreateHeroForm = ({setOpen}) => {
  const [images, setImages] = useState([]);

  return (
    <Box sx={{ padding: 10 }}>
      <h1 style={{ textAlign: "center" }}>Create new character!</h1>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          nickname: "",
          real_name: "",
          origin_description: "",
          superpowers: "",
          catch_phrase: "",
          images: "",
        }}
        onSubmit={async (values) => {
          const formData = new FormData();
          for (var i = 0; i < images.length; i++) {
            formData.append(`image`, images[i]);
          }

           await axios.post(`${_apiBase}/files`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (response) {
            axios.post(_apiBase, {
              hero: {
                ...values,
                images: response.data.data.map(item => item.filename),
              }
            })
            .then(function (response) {
              console.log(response);
            })
          })
          .catch(function (error) {
            console.log(error);
          })
          setOpen(false);
        }}
      >
         {({ errors, touched }) => (
        <Form style={formStyle}>
          <Field
            id="nickname"
            name="nickname"
            placeholder="Nickname"
            style={fieldStyle}
          />
          {errors.nickname && touched.nickname ? (
             <div style={error}>{errors.nickname}</div>
           ) : null}

          <Field
            id="real_name"
            name="real_name"
            placeholder="Real name"
            style={fieldStyle}
          />
          {errors.real_name && touched.real_name ? (
             <div style={error}>{errors.real_name}</div>
           ) : null}

          <Field
            id="origin_description"
            name="origin_description"
            placeholder="Origin"
            style={fieldStyle}
          />
          {errors.origin_description && touched.origin_description ? (
             <div style={error}>{errors.origin_description}</div>
           ) : null}

          <Field
            id="superpowers"
            name="superpowers"
            placeholder="Superpowers"
            style={fieldStyle}
          />
          {errors.superpowers && touched.superpowers ? (
             <div style={error}>{errors.superpowers}</div>
           ) : null}

          <Field
            id="catch_phrase"
            name="catch_phrase"
            placeholder="Catch phrase"
            style={fieldStyle}
          />
          {errors.catch_phrase && touched.catch_phrase ? (
             <div style={error}>{errors.catch_phrase}</div>
           ) : null}

          <input
            id="images"
            name="images"
            type="file"
            multiple
            accept="image/*"
            style={{marginTop: 20}}
            onChange={(event) => {
              setImages(event.currentTarget.files);
            }}
          />

          <Button type="submit" variant="outlined" sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </Form>)}
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

export default CreateHeroForm;
