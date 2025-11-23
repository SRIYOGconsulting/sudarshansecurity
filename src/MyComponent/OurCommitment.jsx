import React from 'react'
import { OurImages } from "../Data";

export default function OurCommitment() {
  return (
    <div className='bg-[#e8edf6] mx-auto text-gray-500 h-full mb-5'>
        <h1 className='italic text-center text-green-700 font-bold'> Our commitments</h1>
        <p className='text-black font-bold text-center text-2xl p-6'> Commitment is an act, not a word</p>
        <div className='flex justify-center items-center gap-3 '>
<div className='bg-white max-w-80  p-6 mx-auto text-center'>

    <h1 className='text-2xl text-black font-bold mb-1 flex justify-center gap-2'> <img src={OurImages[0]}alt="vision" className='w-10' /> vision</h1>
<p className='text-black leading-relaxed'>
             A devoted security team, works to reach the highest level of customer satisfaction 
          through insightful risk solutions, exceptional service, and the best possible 
          protection for our clients and their assets.
</p>
</div>
<div className='bg-white max-w-80  p-6 mx-auto text-center'>

    <h1 className='text-2xl text-black font-bold mb-1 flex justify-center gap-2'> <img src={OurImages[1]} alt="" className='w-10' />vision</h1>
<p className='text-black leading-relaxed'>
             A devoted security team, works to reach the highest level of customer satisfaction 
          through insightful risk solutions, exceptional service, and the best possible 
          protection for our clients and their assets.
</p>
</div>
<div className='bg-white max-w-80  p-6 mx-auto text-center'>

    <h1 className='text-2xl text-black font-bold mb-1 flex justify-center gap-2'> <img src={OurImages[2]} alt="mission" className='w-10' />vision</h1>
<p className='text-black leading-relaxed'>
             A devoted security team, works to reach the highest level of customer satisfaction 
          through insightful risk solutions, exceptional service, and the best possible 
          protection for our clients and their assets.
</p>
</div>
</div>
    </div>
  )
}
