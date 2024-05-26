import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useServices } from "../../../hooks/useServices"
import "./FormServices.scss";

export function FormServices({ tecnico, cliente, onClose }) {
  const { setServices } = useServices();

  const formik = useFormik({
    initialValues: initialValues(tecnico, cliente),
    validationSchema: Yup.object(schema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log(formValue)
        await setServices(formValue);
        onClose();
      } catch (error) {
        throw error
      }
    }
  })

  return (
    <Form className="registro-form-services" onSubmit={formik.handleSubmit}>
      <Form.Input className="descripcion" placeholder="Descripción" 
        name="descripcion"
        value={formik.values.descripcion}
        onChange={formik.handleChange}
        error={formik.errors.descripcion}
      />
      <input
        type="datetime-local"
        id="hora_vis"
        name="hora_vis"
        value={formik.values.hora_vis}
        onChange={formik.handleChange}
        className={formik.errors.hora_vis ? "error" : ""}
      />
      {formik.touched.hora_vis && formik.errors.hora_vis && (
        <span style={{ color: "red" }}>{formik.errors.hora_vis}</span>
      )}
      <Button type="submit" fluid content="Agendar"/>
    </Form>
  )
}

function initialValues(tecnico, cliente) {
  return {
    cliente: cliente.id,
    tecnico: tecnico.id,
    descripcion: "",
    hora_vis: "",
    // cliente: {
    //   first_name: cliente.first_name,
    //   last_name: cliente.last_name,
    // },
    // descripcion: "",
    // fechaHora_vis: "",
    // tecnico: {
    //   first_name: tecnico.first_name,
    //   last_name: tecnico.last_name,
    // },
  }
}

function schema() {
  return {
    descripcion: Yup.string().required(true),
    hora_vis: Yup.date().required(true)
  }
} 