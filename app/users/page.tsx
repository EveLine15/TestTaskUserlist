import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { EmailIcon, CompanyIcon } from "@/components/icons/icons";
import ViewDetailsLink from "../components/ViewDetailsLink";

interface User {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export default async function UsersList() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();  

    return (
        <div className="max-w-[1440px] mx-auto px-4 py-8">
            <h1 className="text-3xl sm:text-2xl md:text-5xl font-bold text-slate-900 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                users?.map(user => (
                    <div key={user.id}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{user.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-slate-50 rounded-md p-3 mb-3 border border-slate-200">
                                    <div className="flex items-center">
                                        <div className="bg-slate-200 p-2 rounded-md inline-flex items-center justify-center mr-3">
                                            <EmailIcon/>
                                        </div>
                                        <div>
                                            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1 bg-slate-100 px-2 py-1 rounded">Email</span>
                                            <p className="text-sm text-slate-800">{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <ViewDetailsLink userId={user.id.toString()}/>
                            </CardFooter>
                        </Card>
                    </div>
                ))
            }
            </div>
        </div>
    )
}