import Image from "next/image"


export default function LogoTickerTwo() {
    return (
        <div className="container mx-auto py-30">
            <h1 className="text-3xl font-bold text-center text-white/50">
                Already chosen by these market leaders
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                <Image
                    className=""
                    src="/assets/images/celestial.svg"
                    alt="logo image"
                    width={200}
                    height={200}
                />
                <Image
                    className=""
                    src="/assets/images/acme-corp.svg"
                    alt="logo image"
                    width={200}
                    height={200}
                />
                <Image
                    className=""
                    src="/assets/images/echo-valley.svg"
                    alt="logo image"
                    width={200}
                    height={200}
                />
                <Image
                    className=""
                    src="/assets/images/outside.svg"
                    alt="logo image"
                    width={200}
                    height={200}
                />
                <Image
                    className=""
                    src="/assets/images/pulse.svg"
                    alt="logo image"
                    width={200}
                    height={200}
                />
                <Image
                    className=""
                    src="/assets/images/quantum.svg"
                    alt="logo image"
                    width={200}
                    height={200}
                />
                <Image
                    className=""
                    src="/assets/images/twice.svg"
                    alt="logo image"
                    width={200}
                    height={200}
                />
                <Image
                    className=""
                    src="/assets/images/apex.svg"
                    alt="logo image"
                    width={200}
                    height={200}
                />
            </div>


        </div>
    )
}
