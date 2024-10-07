
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const services = [
    {
        title: 'Enterprise Software',
        description: 'Our team specializes in enterprise software development, leveraging cutting-edge technologies to deliver scalable and efficient business solutions.',
        imgSrc: '/svg/ser1.svg',
    },
    {
        title: 'Artificial Intelligence',
        description: 'Our team is experienced in AI, Data analysis and machine learning implementing cutting-edge technologies',
        imgSrc: '/svg/ser2.svg',
    },
    {
        title: 'Web Development',
        description: 'Our developers create tailored web solutions that are easy to manage on popular CMS platforms and seamlessly integrate with your internal systems..',
        imgSrc: '/svg/ser3.svg',
    },
    {
        title: 'Cybersecurity',
        description: 'Our team specializes in enterprise software development, leveraging cutting-edge technologies to deliver scalable and efficient business solutions.',
        imgSrc: '/svg/ser4.svg',
    },
    {
        title: 'Software Development',
        description: 'Our team excels in software development, creating innovative, high-performance solutions using the latest technologies.',
        imgSrc: '/svg/ser5.svg',
    },
    {
        title: 'Mobile Applications',
        description: 'We specialize in developing native and cross-platform mobile applications for iOS and Android.',
        imgSrc: '/svg/ser6.svg',
    },
    {
        title: 'Progressive Web Apps',
        description: 'We are proficient in building Progressive Web Apps, delivering fast, reliable, and engaging user experiences across all devices.',
        imgSrc: '/svg/ser7.svg',
    },
    {
        title: 'Product Design & UI-UX',
        description: 'Our team specializes in product and UI/UX design, crafting intuitive and visually compelling experiences that enhance user engagement.',
        imgSrc: '/svg/ser8.svg',
    },
    {
        title: 'Shopify & WordPress Apps',
        description: 'Our team develops custom Shopify and WordPress apps, delivering tailored solutions to optimize eCommerce and website functionality.',
        imgSrc: '/svg/ser9.svg',
    },
];






