import React from "react";
import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/db";
import SearchMemberRow from "./SearchMemberRow";

let results_MemberSearch = null;

export default function SearchMember() {


  async function handle_SearchMember(data: FormData) {
    "use server";

    const Fname = data.get("Fname")?.valueOf().toString();
    const Lname = data.get("Lname")?.valueOf().toString();
    const tMasterID = data.get("tMasterID")?.valueOf();

    // if (typeof Fname !== "string" || Fname.length === 0) {
    //   throw new Error("Invalid title");
    // }

    results_MemberSearch = await prisma.tMaster.findMany({
      where: {
        Fname: { contains: Fname },
        Lname: { contains: Lname },
        tMasterID: tMasterID ? Number(tMasterID) : undefined,
      },
    });

    //redirect("/");
    revalidatePath("/");

    console.log("results_MemberSearch", results_MemberSearch);
  }

  function handle_radioChanged(e:any){
    //console.log(e.target.name)

  }

  return (
    <div>
      <header>SearchMember</header>
      <form action={handle_SearchMember} className="space-x-3 m-2 flex flex-row">
        <input
          type="text"
          name="Fname"
          className="border border-slate-300 rounded px-2 =py-1 w-full h-[40px]"
        ></input>
        <input
          type="text"
          name="Lname"
          className="border border-slate-300 rounded px-2 =py-1 w-full h-[40px]"
        ></input>
        <input
          type="text"
          name="tMasterID"
          className="border border-slate-300 rounded px-2 =py-1 w-full h-[40px]"
        ></input>
        <button
          type="submit"
          className=" bg-yellow-100 d px-2 =py-1 w-full h-[40px] "
        >
          Search
        </button>
      </form>

      <div className="flex flex-col border-0 p-2">
        <div className="w-full h-full p-1 flex flex-col justify-center items-center border-0 ">
          {results_MemberSearch &&
            results_MemberSearch.map((member: any, key: number) => {
              return (
                <>
                <SearchMemberRow member={member} handle_radioChanged={handle_radioChanged}/>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
