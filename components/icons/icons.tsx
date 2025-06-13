import * as React from "react";

export const ArrowIcon = ({ listStatus }: { listStatus: boolean }) => (
  <svg id="toggle-icon-2" 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 20 20" fill="currentColor" 
  className={`w-4 h-4 transition-transform duration-300 ease-in-out transform origin-center ${listStatus ? "rotate-180" : "rotate-0"}`}>
  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
  </svg>
);
