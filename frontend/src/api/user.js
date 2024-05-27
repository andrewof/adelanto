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

export async function updateClientesApi(id, data, token) {
  try {
    const url = `${BASE_API}/api/clientes/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };
    
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error
  }
}


export async function getTecnicosApi(token) {
  try {
    const url = `${BASE_API}/api/tecnicos/`;
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

export async function getTecnicosPublicApi() {
  try {
    const url = `${BASE_API}/api/tecnicos/`;
    const params = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await fetch(url, params);
    if (response.status !== 200) {
      throw new Error("Error al obtener los técnicos");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function setTecnicoApi(data, token) {
  try {
    const formData = new FormData();
    formData.append('cedula', data.cedula)
    formData.append('email', data.email);
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('password', data.password)
    formData.append('is_active', data.is_active);
    formData.append('is_staff', data.is_staff);
    formData.append('image', data.image);
    formData.append('profesion', data.profesion);
    formData.append('experiencia', data.experiencia);

    const url = `${BASE_API}/api/tecnicos/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    const response = await fetch(url, params);
    const result = await response.json()
    return result;
  } catch (error) {
    throw error
  }
}

export async function updateTecnicoApi(id, data, token) {
  try {
    const url = `${BASE_API}/api/tecnicos/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);
    const result = await response.json()
    return result;
  } catch (error) {
    throw error
  }
}

export async function deleteTecnicoApi(id, token) {
  try {
    const url = `${BASE_API}/api/tecnicos/${id}/`;
    const params = {
      method: "DELETE",
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