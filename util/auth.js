import axios from "axios";
import { func } from "prop-types";

const API_KEY = "AIzaSyCMDczPdS4V4Q2JxnrTr21sc0qXIrKzWcM";

//export dediğimizde başka classlardan da bu classa erişe biliriz
export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
