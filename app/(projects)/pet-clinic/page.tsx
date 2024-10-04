import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <main className='container w-[85%] mx-auto items-center flex flex-col' >
            <div className='py-10 lg:py-20 2xl:py-25 space-y-5' >
                <h1 className='text-[#7670CE] font-bold text-[45px]' >Pet Clinic Management System - Streamlined Care for Your Furry Friends</h1>
                <h2 className='text-[#ECECEC] text-[28px]' >The Pet Clinic Management System is a comprehensive software solution designed to help veterinary clinics manage their operations efficiently. </h2>
            </div>
            <Image
                src='/png/pet-clinic.png'
                width={1200}
                height={1200}
                alt='pet-clinic'
                className='px-5 lg:px-10 2xl:px-15'
            />
            <article className='py-20' >
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    With features tailored for pet care providers, this system simplifies appointment scheduling, patient management, medical records, billing, and inventory tracking.
                </p>
                <br />
                <ul className='text-[#ECECEC] list-disc text-[36px] font-extralight leading-[54px]' >
                    <li>
                        Appointment Scheduling: Easily book, reschedule, and manage appointments with pet owners, ensuring optimal time management for staff.
                    </li>
                    <br />
                    <li>
                        Medical Records Management: Keep detailed medical histories for pets, including vaccination records, treatments, and prescriptions, all in one secure place.
                    </li>
                    <br />
                    <li>
                        Inventory Management: Track medications, supplies, and products to maintain adequate stock levels and streamline ordering processes.
                    </li>
                    <br />
                    <li>
                        Client Communication: Enhance client relationships with reminders, follow-ups, and easy access to information.
                    </li>
                </ul>
                <br />
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    Ensure quality care for pets while optimizing clinic operations with     the Pet Clinic Management System!
                </p>
            </article>
        </main>
    )
}

export default page