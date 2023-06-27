import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/layout.js";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return;
  return (
    <Layout>
      <div className="text-purple-900 flex justify-between">
        <h2>
          {" "}
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-purple-200 gap-1 text-black rounded-2xl p-0.5">
          <img
            className="rounded-full w-8 h-8"
            src={session?.user?.image}
            referrerPolicy="no-referrer"
            alt="userImg"
          />
          <span className="p-1 pr-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
