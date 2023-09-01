/* This example requires Tailwind CSS v2.0+ */
import { PhoneIcon } from '@heroicons/react/20/solid'
import { ChatBubbleBottomCenter } from '@heroicons/react/outline'

import DPN from '/data/dpn.js'

const signedByLucian = DPN.signedBy.lucian
const signedBySilvana = DPN.signedBy.silvana
const signedByBianca = DPN.signedBy.bianca
const signedByOthers = DPN.signedBy.others

export default function GridCards() {
  return (
    <div>
      <ul
        role="list"
        // className="mx-auto grid grid-cols-1 gap-6 bg-sky-500 sm:grid-cols-2 lg:grid-cols-4"
        className="flex w-full justify-center gap-8 rounded-xl pb-32"
      >
        {signedByLucian.map((person) => (
          <div className="card break-inside " key={person.id}>
            <li className="card-body col-span-1 flex flex-col rounded-lg bg-green-100/20 shadow-xl">
              {/* card front */}
              <div className="card-front flex h-full flex-1 flex-col items-center justify-center bg-white/30 p-4 shadow-lg">
                <img
                  className="mx-auto h-48 w-48 flex-shrink-0 rounded-full object-cover object-center shadow-xl"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 rounded-full rounded-full bg-green-100 px-2 py-0.5 text-sm font-medium text-green-800">
                  {person.name}
                </h3>
              </div>
              {/* card back */}
              <div className="card-back flex h-full flex-1 flex-col bg-gradient-to-b from-green-100/20 to-white p-8">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12  opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                    </svg>
                    <p
                      className="dir-msg mt-6 text-lg font-medium text-gray-900"
                      dangerouslySetInnerHTML={{ __html: person.message }}
                    ></p>
                  </div>
                  <footer className="mt-6 flex w-full items-center justify-end">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                      src={person.signedImageUrl}
                      alt=""
                    />
                    <p className="ml-4 text-right text-base font-medium text-green-900">
                      {person.signed}
                    </p>

                    {/* <p className="text-base font-medium text-cyan-900">
                      role
                    </p> */}
                  </footer>
                </blockquote>
              </div>
            </li>
          </div>
        ))}
      </ul>

      <ul
        role="list"
        // className="mx-auto grid grid-cols-1 gap-6 bg-sky-500 sm:grid-cols-2 lg:grid-cols-4"
        className="flex w-full justify-center gap-8 rounded-xl bg-gradient-to-r from-indigo-500/20 to-indigo-100/20 py-24"
      >
        {signedByOthers.map((person) => (
          <div className="card break-inside " key={person.id}>
            <li className="card-body col-span-1 flex flex-col rounded-lg bg-white shadow-xl shadow-xl">
              {/* card front */}
              <div className="card-front flex h-full flex-1 flex-col items-center justify-center bg-white/30 p-4 shadow-lg">
                <img
                  className="mx-auto h-48 w-48 flex-shrink-0 rounded-full object-cover object-center shadow-xl"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 rounded-full rounded-full bg-indigo-100 px-2 py-0.5 text-sm font-medium text-indigo-800">
                  {person.name}
                </h3>
              </div>
              {/* card back */}
              <div className="card-back flex h-full flex-1 flex-col bg-gradient-to-b from-gray-100 to-white p-8">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12  opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                    </svg>
                    <p
                      className="dir-msg mt-6 text-lg font-medium text-gray-900"
                      dangerouslySetInnerHTML={{ __html: person.message }}
                    ></p>
                  </div>
                  <footer className="mt-6 flex w-full items-center justify-end">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                      src={person.signedImageUrl}
                      alt=""
                    />
                    <p className="ml-4 text-right text-base font-medium text-green-900">
                      {person.signed}
                    </p>
                    {/* <p className="text-base font-medium text-cyan-900">
                      role
                    </p> */}
                  </footer>
                </blockquote>
              </div>
            </li>
          </div>
        ))}
      </ul>

      <ul
        role="list"
        // className="mx-auto grid grid-cols-1 gap-6 bg-sky-500 sm:grid-cols-2 lg:grid-cols-4"
        className="flex w-full justify-center gap-8 py-24"
      >
        {signedByBianca.map((person) => (
          <div className="card break-inside " key={person.id}>
            <li className="card-body bg-fuchsia/20 col-span-1 flex flex-col rounded-lg bg-gradient-to-b from-fuchsia-100/30 to-white shadow-xl">
              {/* card front */}
              <div className="card-front bg-fuchsia/30 flex h-full flex-1 flex-col items-center justify-center p-4 shadow-lg">
                <img
                  className="mx-auto h-48 w-48 flex-shrink-0 rounded-full object-cover object-center shadow-xl"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 rounded-full rounded-full bg-fuchsia-100 px-2 py-0.5 text-sm font-medium text-fuchsia-800">
                  {person.name}
                </h3>
              </div>
              {/* card back */}
              <div className="card-back flex h-full flex-1 flex-col bg-gradient-to-b from-fuchsia-100/20 to-white p-8">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12  opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                    </svg>
                    <p
                      className="dir-msg mt-6 text-lg font-medium text-gray-900"
                      dangerouslySetInnerHTML={{ __html: person.message }}
                    ></p>
                  </div>
                  <footer className="mt-6 flex w-full items-center justify-end">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                      src={person.signedImageUrl}
                      alt=""
                    />
                    <p className="ml-4 text-right text-base font-medium text-green-900">
                      {person.signed}
                    </p>
                    {/* <p className="text-base font-medium text-cyan-900">
                      role
                    </p> */}
                  </footer>
                </blockquote>
              </div>
            </li>
          </div>
        ))}
      </ul>

      <ul
        role="list"
        // className="mx-auto grid grid-cols-1 gap-6 bg-sky-500 sm:grid-cols-2 lg:grid-cols-4"
        className="flex w-full justify-center gap-8 rounded-xl bg-gradient-to-r from-teal-100/20 to-teal-500 py-16"
      >
        {signedBySilvana.map((person) => (
          <div className="card break-inside " key={person.id}>
            <li className="card-body col-span-1 flex flex-col rounded-lg bg-gradient-to-b from-emerald-100/20 to-white shadow-xl shadow-xl">
              {/* card front */}
              <div className="card-front flex h-full flex-1 flex-col items-center justify-center bg-white/30 p-4 shadow-lg">
                <img
                  className="mx-auto h-48 w-48 flex-shrink-0 rounded-full object-cover object-center shadow-xl"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 rounded-full rounded-full bg-teal-100 px-2 py-0.5 text-sm font-medium text-teal-800">
                  {person.name}
                </h3>
              </div>
              {/* card back */}
              <div className="card-back flex h-full flex-1 flex-col bg-gradient-to-b from-emerald-100 to-white p-8">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12  opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                    </svg>
                    <p
                      className="dir-msg mt-6 text-lg font-medium text-gray-900"
                      dangerouslySetInnerHTML={{ __html: person.message }}
                    ></p>
                    <p
                      className="dir-msg mt-4 text-lg font-medium text-gray-900"
                      dangerouslySetInnerHTML={{ __html: person.message2 }}
                    ></p>
                    <p
                      className="dir-msg mt-4 text-lg font-medium text-gray-900"
                      dangerouslySetInnerHTML={{ __html: person.message3 }}
                    ></p>
                    {person.message4 && (
                      <p
                        className="dir-msg mt-4 text-lg font-medium text-gray-900"
                        dangerouslySetInnerHTML={{ __html: person.message4 }}
                      ></p>
                    )}
                  </div>
                  <footer className="mt-6 flex w-full items-center justify-end">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                      src={person.signedImageUrl}
                      alt=""
                    />
                    <p className="ml-4 text-right text-base font-medium text-green-900">
                      {person.signed}
                    </p>
                    {/* <p className="text-base font-medium text-cyan-900">
                      role
                    </p> */}
                  </footer>
                </blockquote>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}
