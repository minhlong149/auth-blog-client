import React, { useState } from "react";
import { Homepage } from "./Homepage";
import { Login } from "./Login";

function App() {
  const [message, setMessage] = useState("");

  const [user, setUser] = useState(null);
  const updateUser = async (user) => {
    try {
      // handle logout
      if (user == null) {
        window.localStorage.removeItem("loggedUser");
        setUser(null);
        return;
      }

      // !! handle login - update fetch url
      const returnedUser = await fetch("https://example.com/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: user,
      });

      if (!returnedUser) throw new Error("Wrong credentials");

      setUser(returnedUser);

      user.saveInfo &&
        window.localStorage.setItem("loggedUser", JSON.stringify(user));

      console.log(`Logged ${user ? "in" : "out"} successful`);
    } catch (error) {
      setMessage("Invalid");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  return (
    <>
      {user !== null ? (
        <Homepage user={user} updateUser={updateUser} />
      ) : (
        <Login updateUser={updateUser} message={message} />
      )}
    </>
  );
}

export default App;
