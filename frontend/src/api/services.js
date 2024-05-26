import { BASE_API } from "../utils/constant"

export async function setServices(formData, token) {
  try {
    const url = `${BASE_API}/api/servicios/`;
    const params = {
      method: "POST",
      headers: {
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