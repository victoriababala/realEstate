"use client";
import Loading from "@/components/Loading";
import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateManagerSettingsMutation,
} from "@/state/api";
import React from "react";

const ManagerSettingsPage = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateManagerSettings] = useUpdateManagerSettingsMutation();

  if (isLoading) return <Loading />;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber,
  };

  const handleSubmit = async (data: typeof initialData) => {
    try {
      await updateManagerSettings({
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
        userType="manager"
      />
    </div>
  );
};

export default ManagerSettingsPage;
