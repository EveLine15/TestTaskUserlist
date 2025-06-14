import { notFound } from "next/navigation";
import { UserType } from "@/types/user";

import { Card } from "@/components/ui/card";
import {
  TypographyMuted,
  TypographyP,
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
} from "@/components/ui/typography";

import {
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Building,
  Briefcase,
  MessageSquareQuote,
  ArrowLeft,
} from "lucide-react";

import Link from "next/link";

async function fetchUser(id: string): Promise<UserType> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch user: ${response.status} ${response.statusText}`,
    );
  }

  const data: UserType = await response.json();
  return data;
}

export default async function UserId({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await fetchUser(userId);

  return (
    <div className="mx-auto max-w-[1440px] space-y-7 p-6">
      <TypographyH1>User Profile</TypographyH1>

      <Card className="min-h-115 overflow-hidden bg-white shadow-md">
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

        <div className="grid gap-6 p-3 sm:p-6 md:grid-cols-2">
          <section className="space-y-4">
            <TypographyH2>Personal Information</TypographyH2>

            <div className="space-y-6 rounded-lg bg-slate-50 p-2 sm:p-4">
              <div className="flex items-start gap-1 sm:gap-3">
                <div className="mr-3 inline-flex items-center justify-center rounded-md bg-slate-200 p-2">
                  <Mail className="h-5 w-5 text-purple-500" />
                </div>

                <div>
                  <TypographyMuted>Email</TypographyMuted>
                  <TypographyP>{user.email}</TypographyP>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mr-3 inline-flex items-center justify-center rounded-md bg-slate-200 p-2">
                  <Phone className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <TypographyMuted>Phone</TypographyMuted>
                  <TypographyP>{user.phone}</TypographyP>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mr-3 inline-flex items-center justify-center rounded-md bg-slate-200 p-2">
                  <Globe className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <TypographyMuted>Website</TypographyMuted>
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-500 hover:underline md:text-base lg:text-lg"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <TypographyH2>Address</TypographyH2>

            <div className="space-y-3 rounded-lg bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <div className="mr-3 inline-flex items-center justify-center rounded-md bg-slate-200 p-2">
                  <MapPin className="h-5 w-5 text-pink-400" />
                </div>
                <div className="space-y-1">
                  <TypographyMuted>Location</TypographyMuted>
                  <TypographyP>{user.address.street}</TypographyP>
                  <TypographyP>{user.address.suite}</TypographyP>
                  <TypographyP>{`${user.address.city}, ${user.address.zipcode}`}</TypographyP>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4 md:col-span-2">
            <TypographyH2>Company</TypographyH2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 rounded-lg bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <div className="mr-3 inline-flex items-center justify-center rounded-md bg-slate-200 p-2">
                    <Building className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <TypographyMuted>Company name</TypographyMuted>
                    <TypographyP>{user.company.name}</TypographyP>
                  </div>
                </div>
              </div>

              <div className="space-y-3 rounded-lg bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <div className="mr-3 inline-flex items-center justify-center rounded-md bg-slate-200 p-2">
                    <Briefcase className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <TypographyMuted>Business</TypographyMuted>
                    <TypographyP>{user.company.bs}</TypographyP>
                  </div>
                </div>
              </div>

              <div className="space-y-3 rounded-lg bg-slate-50 p-4 md:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="mr-3 inline-flex items-center justify-center rounded-md bg-slate-200 p-2">
                    <MessageSquareQuote className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <TypographyMuted>Catch Phrase</TypographyMuted>
                    <TypographyBlockquote>
                      {user.company.catchPhrase}
                    </TypographyBlockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Card>

      <div className="flex justify-end">
        <Link
          className="flex items-center text-lg font-semibold text-slate-900 transition duration-200 hover:-translate-y-0.5 hover:text-pink-400"
          href={"/users"}
        >
          <ArrowLeft className="h-5 w-5" />
          <p>Back to dashboard</p>
        </Link>
      </div>
    </div>
  );
}
