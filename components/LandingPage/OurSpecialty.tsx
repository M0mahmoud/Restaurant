import Image from "next/image";
import React from "react";

export default function OurSpecialty() {
    return (
        <section className="w-full py-12 md:py-24">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-5xl">
                    Our Specialty
                </h2>

                <div className="max-w-5xl mx-auto">
                    <div className="rounded-3xl overflow-hidden shadow-lg border-gray-300 border">
                        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 lg:p-10 ">
                            {/* Content */}
                            <div className="flex flex-col justify-center space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    Daal Makhni
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Discover the star of our menu: Dal Makhni
                                    Slow-cooked lentils infused with aromatic
                                    spices create a rich, creamy stew
                                    that`&rsquo;s both comforting and flavorful.
                                    Served with fragrant basmati rice,
                                    it`&rsquo;s a delicious journey for your
                                    taste buds that you won`&rsquo;t want to
                                    miss. Taste the tradition, experience the
                                    magic. only at our restaurant!
                                </p>
                                <div className="pt-4">
                                    <button
                                        disabled
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-[#4A8B6F] px-8 text-sm font-medium text-white hover:bg-[#3F7A5F] transition-colors"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative rounded-2xl overflow-hidden order-first md:order-last">
                                <Image
                                    src="/specialty.png"
                                    alt="Daal Makhni served in a traditional bowl with cream swirl and mint garnish"
                                    width={400}
                                    height={300}
                                    className="object-cover w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
