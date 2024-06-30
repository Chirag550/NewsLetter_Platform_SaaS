"use client";

import { useUser } from "@clerk/nextjs";

const Main = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="p-5 w-full bg-[#f9fafb]">
      <h1 className="text-2xl text-surface-900 font-medium">
        Hi {user?.fullName} 👋
      </h1>
    </div>
  );
};

export default Main;
