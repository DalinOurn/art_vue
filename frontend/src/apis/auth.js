import axios from "axios";

var auth = {
  async getMe() {
    const result = await axios.get('http://18.183.162.177:3001/auth/me', {withCredentials: true, headers: {"Content-type": "application/json",} });

    if (result?.data.success == false) return false
    return result;
  },
  async logout() {
    const result = await axios("http://18.183.162.177:3001/auth/logout", {
      method: "post",
      withCredentials: true
    })
    return result;
  },
}

export default auth
