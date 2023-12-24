import React from "react";
import { revalidatePath } from "next/cache";

import Member_Blcok_SearchList from "./components/Member_Blcok_SearchList";
import Members_Block_SearchBar from "./components/Members_Block_SearchBar";

//let globe_Search_Members_Results: any;
let globe_MemberSearchKeywords: {
  tMasterID: string;
  Fname: string;
  Lname: string;
  Address: string;
  PhoneHome: string;
} = { tMasterID: "", Fname: "", Lname: "", Address: "", PhoneHome: "" };

export default function page() {
  async function handle_Search_Members_Debounce(searchKeywords: any) {
    "use server";
    console.log("searchKeywords", searchKeywords);

    globe_MemberSearchKeywords = searchKeywords;
    revalidatePath("/members");
  }

  async function handle_Search_Members(data: FormData) {
    "use server";
    const tMasterID: string = data.get("tMasterID")?.valueOf().toString();
    const Fname: string = data.get("Fname")?.valueOf().toString();
    const Lname: string = data.get("Lname")?.valueOf().toString();
    const Address: string = data.get("Address")?.valueOf().toString();
    const PhoneHome: string = data.get("PhoneHome")?.valueOf().toString();

    globe_MemberSearchKeywords.tMasterID = tMasterID;
    globe_MemberSearchKeywords.Fname = Fname;
    globe_MemberSearchKeywords.Lname = Lname;
    globe_MemberSearchKeywords.Address = Address;
    globe_MemberSearchKeywords.PhoneHome = PhoneHome;

    console.log(Fname);

    //globe_MemberSearchKeywords.fname = Fname;

    // if (typeof barrageContent !== "string" || barrageContent.length === 0) {
    //   throw new Error("Invalid title");
    // }

    // const Search_Members_Results: any = await prisma.tMaster.findMany({
    //   where: { Fname: Fname },
    //   //take: 10,
    // });

    // globe_Search_Members_Results = await Search_Members_Results;
    // revalidatePath("/");

    // console.log("Fname", Fname);

    // console.log("globe_MemberSearchKeywords", globe_MemberSearchKeywords);
    revalidatePath("/members");
  }

  //console.log(globe_Search_Members_Results);

  return (
    <>
      <Members_Block_SearchBar
        //globe_Search_Members_Results={globe_Search_Members_Results}
        handle_Search_Members={handle_Search_Members}
        handle_Search_Members_Debounce={handle_Search_Members_Debounce}
      />
      <Member_Blcok_SearchList
        globe_MemberSearchKeywords={globe_MemberSearchKeywords}
      />
    </>
  );
}
