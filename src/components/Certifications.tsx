import Image from "next/image"
import Badge1 from "../../public/images/badge1.png"
import Badge2 from "../../public/images/badge2.png"
import Link from "next/link"
import { LuArrowUpRight } from "react-icons/lu";

export default function Certifications() {
    return (
        <div className="mt-16">
            <div className="flex max-medium:flex-col max-medium:items-center medium:items-start small:gap-[50px] max-medium:gap-10 medium:gap-[150px]">
                <div className="max-verysmall:w-full verysmall:w-[480px] medium:w-[550px]">
                    <h2 className="text-secondary dark:text-white text-2xl font-normal"> Certifications </h2>
                    <div className="mt-10 flex max-verysmall:flex-col items-center verysmall:justify-between max-verysmall:gap-10">
                        <div className="max-verysmall:-ml-6">
                            <div className="verysmall:w-[200px] verysmall:h-[200px] max-verysmall:w-[170px] max-verysmall:h-[130px]">
                                <Image src={Badge1} alt="badge-1" className="object-cover mr-3" />
                            </div>
                            <Link href="https://www.credly.com/badges/8d5f5295-2bf3-4593-893a-411629d1b363/linked_in_profile" target="_blank" className="max-verysmall:mt-[65px] verysmall:mt-6 max-verysmall:pl-10 verysmall:pl-14 flex items-center gap-1 text-2xl text-secondary dark:text-white hover:text-[#3a82f6] dark:hover:text-[#3a82f6] font-semibold hover:font-medium dark:font-medium">
                                <p> Verify </p>
                                <LuArrowUpRight/>
                            </Link>
                        </div>
                        <div className="max-verysmall:-ml-6">
                            <div className="verysmall:w-[200px] verysmall:h-[200px] max-verysmall:w-[170px] max-verysmall:h-[130px]">
                                <Image src={Badge2} alt="badge-2" className="object-cover" />
                            </div>
                            <Link href="https://www.credly.com/badges/f58fe7dd-ecdb-49be-8f6f-e9a925347f82/linked_in_profile" target="_blank" className="max-verysmall:mt-[65px] verysmall:mt-6 max-verysmall:pl-10 verysmall:pl-14 flex items-center gap-1 text-2xl text-secondary dark:text-white hover:text-[#3a82f6] dark:hover:text-[#3a82f6] font-semibold hover:font-medium dark:font-medium">
                                <p> Verify </p>
                                <LuArrowUpRight/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="small:ml-8 medium:ml-0">
                    <h2 className="text-secondary dark:text-white text-2xl font-normal"> Overview </h2>
                    <p className="mt-6 text-secondary dark:text-white max-verysmall:text-base max-verysmall:leading-[26px] verysmall:text-lg font-normal max-small:max-w-full small:max-w-[520px]"> Throughout this Certification program, I had the privilege of learning from industry-leading experts who have decades of experience leading marketing teams for Fortune 500 companies. Inspired by the popular snack brand <Link href="https://www.potatopro.com/brands/sun-chips-ethiopia" className="text-[#3a82f6] hover:font-medium"> SunChips </Link>, I created a fictional brand, Kesh Chips, as a case study for my projects. To put my knowledge and skills into practice, I completed a series of hands-on projects centered around Kesh Chips, showcasing my ability to develop and execute effective digital marketing strategies. </p>
                </div>
            </div>
        </div>
    )
}
