import { useState } from "react";
import { setServicesApi } from "../api/services";
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
 

  return {
    loading,
    error,
    servicios,
    setServices,
  }
}