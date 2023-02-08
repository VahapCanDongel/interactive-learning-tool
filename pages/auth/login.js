import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) return;
    if (user) {
      route.push("/");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-gray-700 to-gray-900 flex justify-center items-center">
      <div className="w-[600px] h-[600px] rounded-md flex flex-col justify-center items-center gap-10">
        <div className="text-white text-2xl">Login</div>
        <div className="text-white">Use one of the providers</div>
        <button
          onClick={GoogleLogin}
          className="bg-pink-800 rounded-md text-white p-2 w-[200px] flex justify-center items-center gap-4"
        >
          <svg
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.5 14.002a5.509 5.509 0 0 1-4.5 3.93 6.15 6.15 0 0 1-7-5.45 6 6 0 0 1 6-6.48 6.12 6.12 0 0 1 2.27.44.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.292a10.12 10.12 0 0 0 9.57 9.71A10 10 0 0 0 22 12.522v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"></path>
          </svg>
          Login
        </button>
      </div>
    </div>
  );
}
