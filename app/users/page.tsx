import UsersListClient from "../components/UsersListClient";
import { SlimUser } from "@/types/user";
import { TypographyH1 } from "@/components/ui/typography";

export default async function UsersList() {
  let users: SlimUser[] = [];

  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error(
      `Failed to fetch user: ${response.status} ${response.statusText}`,
    );
  }

  users = await response.json();

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8">
      <TypographyH1 children="Dashboard" />
      <UsersListClient users={users} />
    </div>
  );
}
