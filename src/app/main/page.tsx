import Logout from "@/components/logout/logout";
import { getUser } from "@/services/user/get-user";

export default async function Main() {
  const user = await getUser();

  return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col gap-4">
      <h1>Bonsoir {user.username}</h1>
      <Logout />
    </main>
  );
}
