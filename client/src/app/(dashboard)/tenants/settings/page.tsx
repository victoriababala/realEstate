"use client";
import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateTenantSettingsMutation,
} from "@/state/api";
import React from "react";

const TenantSettingsPage = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateTenantSettings] = useUpdateTenantSettingsMutation();
console.log("authUser", authUser);
  if (isLoading) return <>Loading...</>;

  const initialData = {
    name: authUser?.userInfo?.name,
    email: authUser?.userInfo?.email,
    phoneNumber: authUser?.userInfo?.phoneNumber,
  };

  const handleSubmit = async (data: typeof initialData) => {
    try {
      await updateTenantSettings({
        cognitoId: authUser?.userInfo?.cognitoId,
        ...data,
      }).unwrap();
      alert("Settings updated successfully!");
    } catch (error) {
      console.error("Error updating settings:", error);
      alert("Failed to update settings. Please try again.");
    }
  };

  return (
    <div className="pt-8 pb-5 px-8">
      <SettingsForm
        initialData={initialData}
        onSubmit={handleSubmit}
        userType="tenant"
      />
    </div>
  );
};

export default TenantSettingsPage;
