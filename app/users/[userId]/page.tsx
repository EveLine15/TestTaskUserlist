import { notFound } from "next/navigation";
import { User } from "@/types/user";

import { DetailedInfoSection } from "@/app/components/DetailedInfoSection";

import { Card } from "@/components/ui/card";

import { ArrowLeftIcon } from "lucide-react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchUser(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) return null;
  return await response.json();
}

export default async function UserId({
  params,
}: {
  params: Promise<{userId: string}>;
}) {

  await sleep(5000); 

  const { userId } = await params;
  const user: User | null = await fetchUser(userId);

  if (!user) {
    notFound();
  }

  const basicInfo = {
    Name: user.name,
    Username: user.username,
    Email: user.email,
    Phone: user.phone,
    Website: user.website,
  };

  const addressInfo = {
    Street: user.address.street,
    Suite: user.address.suite,
    City: user.address.city,
    Zipcode: user.address.zipcode,
  };

  const companyInfo = {
    Name: user.company.name,
    "Catch Phrase": user.company.catchPhrase,
    Business: user.company.bs,
  };

  return (
    <div className="max-w-[1440px] mx-auto p-6 space-y-7">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl sm:text-2xl md:text-5xl font-bold text-purple-500 mb-6">User Details</h1>

        <div className="flex justify-end">
          <a
            href="/users"
            className="flex px-4 py-2 font-bold bg-gray-100 text-slate-900 hover:text-slate-700 transition"
          >
            <ArrowLeftIcon/>
            Back to Users
          </a>
        </div>
      </div>


      <Card className="bg-white shadow rounded-2xl p-6 space-y-4">
        <DetailedInfoSection title="Basic Information" data={basicInfo} />
        <hr className="border-gray-200" />
        <DetailedInfoSection title="Address" data={addressInfo} />
        <hr className="border-gray-200" />
        <DetailedInfoSection title="Company" data={companyInfo} />
      </Card>
    </div>
  );
}
