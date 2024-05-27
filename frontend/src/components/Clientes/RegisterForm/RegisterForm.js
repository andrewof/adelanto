import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Form, Button } from "semantic-ui-react";
import { useAuth, useUser } from "../../../hooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { registerClienteApi } from "../../../api/user";
import "./RegisterForm.scss";


function initialValues() {
  return {
    cedula: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    is_active: true,
    is_staff: false,
    direccion: "",
    codigo_postal: ""
  }
}

function schema() {
  return {
    cedula: Yup.string().required(true),
    email: Yup.string().required(true),
    first_name: Yup.string().required(true),
    last_name: Yup.string().required(true),
    password: Yup.string().required(true),
    direccion: Yup.string().required(true),
    codigo_postal: Yup.string().required(true)
  }
}


export function RegisterForm() {
  const { login } = useAuth();
  const { getMe, registerClientes } = useUser();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(schema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log(formValue);
        const response = await registerClienteApi(formValue);
        const { token } = response;
        if (token) {
          login(token);
          const me = await getMe(token);
          navigate("/");
        } else {
          throw new Error("No se recibió el token");
        }
      } catch (error) {
        toast.error(error.message)
      }
    }
  })

  return (
    <Form className="register-form" onSubmit={formik.handleSubmit}>
      <Form.Input name="cedula" placeholder="Cédula"
        values={formik.values.cedula}
        onChange={formik.handleChange}
        error={formik.errors.cedula}
      />
      <Form.Input name="email" placeholder="Correo electrónico"
        values={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input name="first_name" placeholder="Nombres"
        values={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.errors.first_name}
      />
      <Form.Input name="last_name" placeholder="Apellidos"
        values={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.errors.last_name}
      />
      <Form.Input name="password" type="password" placeholder="Contraseña"
        values={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Input name="direccion" placeholder="Dirección" 
        values={formik.values.direccion}
        onChange={formik.handleChange}
        error={formik.errors.direccion}
      />
      <Form.Input name="codigo_postal" placeholder="Código postal"
        values={formik.values.codigo_postal}
        onChange={formik.handleChange}
        error={formik.errors.codigo_postal}
      />

      <Button type="submit" content="Registrarse" fluid />
    </Form>
  )
}
