import Link from "next/link";

type Props = {};

function NavBar({}: Props) {
  return (
    <nav className="bg-black h-10 text-white">
      <Link href="/">
        <div className="capitalize">Dashboard</div>
      </Link>
    </nav>
  );
}

export default NavBar;
