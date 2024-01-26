import React, { FunctionComponent } from "react";
import FallingElements from "@/src/pages/fallingElements";
import Image from "next/image";

type LoginPortalProps = {
    isTop: boolean;
    src: string;
};

const LoginPortal: FunctionComponent<LoginPortalProps> = ({ isTop, src }) => {
    return (
        <>
            <Image
                width={500}
                height={500}
                src={src}
                alt="Portal"
                className="pointer-events-none z-50"
            />
            <div className="relative rotate-90">
                {isTop && <FallingElements />}
            </div>
            <Image
                width={500}
                height={500}
                src={src}
                alt="Portal"
                className="pointer-events-none z-0"
            />

            {/* FIXME: Add the same logic as the bottom code to the above thing if posiible */}
            {/* <div className="flex justify-center items-center w-full h-[50px] md:h-16 xl:h-20 mb-2">
                <div
                    className={`relative bg-gray-600 h-[95vw] w-6 sm:h-[580px] sm:w-7 md:h-[700px] md:w-9 lg:h-[940px] xl:h-[1200px] rounded-[50%] ${
                        isTop ? "rotate-90" : "-rotate-90"
                    } relative before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 after:top-0 after:right-0 after:bottom-0 after:left-0 before:rounded-[50%] after:rounded-[50%] before:border-l-[4px] before:border-solid before:border-l-[dodgerblue] bg-gradient-to-r from-blue-500 to-transparent before:z-[3] after:border-r-[4px] after:border-solid after:border-r-[dodgerblue] after:shadow-[0_0_40px_dodgerblue] after:z-0`}>
                    {isTop && <FallingElements />}
                </div>
            </div> */}
        </>
    );
};

export default LoginPortal;
