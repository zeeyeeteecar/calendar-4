import React from "react";
import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";

import Result_SearchClass from "./components/Result_SearchClass";
import SearchMember from "./components/SearchMember";

let globe_MemberSearchResult = null;
let globe_Selected_MemberInfo = null;
let globe_SelectedMember_RegisterInfo = null;

//====================================================
async function handle_SearchMember(data: FormData) {
  "use server";
  const Fname = data.get("Fname")?.valueOf().toString();
  const Lname = data.get("Lname")?.valueOf().toString();
  const MemberID = data.get("MemberID")?.valueOf();

  // if (typeof Fname !== "string" || Fname.length === 0) {
  //   throw new Error("Invalid title");
  // }

  globe_MemberSearchResult = await prisma.tMaster.findMany({
    where: {
      Fname: { contains: Fname },
      Lname: { contains: Lname },
      tMasterID: MemberID ? Number(MemberID) : undefined,
    },
  });

  //redirect("/");
  globe_Selected_MemberInfo = null;
  revalidatePath("/");
  console.log("globe_MemberSearchResult", globe_MemberSearchResult);
}

///========================================================
// async function handle_radioChanged(formData: FormData) {
//   "use server";
//   const memberID = formData.get("memberID");
//   console.log(memberID);
//   globe_Selected_MemberInfo = await prisma.tMaster.findFirst({
//     where: {
//       tMasterID: Number(memberID),
//       tEvents: { some: { MemberID: Number(memberID) } },
//     },
//     include: { tEvents: { include: { tEvents: true } } },
//     orderBy: [{ tMasterID: "asc" }],
//   });

//   revalidatePath("/");
//   console.log("uniqueMemberSearch", globe_Selected_MemberInfo);
// }

// ///========================================================
async function handle_radioChanged(formData: FormData) {
  "use server";
  const memberID = formData.get("memberID");
  console.log(memberID);
  globe_SelectedMember_RegisterInfo = await prisma.tMemberRegEvent.findMany({
    where: {
      MemberID: Number(memberID),
    },
    include: { tEvents: {} },
    orderBy: [{ EventID: "desc" }],
  });

  revalidatePath("/");
  console.log("globe_SelectedMember_RegisterInfo", globe_SelectedMember_RegisterInfo);
}

///========================================================

export default function registration() {
  return (
    <div className="w-screen h-screen border-0 flex flex-row p-3 font-light">
      <div className="w-1/3 h-full border-2 m-0 ">
        <SearchMember
          globe_MemberSearchResult={globe_MemberSearchResult}
          globe_Selected_MemberInfo={globe_Selected_MemberInfo}
          handle_SearchMember={handle_SearchMember}
          handle_radioChanged={handle_radioChanged}
        />
      </div>
      <div className="w-1/3 border-2 m-1">
        <Result_SearchClass
          globe_MemberSearchResult={globe_MemberSearchResult}
          globe_SelectedMember_RegisterInfo={globe_SelectedMember_RegisterInfo}
        />
      </div>
      <div className="w-1/3 border-2 m-1"></div>
    </div>
  );
}
