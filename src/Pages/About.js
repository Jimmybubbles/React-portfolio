import React from "react";
import Work from "../Components/Work"
import { personalDetails, workDetails, eduDetails } from "../details";

function About() {
    return (
        <main className="container mx-auto max-width pt-10 pb-20">
            <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight front-bold">
                    About Me</h1>
                <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
            </section>

            <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:leading-tight font-bold">
                    Work Experience</h1>
                {React.Children.toArray(
                    workDetails.map(({Position, Company, Location, Type, Duration}) => {
                        return (
                        <Work
                        position={Position}
                        company={Company}
                        Location={Location}
                        type={Type}
                        duration={Duration}
                        />
                        )
                    })
                )}
            </section>

            <section>
                <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">Education</h1>
                {React.Children.toArray(
                    eduDetails.map(({ Course, Company, Location, Type, Duration}) => {
                        return(
                        <Work
                        position={Course}
                        company={Company}
                        location={Location}
                        type={Type}
                        duration={Duration}
                        />
                        )
                    })
                    
                )}
            </section>
        </main>
    );
}

export default About;