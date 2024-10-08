import React from "react";

export const Hero = () => {

    return (
        <div className="w-full py-6 md:py-12 lg:py-18 md:px-24 lg:px-24 text-[#000000]">
            <div className="container px-4 md:px-6 mx-auto flex flex-col lg:flex-row lg:gap-12">
                <div className="flex flex-col justify-center space-y-4 lg:w-1/2 text-center sm:text-center lg:text-left  md:text-center">
                    <div className="space-y-2">
                        
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                            Experience <span className="relative inline-block">
                                <span className="relative z-10">Coding</span>
                                <span className="absolute bottom-0.5 left-0 w-full h-3 bg-orange-500 transform -skew-x-12"></span>
                            </span>
                        </h1>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                            Like Never Before!

                        </h1>
                        <p className="max-w-[600px] text-[#475569] text-center md:text-xl sm:text-center lg:text-left md:text-center">
                            Dive into our comprehensive curriculum and transform your career.
                            Learn from the industry experts.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[100px]:flex-row">
                        {/* You can add buttons or other elements here */}
                    </div>
                </div>
                <img
                    src="src/assets/hero3.svg"
                    width="600"
                    height="600"
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:w-1/2"
                />
            </div>
        </div>

    );
};