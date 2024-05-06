import axios from "axios";
import { func } from "prop-types";

const API_KEY = "AIzaSyCMDczPdS4V4Q2JxnrTr21sc0qXIrKzWcM";

async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );


  console.log(response.data);

}

//export dediğimizde başka classlardan da bu classa erişe biliriz
export async function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export async function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
