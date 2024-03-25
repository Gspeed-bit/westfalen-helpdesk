import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.png";

const Navbar = () => {
  return (
    <nav>
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <h1>MFM Westfalen | HelpDesk</h1>
      </Link>
      <Link href="/"> Dashboard</Link>
      <Link href="/tickets"> Tickets</Link>
    </nav>
  );
};
export default Navbar;
