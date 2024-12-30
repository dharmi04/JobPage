"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { jobs } from "@/data/Jobdata";
import Header from "@/components/Header";
import JobSearch from "@/components/JobSearch";

const JobDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const jobId = parseInt(params.id);
  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <>
    <Header />
    <JobSearch />
    <div className="flex md:flex-row flex-col md:p-10 p-4 ">
        {/* left */}
       <div className="w-3/4 mt-9 space-y-4" >
        <h1 className="font-bold text-3xl ">{job.title}</h1>
        <p className="text-gray-500">Category: <span className="text-black">{job.category}</span></p>
        <p className="text-gray-500">Location: <span className="text-black">{job.location}</span></p>
        <button className="bg-search text-white p-2 border border-black rounded-lg w-60 hover:bg-white hover:text-search ">Apply</button>
       </div>

    {/* Right */}

    <div className="md:p-6 p-2 md:ml-10 space-y-2">
      {/* <button
        onClick={() => router.back()}
        className="text-blue-500 underline mb-4"
      >
        Go Back
      </button> */}
    
      <h1 className="text-xl font-bold mb-2">Company Overview</h1>
      <div className="flex flex-row md:space-x-4">
      <div className="strip w-[10px] h-[70px] bg-gradient-to-b from-purple-800 via-blue-700 to-green-800 flex-shrink-0">
</div>

        <div>
      <p className="mb-2 text-gray-500">{job.companyOverview}</p>
        </div>
        </div>
      
      <h1 className="text-xl font-bold mb-2">Job Overview</h1>
      <p className="mb-2 text-gray-500">{job.fullDescription}</p>
    </div>
    </div>
    
    </>
    
  );
};

export default JobDetail;
