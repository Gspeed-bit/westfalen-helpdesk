import Link from "next/link";
import Image from "next/image";
import Logo from "../components/logo.png"

export default function layout({ children }) {
  return (
    <main>
      <nav>
        <div className="flex justify-between items-center mx-auto w-full">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" width={50} height={50} />
            <h1>MFM Westfalen | HelpDesk</h1>
          </Link>
          <div>
            <Link
              className="px-6 text-lg font-bold text-primary"
              href="/signup"
            >
              Signup
            </Link>
            <Link className="text-lg text-primary font-bold" href="/login">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </main>
  );
}
