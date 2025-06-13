"use client";

import { ArrowIcon } from "@/components/icons/icons";
import { Building } from "lucide-react";

import { useState } from "react";

import { SlimUser } from "@/types/user";

export default function CompanySection({ user }: { user: SlimUser }) {
  const [listStatus, setListStatus] = useState(false);

  return (
    <div
      className="bg-slate-50 rounded-md p-3 mb-3 border border-slate-200 relative cursor-pointer transform transition-all duration-700 ease-in-out"
      onClick={() => setListStatus(!listStatus)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-slate-200 p-2 rounded-md inline-flex items-center justify-center mr-3">
            <Building className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1 bg-slate-100 px-2 py-1 rounded">
              Company
            </span>
            <p className="text-sm text-slate-700">{user.company.name}</p>
          </div>
        </div>

        <ArrowIcon listStatus={listStatus} />
      </div>
      {listStatus && (
        <div className="left-0 mt-3 pt-2 border-t w-full transition-[max-height] duration-300 ease-in-out max-h-50">
          <p className="text-xs text-slate-500 mb-1">Tagline</p>
          <p className="text-sm text-slate-700 mb-2">
            {user.company.catchPhrase}
          </p>
          <p className="text-xs text-slate-500 mb-1">Business</p>
          <p className="text-sm text-slate-700 mb-2">{user.company.bs}</p>
        </div>
      )}
    </div>
  );
}
