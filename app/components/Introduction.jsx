

export default function Introduction() {

    const text = "Yours creative process deserves better. That's why we built Layers."

  return (
    <div className="container py-20 mx-auto text-center">
    <div className="inline-flex border p-4 rounded-full text-lime-400 uppercase">Introducting Layers</div>
    <div className="text-4xl font-bold md:text-4xl mt-10">
      <span className="text-white">Yours creative process deserves better.</span>
      <span className="text-white/30">{text}</span>
      <span className="text-lime-300 text-lime-300/60  block">That why we built Layers.</span>
    </div>
    </div>
  )
}
