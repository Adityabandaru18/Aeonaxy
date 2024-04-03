import React from 'react'

const Header = () => {
  return (
    <>
      <div className='bg-[#E7E9FE] sm:h-80 h-96 flex flex-col relative'>

        <div className='flex flex-col text-center justify-center w-[90%] mx-auto items-center'>

          <div className='mt-10 flex flex-col items-center'>

            <p className='text-3xl font-bold mb-2'> Wix Premium Plans</p>
            <p>Wix gives you 100s of templates, unlimited pages & top grade <br /> hosting FREE. Upgrade to Premium and get even more.</p>
            <button className='bg-[#AA4DC7] rounded-[25px] pl-10 pr-10 text-white text-sm p-3 mt-3 font-light'>Get Started Today</button>
          </div>

          <div className='mx-auto flex flex-row w-[100%] justify-center font-light absolute bottom-0 center'>
            <div className='bg-white text-[#AA4DC7] text-center p-5 rounded-t-[10px] z-10 relative left-3 shadow-xs'>
              <p className='text-[16px] font-bold'>Website Plans</p>
              <p className='text-[13px]'>Great for showcasing a professional site</p>
            </div>
            <div className='bg-[#CED0FC] text-black text-center p-5 rounded-t-[10px] pl-10'>
              <p className='text-[16px]'>Business and eCommerce Plans</p>
              <p className='text-[13px]'>Essential for accepting online payments</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Header
