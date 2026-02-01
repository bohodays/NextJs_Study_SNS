import { useSession } from "@/store/session";
import React from "react";
import { Navigate, Outlet } from "react-router";

const MemberOnlyLayout = () => {
  const session = useSession();

  if (!session) return <Navigate to={"/sign-in"} replace={true} />;

  return <Outlet />;
};

export default MemberOnlyLayout;
