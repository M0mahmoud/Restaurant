import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="container mx-auto pt-5 sm:pt-8">
      <div className="rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="bg-orange-600  p-6 md:p-12 lg:p-16  flex flex-col justify-center ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white space-y-2">
              <span className="block">Something hot.</span>
              <span className="block">Something tasty.</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-md">
              At Food Time: your destination for menu viewing, reservations, and
              easy dine-in or takeaway ordering!
            </p>
            <Link
              href="#explore"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-[#E85D3D] bg-white hover:bg-white/90 transition-colors duration-200 w-fit"
            >
              Explore More
            </Link>
          </div>
          <div className="grid grid-cols-2">
            <div className="relative">
              <Image
                src="/h1.png"
                width={300}
                height={246}
                loading="lazy"
                alt="hero image"
                className="object-cover w-full !h-full"
              />
            </div>
            <div className="relative">
              <Image
                src="/h2.png"
                width={300}
                height={246}
                loading="lazy"
                alt="hero image"
                className="object-cover w-full !h-full"
              />
            </div>
            <div className="relative">
              <Image
                src="/h3.png"
                width={300}
                height={246}
                loading="lazy"
                alt="hero image"
                className="object-cover w-full !h-full"
              />
            </div>
            <div className="relative">
              <Image
                src="/h4.png"
                width={300}
                height={246}
                loading="lazy"
                alt="hero image"
                className="object-cover w-full !h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
