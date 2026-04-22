import Image from 'next/image'

export default function Integrations() {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 items-center gap-4 mt-8'>
      <div className='gap-3 mt-20'>
        <span
          className="inline-flex border px-3 py-2 text-lime-400 rounded-full 
          font-semibold mb-8">
          Integrations
        </span>
        <h1 className='font-extrabold'>Plays well with your favorite tools</h1>
        <p className='text-sm text-white/35 mx-auto p-2'>Layers integrate seamlessly design tool. 
        Figma is a web-based Git repository functionality features.
        GitHub is a web-based Git repository functionality features.
        Figma is a web-based Git repository functionality features.
        GitHub is a web-based Git repository functionality features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className=''>

          <div className='border rounded-md p-4 bg-white/5 gap-3 mb-3'>
            <Image
              className="align-middle mx-auto"
              src="/assets/images/figma-logo.svg"
              alt="figma-logo 1 image"
              width={70}
              height={70}
            />
            <h2 className='font-semibold'>Figma</h2>
            <p>Figma is a web-based Git repository functionality features.</p>
          </div>

          <div className='border rounded-md p-4 bg-white/5 gap-3 mb-3'>
            <Image
              className="align-middle mx-auto"
              src="/assets/images/github-logo.svg"
              alt="GitHub logo"
              width={70}
              height={70}
            />
            <h2 className='font-semibold'>GitHub</h2>
            <p>GitHub is a web-based Git repository functionality features.</p>

          </div >

          <div className='border rounded-md p-4 bg-white/5 gap-3 mb-3'>
            <Image
              className="align-middle mx-auto"
              src="/assets/images/notion-logo.svg"
              alt="Notion logo"
              width={70}
              height={70}
            />
            <h2 className='font-semibold'>Notion</h2>
            <p>Notion is a web-based Git repository functionality features.</p>
          </div>

        </div>

        <div>

          <div className='border rounded-md p-4 bg-white/5 gap-3 mb-3'>
            <Image
              className="align-middle mx-auto"
              src="/assets/images/framer-logo.svg"
              alt="Framer image"
              width={70}
              height={70}
            />
            <h2 className='font-semibold'>Framer</h2>
            <p>Figma is a web-based Git repository functionality features.</p>
          </div>

          <div className='border rounded-md p-4 bg-white/5 gap-3 mb-3'>
            <Image
              className="align-middle mx-auto"
              src="/assets/images/slack-logo.svg"
              alt="Slack logo"
              width={70}
              height={70}
            />
            <h2 className='font-semibold'>Slack</h2>
            <p>Slack is a web-based Git repository functionality features.</p>

          </div>

          <div className='border rounded-md p-4 bg-white/5 gap-3 mb-3'>
            <Image
              className="align-middle mx-auto"
              src="/assets/images/relume-logo.svg"
              alt="Relume logo"
              width={70}
              height={70}
            />
            <h2 className='font-semibold'>Relume</h2>
            <p>Relume is a web-based Git repository functionality features.</p>
          </div>

        </div>

      </div>

    </div>
  )
}
