import { PiTrashThin } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdGirl } from "react-icons/md";
import { MdBoy } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { PiCellSignalFullLight } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";

import moment from "moment";

import React from "react";
import { prisma } from "../../lib/db";
import Modal_Member_Edit from "./Member_Edit";

// type Props = {
//   tMasterID: string;
//   Fname: string;
//   Lname: string;
//   Address: string;
//   PhoneHome: string;
// };

const dataStatus = [
  { title: "Board", clr: "red", fieldTitle: "Board" },
  { title: "Part", clr: "blue", fieldTitle: "Participant" },
  { title: "Affi", clr: "purple", fieldTitle: "Affiliate" },
  { title: "Vol", clr: "gray", fieldTitle: "Volunteer" },
  { title: "Vote", clr: "pink", fieldTitle: "VotingMbr" },
  { title: "L-Vote", clr: "hotpink", fieldTitle: "VotingMbr_Life" },
  { title: "CSG", clr: "green", fieldTitle: "CSG" },
  { title: "Staff", clr: "orange", fieldTitle: "Staff" },
  { title: "Donor", clr: "red", fieldTitle: "Status_Donor" },
];

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
          <div className="px-6 py-4 font-medium text-gray-900 w-[100px]">
            Gender
          </div>
          <div className="px-6 py-4 font-medium text-gray-900  w-[150px]">
            DoB
          </div>
          <div className="px-6 py-4 font-medium text-gray-900  w-[200px]">
            Phone / Cell
          </div>

          {dataStatus.map((status: any, key: number) => {
            return (
              <>
                <div
                  key={key}
                  className="px-0 py-4 font-medium text-gray-900  w-[50px] text-center justify-center border-0"
                  style={{ color: status.clr }}
                >
                  {status.title}
                </div>
              </>
            );
          })}

          <div className="px-6 py-4 font-medium text-gray-900">Team</div>
          <div className="px-6 py-4 font-medium text-gray-900">Team</div>
        </div>
        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {members &&
            members.map((member: any, key: number) => {
              return (
                <>
                  <div
                    key={key}
                    className=" group hover:bg-gray-50 flex flex-row h-[75px]"
                  >
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

                    <div className="px-6 py-7 w-[100px] border-0  ">
                      <Gender gender={member["Gender"]} />
                    </div>

                    <div className="px-6 py-6 w-[150px] border-0">
                      {/* <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        Active
                      </span> */}
                      <span>
                        {member.DoB
                          ? moment.utc(member.DoB).format("YYYY-MM-DD")
                          : ""}
                      </span>
                    </div>

                    <div className="  px-1 py-4 flex flex-col w-[200px]">
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

                    {dataStatus.map((status: any, key: number) => {
                      return (
                        <>
                          <div className="px-0 py-7 w-[50px] border-0  justify-center text-center flex   ">
                            {member[status.fieldTitle] ? (
                              <CiFaceSmile color={status.clr} size="20" />
                            ) : (
                              ""
                            )}
                          </div>
                        </>
                      );
                    })}

                    {/* <div className="px-6 py-4">
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
                    </div> */}

                    <div className="px-7 py-5 border-0">
                      <div className="flex  justify-end gap-4 border-0 text-gray-100 group-hover:text-gray-400 ">


                        <span className="border-0 hover:cursor-pointer hover:text-red-500 ">
                          <PiTrashThin size={30} />
                        </span>
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

function Gender({ gender }: any) {
  if (gender === "M") {
    return (
      <>
        <MdBoy size={30} color="DeepSkyBlue" />
      </>
    );
  }

  if (gender === "F") {
    return (
      <>
        <MdGirl size={30} color="HotPink" />
      </>
    );
  }

  return (
    <div className="ml-2">
      <FaQuestion size={15} color="gray" />
    </div>
  );
}
