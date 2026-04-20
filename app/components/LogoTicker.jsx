import Image from "next/image";



export default function LogoTicker() {
  return (
    <div className="container">
      <div className="">
        <div>
          <Image
            className=""
            src="/logo.svg"
            alt="logo image"
            width={100}
            height={100}
          />
        </div>
      
        <div className="flex justify-end">
          {/* here svg image */}
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 md:hidden">
            <path strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
       
        </div>
      </div>
    </div>
  )
}
