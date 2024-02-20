import { api } from "configs/api";




const getProfile = () => {
    return api.get("user/whoami").then((res) => res || false)
}

export default getProfile