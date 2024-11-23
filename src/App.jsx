// src/App.jsx

import React from 'react';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa'

function App() {
  
  
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Navigation Bar */}
     
     <nav className="w-full py-1 bg-gray-800 bg-opacity-40 shadow-lg ">
        <div className=" mx-auto md:mx-4 md:px-8 flex justify-between items-center md:mt-4 px-4 mt-2">
          {/* Logo Section */}
          <div className="flex items-center justify-center md:space-x-4 space-x-5 lg:space-x-10 mr-10">
            <img src="/1sol.png" alt="1Sol-logo" className="md:h-20 h-10 w-auto rounded-md shadow-md"/>
            <h1 className="md:text-6xl text-3xl font-extrabold text-transparent mt-6 bg-clip-text font-serif bg-gradient-to-r from-green-600 to-purple-800 mb-6">1SOL</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-end md:space-x-14 relative space-x-6 font-mono text-xs md:text-lg mr-0 ">
            <a
              href="#buy"
              className="text-gray-300 border-b-2 border-transparent hover:border-pink-500 hover:text-white py-2 transition duration-300"
            >
              Buy
            </a>
            <a
              href="https://1solonly.medium.com/"
              className="text-gray-300 border-b-2 border-transparent hover:border-yellow-500 hover:text-white py-2 transition duration-300"
            >
              Medium
            </a>
            <a
              href="https://twitter.com/1solonly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 border-b-2 border-transparent hover:border-blue-500 hover:text-white py-2 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="https://telegram.me/OneSolanaAllYouNeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 border-b-2 border-transparent hover:border-blue-400 hover:text-white py-2 transition duration-300"
            >
              Telegram
            </a>
          </div>
        </div>
      </nav>
      

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-20 px-6 text-center bg-cover bg-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-gray-500 mb-6">
          WELCOME!
        </h1>
        <p className="text-xl max-w-3xl mb-8 text-gray-300 bg-gradient-to-r from-gray-950 to-green-950 px-6 py-4 rounded-xl  font-extralight tracking-widest  font-mono capitalize bg- ">
        Be part of the 1SOL revolution. Whether you’re new to crypto or a seasoned trader, this is your chance to celebrate, inspire, and achieve.
        </p>
        <p className="text-xl max-w-3xl mb-8 text-gray-300 font-mono  bg-gradient-to-r from-green-950 to-gray-950 px-6 py-4 rounded-xl   tracking-widest capitalize">Because sometimes, all it takes is 1Sol!</p>
        <p className="text-center text-amber-600  font-mono italic animate-pulse text-2xl mb-12 ">
          GET IN NOW, DON'T MISS OUT!
        </p>
      </header>

      {/* Buy Section */}
      
      <section id="buy" className="container bg-grad-bg bg-contain   mx-auto py-20 px-6 rounded-lg shadow-lg mt-10 w-11/12 max-w-5xl">
      <div className='flex justify-center m-auto mb-10 border- rounded-lg max-w-sm'><h1 className='text-6xl animate-bounce font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 mb-6'>BUY $1SOL</h1></div>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="https://pump.fun/coin/A8zvtBuPaxVLoB7QbybeDQNYh1ZpvWnFKNdzPupKpump" target="_blank" rel="noopener noreferrer">
            <button className="w-64 h-12 bg-gradient-to-r flex items-center justify-center from-gray-950 to-green-900 hover:from-orange-600 hover:to-yellow-600 text-white py-4 rounded-lg font-semibold shadow-lg transform hover:-translate-y-1 transition duration-300">
              <span ><img className="hover:animate-spin" src='/pumpfun.png' width="50px"/></span>
              Buy on Pumpfun
            </button>
          </a>
          <a href="https://jup.ag/swap/A8zvtBuPaxVLoB7QbybeDQNYh1ZpvWnFKNdzPupKpump" target="_blank" rel="noopener noreferrer">
            <button className="w-64 h-12  flex items-center justify-center bg-gradient-to-r from-gray-950 to-green-900 hover:from-teal-600 hover:to-green-600 text-white py-4 rounded-lg font-semibold shadow-lg transform hover:-translate-y-1 transition duration-300">
            <span ><img className="hover:animate-pulse" src='/jupiter.png' width="35px"/></span>
             Buy on Jupiter
            </button>
          </a>
        </div>
      </section>
      
      <section className="container flex-col  mx-auto py-20 px-6 bg-gray-950 rounded-lg shadow-lg mt-10 w-11/12 max-w-5xl">
       <img src="/banner.png" width="1000px"/>
       <div className='flex justify-center items-center mt-5 '><span className='font-mono tracking-widest p-2 rounded-lg animate-bounce bg-gradient-to-r from-gray-950 to-green-900' > 1SOL IS ALL YOU NEED</span></div>
      </section>

      <section id="contact" className="container mx-auto py-20 px-6 bg-gray-950 rounded-lg shadow-lg mt-10 w-11/12 max-w-5xl">
       <img src="/1sol.png" width="1000px"/>
      </section>


      {/* Social Media Section */}
      <section id="socials" className="container mx-auto py-20 px-6 bg-gray-950 rounded-lg shadow-lg mt-10 w-11/12 max-w-5xl">
        <h2 className="text-4xl font-bold text-center capitalize  mb-8">Follow Us on Social Media</h2>
        <p className="text-center text-orange-400 mb-12">
          Stay connected and join our community for the latest updates.
        </p>
        <div className="flex justify-center gap-36">
          <a href="https://twitter.com/1solonly" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
          <FaTwitter size={40} />
          </a>
          <a href="https://telegram.me/OneSolanaAllYouNeed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
          <FaTelegramPlane size={40} />

          </a>
          
        </div>
      </section>

      {/* Contact Section */}
     
      {/* Footer */}
      <footer className="w-full py-6 mt-10 bg-gray-900 text-center text-gray-500">
        <p>© 2024 OneSol. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
