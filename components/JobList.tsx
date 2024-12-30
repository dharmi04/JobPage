"use client";
import React, { useState } from "react";
import { jobs } from "@/data/Jobdata";
import { BiHeart } from "react-icons/bi";
import { useRouter } from "next/navigation";

const JobList = () => {
  // State to manage filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    category: null,
    location: null,
  });

  // State to manage UI elements
  const [isJobCategoryExpanded, setIsJobCategoryExpanded] = useState(false);
  const [islocationExpanded, setIslocationExpanded] = useState(false);
  const [favoritedJobs, setFavoritedJobs] = useState<{ [key: number]: boolean }>({});
  const [selectedJob, setSelectedJob] = useState<any | null>(null); // For job detail popup
  const router = useRouter();

  // Handle filtering by category
  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Handle adding/removing job to/from favorites
  const toggleFavorite = (jobId: number) => {
    setFavoritedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  // Handle clicking on a job card to show details in a popup
  const handleCardClick = (job: any) => {
    setSelectedJob(job);
  };

  // Navigate to detailed job description
  const handleReadMore = (jobId: number) => {
    router.push(`/jobs/${jobId}`);
  };

  // Handle filter changes (for dropdowns or checkboxes)
  const handleFilterChange = (key: string, value: string | null) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Clear all applied filters
  const clearFilters = () => {
    setFilters({
      category: null,
      location: null,
    });
    setSelectedCategory(null);
  };

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = filters.category ? job.category === filters.category : true;
    const matchesLocation = filters.location ? job.location === filters.location : true;

    return matchesCategory && matchesLocation;
  });

  return (
    <div className="p-6 flex flex-row gap-4">
      {/* Left Section: Job List */}
      <div className="w-3/5">
        {/* Category Buttons */}
        {/* <div className="flex space-x-4 mb-6">
          {["Remote", "Engineering", "Data", "Tax"].map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`px-4 py-2 border rounded ${
                selectedCategory === category ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {category}
            </button>
          ))}
          {selectedCategory && (
            <div className="mb-4">
              Filtered by:{" "}
              <span className="bg-gray-200 px-2 py-1 rounded">{selectedCategory}</span>{" "}
              <button
                onClick={clearFilters}
                className="text-blue-500 underline"
              >
                Clear
              </button>
            </div>
          )}
        </div> */}

        {/* Job List */}
        <h2 className="text-xl font-bold mb-4">{filteredJobs.length} jobs found</h2>
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="border p-4 mb-4 rounded shadow hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
            onClick={() => handleCardClick(job)}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-2">
                <h3 className="text-blue-600 font-semibold">
                  {job.title}, <span className="text-gray-600">{job.company}</span>
                </h3>
                <p>{job.location}</p>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click from triggering
                  toggleFavorite(job.id);
                }}
                className="cursor-pointer"
              >
                <BiHeart
                  className={`text-2xl ${
                    favoritedJobs[job.id] ? "text-red-500" : "text-gray-500"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Filters */}
      <div className="w-2/5 p-4 mt-14 bg-white">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>

        {/* Job Category Filter */}
        <div className="border-b border-gray-300">
          <button
            className="flex justify-between w-full text-search font-semibold py-3"
            onClick={() => setIsJobCategoryExpanded(!isJobCategoryExpanded)}
          >
            Job Category
            <span className="text-gray-500">{isJobCategoryExpanded ? "-" : "+"}</span>
          </button>
          {isJobCategoryExpanded && (
            <ul className="space-y-2 pl-4">
              {["Administration", "Engineering", "Finance", "Tax"].map((category) => (
                <li key={category}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={(e) =>
                        handleFilterChange("category", e.target.checked ? category : null)
                      }
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* location Filter */}
        <div className="border-b border-gray-300">
          <button
            className="flex justify-between w-full text-search font-semibold py-3"
            onClick={() => setIslocationExpanded(!islocationExpanded)}
          >
            Location
            <span className="text-gray-500">{islocationExpanded ? "-" : "+"}</span>
          </button>
          {islocationExpanded && (
            <ul className="space-y-2 pl-4">
              {["Canada", "Remote", "New York", "San Francisco"].map((location) => (
                <li key={location}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={(e) =>
                        handleFilterChange("location", e.target.checked ? location : null)
                      }
                    />
                    {location}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Job Detail Popup */}
      {selectedJob && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-xl w-2/5 max-w-xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-search transition duration-200"
              aria-label="Close popup"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{selectedJob.title}</h3>
            <p className="text-lg text-gray-600 font-medium mb-1">{selectedJob.company}</p>
            <p className="text-gray-500 mb-3">{selectedJob.location}</p>
            <p className="text-gray-700 mb-6">{selectedJob.shortDescription}</p>
            <button
              onClick={() => handleReadMore(selectedJob.id)}
              className="bg-search text-white font-bold px-5 py-2 border border-black rounded-lg shadow-md hover:bg-white hover:text-search hover:to-blue-800 transition duration-300"
            >
              Read More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;
