import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <main className='container w-[85%] mx-auto items-center flex flex-col' >
            <div className='py-10 lg:py-20 2xl:py-25 space-y-5' >
                <h1 className='text-[#7670CE] font-bold text-[45px]' >HRMS (Human Resource Management System)</h1>
                <h2 className='text-[#ECECEC] text-[28px]' >This emphasizes both optimization and overall improvement in HR management systems.</h2>
            </div>
            <Image
                src='/png/hrms.png'
                width={1200}
                height={1200}
                alt='hrms'
                className='px-5 lg:px-10 2xl:px-15'
            />
            <article className='py-20' >
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    The HRMS is a robust software solution designed to streamline all aspects of human resource management within organizations. From recruitment to employee performance evaluation, this system provides comprehensive tools to manage your workforce effectively.
                </p>
                <br />
                <ul className='text-[#ECECEC] list-disc text-[36px] font-extralight leading-[54px]' >
                    <li>
                        Employee Database: Maintain a centralized repository of employee records, including personal details, job history, and performance reviews.
                    </li>
                    <br />
                    <li>
                        Recruitment Management: Simplify the hiring process with tools for job posting, applicant tracking, and interview scheduling.
                    </li>
                    <br />
                    <li>
                        Payroll Management: Automate payroll processes to ensure timely and accurate employee compensation, including tax calculations and deductions.
                    </li>
                    <br />
                    <li>
                        Performance Management: Facilitate employee evaluations and feedback processes to support professional development and productivity.
                    </li>
                </ul>
                <br />
                <p className='text-[#ECECEC] text-[36px] font-extralight leading-[54px]' >
                    Enhance your HR processes and empower your workforce with the HRMS!
                </p>
            </article>
        </main>
    )
}

export default page