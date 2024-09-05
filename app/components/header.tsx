import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white">
      <h1>Header</h1>

      <Link href={"/"}> home</Link>
    </header>
  );
};
