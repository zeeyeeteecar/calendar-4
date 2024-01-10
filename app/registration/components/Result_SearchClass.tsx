import React from "react";
import moment from "moment";
import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/db";

export default async function SearchClass({
  globe_MemberSearchResult,
  globe_SelectedMember_RegisterInfo,
}: any) {
  console.log(
    globe_SelectedMember_RegisterInfo ? globe_SelectedMember_RegisterInfo : null
  );

  const globe_SelectedMember_RegisterInfo_test = await prisma.tMemberRegEvent.findMany(
    {
      where: {
        MemberID: 613,
      },
      include: { tEvents: {} },
      orderBy: [{ EventID: "desc" }],
    }
  );

  return (
    <div className="h-full overflow-visible overflow-y-auto">
      <form>
        {globe_SelectedMember_RegisterInfo_test &&
          globe_SelectedMember_RegisterInfo_test.map(
            (registerInfo: any, key: number) => {
              const eventInfo = registerInfo.tEvents;

              const memberID = registerInfo.MemberID;
              const registerOnHold = registerInfo.PreHold;

              const eventID = eventInfo.Event_ID;
              const eventTitle = eventInfo.Event_Title;
              const eventStart_Date = eventInfo.Start_Date;
              const eventEnd_Date = eventInfo.End_Date;
              const eventStart_Time = eventInfo.Start_Time;
              const eventEnd_Time = eventInfo.End_Time;
              const eventFee = eventInfo.Event_Fee;

              return (
                <div
                  key={key}
                  className="border-0 m-2 flex flex-row p-2 space-x-2"
                >
                  <div className="w-[30px] border-0">
                    {registerOnHold ? (
                      <input
                        type="checkbox"
                        className="w-[25px] h-[25px] border-0 border-gray-50 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 outline-none"
                        value={""}
                      />
                    ) : null}
                  </div>
                  <div className="border-0">
                    {" "}
                    {registerOnHold ? (
                      <span className="rounded-full bg-pink-100 text-pink-500 text-xs font-semibold inline-block w-[80px] text-center">
                        on hold
                      </span>
                    ) : (
                      <span className="rounded-full bg-green-100 text-green-500 text-xs font-semibold inline-block w-[80px] text-center">
                        Registered
                      </span>
                    )}
                    <span className="mx-2">{eventTitle}</span>
                    {/* {memberID}
                  {registerOnHold} */}
                    <div className="space-x-1">
                      <span className=" border-0 text-slate-300 text-xs text-center w-[90px] inline-block">
                        # :{eventID}
                      </span>
                      <span className="text-sm text-slate-400">
                        {eventStart_Date}
                      </span>
                      <span> -- </span>
                      <span className="text-sm text-slate-400">
                        {eventEnd_Date}
                      </span>
                    </div>
                    <div className="space-x-1">
                      <span className="w-[90px] inline-block"></span>
                      <span className="text-sm text-slate-400">
                        {moment(eventStart_Time, "hh:mm:ss").format("hh:mm a")}
                      </span>
                      <span> -- </span>
                      <span className="text-sm text-slate-400">
                        {moment(eventEnd_Time, "hh:mm:ss").format("hh:mm a")}
                      </span>
                    </div>
                    <div>
                      <span className="w-[90px] inline-block"></span>
                      <span className="mx-2">{eventFee ? eventFee : ""}</span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </form>

      <div className="border-2 w-full">
        {JSON.stringify(
          globe_SelectedMember_RegisterInfo
            ? globe_SelectedMember_RegisterInfo
            : null
        )}
      </div>
    </div>
  );
}
