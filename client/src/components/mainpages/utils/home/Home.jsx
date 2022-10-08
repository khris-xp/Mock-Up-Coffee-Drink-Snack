import React, { useContext } from 'react'
import home from './home_asset/home.png'
import newProduct from './home_asset/newProduct.png'
import shop from './home_asset/Shop.png'
import about from './home_asset/About.png'
import { GlobalState } from '../../../../GlobalState'
import { Link } from 'react-router-dom'

function Home() {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;
  const [isLogged] = state.userAPI.isLogged;

  return (
    <div className="m-0 p-0 box-border no-underline ">

      {/* Home Section */}
      <section className="p-[50px_10%] xl:p-[50px_7%] lg:[50px_4%] w-full min-h-screen flex flex-wrap items-center bg-gray-50 gap-4 rounded-lg">
        <div className="flex-[1_1_17rem]">
          <span className="text-base uppercase font-semibold text-[#1e3932] font-tight md:text-[0.9rem]">Welcome to</span>
          <h1 className="text-[3.2rem] text-[#008148] font-bold font-tight xl:text-[3rem] md:text-[2.4rem] ">MockUp Coffee</h1>
          <h2 className="text-[1.8rem] text-[#1e3932] font-semibold uppercase m-[0.5rem_0_1.4rem] font-tight xl:text-[1.5rem] md:text-[1.2rem]">Free Coffee is a <br />tap away</h2>
          {
            isAdmin ? <Link to="/shop" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Admin</Link>
              : isLogged ? <Link to="/shop" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Order Now</Link>
                : <Link to="/login" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Login || Reigster</Link>
          }
        </div>
        <div class="flex-[1_1_17rem]">
          <img src={home} alt="" className="w-full" />
        </div>
      </section>

      {/* New Recommend Product Section */}
      <section className="p-[50px_10%] xl:p-[50px_7%] lg:[50px_4%]">

        <div className="text-center">
          <span className="text-base font-semibold text-[#008148] font-tight">Get Now</span>
          <h1 className="text-[2rem] font-semibold text-[#008148] font-tight">New Recommend Product</h1>
        </div>
        <div className="flex flex-wrap gap-6 mt-[2rem]">
          <div className="flex-[1_1_21rem]">
            <img src={newProduct} alt="" className="w-full" />
          </div>
          <div className="flex-[1_1_21rem]">
            <h2 className="text-xl text-[#1e3932] font-tight font-semibold">Iced Cocoa Latte</h2>
            <p className="m-[0.5rem_0_1rem] text-justify font-tight">Cocoa Latte, delicious, intense, cocoa flavor imported from Switzerland. The taste is sweet, fragrant, delicious, suitable for people who like to eat cocoa the most.</p>
            <p className="m-[0.5rem_0_1rem] text-justify font-tight">You can come to order at Mock Up Coffee Drink & Snack at Panya Lake Home Village Soi 9, Nimitmai Road 28.</p>
            <Link to="/shop" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Order Now</Link>
          </div>
        </div>
      </section>

      {/* Our Shop Section */}
      <section className="p-[50px_10%] xl:p-[50px_7%] lg:[50px_4%]">
        <div className="text-center">
          <span className="text-base font-semibold text-[#008148] font-tight">Our Shop</span>
          <h1 className="text-[2rem] font-semibold text-[#008148] font-tight">The origin of our shop</h1>
        </div>
        <div className="flex flex-wrap gap-6 mt-[2rem]">
          <div className="flex-[1_1_21rem]">
            <h2 className="text-xl text-[#1e3932] font-tight font-semibold">The origin of our shop</h2>
            <p className="m-[0.5rem_0_1rem] text-justify font-tight">Our shop, in addition to having coffee that is the main product. We also have tea and iced cocoa that are equally popular. with carefully selected coffee beans Including various teas that are delicious and different from other shops.</p>
            <p className="m-[0.5rem_0_1rem] text-justify font-tight">So we want you to try our products and you will feel the difference of our products that are not like other places, whether it's tea or coffee. That's because our Basrista is experienced and meticulous in every process. in brewing until the quality product comes out to your hand</p>

            <Link to="/shop" className="p-[7px_16px] border-[2px] border-[solid] border-[#1e3932] rounded-[40px] text-[#1e3932] font-medium hover:text-white hover:bg-[#1e3932] font-tight">Order Now</Link>
          </div>
          <div className="flex-[1_1_21rem]">
            <img src={shop} alt="" className="w-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="p-[50px_10%] flex flex-wrap bg-gray-50 gap-6 rounded-lg xl:p-[50px_7%] lg:[50px_4%]">
        <div className="flex-[1_1_17rem]">
          <img src={about} alt="" className="w-full" />
        </div>
        <div class="flex-[1_1_17rem]">
          <h2 className="text-xl text-[#1e3932] font-tight font-semibold">About Shop</h2>
          <p className="m-[0.5rem_0_1rem] text-justify font-tight">MockUp Coffee Drink & Snack shop is owned by Mr. Thanasak Srisupa, also known as Mr. Mock. He built this shop with the aim of fulfilling his dream of having a coffee shop own by opening next to his house.</p>
          <p className="m-[0.5rem_0_1rem] text-justify font-tight">The thing that makes MockUp Coffee Drick & Snack different from the rest is that the quality coffee beans give it a different and delicious taste that is unique enough that people who eat it define that you can't drink coffee anywhere else besides this shop Guaranteed by Mr. Mock</p>
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