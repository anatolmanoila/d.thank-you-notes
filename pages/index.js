import { Popover } from '@headlessui/react'

import GridCardsOctober from '/components/GridCards_october23'
import AudioButton from '../components/AudioButton'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div>
      <header>
        <Popover className="relative mb-8 bg-white shadow-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:justify-start md:space-x-10 lg:px-8 ">
            <div className=" flex justify-start">
              <a href="/">
                <span className="sr-only">DDigital</span>
                <img
                  className="h-6 w-auto sm:h-4 md:h-6"
                  src="/img/deloitte_black.png"
                  alt="Deloitte logo"
                />
              </a>
            </div>
            <div className="-my-2 -mr-2">
              <div
                data-aos="flip-right"
                data-aos-delay="2000"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <AudioButton url="/audio/ballpoint_back2life.mp3" />
              </div>

              {/* <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button> */}
            </div>
          </div>
        </Popover>
      </header>

      <main>
        <div className="relative">
          {/* Decorative background image and gradient */}

          {/* 2023 img */}
          <div className="z-0 w-full bg-dd bg-cover bg-center bg-no-repeat">
            <div className="w-full backdrop-blur-lg">
              <div
                className="z-9 mx-auto mb-12 max-w-7xl bg-transparent px-4 pt-4  sm:px-6"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <img
                  className=" relative mx-auto h-48 rounded-full sm:h-48"
                  src="/img/thank-you-logo.jpg"
                  alt="2023"
                />
              </div>
              {/* Cards grid: */}
              <div className="z-9 max-w-12xl mx-auto mt-2 py-8 pb-48 sm:px-6 lg:px-0">
                <div
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >
                  <GridCardsOctober />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only"></h2>
        <div className="mx-auto max-w-7xl px-4 pt-0 pb-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-4 md:flex md:items-center md:justify-center ">
            <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()}. Made with  ♥️ for Deloitte.
            </p>
          </div>
        </div>
      </footer>

      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">🥂</div>
        <div className="snowflake">🥂</div>
        <div className="snowflake">🥂</div>
        <div className="snowflake">🥂</div>
        <div className="snowflake">🥂</div>

        {/* <div className="snowflake">🥳</div>
        <div className="snowflake">🎉</div>
        <div className="snowflake">🥂</div>
        <div className="snowflake">🎉</div>
        <div className="snowflake">🥂</div>
        <div className="snowflake">🎉</div> */}
      </div>
    </div>
  )
}
