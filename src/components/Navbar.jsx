import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-slate-800">
      <Link className="font-bold text-white" href={"/"}>
        CRUD App.
      </Link>
      <Link className="p-2 bg-white" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
