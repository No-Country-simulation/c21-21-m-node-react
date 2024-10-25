import axios from "axios";
import { signOut } from "next-auth/react";

const userRegister = async (
  accessToken,
  setUser,
  setApiCalled,
  setErrorMessage
) => {
  const role = localStorage.getItem("role");
  try {
    const res = await axios.post(
      "api/user/auth/register",
      { role },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const response = res.data;
    const userData = {
      id: response.user._id,
      email: response.user.email,
      role: role,
      projects: response.user.projects,
      token: accessToken,
    };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.removeItem("action");
    localStorage.removeItem("role");
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Sin mensaje de error";
    setErrorMessage(errorMessage);
    await signOut({ redirect: false });
    setApiCalled(false);
    localStorage.removeItem("action");
    localStorage.removeItem("role");
  }
};

const userLogin = async (
  accessToken,
  setUser,
  setApiCalled,
  setErrorMessage
) => {
  try {
    const res = await axios.get("/api/user/login", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const response = res.data;
    const userData = {
      id: response.user._id,
      email: response.user.email,
      role: response.user.role,
      projects: response.user.projects,
      token: accessToken,
    };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.removeItem("action");
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Sin mensaje de error";
    setErrorMessage(errorMessage);
    await signOut({ redirect: false });
    setApiCalled(false);
    localStorage.removeItem("action");
  }
};

const userService = {
  userRegister,
  userLogin,
};

export default userService;
