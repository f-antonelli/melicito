import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "./features/auth/authApiSlice";
import { setCredentials } from "./features/auth/authSlice";
import SitesList from "./features/sites/SitesList";
import AppRouter from "./routes/AppRouter";

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

  return <AppRouter />
};

export default App;
