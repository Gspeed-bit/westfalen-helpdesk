import Image from "next/image";
import Link from "next/link";
import Logo from "./images/Logo.png";
const Navbar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Logo"
        width={50}
        height={50}
     
      />
      <h1>MFM Westfalen | HelpDesk</h1>
      <Link href="/"> Dashboard</Link>
      <Link href="/tickets"> Tickets</Link>
    </nav>
  );
};
export default Navbar;
