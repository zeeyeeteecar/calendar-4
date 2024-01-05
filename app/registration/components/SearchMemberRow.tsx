"use client"
import React from "react";

export default function SearchMemberRow({ member, handle_radioChanged }: any) {
  return (
    <div>
      <div className="flex flex-col w-full space-2 p-2  border-0">
        <div className="w-full space-2  border-0">
          <div className="relative space-2  border-0">
            <input
              type="radio"
              name="Member"
              id={member.tMasterID}
              className="hidden peer"
              onChange={(e) => handle_radioChanged(e)}
            />
            <label
              htmlFor={member.tMasterID.toString()}
              className="flex items-center gap-4 p-4 rounded-lg bg-white bg-opacity-90 backdrop-blur-md shadow-md hover:bg-slate-100 peer-checked:bg-purple-900 peer-checked:text-white cursor-pointer transition"
            >
              <img
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="user photo"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <h6 className="text-base">
                  {member.Fname} {member.Lname}
                </h6>
                <span className="text-sm opacity-60">
                  {" "}
                  {member.tMasterID} UX Writer{" "}
                </span>
              </div>
            </label>
            <div className="flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 peer-checked:scale-100 transition delay-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 text-white my-auto mx-auto"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
