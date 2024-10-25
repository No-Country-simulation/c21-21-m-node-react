import { getSession } from "next-auth/react";

export const fetchUser = async () => {
  const session = await getSession(); //obteener la sesion actual, incluyendo el Access Token

  try {
    const response = await fetch("http://localhost:3000/user/register", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.accessToken}`, //el Access Token de next-auth para registrar en el back
      },
    });

    const data = await response.json();
    console.log("Perfil del usuario:", data); //deberia devolver toda la informacion del usuario dentro de la DB, desde el back

    return data;
  } catch (error) {
    console.error("Ha ocurrido un error inesperado:", error);
  }
};
