import React, { useEffect, useState } from "react";
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

      // handle create new user
      if (user.confirmPassword) {
        const response = await fetch("http://localhost:3000/v1/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const returnedUser = await response.json();
        console.log("Create new user", returnedUser);

        // login automatically after create new user
      }

      // !! handle login - update fetch url
      const response = await fetch("http://localhost:3000/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const returnedUser = await response.json();
      setUser(returnedUser);

      user.saveInfo &&
        window.localStorage.setItem("loggedUser", JSON.stringify(user));

      console.log(`Logged ${user ? "in" : "out"} successful: `, returnedUser);
    } catch (error) {
      setMessage(error.message);
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
