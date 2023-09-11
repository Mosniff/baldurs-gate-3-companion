import Link from "next/link";

type Props = {};

function NavBar({}: Props) {
  return (
    <nav className="bg-black text-white font-sans p-2 text-xl">
      <Link href="/">
        <div className="capitalize">Classes</div>
      </Link>
    </nav>
  );
}

export default NavBar;
