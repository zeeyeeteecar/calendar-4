"use client";
import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";

import { dataStatus } from "../../lib/data";

export default function Modal_Member_AddNew() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        type="button"
        className=" w-[300px] p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  inline-flex items-center"
        onClick={() => setShowModal(true)}
      >
        <span className="mx-4">
          <IoPersonAddOutline size={20} />
        </span>

        <span>Add New Member</span>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-0">
            <div className="relative my-6 mx-auto w-[1300px] h-[800px] ">
              {/*content*/}
              <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full h-full bg-slate-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Add New Member</h3>

                  <button
                    className="w-[70px]  border-emerald-700 border-[1px] hover:bg-emerald-100 active:bg-emerald-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-50 h-6 w-6 text-l block outline-none focus:outline-none">
                      close
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-row border-8 w-full">
                  <div className=" border-2 flex col md:w-2/5">
                    <div className="flex flex-row border-2 w-full">
                      <span className="w-[150px]">First Name</span>
                      <span className="">
                        <input
                          className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          id="inline-full-name"
                          type="text"
                          value="Jane Doe"
                        />
                      </span>
                    </div>
                  </div>

                  <div className=" border-2 flex col md:w-2/5">
                    <div className="flex flex-row border-2 w-full">
                      <span className="w-[150px]">First Name</span>
                      <span className="">
                        <input
                          className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          id="inline-full-name"
                          type="text"
                          value="Jane Doe"
                        />
                      </span>
                    </div>
                  </div>

                  <div className=" border-2 flex flex-col md:w-1/5">
                    <StatusList />
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="background"
            className="opacity-30 fixed inset-0 z-40 bg-black"
          ></div>
        </>
      ) : null}
    </>
  );
}

const StatusList = () => {
  return (
    <div className="flex flex-col p-3 space-y-1">
      {dataStatus.map((status: any, key: number) => {
        return (
          <div key={key} className="flex flex-row hover:bg-white p-2">

            <label className=" border-0 w-[30px] ms-3.5 text-sm text-gray-600 dark:text-gray-500  h-full  flex  items-center  justify-left text-left m-auto">
              <input
                type="checkbox"
                className="w-[25px] h-[25px] border-0 border-gray-50 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 outline-none"
                value="Board"
                onChange={null}
              />
            </label>

            <label className=" border-0 ms-3.5 text-sm text-gray-600 dark:text-gray-500 w-[200px] h-full flex  items-center justify-start m-auto">
              {status.fullTitle}
            </label>
          </div>
        );
      })}
    </div>
  );
};
