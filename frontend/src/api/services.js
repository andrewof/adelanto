import { BASE_API } from "../utils/constant"

export async function setServicesApi(formData, token) {
  try {
    const url = `${BASE_API}/api/servicios/`;
    const params = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    if (!response.ok) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error
  }
}

export async function getServicesApi(token) {
  try {
    const url = `${BASE_API}/api/servicios/`;
    const params = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = await fetch(url, params);
    const result = await response.json()
    return result;
  } catch (error) {
    throw error
  }
}

export async function getClienteServicesApi(token) {
  try {
    const url = `${BASE_API}/api/servicios-cliente/`;
    const params = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error
  }
}