// "use client";
// import { promises } from "dns";
// import { useSession } from "next-auth/react";

// import React from "react";

// export default function loginSessionInfo() {
//   const { data: session, status } = useSession();

//   console.log("session", session);

//   const nextAuthSession: any = session;

//   //return <>{JSON.stringify(nextAuthSession)}</>;
//   return <>{nextAuthSession?.user.UserLevel}</>;
// }

import { authOptions } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function LoginSessionInfo() {
  const session = await getServerSession(authOptions);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
