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
      <section className="p-[50px_10%] xl:p-[50px_7%] lg:[50px_4%] w-full min-h-screen flex flex-wrap items-center bg-[#ebdbc8] gap-4 rounded-lg">
        <div className="flex-[1_1_17rem]">
          <span className="text-base uppercase font-semibold text-[#1e3932] font-tight md:text-[0.9rem]">Welcome to</span>
          <h1 className="text-[3.2rem] text-[#008148] font-bold font-tight xl:text-[3rem] md:text-[2.4rem] ">MockUp Coffee</h1>
          <h2 className="text-[1.8rem] text-[#1e3932] font-semibold uppercase m-[0.5rem_0_1.4rem] font-tight xl:text-[1.5rem] md:text-[1.2rem]">Free Coffee is a <br />tap away</h2>
          <Link to="/login" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Login || Register</Link>
        </div>
        <div class="flex-[1_1_17rem]">
          <img src={home} alt="" className="w-full" />
        </div>
      </section>

      {/* Delivery Section */}
      <section className="p-[50px_10%] xl:p-[50px_7%] lg:[50px_4%]">

        <div className="text-center">
          <span className="text-base font-semibold text-[#008148] font-tight">Get Now</span>
          <h1 className="text-[2rem] font-semibold text-[#008148] font-tight">Order with Grab Delivery</h1>
        </div>
        <div className="flex flex-wrap gap-6 mt-[2rem]">
          <div className="flex-[1_1_21rem]">
            <img src={delivery} alt="" className="w-full" />
          </div>
          <div className="flex-[1_1_21rem]">
            <h2 className="text-xl text-[#1e3932] font-tight font-semibold">Grab Delivery</h2>
            <p className="m-[0.5rem_0_1rem] text-justify font-tight">Grab Holdings Inc., commonly known as Grab, is a Singaporean multinational technology company. It is the developer of the Grab super-app, which provides users with transportation,
              food delivery and digital payments services via a mobile app. </p>
            <p className="m-[0.5rem_0_1rem] text-justify font-tight">Grab currently operates in Singapore, Malaysia, Cambodia, Indonesia, Myanmar, the Philippines, Thailand and Vietnam. It is Southeast Asia's first decacorn, and the biggest technology startup in the region.</p>
            <Link to="/" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Order Now</Link>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="p-[50px_10%] xl:p-[50px_7%] lg:[50px_4%]">
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
          <div className="flex-[1_1_21rem] xl:p-[50px_7%]">
            <img src={app} alt="" className="w-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="p-[50px_10%] flex flex-wrap bg-[#ebdbc8] gap-6 rounded-lg xl:p-[50px_7%] lg:[50px_4%]">
        <div className="flex-[1_1_17rem]">
          <img src={about} alt="" className="w-full" />
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

      {/* Contact Section */}
      <section className="p-[50px_10%] flex flex-col items-center xl:p-[50px_7%] lg:[50px_4%]">
        <div>
          <Link to="/" className="text-[27px] m-[0.5rem]"><i class="p-[5px] text-[#fff] bg-[#000000] rounded-[50%] hover:bg-[#008148] bx bxl-facebook"></i></Link>
          <Link to="/" className="text-[27px] m-[0.5rem]"><i class="p-[5px] text-[#fff] bg-[#000000] rounded-[50%] hover:bg-[#008148] bx bxl-twitter"></i></Link>
          <Link to="/" className="text-[27px] m-[0.5rem]"><i class="p-[5px] text-[#fff] bg-[#000000] rounded-[50%] hover:bg-[#008148] bx bxl-instagram"></i></Link>
          <Link to="/" className="text-[27px] m-[0.5rem]"><i class="p-[5px] text-[#fff] bg-[#000000] rounded-[50%] hover:bg-[#008148] bx bxl-youtube"></i></Link>
        </div>
        <div className="m-[1rem_0_1rem] vsm:flex vsm:flex-col">
          <Link to="#" className="text-base font-medium text-[#1e3932] p-[1rem] hover:text-[#008148] font-tight">Privacy Policy</Link>
          <Link to="#" className="text-base font-medium text-[#1e3932] p-[1rem] hover:text-[#008148] font-tight">Terms of Use</Link>
          <Link to="#" className="text-base font-medium text-[#1e3932] p-[1rem] hover:text-[#008148] font-tight">Our Company</Link>
        </div>
        <p className="text-center">&#169; CarpoolVenom All Right Reserved.</p>
      </section>
    </div>
  )
}

export default Home