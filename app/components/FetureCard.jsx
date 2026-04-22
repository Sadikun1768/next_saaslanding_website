import { Children } from "react";


export default function FetureCard({ title, description, image}) {
  
    return (
       <div>
          <div className="">

          </div>
          <div>
            <div className="items-center">{image}</div>
            <h3 className="text-3xl font-bold text-white/30 mt-4">{title}</h3>
            <p className="text-white/80 mt-2">{description}</p>
            
          </div>
        </div>
  )
}



