import React, { useCallback, useState } from "react";
import { Form, Button, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import  * as Yup from "yup";
import { useUser } from "../../../../hooks";
import "./TecnicosForm.scss";
import { toast } from "react-toastify";

export function TecnicosForm({ onClose, onRefetch, titleBtn, tecnico }) {
  const [previewImage, setPreviewImage] = useState(tecnico ? tecnico?.image : null);
  const { setTecnico, updateTecnico } = useUser();

  const onDrop = useCallback(async (acceptedFiled) => {
    const file = acceptedFiled[0];
    await formik.setFieldValue("image", file)
    setPreviewImage(URL.createObjectURL(file))
  },[])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  const formik = useFormik({
    initialValues: initialValues(tecnico),
    validationSchema: Yup.object(tecnico ? updateSchema() : schema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
      try {
        if (tecnico) {
          await updateTecnico(tecnico.id, formValue);
          toast.success("Datos actualizados")
        }
        else {
          await setTecnico(formValue);
          toast.success("Técnico registrado")
        }
        onRefetch();
        onClose();
      } catch (error) {
        toast.error("Ha habido un error");
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

      <Button type="button" {...getRootProps()} color={formik.errors.image && "red"}>
        Subir imágen
      </Button>
      <input {...getInputProps()} />
      <Image src={previewImage} />

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

      <Button type="submit" fluid content={titleBtn} />
    </Form>
  )
}

function initialValues(tecnico) {
  return {
    cedula: tecnico?.cedula || "",
    email: tecnico?.email || "",
    first_name: tecnico?.first_name || "",
    last_name: tecnico?.last_name || "",
    password: "",
    is_active: true,
    is_staff: false,
    image: tecnico?.image || "",
    profesion: tecnico?.profesion || "",
    experiencia: tecnico?.experiencia || "",
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
    image: Yup.string(),
    profesion: Yup.string().required(true),
    experiencia: Yup.number().required(true),
  }
}