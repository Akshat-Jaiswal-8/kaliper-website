import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <main className='container w-[85%] mx-auto items-center flex flex-col' >
            <div className='py-10 lg:py-20 2xl:py-25 space-y-5' >
                <h1 className='text-[#7670CE] font-bold text-[45px]' >Candvue: Streamlining Candidate Screening at Scale</h1>
                <h2 className='text-[#ECECEC] text-[28px]' >Candvue  is the affordable solution for screening candidates at scale. Traditional hiring methods are often costly and time-consuming. With Candvue, you can drastically reduce your hiring overhead while enhancing the efficiency of your recruitment proces</h2>
            </div>
            <Image
                src='/png/candvue.png'
                width={1200}
                height={1200}
                alt='candvue'
                className='px-5 lg:px-10 2xl:px-15'
            />
            <article className='py-20' >
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    Hiring the right talent is crucial, but traditional recruitment methods can be slow and expensive. Candvue transforms your hiring process with an efficient, cost-effective solution for candidate screening at scale.
                </p>
                <br />
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    Candvue  is the affordable solution for screening candidates at scale. Traditional hiring methods are often costly and time-consuming. With Candvue, you can drastically reduce your hiring overhead while enhancing the efficiency of your recruitment process.
                </p>
                <br />
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    Our smart candidate screening software allows you to evaluate candidates faster, without compromising on quality, so you can focus on what matters most—hiring the right talent.
                </p>
                <br />
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    Save valuable time, cut down costs, and elevate your hiring strategy with Candvue.
                </p>
            </article>
        </main>
    )
}

export default page