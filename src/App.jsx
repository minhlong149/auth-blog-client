import React, { useState } from "react";

function App() {
  const [hasAccount, setHasAccount] = useState(false);
  const updateFormState = () => {
    const newLocal = !hasAccount;
    setHasAccount(newLocal);
  };

  return (
    <div className="grid h-screen place-items-center bg-blue-200">
      <div className="bg-white p-8">
        {hasAccount ? (
          <Login switchForm={updateFormState} />
        ) : (
          <Signup switchForm={updateFormState} />
        )}
      </div>
    </div>
  );
}

export default App;

function Login({ switchForm }) {
  const handleLogin = (event) => {
    event.preventDefault();
    const {
      username: { value: username },
      password: { value: password },
      saveInfo: { checked: saveInfo },
    } = event.target;
    console.log({ username, password, saveInfo });
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

function Signup({ switchForm }) {
  const [password, setPassword] = useState("");
  const handleSignup = (event) => {
    event.preventDefault();
    const {
      fullName: { value: fullName },
      username: { value: username },
      password: { value: password },
      confirmPassword: { value: confirmPassword },
    } = event.target;
    console.log({ fullName, username, password, confirmPassword });
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
