import React from "react";

export function SignIn({ switchForm, updateUser }) {
  const handleLogin = (event) => {
    event.preventDefault();
    const {
      username: { value: username },
      password: { value: password },
      saveInfo: { checked: saveInfo },
    } = event.target;
    const loginDetail = { username, password, saveInfo };
    console.log("Login detail: ", loginDetail);
    updateUser(loginDetail);
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
