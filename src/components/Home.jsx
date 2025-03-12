import React from 'react'
import { scrollToJob } from '../components/scroll'
import About from './About'
import Footer from './Footer'



function Home() {



  return (
    <>
      <div className='bg-blue-50'>


        <section className="relative lg:h-screen bg-[#f1f1f1] overflow-hidden">
          {/* Background Image */}
          <div className="h-full w-full">
            <img
              src="/images/1.jpg"
              className="h-full w-full object-cover"
              alt="Job Search"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
            <h1 className="text-2xl md:text-5xl font-bold sm:mt-12">Find Your Dream Job</h1>
            <p className="text-sm md:text-xl mt-2 max-w-2xl">
              Discover thousands of job opportunities and take your career to the next level.
            </p>
            <button
              onClick={scrollToJob}
              className="mt-4 px-3 py-2 md:px-6 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-lg md:mt-10">
              Get Started
            </button>
          </div>
        </section>


        <section>
          <div className="container mx-auto px-4 py-12 ">
            <h2 className="text-2xl font-bold text-center">Popular Job Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-b from-blue-200 to-blue-700 shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-500 ">
                <div className="flex justify-center">
                  <img src="/images/2.png" alt="Software Development" className="w-[60px] object-cover" />
                </div>
                <h3 className="text-xl font-bold mt-4 text-white">Software Development</h3>
                <p className="mt-2 text-white text-center ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non perferendis odit modi iste pariatur ducimus cumque repellat. Ex, veritatis.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-100 shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-500">
                <div className="flex justify-center">
                  <img src="/images/3.png" alt="Digital Marketing" className="w-[60px] object-cover" />
                </div>
                <h3 className="text-xl font-bold mt-4">Digital Marketing</h3>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id, magni repudiandae obcaecati dolor dolore praesentium exercitationem delectus quae iure?
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gradient-to-b from-blue-200 to-blue-700 shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-500">
                <div className="flex justify-center">
                  <img src="/images/4.png" alt="Data Science" className="w-[60px] object-cover" />
                </div>
                <h3 className="text-xl font-bold mt-4 text-white">Data Science</h3>
                <p className="mt-2 text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolores laboriosam necessitatibus, repellat consequatur nulla facere? Commodi tempora odit delectus.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section id='job-listings'>
          <div className="container mx-auto px-4 py-12 ">
            <h2 className="text-2xl md:text-3xl font-bold text-center animate-bounce">Recent Job Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
              {/* Card 1 */}
              <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-500">
                <div className="flex justify-center">
                  <img src="/images/5.png" alt="Job Listing" className="w-[70px] object-cover" />
                </div>
                <h3 className="text-xl font-bold mt-4">Frontend Developer</h3>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non perferendis odit modi iste pariatur ducimus cumque repellat. Ex, veritatis.
                </p>
                <button className="mt-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
                  Apply Now
                </button>
              </div>
              {/* Card 2 */}
              <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-500">
                <div className="flex justify-center">
                  <img src="/images/5.png" alt="Job Listing" className="w-[70px] object-cover" />
                </div>
                <h3 className="text-xl font-bold mt-4">Backend Developer</h3>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non perferendis odit modi iste pariatur ducimus cumque repellat. Ex, veritatis.
                </p>
                <button className="mt-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
                  Apply Now
                </button>
              </div>
              {/* Card 3 */}
              <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-500">
                <div className="flex justify-center">
                  <img src="/images/5.png" alt="Job Listing" className="w-[70px] object-cover" />        </div>      <h3 className="text-xl font-bold mt-4">Full Stack Developer</h3>    <p className="mt-2 text-gray-600">        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non perferendis odit modi iste pariatur ducimus cumque repellat. Ex, veritatis.      </p>      <button className="mt-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">        Apply Now      </button>
              </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
              {/* Card 4 */}
              <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-500">
                <div className="flex justify-center">
                  <img src="/images/5.png" alt="Job Listing" className="w-[70px] object-cover" />
                </div>
                <h3 className="text-xl font-bold mt-4">Graphic Designer</h3>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non perferendis odit modi iste pariatur ducimus cumque repellat. Ex, veritatis.
                </p>
                <button className="mt-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
                  Apply Now
                </button>
              </div>
              {/* Card 5 */}
              <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-500">
                <div className="flex justify-center">
                  <img src="/images/5.png" alt="Job Listing" className="w-[70px] object-cover" />
                </div>
                <h3 className="text-xl font-bold mt-4">Digital Marketing</h3>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non perferendis odit modi iste pariatur ducimus cumque repellat. Ex, veritatis.
                </p>
                <button className="mt-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
                  Apply Now
                </button>
              </div>
              {/* Card 6 */}
              <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-500">
                <div className="flex justify-center">
                  <img src="/images/5.png" alt="Job Listing" className="w-[70px] object-cover" />        </div>      <h3 className="text-xl font-bold mt-4">Video Editor</h3>    <p className="mt-2 text-gray-600">        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non perferendis odit modi iste pariatur ducimus cumque repellat. Ex, veritatis.      </p>      <button className="mt-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">        Apply Now      </button>
              </div>
            </div>
          </div>
        </section>

<About/>

<Footer/>

      </div>



    </>
  )


}
export default Home