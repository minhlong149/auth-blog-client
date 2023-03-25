import React, { useState } from "react";

export function Register({ switchForm, updateUser }) {
  const [password, setPassword] = useState("");
  const handleSignup = (event) => {
    event.preventDefault();
    const {
      fullName: { value: fullName },
      username: { value: username },
      password: { value: password },
      confirmPassword: { value: confirmPassword },
    } = event.target;
    const loginDetail = {
      fullName,
      username,
      password,
      confirmPassword,
    };
    console.log("Login detail: ", loginDetail);
    updateUser(loginDetail);
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
