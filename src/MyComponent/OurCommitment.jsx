import React from 'react'
import { OurImages } from "../Data";

export default function OurCommitment() {
  return (
    <div className='bg-[#e8edf6] mx-auto text-gray-500 h-full mb-5 '>
        <h1 className='italic text-center text-green-700 font-bold'> Our commitments</h1>
        <p className='text-black font-bold text-center text-2xl p-6'> Commitment is an act, not a word</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3  '>
<div className='bg-white max-w-80  p-6 mx-auto text-center rounded-2xl border-amber-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group '>

    <h1 className='text-2xl text-black font-bold mb-1 flex justify-center gap-2 '> <img src={OurImages[0]}alt="vision" className='w-10' /> Mission</h1>
<p className='text-black leading-relaxed'>
             To offer the greatest defense and establish the benchmark for security services that consistently surpass the needs of our clients. Save lives and property by using creative and original ideas!
</p>
</div>
<div className='bg-white max-w-80  p-6 mx-auto text-center rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group '>

    <h1 className='text-2xl text-black font-bold mb-1 flex justify-center gap-2'> <img src={OurImages[1]} alt="" className='w-10' />vision</h1>
<p className='text-black leading-relaxed'>
             A devoted security team, works to reach the highest level of customer satisfaction 
          through insightful risk solutions, exceptional service, and the best possible 
          protection for our clients and their assets.
</p>
</div>
<div className='bg-white max-w-80  p-6 mx-auto text-center rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group '>

    <h1 className='text-2xl text-black font-bold mb-1 flex justify-center gap-2'> <img src={OurImages[2]} alt="mission" className='w-10' />vision</h1>
<p className='text-black leading-relaxed'>
     Be proud of what we do and do it with the utmost honesty, integrity, and fairness. Aim to complete each assignment in a superior way. Always look for better methods to do everything is innovation.     
</p>
</div>
</div>
    </div>
  )
}
