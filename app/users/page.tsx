import UsersListClient from "../components/UsersListClient";
import { SlimUser } from "@/types/user";

export default async function UsersList() {
  let users: SlimUser[] = [];

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      users = await response.json();

    } catch (error: any) {
      throw new Error(`Unable to fetch users: ${error.message || 'Unexpected error occurred.'}`);
    }

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <h1 className="text-4xl sm:text-2xl md:text-5xl font-bold text-purple-500 mb-6">
        Dashboard
      </h1>
      <UsersListClient users={users} />
    </div>
  );
}
