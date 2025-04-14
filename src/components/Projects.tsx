
const Projects = () => {
  const projects = [
    { name: 'VIDTUBE', status: 'Not Yet', link: 'https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/26AC/production/_107000990_grumpycat5.jpg' },
    { name: 'NOTE-COVE', status: 'Live', link: 'https://note-cove.vercel.app' },
    { name: 'BOOK-MANAGER', status: 'Live', link: 'https://book-trakker.vercel.app' },
    { name: 'LEARN TO PRONOUNCE', status: 'Live', link: 'https://ltpronounce.vercel.app' },
    { name: 'WEATHER WEB', status: 'Live', link: 'https://weatherwebb.vercel.app' },
  ]

  return (
    <div className="w-full px-4 sm:px-8 py-12">
      <p className="text-[#dad8d9]/80 font-medium mb-8 cursor-pointer text-sm sm:text-base">PROJECTS</p>

      <div className="flex flex-col gap-6 items-center">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row justify-between items-center pb-4 w-full max-w-2xl"
          >
            <h2 className="text-[#d8d8d8] text-2xl sm:text-3xl font-semibold mb-2 sm:mb-0 text-center sm:text-left">
              {project.name}
            </h2>
            <div className="flex gap-4 items-center">
              <p
                className={`${
                  project.status === 'Live'
                    ? 'bg-green-300 text-green-700 border border-green-700'
                    : 'bg-red-300 text-red-700 border border-red-700'
                } font-medium px-2 py-0.5 rounded-lg text-sm`}
              >
                {project.status} •
              </p>
              <a
                href={project.link}
                target='_blank'
                className="text-[#f40100] hover:text-[#d8d8d8] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-up-right"
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </svg>
              </a>
            </div>
          </div>
        ))}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 h-[60vh] sm:h-[50vh] lg:h-[70vh] w-full max-w-6xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611264327630-8090373c8cef?q=80&w=1854&auto=format&fit=crop"
            className="object-cover w-full h-full rounded-s-2xl sm:rounded-s-2xl"
            alt=""
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1734301371434-7aa82950e9af?q=80&w=2012&auto=format&fit=crop"
            className="object-cover w-full h-full"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1628256901515-1ac27bb7a7ec?q=80&w=1887&auto=format&fit=crop"
            className="object-cover w-full h-full"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1593546243115-0c4a56e23467?q=80&w=1887&auto=format&fit=crop"
            className="object-cover w-full h-full rounded-e-2xl sm:rounded-e-2xl"
            alt=""
          />
        </div> */}
      </div>
    </div>
  )
}

export default Projects
