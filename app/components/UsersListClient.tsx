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

import { motion, AnimatePresence } from "framer-motion";

import { EmailIcon } from "@/components/icons/icons";
import { Search } from "lucide-react";

import ViewDetailsLink from "./ViewDetailsLink";
import CompanySection from "./CompanySection";

import { SlimUser } from "@/types/user";

export default function UsersListClient({ users }: { users: SlimUser[] }) {
  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    if (search.length > 1) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
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
            className="w-full mb-6"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <CardTitle className="text-xl font-semibold text-purple-700">
                        {user.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-slate-50 rounded-md p-3 mb-3 border border-slate-200">
                        <div className="flex items-center">
                            <div className="bg-slate-200 p-2 rounded-md inline-flex items-center justify-center mr-3">
                            <EmailIcon />
                            </div>
                            <div>
                            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1 bg-slate-100 px-2 py-1 rounded">
                                Email
                            </span>
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
