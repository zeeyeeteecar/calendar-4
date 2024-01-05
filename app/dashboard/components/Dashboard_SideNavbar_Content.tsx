"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { data_SideNavBar } from "@/app/lib/data";
import { MyComponent } from "@/app/lib/data";

export default function Dashboard_SideNavbar_Content() {
  const { data: session, status } = useSession();
  const nextAuthSession: any = session;

  const router = useRouter();

  function userSignOut() {
    signOut({ redirect: false }).then(() => {
      router.push("/signin"); // Redirect to the dashboard page after signing out
    });
  }
  return (
    <div className="flex-col w-[200px] bg-gray-200 h-screen">
      <div className="w-full bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">
        <div className="w-64 px-4">
          <div className="h-16 flex items-center">
            <Link
              href="#"
              className="w-48 h-10 mx-auto bg-blue-500 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150"
            >
              {nextAuthSession?.user.Login}
            </Link>
          </div>
          <div className="px-2 pt-4 pb-8 border-r border-gray-300">
            <ul className="space-y-2">
              {data_SideNavBar &&
                data_SideNavBar.map((data: any, key: number) => {
                  const IconComponent = data["IconComponent"];

                  return (
                    <>
                      <li key={key}>
                        <Link
                          className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer"
                          href={data.link}
                        >
                          <span className="flex items-center space-x-2">
                            {IconComponent && <IconComponent />}
                            <span>{data.title}</span>
                          </span>
                        </Link>
                      </li>
                    </>
                  );
                })}

              <li onClick={() => userSignOut()}>
                <Link
                  href="#"
                  className="bg-gray-500 bg-opacity-30 text-blue-500 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                  <span>Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 px-2"></div>
      </div>
    </div>
  );
}
