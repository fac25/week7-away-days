import React from "react";
import EditProfileComponent from "../components/profile/EditProfileComponent";

export default function EditProfile({ user }) {
  return (
    <div>
      <EditProfileComponent user={user} />
    </div>
  );
}
