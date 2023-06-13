import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "./components/nav";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-purple-500 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white text-black rounded-lg p-3"
            onClick={() => signIn("google")}
          >
            Sign with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-purple-500 w-screen h-screen">
      <Nav />
      <div>Logged In {session.user.email}</div>
    </div>
  );
}
