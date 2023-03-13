import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "./features/auth/authApiSlice";
import { selectCurrentToken, setCredentials } from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const [login, _] = useLoginMutation();

  const handleLogin = async () => {
    const formData = new URLSearchParams();
    formData.append("grant_type", import.meta.env.VITE_GRANT_TYPE);
    formData.append("client_id", import.meta.env.VITE_CLIENT_ID);
    formData.append("client_secret", import.meta.env.VITE_CLIENT_SECRET);
    formData.append("refresh_token", import.meta.env.VITE_REFRESH_TOKEN);

    const res = await login(formData.toString()).unwrap();

    dispatch(setCredentials(res));
  };

  useEffect(() => {
   handleLogin();
  }, []);

  return <div>App</div>;
};

export default App;
