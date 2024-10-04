import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <main className='container w-[85%] mx-auto items-center flex flex-col' >
            <div className='py-10 lg:py-20 2xl:py-25 space-y-5' >
                <h1 className='text-[#7670CE] font-bold text-[45px]' >Framejar - Simplifying Content Creation</h1>
                <h2 className='text-[#ECECEC] text-[28px]' >Framejar is an all-in-one, innovative platform built to simplify and enhance the content creation process.</h2>
            </div>
            <Image
                src='/png/framejar.png'
                width={1200}
                height={1200}
                alt='blue-parrot'
                className='px-5 lg:px-10 2xl:px-15'
            />
            <article className='py-20' >
                <ul className='text-[#ECECEC] list-disc text-[36px] font-extralight leading-[54px]' >
                    <li>
                        With Framejar, you have access to a comprehensive suite of tools, including professional full-time and freelance video editors, graphic designers, and media specialists.
                    </li>
                    <br />
                    <li>
                        From videos and animations to compelling social media visuals, Framejar enables you to bring your ideas to life in a fast and efficient way.
                    </li>
                    <br />
                    <li>
                        Our platform is designed to streamline the creative process, reduce production time, and ensure the highest quality output, helping you stay ahead in today’s fast-paced digital landscape
                    </li>
                </ul>
                <br />
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    Framejar caters to content creators by providing a comprehensive suite of tools, including access to full-time and freelance video editors. Whether you’re a marketer, content creator, or business owner, Framejar helps bring your ideas to life.
                </p>
            </article>
        </main>
    )
}

export default page