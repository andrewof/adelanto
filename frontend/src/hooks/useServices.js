import { useState } from "react";
import { setServicesApi, getClienteServicesApi, getTecnicoServicesApi, getServicesApi } from "../api/services";
import { useAuth } from "../hooks";


export function useServices() {
  const [servicios, setServicios] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const { auth } = useAuth();


  const setServices = async (data) => {
    try {
      setLoading(true);
      await setServicesApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(false);
    }
  }

  const getServices = async () => {
    try {
      setLoading(true);
      const response = await getServicesApi(auth.token);
      setLoading(false);
      setServicios(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  const getClienteServices = async () => {
    try {
      setLoading(true);
      const response = await getClienteServicesApi(auth.token)
      setLoading(false);
      setServicios(response);
    } catch (error) {
      setLoading(false);
      setLoading(error);
    }
  }

  const getTecnicoServices = async () => {
    try {
      setLoading(true);
      const response = await getTecnicoServicesApi(auth.token)
      setLoading(false);
      setServicios(response);
    } catch (error) {
      setLoading(false);
      setLoading(error);
    }
  }
 

  return {
    loading,
    error,
    servicios,
    setServices,
    getServices,
    getClienteServices,
    getTecnicoServices,
  }
}