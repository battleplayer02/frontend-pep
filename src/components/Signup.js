import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const getMyLoc = e => {
    let location = null;
    let latitude = null;
    let longitude = null;
    if (window.navigator && window.navigator.geolocation) {
      location = window.navigator.geolocation;
    }
    if (location) {
      location.getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(latitude);
        console.log(longitude);
      });
    }
  };

  return (
    <div className="flex h-screen overflow-auto bg-indigo-700 pb-10">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5 mt-10">
        <h1 className="bg-indigo-700 text-white rounded text-xl text-center mb-5 font-bold p-2">
          Covid Slot Update
        </h1>
        <h3 className="w-full font-bold text-center text-indigo-500 text-2xl mb-5">
          Signup
        </h3>
        <form>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="email"
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
            <label className="block mb-2 text-indigo-500" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="text"
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="age">
              Age
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="age"
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="pincode">
              Pincode
            </label>
            <div className="relative">
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                name="pincode"
              />
              <button
                className="absolute p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold right-0 m-2 rounded text-sm"
                onClick={getMyLoc}
              >
                Get Loc
              </button>
            </div>
          </div>
          <div>
            <input
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            />
          </div>
        </form>
        <footer>
          <Link className="text-indigo-700 hover:text-pink-700 text-sm" to="/">
            Login to Existing Account
          </Link>
        </footer>
      </div>
    </div>
  );
}
