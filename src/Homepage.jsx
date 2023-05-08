import React, { useState } from "react";

export function Homepage({ user, updateUser }) {
  const [money, setMoney] = useState(0);

  const addMoney = async () => {
    // add jwt to header
    const url = `http://localhost:3000/v1/user/${user._id}`;
    const res = await fetch(url, {
      headers: {
        token: `Bearer ${user.accessToken}`,
      },
    });
    console.log(await res.json());
    if (res.ok) {
      // const data = await res.json();
      setMoney(money + Math.floor(Math.random() * 10) * 1000);
    }
  };

  return (
    <div className="grid h-screen place-items-center bg-blue-200">
      <div className="flex flex-col justify-between items-center bg-white p-8 h-96 w-96">
        <h1 className="text-center text-2xl font-bold">
          Xin chào, {user?.fullName || user?.username || "người vô danh"}
        </h1>

        <div className="grid place-items-center gap-4">
          <p>Bạn đang có {money} VND</p>
          <button
            className="rounded-full cursor-pointer border-2 border-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3"
            onClick={addMoney}
          >
            Cộng thêm tiền
          </button>
        </div>

        <button className="cursor-pointer" onClick={() => updateUser(null)}>
          Logout
        </button>
      </div>
    </div>
  );
}
