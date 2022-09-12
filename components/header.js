import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";

export default function header() {
  return (
    <header className="bg-gray-50 border-b-2 border-b-stone-200 border-spacing-x-2.5 fixed top-0 z-50 w-full">
        <div className="xl:container xl:mx-auto flex sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input type="text" className="input-text" placeholder="Search..."></input>
            </div>
            <div className="shrink w-80 sm:order-1">
                <Link href={"/"}>
                    <a className="logo font-bold text-4xl text-rose-600">marcel</a>
                </Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6 justify-center items-center">
                    <Link href={"/"}><a><ImFacebook color="#888888"/></a></Link>
                    <Link href={"/"}><a><ImTwitter color="#888888"/></a></Link>
                    <Link href={"/"}><a><ImYoutube color="#888888"/></a></Link>
                </div>
            </div>
        </div>
    </header>
  )
}
