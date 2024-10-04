import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <main className='container w-[85%] mx-auto items-center flex flex-col' >
            <div className='py-10 lg:py-20 2xl:py-25 space-y-5' >
                <h1 className='text-[#7670CE] font-bold text-[45px]' >BlueParrot.ai - Smart, Customized Messaging with AI</h1>
                <h2 className='text-[#ECECEC] text-[28px]' >BlueParrot.ai is an innovative Chrome extension designed to simplify and enhance the way users create personalized messages.</h2>
            </div>
            <Image
                src='/png/blue-parrot.png'
                width={1200}
                height={1200}
                alt='blue-parrot'
                className='px-5 lg:px-10 2xl:px-15'
            />
            <article className='py-20' >
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    Powered by Kaliper’s proprietary generative AI, BlueParrot.ai allows users to generate customized messages with just a brief prompt, making communication faster, more efficient, and more meaningful.
                </p>
                <br />
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    With BlueParrot.ai, the message template is dynamic and continuously adapts as you interact with profiles online. Whether you’re sending an email, responding on social media, or connecting on professional platforms, our tool seamlessly updates the content based on the specific context, ensuring your communication is always tailored to the recipient.
                </p>
                <br />
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    Unlock the power of personalized messaging and transform the way you communicate – effortlessly, intelligently, and in real-time.
                </p>
            </article>
        </main>
    )
}

export default page