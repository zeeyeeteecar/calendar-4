import React from "react";
import { prisma } from "../../lib/db";
import { revalidatePath } from "next/cache";

import Modal_Member_AddNew from "./Modal_Member_AddNew";

export default function Member_AddNew() {
  async function handle_Member_AddNew(Member_AddInfo: any) {
    "use server";

    console.log(Member_AddInfo);

    await prisma.tMaster.create({
      data: {
        Company: Member_AddInfo.Company,
        DoB: Member_AddInfo.DoB,
        Gender: Member_AddInfo.Gender,
        Lname: Member_AddInfo.Lname,
        Fname: Member_AddInfo.Fname,
        Family: Member_AddInfo.Family,
        Title: Member_AddInfo.Title,
        Address: Member_AddInfo.Address,
        Address2: Member_AddInfo.Address2,
        City: Member_AddInfo.City,
        Prov: Member_AddInfo.Prov,
        PhoneHome: Member_AddInfo.PhoneHome,
        Cell: Member_AddInfo.Cell,
        Email: Member_AddInfo.Email,
        Email2: Member_AddInfo.Email2,
        RenewalDate: Member_AddInfo.RenewalDate,
        Disability: Member_AddInfo.Disability,
        DateofReg: Member_AddInfo.DateofReg,
        VotingMbr: Member_AddInfo.VotingMbr,
        VotingMbr_Life: Member_AddInfo.VotingMbr_Life,
        Participant: Member_AddInfo.Participant,
        Affiliate: Member_AddInfo.Affiliate,
        Volunteer: Member_AddInfo.Volunteer,
        Board: Member_AddInfo.Board,
        Staff: Member_AddInfo.Staff,
        CSG: Member_AddInfo.CSG,
        Status_Donor: Member_AddInfo.Status_Donor,
        Notes: Member_AddInfo.Notes,
      },
    });

    //console.log("Free pizza!");
    revalidatePath("/");
  }

  return (
    <div>
      <Modal_Member_AddNew handle_Member_AddNew={handle_Member_AddNew} />
    </div>
  );
}
