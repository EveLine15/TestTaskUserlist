import * as React from "react";

export const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" fill="currentColor" 
    className="w-4 h-4 text-slate-700">
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
  </svg>
);

export const CompanyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className="w-4 h-4 text-slate-700">
    <path fillRule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 01-.75-.75v0c0-.414.336-.75.75-.75h12.5c.414 0 .75.336.75.75v0a.75.75 0 01-.75.75H16v13a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 014 16.5zm2.5-11a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM6.5 8.25a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM6.5 11.5a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75z" 
    clipRule="evenodd"></path>
  </svg>
);

export const ArrowIcon = ({ listStatus }: { listStatus: boolean }) => (
  <svg id="toggle-icon-2" 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 20 20" fill="currentColor" 
  className={`w-4 h-4 transition-transform duration-300 ease-in-out transform origin-center ${listStatus ? "rotate-180" : "rotate-0"}`}>
  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
  </svg>
);
