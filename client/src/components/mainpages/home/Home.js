import React from 'react'
import home from './img/home.png'
import delivery from './img/delivery.png'
import app from './img/app.png'
import about from './img/about.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="m-0 p-0 box-border no-underline ">

      {/* Home Section */}
      <section className="p-[50px_10%] w-full min-h-screen flex flex-wrap items-center bg-[#ebdbc8] gap-4 ">
        <div className="flex-[1_1_17rem]">
          <span className="text-base uppercase font-semibold text-[#1e3932] font-tight">Welcome to</span>
          <h1 className="text-[3.2rem] text-[#008148] font-bold font-tight">MockUp Coffee</h1>
          <h2 className="text-[1.8rem] text-[#1e3932] font-semibold uppercase m-[0.5rem_0_1.4rem] font-tight">Free Coffee is a <br />tap away</h2>
          <Link to="/login" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Login || Register</Link>
        </div>
        <div class="flex-[1_1_17rem]">
          <img src={home} alt="" />
        </div>
      </section>

      {/* Delivery Section */}
      <section className="p-[50px_10%]">
        <div className="text-center">
          <span className="text-base font-semibold text-[#008148] font-tight">Get Now</span>
          <h1 className="text-[2rem] font-semibold text-[#008148] font-tight">Order with Uber Eats</h1>
        </div>
        <div className="flex flex-wrap gap-6 mt-[2rem]">
          <div className="flex-[1_1_21rem]">
            <img src={delivery} alt="" />
          </div>
          <div className="flex-[1_1_21rem]">
            <h2 className="text-xl text-[#1e3932] font-tight font-semibold">Today deserve delivery</h2>
            <p className="m-[0.5rem_0_1rem] text-justify font-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae eveniet, minima tempore
              beatae consequatur molestiae minus commodi rerum a nisi alias laboriosam aliquid autem possimus
              deleniti qui maiores. Consectetur?</p>
            <p className="m-[0.5rem_0_1rem] text-justify font-tight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus ipsa expedita
              blanditiis culpa illo adipisci velit tempore repellat iste, iure laboriosam corrupti reprehenderit
              fugiat obcaecati doloribus. Saepe, cumque cum.</p>
            <Link to="/" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Order Now</Link>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="p-[50px_10%]">
        <div className="text-center">
          <span className="text-base font-semibold text-[#008148] font-tight">Our App</span>
          <h1 className="text-[2rem] font-semibold text-[#008148] font-tight">Download App</h1>
        </div>
        <div className="flex flex-wrap gap-6 mt-[2rem]">
          <div className="flex-[1_1_21rem]">
            <h2 className="text-xl text-[#1e3932] font-tight font-semibold">Today deserve delivery</h2>
            <p className="m-[0.5rem_0_1rem] text-justify font-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae eveniet, minima tempore
              beatae consequatur molestiae minus commodi rerum a nisi alias laboriosam aliquid autem possimus
              deleniti qui maiores. Consectetur?</p>
            <p className="m-[0.5rem_0_1rem] text-justify font-tight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus ipsa expedita
              blanditiis culpa illo adipisci velit tempore repellat iste, iure laboriosam corrupti reprehenderit
              fugiat obcaecati doloribus. Saepe, cumque cum.</p>
            <Link to="/" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Order Now</Link>
          </div>
          <div className="flex-[1_1_21rem]">
            <img src={app} alt="" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="p-[50px_10%] flex flex-wrap bg-[#ebdbc8] gap-6">
        <div className="flex-[1_1_17rem]">
          <img src={about} alt="" />
        </div>
        <div class="flex-[1_1_17rem]">
          <h2 className="text-xl text-[#1e3932] font-tight font-semibold">Today deserve delivery</h2>
          <p className="m-[0.5rem_0_1rem] text-justify font-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam, soluta voluptatibus odio impedit,
            laudantium eos, consequatur nesciunt excepturi exercitationem obcaecati accusamus animi dicta dolore ea
            ut. Voluptates, suscipit architecto.</p>
          <p className="m-[0.5rem_0_1rem] text-justify font-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, itaque, nisi rerum voluptas, deleniti
            iure accusamus sed enim voluptate consequatur a hic saepe! Culpa adipisci deleniti laudantium earum
            obcaecati eos.</p>
            <Link to="/" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Learn More</Link>
        </div>
      </section>
    </div>
  )
}

export default Home