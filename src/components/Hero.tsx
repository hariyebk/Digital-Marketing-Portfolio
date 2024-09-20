import Image from "next/image"
import Link from "next/link"
import MetaLogo from "../../public/images/meta-logo.png"
import { IoMdMail } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa6";
import Avatar from "../../public/images/avatar.png"

export default function Hero() {
    

    return (
        <section className='max-small:mt-10 small:mt-16 w-full flex max-medium:flex-col max-medium:items-center medium:items-start medium:justify-between text-secondary dark:text-white'>
            <div>
                <div className="flex items-center max-small:gap-3 small:gap-6">
                    <div className="small:w-[60px] small:h-[60px] max-small:w-[40px] max-small:h-[40px]">
                        <Image src={MetaLogo} alt="meta-logo" className="object-cover max-small:mt-1 small:mt-2" />
                    </div>
                    <h1 className="mt-2 max-small:text-[30px] small:text-[40px] wide:text-[50px] font-bold"> Meta Certified </h1>
                </div>
                <h3 className="max-small:text-[23px] small:text-2xl wide:text-3xl mt-5"> Digital Marketing Associate </h3>
                <p className="mt-6 max-verysmall:text-base verysmall:text-xl font-normal max-w-[480px]"> With a strong understanding of Meta's platforms and a commitment to delivering data-driven marketing solutions, I want to help brands succeed in the online world. </p>
                <p className="max-small:mt-5 small:mt-10 text-[18px] font-medium"> Lets connect! </p>
                <h2 className="mt-6 text-2xl font-normal"> Socials </h2>
                <div className="mt-4 max-w-[452px] flex flex-wrap items-start max-verysmall:gap-6 verysmall:gap-4">
                    <Link href="mailto:harunbekri6@gmail.com" className="px-4 py-2 bg-buttonLight dark:bg-buttonDark rounded-xl flex items-center justify-center gap-2">
                        <IoMdMail className="w-5 h-5 text-secondary dark:text-white" />
                        <p className="text-[18px] text-secondary dark:text-white font-normal"> Email </p>
                    </Link>
                    <Link href="https://t.me/haribk" target="_blank" className="px-4 py-2 bg-buttonLight dark:bg-buttonDark rounded-xl flex items-center justify-center gap-2">
                        <FaTelegram className="w-5 h-5 text-secondary dark:text-white" />
                        <p className="text-[18px] text-secondary dark:text-white font-normal"> Telegram  </p>
                    </Link>
                    {/* <Link href="https://www.linkedin.com/in/hariyebk/" target="_blank" className="px-4 py-2 bg-buttonLight dark:bg-buttonDark rounded-xl flex items-center justify-center gap-2">
                        <FaLinkedin className="w-5 h-5 text-secondary dark:text-white" />
                        <p className="text-[18px] text-secondary dark:text-white font-normal"> Linkedin  </p>
                    </Link> */}
                    <Link href="https://utfs.io/f/251d201e-5f49-4154-b033-3d33018128ce-q7pjyw.pdf" target="_blank" className="px-4 py-2 bg-buttonLight dark:bg-buttonDark rounded-xl flex items-center justify-center gap-2">
                        <IoDocumentTextOutline className="w-5 h-5 text-secondary dark:text-white" />
                        <p className="text-[18px] text-secondary dark:text-white font-normal"> Resume </p>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className="wide:w-[250px] wide:h-[200px] medium:w-[200px] medium:h-[150px] max-medium:hidden mt-5 max-wide:ml-10 wide:ml-14 flex items-center justify-center">
                    <Image src={Avatar} alt="profile-image" className="object-cover" />
                </div>
                <div className="max-medium:mt-16 medium:mt-14 medium:-ml-3 max-medium:max-w-[470px]">
                    <h2 className="text-2xl font-normal"> Skill Sets </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-7 medium:max-w-[390px] wide:max-w-[500px]">
                        <div className="w-fit h-auto bg-[#92c5fc] rounded-md max-medium:px-3 medium:px-1.5 wide:px-3 py-2 flex items-center justify-center">
                            <p className="text-secondary font-medium max-verysmall:text-sm verysmall:text-base medium:text-sm wide:text-base"> Meta ads manager </p>
                        </div>
                        <div className="w-fit h-auto bg-[#d8b4fe] rounded-md max-medium:px-3 medium:px-1.5  wide:px-3 py-2 flex items-center justify-center">
                            <p className="text-secondary font-medium max-verysmall:text-sm verysmall:text-base medium:text-sm wide:text-base"> Analyzing KPI's </p>
                        </div>
                        <div className="w-fit h-auto bg-[#fba6a4] rounded-md max-medium:px-3 medium:px-1.5 wide:px-3 py-2 flex items-center justify-center">
                            <p className="text-secondary font-medium max-verysmall:text-sm verysmall:text-base medium:text-sm wide:text-base"> Building a brand </p>
                        </div>
                        <div className="w-fit h-auto bg-[#fdba74] rounded-md max-medium:px-3 medium:px-1.5 wide:px-3 py-2 flex items-center justify-center">
                            <p className="text-secondary font-medium max-verysmall:text-sm verysmall:text-base medium:text-sm wide:text-base"> Marketing metrics </p>
                        </div>
                        <div className="w-fit h-auto bg-[#86efac] rounded-md max-medium:px-3 medium:px-1.5 wide:px-3 py-2 flex items-center justify-center">
                            <p className="text-secondary font-medium max-verysmall:text-sm verysmall:text-base medium:text-sm wide:text-base"> Creating and managing content </p>
                        </div>
                        <div className="w-fit h-auto bg-[#d8b4fe] rounded-md max-medium:px-3 medium:px-1.5 wide:px-3 py-2 flex items-center justify-center">
                            <p className="text-secondary font-medium max-verysmall:text-sm verysmall:text-base medium:text-sm wide:text-base"> SEO </p>
                        </div>
                        <div className="verysmall:w-fit max-verysmall:max-w-[245px] h-auto bg-[#92c5fc] rounded-md max-medium:px-3 medium:px-1.5 wide:px-3 py-2 flex items-center justify-center">
                            <p className="text-secondary font-medium max-verysmall:text-sm verysmall:text-base medium:text-sm wide:text-base"> Campaign performance Monitoring and Evaluation </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
