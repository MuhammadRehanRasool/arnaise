import React, { useContext } from "react";
import UserData from "../contexts/UserData";

export default function Profile() {
  const { session } = useContext(UserData);

  return (
    <div className="mt-20 mb-10 flex flex-col md:flex-col justify-center items-center">
      <div className="mb-5 flex flex-col w-full">
        <h1 className="text-center text-3xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
          My{" "}
          <span className="leading-tighter tracking-tighter text-_accent_1_">
            Profile
          </span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="px-5 md:px-0 w-full md:w-2/3">
          <div className="flex flex-col md:flex-row bg-white p-4 md:space-x-6 rounded-lg shadow-2xl">
            <div className="md:w-1/2">
              <label className="font-semibold text-gray-700">Email</label>
              <p>{session?.personal.email}</p>
            </div>
          </div>
          <div className="bg-white p-4 mt-4 rounded-lg shadow-2xl">
            <label className="font-semibold text-gray-700">Full Name</label>
            <p>{session?.personal.fullName}</p>
          </div>
          <div className="bg-white p-4 mt-4 rounded-lg shadow-2xl">
            <label className="font-semibold text-gray-700">Points</label>
            <p>{session?.personal.points}</p>
          </div>
          <div className="bg-white p-4 mt-4 rounded-lg shadow-2xl">
            <label className="font-semibold text-gray-700">Joining Date</label>
            <p>{new Date(session?.personal.timestamp)?.toDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}