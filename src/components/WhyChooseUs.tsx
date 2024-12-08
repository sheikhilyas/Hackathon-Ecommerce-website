import Image from "next/image";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineLunchDining ,MdOutlineDinnerDining } from "react-icons/md";

export default function WhyChooseUs() {
    return (
        <section className="bg-black text-white py-16 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side: Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/image10.png" 
                        alt="Tacos"
                        className="rounded-lg"
                        width={300}
                        height={200}
                    />
                    <Image
                        src="/image11.png" 
                        alt="Burger"
                        className="rounded-lg"
                        width={300}
                        height={200}
                    />
                    <Image
                        src="/image12.png" 
                        alt="Chicken"
                        className="rounded-lg"
                        width={300}
                        height={200}
                    />
                    <Image
                        src="/image13.png" 
                        alt="Fries"
                        className="rounded-lg"
                        width={300}
                        height={200}
                    />
                </div>

                {/* Right Side: Content */}
                <div>
                    <h2 className="text-orange-400 font-semibold text-lg">
                        Why Choose Us
                    </h2>
                    <h1 className="text-4xl font-bold text-white">
                        Extra<span className="text-orange-400">ordinary</span> Taste
                        <br />
                        And Experienced
                    </h1>
                    <p className="text-gray-400 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        diam pellentesque bibendum non dui volutpat fringilla bibendum.
                        Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                        Ultrices mattis sed vitae mus risus.
                    </p>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <div className="bg-orange-500 p-4 square-full">
                                <IoFastFoodOutline className="size-10"/>
                            </div>
                            <p className="mt-2">Fast Food</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-orange-500 p-4 square-full"> <MdOutlineLunchDining className="size-10"/></div>
                            <p className="mt-2">Lunch</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-orange-500 p-4 square-full"><MdOutlineDinnerDining className="size-10"/></div>
                            <p className="mt-2">Dinner</p>
                        </div>
                    </div>
                    <div className="mt-8 flex items-center">
                        <div className="text-4xl font-bold text-orange-400">30+</div>
                        <p className="ml-4 ">
                            Years of <br />
                            <span className="font-semibold">Experienced</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
