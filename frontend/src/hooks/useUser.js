import { useState } from "react";
import { getMeApi, getClientesApi, getTecnicosApi,
  setTecnicoApi
 } from "../api/user";
import { useAuth } from "../hooks";

export function useUser() {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [clientes, setClientes] = useState(null);
  const [tecnicos, setTecnicos] = useState(null);
  const { auth } = useAuth();

  const getMe = async (token) => {
    try {
      const response = await getMeApi(token);
      return response;
    } catch (error) {
      throw error
    }
  };

  const getClientes = async () => {
    try {
      setLoading(true);
      const response = await getClientesApi(auth.token);
      setLoading(false);
      setClientes(response);
    } catch (error) {
      setLoading(false);
      setError(error)
    }
  };

  const getTecnicos = async () => {
    try {
      setLoading(true);
      const response = await getTecnicosApi(auth.token);
      setLoading(false);
      setTecnicos(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  const setTecnico = async (data) => {
    try {
      setLoading(true);
      await setTecnicoApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  return {
    loading,
    error,
    clientes,
    tecnicos,
    getMe,
    getClientes,
    getTecnicos,
    setTecnico,
  };
}