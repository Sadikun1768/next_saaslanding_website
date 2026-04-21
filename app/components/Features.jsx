import { features } from "../../lib/features";
import FetureCard from "./FetureCard";



export default function Features() {
  return (
    <div className="container py-20">

      <span className="inline-flex border px-3 py-2 text-lime-400 rounded-full font-semibold">Features</span>
      <h2 className="text-3xl font-bold mt-4">Where power meets simplicity</h2>
      <span className="text-lime-300 text-lime-300">Simplicity</span>


      <div className="grid grid-cols-2 gap-8 mt-12">
        {/* akhane card props asbe */}
        <FetureCard
          title="Real-time Collaboration"
          description="Collaborate with your team in real-time, sharing ideas and feedback instantly."
        />
        <FetureCard
          title="Version Control"
          description="Keep track of changes and manage different versions of your work."
        />
        <FetureCard
          title="Keyboard  Quick Actions"
          description="Perform common tasks quickly with keyboard shortcuts."
        />
        <FetureCard
          title="Customizable Templates"
          description="Perform common tasks quickly with keyboard shortcuts."
        />
      </div>

      <div>
        {features.map((feature) => (
          <div key={feature} className="mt-6">
            <h3>{feature}</h3>
          </div>
        ))}
      </div>

    </div>
  )
}
