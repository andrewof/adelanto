import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import *  as Yup from "yup";
import { useUser } from "../../../hooks"
import "./FormUpdate.scss";

export function FormUpdate({ cliente }) {
  const { updateClientes } = useUser();

  const formik = useFormik({
    initialValues: initialValues(cliente),
    validationSchema: Yup.object(schema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        // console.log(cliente.me.id)
        // console.log(formValue);
        const { password, ...restFormValue } = formValue;
        const dataToSend = password ? formValue : restFormValue;
        // console.log(dataToSend)
        await updateClientes(cliente.me.id, dataToSend);
        toast.success("Datos actualizados")
      } catch (error) {
        toast.error("Los datos no fueron actualizados")
        throw error
      }
    }
  })

  return (
    <Form className="form-update" onSubmit={formik.handleSubmit}>
      <Form.Input name="cedula" placeholder="Cédula" 
        value={formik.values.cedula}
        onChange={formik.handleChange}
        error={formik.errors.cedula}
      />
      <Form.Input name="email" placeholder="Correo electrónico" 
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
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
      <Form.Input name="password" type="password" placeholder="Contraseña" 
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Input name="direccion" placeholder="Dirección" 
        value={formik.values.direccion}
        onChange={formik.handleChange}
        error={formik.errors.direccion}  
      />
      <Form.Input name="codigo_postal" placeholder="Código postal" 
        value={formik.values.codigo_postal}
        onChange={formik.handleChange}
        error={formik.errors.codigo_postal}
      />
      <Button type="submit" fluid content="Actualizar"/>
    </Form>
  )
}


function initialValues(cliente) {
  return {
    cedula: cliente.me.cedula || "",
    email: cliente.me.email || "",
    first_name: cliente.me.first_name || "",
    last_name: cliente.me.last_name || "",
    password: "",
    is_active: cliente.me.is_active || true,
    is_staff: cliente.me.is_staff || false,
    direccion: cliente.me.direccion || "",
    codigo_postal: cliente.me.codigo_postal || "",
  }
}

function schema() {
  return {
    cedula: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    password: Yup.string().notRequired(),
    direccion: Yup.string().required(true),
    codigo_postal: Yup.string().required(true),
  }
}