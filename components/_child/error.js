import Image from "next/image";

export default function error() {
  return (
    <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-orange-600 py-10">Something Went Wrong</h1>
        <img src={"/images/404_Not_found.png"} className="w-[400px] h-[400px]"></img>
    </div>
  )
}
