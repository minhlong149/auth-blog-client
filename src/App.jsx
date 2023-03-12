import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  const updateUser = () => {
    setUser(!user);
  };
  return (
    <>
      {user ? (
        <Homepage updateUser={updateUser} />
      ) : (
        <Login updateUser={updateUser} />
      )}
    </>
  );
}

export default App;

function SignIn({ switchForm, updateUser }) {
  const handleLogin = (event) => {
    event.preventDefault();
    const {
      username: { value: username },
      password: { value: password },
      saveInfo: { checked: saveInfo },
    } = event.target;
    console.log("Login detail: ", { username, password, saveInfo });
    updateUser();
  };
  return (
    <form className="flex w-96 flex-col gap-4" onSubmit={handleLogin}>
      <div className=" flex justify-between items-center gap-2">
        <label>Username:</label>
        <input className="" type="text" name="username" required />
      </div>

      <div className="flex justify-between items-center gap-2">
        <label>Password:</label>
        <input className="" type="password" name="password" required />
      </div>

      <input
        className="rounded w-full cursor-pointer bg-blue-500 text-white px-4 py-2"
        type="submit"
        value="Login"
      />

      <div className="flex justify-between items-center gap-2">
        <label>
          <input
            className="cursor-pointer mr-1"
            type="checkbox"
            name="saveInfo"
            value="yes"
          />
          Remember me
        </label>

        <a className="hover:underline" href="#" onClick={switchForm}>
          Create new account
        </a>
      </div>
    </form>
  );
}

function Register({ switchForm, updateUser }) {
  const [password, setPassword] = useState("");
  const handleSignup = (event) => {
    event.preventDefault();
    const {
      fullName: { value: fullName },
      username: { value: username },
      password: { value: password },
      confirmPassword: { value: confirmPassword },
    } = event.target;
    console.log("Login detail: ", {
      fullName,
      username,
      password,
      confirmPassword,
    });
    updateUser();
  };
  return (
    <form className="flex w-96 flex-col gap-4" onSubmit={handleSignup}>
      <div className=" flex justify-between items-center gap-2">
        <label>Full name:</label>
        <input type="text" name="fullName" required />
      </div>

      <div className=" flex justify-between items-center gap-2">
        <label>Username:</label>
        <input type="text" name="username" required />
      </div>

      <div className="flex justify-between items-center gap-2">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          required
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>

      <div className="flex justify-between items-center gap-2">
        <label>Confirm password:</label>
        <input
          type="password"
          name="confirmPassword"
          required
          pattern={password}
          onInvalid={({ target }) =>
            target.setCustomValidity("Password doesn't match")
          }
        />
      </div>

      <input
        className="rounded w-full cursor-pointer bg-blue-500 text-white px-4 py-2"
        type="submit"
        value="Sign Up"
      />

      <p className="text-center">
        Already have an account?{" "}
        <a className="hover:underline" href="#" onClick={switchForm}>
          Login here
        </a>
      </p>
    </form>
  );
}

function Login({ updateUser }) {
  const [hasAccount, setHasAccount] = useState(true);
  const updateFormState = () => {
    const newLocal = !hasAccount;
    setHasAccount(newLocal);
  };
  return (
    <div className="grid h-screen place-items-center bg-blue-200">
      <div className="bg-white p-8">
        {hasAccount ? (
          <SignIn switchForm={updateFormState} updateUser={updateUser} />
        ) : (
          <Register switchForm={updateFormState} updateUser={updateUser} />
        )}
      </div>
    </div>
  );
}

function Homepage({ updateUser }) {
  return (
    <div>
      <h1>Logged in</h1>
      <button onClick={updateUser}>Logout</button>
    </div>
  );
}
