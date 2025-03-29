"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  //   const dispatch = useDispatch();
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const router = useRouter();

  //   const handleLocationSearch = async () => {
  //     try {
  //       const trimmedQuery = searchQuery.trim();
  //       if (!trimmedQuery) return;

  //       const response = await fetch(
  //         `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
  //           trimmedQuery
  //         )}.json?access_token=${
  //           process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  //         }&fuzzyMatch=true`
  //       );
  //       const data = await response.json();
  //       if (data.features && data.features.length > 0) {
  //         const [lng, lat] = data.features[0].center;
  //         dispatch(
  //           setFilters({
  //             location: trimmedQuery,
  //             coordinates: [lat, lng],
  //           })
  //         );
  //         const params = new URLSearchParams({
  //           location: trimmedQuery,
  //           lat: lat.toString(),
  //           lng: lng,
  //         });
  //         router.push(`/search?${params.toString()}`);
  //       }
  //     } catch (error) {
  //       console.error("error search location:", error);
  //     }
  //   };

  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="Rentiful Rental Platform Hero Section"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Start your journey to find the perfect rental apartment
          </h1>

          <p className="text-xl text-white mb-8">
            Explore our wide range of rental apartments and find your dream home
            today.
          </p>
          <div className="flex justify-center mt-4">
            <Input
             
             type="text"
             value="searchQuery"
             onChange={() => {}}
             placeholder="Search by city, neighborhood or address"
             className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
           /><Button
              onClick={()=> {}}
              className="bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12"
            >
              Search
            </Button>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
