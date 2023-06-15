import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "./nav.js";

export default function Layout({ children }) {
  const { data: session } = useSession();

  console.log({ children });
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
    <div className="bg-purple-500 w-screen h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4 ">
        {children}
      </div>
    </div>
  );
}
