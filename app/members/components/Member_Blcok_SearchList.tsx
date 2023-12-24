import { PiTrashThin } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { PiCellSignalFullLight } from "react-icons/pi";

import moment from "moment";

import React from "react";
import { prisma } from "../../lib/db";

// type Props = {
//   tMasterID: string;
//   Fname: string;
//   Lname: string;
//   Address: string;
//   PhoneHome: string;
// };

export default async function Member_Blcok_SearchList({
  globe_MemberSearchKeywords,
}: any) {
  console.log(globe_MemberSearchKeywords);
  const tMasterID: string = globe_MemberSearchKeywords.tMasterID;
  const Fname: string = globe_MemberSearchKeywords.Fname;
  const Lname: string = globe_MemberSearchKeywords.Lname;
  const Company: string = globe_MemberSearchKeywords.Company;
  const Address: string = globe_MemberSearchKeywords.Address;
  const PhoneHome: string = globe_MemberSearchKeywords.PhoneHome;

  let members: any;

  if (!tMasterID && !Fname && !Lname && !Address && !PhoneHome) {
  } else {
    members = await prisma.tMaster.findMany({
      where: {
        tMasterID: tMasterID ? Number(tMasterID) : undefined,
        Fname: { contains: Fname },
        Lname: { contains: Lname },
        Company: { contains: Company },
        Address: { contains: Address },
        PhoneHome: { contains: PhoneHome },
      },
    });
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      {/* <div>{JSON.stringify(members)}</div> */}

      <div>{members ? members.length : 0}</div>

      <div className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <div className="bg-gray-50 border-0 flex flex-row">
          <div className="px-6 py-4 font-medium text-gray-900 w-[300px]">
            Name
          </div>
          <div className="px-6 py-4 font-medium text-gray-900 w-[300px]">
            Company
          </div>
          <div className="px-6 py-4 font-medium text-gray-900  w-[200px]">
            DoB
          </div>
          <div className="px-6 py-4 font-medium text-gray-900  w-[200px]">
            Phone / Cell
          </div>
          <div className="px-6 py-4 font-medium text-gray-900">Gender</div>
          <div className="px-6 py-4 font-medium text-gray-900">Team</div>
          <div className="px-6 py-4 font-medium text-gray-900">Team</div>
        </div>
        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {members &&
            members.map((member: any, key: number) => {
              return (
                <>
                  <div key={key} className="hover:bg-gray-50 flex flex-row">
                    <div className="flex flex-row gap-3 px-6 py-4 font-normal text-gray-900 border-0 w-[300px]">
                      <div className="relative h-10 w-10">
                        <img
                          className="h-full w-full rounded-full object-cover object-center"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                      </div>
                      <div className="text-sm border-0">
                        <div className="flex flex-row font-medium text-gray-700">
                          <span className=" min-w-[100px]  border-0 mr-2 font-bold">
                            {member.Fname} {member.Lname}
                          </span>
                          <span></span>
                        </div>
                        <div className="text-gray-400 border-0">
                          <span className="text-slate-300">ID: </span>
                          {member.tMasterID}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-7 w-[300px] border-0  ">
                      {member.Company}
                    </div>

                    <div className="px-6 py-4 w-[200px] border-0">
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        Active
                      </span>
                      <span>
                        {member.DoB
                          ? moment.utc(member.DoB).format("YYYY-MM-DD")
                          : ""}
                      </span>
                    </div>

                    <div className="px-1 py-4 flex flex-col w-[200px]">
                      <div className="flex flex-row">
                        <span className=" text-slate-400 py-1 w-[20px] border-0">
                          <CiPhone />
                        </span>{" "}
                        {member.PhoneHome}
                      </div>
                      <div className="flex flex-row">
                        <span className=" text-slate-400 py-1 w-[20px] border-0">
                          <PiCellSignalFullLight />
                        </span>{" "}
                        {member.Cell}
                      </div>
                    </div>

                    <div className="px-6 py-4">
                      <div className="flex gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                          Design
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                          Product
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                          Develop
                        </span>
                      </div>
                    </div>

                    <div className="px-6 py-4">
                      <div className="flex justify-end gap-4">
                        <CiEdit size={25} />

                        <PiTrashThin size={25} />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}