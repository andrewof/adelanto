import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import  * as Yup from "yup";
import { useUser } from "../../../../hooks";
import "./TecnicosForm.scss";

export function TecnicosForm({ onClose, onRefetch, titleBtn, tecnico }) {
  const { setTecnico, updateTecnico } = useUser();

  const formik = useFormik({
    initialValues: initialValues(tecnico),
    validationSchema: Yup.object(tecnico ? updateSchema() : schema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (tecnico) await updateTecnico(tecnico.id, formValue)
        else await setTecnico(formValue);
        onRefetch();
        onClose();
      } catch (error) {
        console.error(error)
      }
    }
  })

  return (
    <Form className="registro-tecnicos-form" onSubmit={formik.handleSubmit}>
      <Form.Input name="cedula" placeholder="Cédula" 
        value={formik.values.cedula}
        onChange={formik.handleChange}
        error={formik.errors.cedula}
      />
      <Form.Input name="first_name" placeholder="Nombres" 
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.errors.first_name}        
      />
      <Form.Input name="last_name" placeholder="Apellidos" 
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.errors.last_name}
      />
      <Form.Input name="email" placeholder="Correo electrónico" 
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input type="password" name="password" placeholder="Contraseña" 
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Input name="profesion" placeholder="Profesión" 
        value={formik.values.profesion}
        onChange={formik.handleChange}
        error={formik.errors.profesion}
      />
      <Form.Input name="experiencia" placeholder="Experiencia" 
        value={formik.values.experiencia}
        onChange={formik.handleChange}
        error={formik.errors.experiencia}
      />

      <Button type="submit" content={titleBtn}/>
    </Form>
  )
}

function initialValues(tecnico) {
  return {
    cedula: tecnico?.cedula || "",
    first_name: tecnico?.first_name || "",
    last_name: tecnico?.last_name || "",
    email: tecnico?.email || "",
    password: "",
    profesion: tecnico?.profesion || "",
    experiencia: tecnico?.experiencia || "",
    is_active: true,
    is_staff: false
  }
}

function schema() {
  return {
    cedula: Yup.string().required(true),
    first_name: Yup.string().required(true),
    last_name: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
    profesion: Yup.string().required(true),
    experiencia: Yup.number().required(true),
  }
}

function updateSchema() {
  return {
    cedula: Yup.string().required(true),
    first_name: Yup.string(),
    last_name: Yup.string(),
    email: Yup.string().email(true).required(true),
    password: Yup.string(),
    profesion: Yup.string().required(true),
    experiencia: Yup.number().required(true),
  }
}