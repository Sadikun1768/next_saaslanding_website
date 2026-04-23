import FetureCard from "./FetureCard";
import Image from "next/image";


export default function Features() {
  return (
    <div className="container text-center py-20">

      <span className="inline-flex border px-3 py-2 text-lime-400 rounded-full font-semibold">Features</span>
      <h2 className="text-3xl font-bold mt-4">Where power meets simplicity</h2>
      <span className="text-lime-300 text-lime-300">Simplicity</span>


      <div className="grid grid-cols-2 gap-8 mt-12">
        {/* akhane card props asbe */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full"
              src="/assets/images/avatar-florence-shaw.jpg"
              alt="design-example 1 image"
              width={100}
              height={100}
            />
          </div>
          <FetureCard
            title="Keyboard  Quick Actions"
            description="Perform common tasks quickly with keyboard shortcuts."
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full"
              src="/assets/images/avatar-ashwin-santiago.jpg"
              alt="design-example 1 image"
              width={100}
              height={100}
            />
          </div>

          <FetureCard
            title="Customizable Templates"
            description="Perform common tasks quickly with keyboard shortcuts."
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full"
              src="/assets/images/avatar-lula-meyers.jpg"
              alt="design-example 1 image"
              width={100}
              height={100}
            />
          </div>
          <FetureCard
            title="Version Control"
            description="Keep track of changes and manage different versions of your work."
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full"
              src="/assets/images/avatar-owen-garcia.jpg"
              alt="design-example 1 image"
              width={100}
              height={100}
            />
          </div>
          <FetureCard
            title="Version Control"
            description="Keep track of changes and manage different versions of your work."
          />
        </div>

      </div>

 

    </div>
  )
}
