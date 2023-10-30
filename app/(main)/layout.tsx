"use client"

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {

  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg"/>
      </div>
    )
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return ( 
    <div>
      {children}
    </div>
   );
}
 
export default MainLayout;