/* This example requires Tailwind CSS v2.0+ */
import { PhoneIcon } from '@heroicons/react/20/solid'
import { ChatBubbleBottomCenter } from '@heroicons/react/outline'

import DPN from '/data/dpn.js'

const signedByCristiBabuta = DPN.october23_signedBy.cristi_babuta
const signedByOvidiuNeagoe = DPN.october23_signedBy.ovidiu_neagoe
const signedByElenaAvanu = DPN.october23_signedBy.elena_avanu
const signedByIoanPosa = DPN.october23_signedBy.ioan_posa
const signedByDianaOprescu = DPN.october23_signedBy.diana_oprescu
// const signedByOthers = DPN.october23_signedBy.others

export default function GridCardsOctober() {
  return (
    <div>
      <ul
        role="list"
        // className="mx-auto grid grid-cols-1 gap-6 bg-sky-500 sm:grid-cols-2 lg:grid-cols-4"
        className="mb-1 flex w-full flex-wrap items-center justify-center gap-16 bg-gradient-to-b from-white to-teal-100 pb-24"
        data-aos="slide-up"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        {signedByCristiBabuta.map((person) => (
          <div
            className="card break-inside "
            key={person.id}
            style={{
              maxWidth: person.maxWidth ? `${person.maxWidth}px` : '340px',
            }}
          >
            <li className="card-body col-span-1 flex flex-col rounded-lg bg-white shadow-md">
              {/* card front */}
              <div className="card-front flex h-full flex-1 flex-col items-center justify-center bg-white/30 p-4 shadow-lg backdrop-blur-sm">
                <img
                  className="mx-auto h-48 w-48 flex-shrink-0 rounded-full object-cover object-center shadow-xl"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 rounded-full rounded-full bg-green-100 px-2 py-0.5 text-sm font-medium text-green-800">
                  <span style={{ color: '#ccc' }}>To </span> {person.name}
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
                      className="dir-msg text-md mt-6 font-medium text-gray-900"
                      dangerouslySetInnerHTML={{ __html: person.message }}
                    ></p>
                  </div>
                  <footer className="mt-6 flex w-full items-center justify-end">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                      src={person.signedImageUrl}
                      alt={person.signedImageUrl}
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
        className="mt-1 flex w-full flex-wrap items-center justify-center gap-16  bg-gradient-to-b from-white to-teal-500 py-32"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        {signedByIoanPosa.map((person) => (
          <div
            style={{
              maxWidth: person.maxWidth ? person.maxWidth : '340px',
            }}
            className="card break-inside "
            key={person.id}
          >
            <li className="card-body bg-fuchsia/20 col-span-1 flex flex-col rounded-lg bg-gradient-to-b from-fuchsia-100/30 to-white shadow-md">
              {/* card front */}
              <div className="card-front bg-fuchsia/30 flex h-full flex-1 flex-col items-center justify-center p-4 shadow-lg">
                <img
                  className="mx-auto h-48 w-48 flex-shrink-0 rounded-full object-cover object-center shadow-xl"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 rounded-full rounded-full bg-fuchsia-100 px-2 py-0.5 text-sm font-medium text-fuchsia-800">
                  <span style={{ color: '#ccc' }}>To </span> {person.name}
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
                      alt={person.signedImageUrl}
                    />
                    {person.signedImageUrl2 && (
                      <img
                        className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                        src={person.signedImageUrl2}
                        alt={person.signedImageUrl2}
                      />
                    )}
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
