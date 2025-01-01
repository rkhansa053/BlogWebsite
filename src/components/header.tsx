import Link from "next/link";

export default function Header() {
    return(
        <div>
            <header className="text-gray-400 bg-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

      <span className="ml-3 text-xl">Khansa Rahman</span>
    </a>
    <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-5">
      <li>
        <Link href="/">Home</Link>
        </li>
        <li>
        <Link href="/blog">Blog</Link>
        </li>
        <li>
        <Link href="/contactus">Contact Us</Link>
        </li>
    </ul>
  </div>
</header>

        </div>
    )
};