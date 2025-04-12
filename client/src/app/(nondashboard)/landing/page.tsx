"use client";
import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import DiscoverSection from "./DiscoverSection";
import CallToActionSection from "./CallToActionSection";
import FooterSection from "./FooterSection";
import ChatBotDialog from "./ChatBot";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
      <ChatBotDialog />
    </div>
  );
};

export default Landing;
