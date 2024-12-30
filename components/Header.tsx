"use client";
import React from "react";
import { FcBriefcase, FcLike } from "react-icons/fc";

export default function Header() {
  return (
    <>
      {/* Additional Section */}
      <div className="flex items-center justify-between px-8 py-2 bg-white shadow-sm border-b">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          <img
            src="/Intuit_Logo.png"
            alt="Intuit Logo"
            className="w-24"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <div className="cursor-pointer flex items-center hover:text-gray-700">
            <FcBriefcase className="text-lg mr-1" />
            <span className="text-sm font-medium">Job Alerts</span>
          </div>
          <div className="cursor-pointer flex items-center hover:text-gray-700">
            <FcLike className="text-lg mr-1" />
            <span className="text-sm font-medium">0 Saved Jobs</span>
          </div>
        </div>
      </div>

      {/* Responsive Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between px-8 py-4 shadow-sm border-b">
        {/* Main Title */}
        <div className="text-xl font-semibold text-center md:text-left">
          Careers at Intuit
        </div>

        {/* Navigation (Hidden on Small Screens) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Dropdown
            title="Job Categories"
            options={[
              "Engineering",
              "Marketing",
              "Sales",
              "Design & User Experience",
              "Finance",
              "Software Engineering",
            ]}
          />
          <Dropdown
            title="Programs"
            options={["Internships", "Full-time", "Part-time"]}
          />
          <Dropdown
            title="Locations"
            options={["New York", "San Francisco", "Los Angeles"]}
          />
          <Dropdown
            title="Intuit Life"
            options={["Culture", "Work-Life Balance", "Employee Stories"]}
          />
          <div className="cursor-pointer hover:text-gray-700">Technology</div>
        </nav>
      </header>
    </>
  );
}

function Dropdown({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 font-medium text-gray-800 hover:text-gray-700">
        {title}
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div className="absolute hidden group-hover:block bg-white shadow-lg border mt-2 rounded-md w-48">
        <ul className="text-sm text-gray-800 py-2">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
