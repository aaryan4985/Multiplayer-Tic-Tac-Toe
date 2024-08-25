import "./App.css";
import dotenv from "dotenv";
import Cookies from "universal-cookie";
import SignUp from "./components/signUp";
import Login from "./components/login";
import { StreamChat } from "stream-chat";

function App() {
  dotenv.config();
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(process.env.api_key);

  if (token) {
    client.connectUser({
      id: cookies.get("userID"),
      name: cookies.get("username"),
      firstName: cookies.get("firstName"),
      lastName: cookies.get("lastName"),
      hashedPassword: cookies.get("hashedpassword"),
    });
  }
  return (
    <div className="App">
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
