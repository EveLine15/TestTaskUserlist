import { notFound } from "next/navigation";
import { UserType } from "@/types/user";

import { Card } from "@/components/ui/card";

import { User, Mail, Phone, Globe, MapPin, Building, Briefcase, MessageSquareQuote, ArrowLeft } from "lucide-react"

import Link from "next/link";

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

  const { userId } = await params;
  const user: UserType | null = await fetchUser(userId);

  if (!user) {
    notFound();
  }

  return (
    <div className="max-w-[1440px] mx-auto p-6 space-y-7">
        <h1 className="text-4xl sm:text-2xl md:text-5xl font-bold text-purple-500 mb-6">User Profile</h1>

        <Card className="overflow-hidden bg-white shadow-md">
          <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 p-6 text-white">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-white">
                <User size={40} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-white/80">@{user.username}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-2">
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Personal Information</h3>

              <div className="space-y-3 rounded-lg bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">Email</p>
                    <p className="text-slate-900">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">Phone</p>
                    <p className="text-slate-900">{user.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="mt-1 h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">Website</p>
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:underline"
                    >
                      {user.website}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Address</h3>

              <div className="space-y-3 rounded-lg bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-pink-400" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-700">Location</p>
                    <p className="text-slate-900">{user.address.street}</p>
                    <p className="text-slate-900">{user.address.suite}</p>
                    <p className="text-slate-900">
                      {user.address.city}, {user.address.zipcode}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4 md:col-span-2">
              <h3 className="text-lg font-semibold text-slate-900">Company</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3 rounded-lg bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <Building className="mt-1 h-5 w-5 text-purple-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Company Name</p>
                      <p className="text-slate-900">{user.company.name}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-1 h-5 w-5 text-purple-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Business</p>
                      <p className="text-slate-900">{user.company.bs}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-slate-50 p-4 md:col-span-2">
                  <div className="flex items-start gap-3">
                    <MessageSquareQuote className="mt-1 h-5 w-5 text-purple-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Catch Phrase</p>
                      <p className="italic text-slate-900">"{user.company.catchPhrase}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Card>

        <div className="flex justify-end ">
          <Link
              className="flex items-center text-lg font-semibold text-slate-900 transition duration-200 hover:text-pink-400 hover:-translate-y-0.5"
              href={"/users"}>
              <ArrowLeft className="w-5 h-5"/>
              <p>Back to dashbord</p>
          </Link>
        </div>

    </div>
  );
}
