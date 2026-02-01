import { useSession } from "@/store/session";
import React from "react";
import { Navigate, Outlet } from "react-router";

const GuestOnlyLayout = () => {
  const session = useSession();

  if (session) return <Navigate to={"/"} replace={true} />;

  return <Outlet />;
};

export default GuestOnlyLayout;
