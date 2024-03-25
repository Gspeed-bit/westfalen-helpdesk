import Link from "next/link";
const NotFound = () => {
  return (
    <main className="text-center">
      <h1 className="text-3xl"> There is a problem.</h1>
      <p className="pt-4 text-lg">
        We could not find the page you were looking for.
      </p>
      <p className="text-lg ">
        Go back to the{" "}
        <Link className=" hover:text-purple-500" href="/">
          {" "}
          Dashboard{" "}
        </Link>
      </p>
    </main>
  );
};
export default NotFound;
