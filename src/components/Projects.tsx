import Image from "next/image"
import Project1 from "../../public/images/project-1.webp"
import Project2 from "../../public/images/Project-2.png"
import Project3 from "../../public/images/Project-3.jpg"
import Project4 from "../../public/images/Project-4.webp"
import { ImFolderDownload } from "react-icons/im";
import Link from "next/link"

export default function Projects(){
    
    return (
        <div className="mt-14 pb-20 medium:px-5 max-medium:w-[480px] medium:ml-0">
            <div className="max-medium:flex max-medium:flex-col max-medium:items-center">
                <h2 className="text-secondary dark:text-white text-2xl font-normal w-full verysmall:-ml-3"> Projects </h2>
                <div className="max-w-[800px] h-auto mt-10 grid max-medium:grid-cols-1 medium:grid-cols-2 medium:space-x-20 max-medium:space-y-14">
                    <div className="max-verysmall:max-w-[370px] verysmall:max-w-[500px] medium:w-[400px]">
                        <div className="verysmall:w-[380px] verysmall:h-[225px] max-verysmall:w-[280px] max-verysmall:h-[160px]">
                            <Image src={Project1} alt="smart-goals" className="object-cover rounded-lg scale-110 max-medium:ml-4" />
                        </div>
                        <div className="max-verysmall:mt-12 verysmall:mt-14 medium:-ml-4">
                            <h2 className="max-verysmall:text-lg verysmall:text-xl text-secondary dark:text-white font-medium font-fredoka max-verysmall:mr-3"> Setting up a SMART goal & Identifying KPIs </h2>
                            <p className="mt-3 text-buttonDark dark:text-third text-base font-normal font-fredoka medium:-mr-4"> This project aims to establish a solid foundation for the business by providing a comprehensive business description, a SMART goal, and the corresponding key performance indicators (KPIs). By defining these essential components, we can ensure a clear understanding of our business objectives and the metrics needed to measure them. </p>
                            <Link href='/projects\SMART-Goal-and-KPIs.pptx' download='SMART Goal and KPIs.pptx' className="w-fit px-4 py-3 mt-6 flex items-center justify-center gap-2 bg-blueTag text-white rounded-md">     
                                <p className="text-white rounded-md"> Download Powerpoint </p> 
                                <ImFolderDownload className="text-white" />
                            </Link>
                        </div>
                    </div>
                    <div className="max-verysmall:max-w-[370px] verysmall:max-w-[500px] medium:w-[430px]">
                        <div className="verysmall:w-[380px] verysmall:h-[240px] max-verysmall:w-[280px] max-verysmall:h-[160px]">
                            <Image src={Project2} alt="smart-goals" className="object-cover rounded-lg scale-110 max-tiny:ml-3 tiny:ml-4" />
                        </div>
                        <div className="max-verysmall:mt-10 verysmall:mt-8 w-full medium:-ml-1">
                            <h2 className="max-verysmall:text-lg verysmall:text-xl text-secondary dark:text-white font-medium font-fredoka"> Finding a Target audience, Building customer persona and Mapping out the customer journey </h2>
                            <p className="mt-3 text-buttonDark dark:text-third text-base font-normal font-fredoka max-verysmall:-mr-2"> I created a comprehensive customer persona, a fictional yet representative individual embodying the characteristics of the target customer, and mapping their journey across five phases, from awareness to advocacy, to gain a deeper understanding of their needs, preferences, and pain points. </p>
                            <Link href="/projects/Customer Persona and Journey.pptx" download='Customer Persona and Journey.pptx' className="w-fit px-4 py-3 mt-6 flex items-center justify-center gap-2 bg-blueTag text-white rounded-md">     
                                <p className="text-white rounded-md"> Download Powerpoint </p> 
                                <ImFolderDownload className="text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-[800px] h-auto mt-14 grid max-medium:grid-cols-1 medium:grid-cols-2 medium:space-x-20 max-medium:space-y-14">
                    <div className="max-verysmall:max-w-[370px] verysmall:w-[400px] max-verysmall:ml-3">
                        <div className="verysmall:w-[380px] verysmall:h-[220px] max-verysmall:w-[280px] max-verysmall:h-[160px]">
                            <Image src={Project3} alt="smart-goals" className="object-cover rounded-lg scale-110" />
                        </div>
                        <div className="max-verysmall:mt-3 verysmall:mt-1 max-verysmall:-ml-2 verysmall:-ml-5">
                            <h2 className="max-verysmall:text-lg verysmall:text-xl text-secondary dark:text-white font-medium font-fredoka"> Developing a content calendar </h2>
                            <p className="mt-3 text-buttonDark dark:text-third text-base font-normal font-fredoka"> I developed a content calendar by categorizing content into five core themes - informational, inspirational, entertaining, and business-related - which includes detailed specifications for each post, such as where to post the content, call-to-actions, content type, and date and time. </p>
                            <Link href='/projects/content-calendar.xlsx' download="Content Calendar.xlsx" className="w-fit px-4 py-3 mt-6 flex items-center justify-center gap-2 bg-blueTag text-white rounded-md">     
                                <p className="text-white rounded-md"> Download Spreadsheet </p> 
                                <ImFolderDownload className="text-white" />
                            </Link>
                        </div>
                    </div>
                    <div className="max-verysmall:max-w-[370px] verysmall:w-[430px] max-verysmall:ml-3">
                        <div className="verysmall:w-[380px] verysmall:h-[200px] max-verysmall:w-[280px] max-verysmall:h-[160px]">
                            <Image src={Project4} alt="smart-goals" className="object-cover rounded-lg scale-110" />
                        </div>
                        <div className="max-verysmall:mt-0 verysmall:mt-5 w-full max-verysmall:-ml-2 verysmall:-ml-5">
                            <h2 className="max-verysmall:text-lg verysmall:text-xl text-secondary dark:text-white font-medium font-fredoka"> Creating and Evaluating Social Media Campaigns </h2>
                            <p className="mt-3 text-buttonDark dark:text-third text-base font-normal font-fredoka max-verysmall:-mr-3"> In this project, I created a full-fledged Meta Ads campaign, utilizing Ads Manager to execute and optimize ad spend, and conducted in-depth performance analysis, including A/B testing, ROAS, ROI, and LTV calculations, to ensure not only that the campaign met its goals, but also that it did so in a cost-efficient manner. </p>
                            <Link href='/projects/Campaigns.pdf' download='Social Media Campaign.pdf' className="w-fit px-4 py-3 mt-6 flex items-center justify-center gap-2 bg-blueTag text-white rounded-md">     
                                <p className="text-white rounded-md"> Download Pdf </p> 
                                <ImFolderDownload className="text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
