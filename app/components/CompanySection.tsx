"use client";

import { ArrowIcon } from "@/components/icons/icons";
import { Building } from "lucide-react";

import { useState } from "react";

import { SlimUser } from "@/types/user";

import { TypographyMuted } from "@/components/ui/typography";

export default function CompanySection({ user }: { user: SlimUser }) {
  const [listStatus, setListStatus] = useState(false);

  return (
    <div
      className="relative mb-3 transform cursor-pointer rounded-md bg-slate-50 p-3 transition-all duration-700 ease-in-out"
      onClick={() => setListStatus(!listStatus)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-3 inline-flex items-center justify-center rounded-md bg-slate-200 p-2">
            <Building className="h-5 w-5 text-purple-500" />
          </div>
          <div>
            <TypographyMuted>Company</TypographyMuted>
            <p className="text-sm text-slate-700">{user.company.name}</p>
          </div>
        </div>

        <ArrowIcon listStatus={listStatus} />
      </div>
      {listStatus && (
        <div className="left-0 mt-3 max-h-50 w-full border-t pt-2 transition-[max-height] duration-300 ease-in-out">
          <p className="mb-1 text-xs text-slate-500">Tagline</p>
          <p className="mb-2 text-sm text-slate-700">
            {user.company.catchPhrase}
          </p>
          <p className="mb-1 text-xs text-slate-500">Business</p>
          <p className="mb-2 text-sm text-slate-700">{user.company.bs}</p>
        </div>
      )}
    </div>
  );
}
