import Image from "next/image"
import Link from "next/link"

export default function author({ data }) {
    const { name, img, designation } = data;

    if(!name && !img) return <></>

    return (
        <div className="author flex py-5">
            <img src={img || "/"} className="rounded-full w-[60px] h-[60px]"/>
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"}>
                    <a className="text-md font-bold text-gray-800 hover:text-gray-600">
                        {name || ""}
                    </a>
                </Link>
                <span className="text-sm text-gray-500">
                    {designation || ""}
                </span>
            </div>
        </div>
    )
}
