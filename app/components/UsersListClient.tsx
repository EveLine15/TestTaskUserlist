"use client";

import { useState, useMemo } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TypographyMuted } from "@/components/ui/typography";

import { motion, AnimatePresence } from "framer-motion";

import { Search, Mail } from "lucide-react";

import ViewDetailsLink from "./ViewDetailsLink";
import CompanySection from "./CompanySection";

import { SlimUser } from "@/types/user";

export default function UsersListClient({ users }: { users: SlimUser[] }) {
  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    if (search.length > 1) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return users;
  }, [search, users]);

  return (
    <div>
      <div className="relative w-full">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
          className="mb-6 w-full"
        />
        <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-500" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredList.map((user) => (
            <motion.div
              key={user.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div key={user.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {user.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3 rounded-md bg-slate-50 p-3">
                      <div className="flex items-center">
                        <div className="mr-3 inline-flex items-center justify-center rounded-md bg-slate-200 p-2">
                          <Mail className="h-5 w-5 text-purple-500" />
                        </div>
                        <div>
                          <TypographyMuted>Email</TypographyMuted>
                          <p className="text-sm text-slate-700">{user.email}</p>
                        </div>
                      </div>
                    </div>

                    <CompanySection user={user} />
                  </CardContent>

                  <CardFooter>
                    <ViewDetailsLink userId={user.id.toString()} />
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