const Page = () => {
    return (
        <div className="bg-[#17171780] text-white lg:px-40 px-5 lg:py-20 ">
            <h2 className="mx-auto max-w-screen-xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent py-2 lg:text-6xl font-bold font-montserrat">
                Our Services
            </h2>
            <h2 className="mx-auto max-w-screen-xl text-xl mb-4 font-semibold lg:text-4xl mt-10">Innovative IT Solutions</h2>
            <p className="mx-auto max-w-screen-xl mb-8 font-semibold lg:text-4xl">Expert Consulting for Your Business Growth.</p>
            <p className="mx-auto max-w-screen-xl mb-8 text-[#ECECEC] mt-8 text-[20px] font-extralight">
                We provide tailored IT consulting services designed to meet your business's unique needs. With expertise across industries, we deliver innovative solutions that drive efficiency, scalability, and growth. Whether it's technology strategy, implementation, or optimization, we’re here to support your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-screen-xl gap-y-16">
                {services.map((service) => (
                    <Card key={service.title} className="bg-transparent p-5 border-gray-800 rounded-2xl shadow-lg flex flex-col h-[300px] lg:w-[350px] mx-auto">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold text-white mt-10">{service.title}</h3>
                            <Image
                                width={96}
                                height={96}
                                src={service.imgSrc}
                                alt={service.title}
                                className="mb-4 h-24 w-24"
                            />
                        </div>
                        <div className="flex-grow">
                            <p className="mt-2 text-[#ECECEC] text-sm font-thin">{service.description}</p>
                        </div>
                        <div className="flex justify-end mt-auto">
                            <Button className='bg-transparent text-white hover:bg-[#153982] transition duration-500 py-2 px-4 rounded shadow-b border-white border-[1px]'>
                                Let's Talk
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>



            {/* <div className="mt-20">
                <h3 className="lg:text-4xl text-white font-semibold mb-4">Turning Ideas Into Impactful Design Solutions</h3>
                <p className="mb-8">
                    We transform complex challenges into intuitive and engaging user experiences. Our expertise in design turns abstract concepts into clear, effective solutions that drive business results.                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[890px] mx-auto mt-20 z-1 py-10">
                    <Card className="bg-transparent p-6 rounded-2xl shadow-lg lg:w-[280px] lg:h-[320px] rotate-[8deg] border-gray-800 bg-gradient-to-b from-gray-900 to-black">
                        <Image src="/svg/c1.svg" className='w-16 h-16 mx-auto' width={10} height={10} alt='' />
                        <h3 className="text-sm font-semibold font-montserrat  text-[#ECECEC] mt-5 text-center">
                            Agility and Adaptability</h3>
                        <p className="mt-2 text-gray-300 font-thin">
                            We embrace change and respond quickly to market demands, providing timely solutions that keep our clients competitive.
                        </p>
                    </Card>
                    <Card className="bg-transparent p-6 rounded-2xl shadow-lg lg:w-[300px]  border-gray-800 z-5 rotate-[-5deg] bg-gradient-to-b from-gray-900 to-black">
                        <Image src="/svg/c2.svg" className='w-16 h-16 mx-auto' width={10} height={10} alt='' />
                        <h3 className="text-sm font-semibold font-montserrat  text-[#ECECEC] mt-5  text-center">
                            Integrity and Trust</h3>
                        <p className="mt-2  text-gray-300 font-thin">
                            We maintain the highest standards of integrity, building trust through transparency and accountability in all our interactions
                        </p>
                    </Card>
                    <Card className="bg-transparent p-6 rounded-2xl shadow-lg lg:w-[300px] border-gray-800 z-1 rotate-[5deg] bg-gradient-to-b from-gray-900 to-black">
                        <Image src="/svg/c1.svg" className='w-16 h-16 mx-auto' width={10} height={10} alt='' />
                        <h3 className="text-sm font-semibold font-montserrat  text-[#ECECEC] mt-5 text-center">
                            Agility and Adaptability</h3>
                        <p className="mt-2  text-gray-300 font-thin">
                            We embrace change and respond quickly to market demands, providing timely solutions that keep our clients competitive.
                        </p>
                    </Card>
                </div>
            </div> */}



            <div className="mt-20">
                <div className="mx-auto max-w-6xl">
                    <p className=' lg:text-5xl text-white'>Turning Ideas Into Impactful Design Solutions</p>
                    <p className='text-[#ECECEC] font-montserrat lg:text-lg font-thin mt-10'>
                        We transform complex challenges into intuitive and engaging user experiences. Our expertise in design turns abstract concepts into clear, effective solutions that drive business results.                        </p>
                </div>


                <div className="flex flex-col justify-center mt-20">
                    <div className="flex lg:flex-row flex-col mt-10 mx-auto gap-20">
                        <div className="flex flex-col max-w-lg">
                            <p className='lg:text-4xl font-semibold'>Innovative Design & Technology</p>
                            <p className='mt-10 lg:text-lg font-montserrat font-thin'>We craft cutting-edge solutions that push technological boundaries and connect businesses with lasting impact.</p>
                        </div>
                        <div className="flex flex-col max-w-lg">
                            <p className='lg:text-4xl font-semibold'>Tailored Approach</p>
                            <p className='mt-10 lg:text-lg font-montserrat font-thin'>
                                Our flexible consulting process adapts to the unique needs of each project, ensuring the best strategies and outcomes.
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col mx-auto mt-24 gap-20">
                        <div className="flex flex-col max-w-lg">
                            <p className='lg:text-4xl font-semibold'>Ethics & Integrity</p>
                            <p className='mt-10 lg:text-lg font-montserrat font-thin'>
                                We prioritize ethical practices and ensure our solutions are inclusive and accessible, providing equal opportunities for all.
                            </p>
                        </div>
                        <div className="flex flex-col max-w-lg">
                            <p className='lg:text-4xl font-semibold'>Proven Expertise Across Industries</p>
                            <p className='mt-10 lg:text-lg font-montserrat font-thin'>
                                With years of experience, Kaliper Technologies is the trusted partner for delivering successful IT solutions across a variety of industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
