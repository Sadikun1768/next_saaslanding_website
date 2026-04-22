import { features } from "../../lib/features";

export default function Footer() {
  return (
    <div className="container border-t mt-20 border-white/40 ">
      <div className="grid grid-cols-4 gap-8 mt-12">
        {features.map((feature) => (
          <div key={feature} className="mt-10">
            <h3 className="text-lg font-bold">{feature}</h3>
          </div>
        ))}
      </div>
      <div>
        <p className="text-center text-sm text-white/60 mt-15">
          &copy; 2026 Sasasland. All rights reserved. | Designed by Servicekey.
        </p>
      </div>
    </div>
  )
}
