import Image from "next/image";
import Container from "../Container";
import EntrepreneurSection from "./EntrepreneurSection";
import InvestorSection from "./InvestorSection";
import CallToAction from "./CallToAction";
import LastProjects from "./LastProjects";

const Onboarding = () => {
    return (
        <>
        <Container>
            <div className="flex flex-col md:flex-row pt-5 lg:pt-10">
                <div className="lg:w-3/4 flex-wrap">
                    <EntrepreneurSection />
                </div>
                <div className="p-4 lg:md:w-1/4 pt-10 lg:pt-0">
                    <Image 
                        src="/images/entrepreneur.webp" 
                        alt="Entrepreneur" 
                        width={500} 
                        height={300} 
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row pt-14 lg:pt-14 pb-5">
                <div className="p-4 lg:md:w-1/4 hidden md:block">
                    <Image 
                        src="/images/investor.webp" 
                        alt="Investor" 
                        width={500} 
                        height={300} 
                    />
                </div>
                <div className="lg:w-3/4">
                    <InvestorSection />
                </div>
                <div className="p-4 lg:md:w-1/4 pt-5 lg:pt-0 md:hidden">
                    <Image 
                        src="/images/investor.webp" 
                        alt="Investor" 
                        width={500} 
                        height={300} 
                        className="rounded-lg"
                    />
                </div>
            </div>
        </Container>
        <CallToAction />
        <Container>
            <div className="pt-5 lg:pt-10">
                <LastProjects />
            </div>
        </Container>
        </>
    );
};

export default Onboarding;
