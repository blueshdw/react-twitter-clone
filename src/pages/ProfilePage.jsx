import React from "react";
import { Outlet, useParams } from "react-router-dom";

const ProfilePage = () => {
  const slug = useParams()
  return (
    <div>
      ProfilePage
      <Outlet />
    </div>
  );
};

export default ProfilePage;
