import { BASE_API } from "../utils/constant";

// Petición para login
export async function loginApi(formValue) {
  try {
    const url = `${BASE_API}/api/auth/login/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValue)
    };

    const response = await fetch(url, params);

    if (response.status !== 200) {
      throw new Error("Usuario o contraseña incorrectos")
    }

    const result = await response.json()
    return result;
  } catch (error) {
    throw error
  }
}

// Obtener el usuario actual logueado
export async function getMeApi(token) {
  try {
    const url = `${BASE_API}/api/auth/me/`;
    const params = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = await fetch(url, params);
    const result = response.json();
    return result;
  } catch (error) {
    throw error
  }
}


export async function getClientesApi(token) {
  try {
    const url = `${BASE_API}/api/clientes/`;
    const params = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error
  }
}