import axios from "axios";

export function authenticate(login: string, password: string) {
  const url = `${import.meta.env.VITE_BASE_URL}/auth/request`
  const data = {
    emailOrPhone: login,
    passwordHash: password,
  }
  axios
    .post(url, data)
    .then((result) => {
      console.log(result)
      return result
    })
    .catch((err) => {
      if (err.response.status == 500) {
        console.log(err.message)
      }
    });
}

export function registration(status: boolean, login: string, password: string) {
  const url = `${import.meta.env.VITE_BASE_URL}/account/sign-up`
  let data = {}
  if (status == true) {
    data = {
      email: login,
      passwordHash: password,
    }
  } else {
    data = {
      phone: login,
      passwordHash: password,
    }
  }
  axios
    .post(url, data)
    .then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err.response.data)
    });
}