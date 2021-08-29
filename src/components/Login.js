import React from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <h1 className="bg-indigo-700 text-white rounded text-xl text-center mb-5 font-bold p-2">
          Covid Slot Update
        </h1>
        <h3 className="w-full font-bold text-center text-indigo-500 text-2xl mb-5">
          Login
        </h3>
        <form>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="email"
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
            />
          </div>
          <div>
            <input
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            />
          </div>
        </form>
        <footer>
          <Link
            className="text-indigo-700 hover:text-pink-700 text-sm"
            to="/signup"
          >
            Create Account
          </Link>
        </footer>
      </div>
    </div>
  );
}
