function App() {
  return (
    <div className="grid h-screen place-items-center">
      <Login />
    </div>
  );
}

export default App;

function Login() {
  return (
    <form className="inline-flex flex-col gap-4">
      <div className=" flex justify-between items-center gap-2">
        <label className="" for="username">
          Username:
        </label>
        <input className="" type="text" name="username" required />
      </div>

      <div className="flex justify-between items-center gap-2">
        <label className="" for="password">
          Password:
        </label>
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

        <a className="hover:underline" href="#">
          Create new account
        </a>
      </div>
    </form>
  );
}
