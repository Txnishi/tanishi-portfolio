import { indie, marcellus } from "@/app/fonts"
// import flower from "/images/floral-design-flowerpot-pixel.jpg"
// import flowerPixel from "/images/transparent-flower-pixel.png"
// import pinkFlower from "/images/pink-pixel-flower-Photoroom.png"
// import marioFlower from "/images/mario-flower-pixel-Photoroom.png"
// import resumeIcon from "/images/resume-cute-icon-Photoroom.png"

export default function Hero() {
  return (
    <section className=" flex items-center min-h-screen justify-center ">
      <div className="p-10 min-w-2xl px-20 text-center space-y-4">
        <div className="flex items-center">
          <div className="relative group">
            <img
              src="/images/mario-flower-pixel-Photoroom.png"
              alt="mario-flower"
              className="h-30 absolute top-2.5 group-hover:hidden"
            />
            <img
              src="/images/excited-mario-pixel-flower.png"
              alt="excited-mario-flower"
              className="h-30 group-hover:animate-bounce"
            />
          </div>
          <p
            className={`text-4xl w-1/2 font-bold bg-white inline-block ${indie.className}`}
          >
            Hi I&apos;m
          </p>
        </div>

        <div className="flex items-center md:gap-4">
          <h1 className={`text-4xl bg-white font-bold ${marcellus.className}`}>
            Tanishi Devlal
          </h1>
          <img
            src="/images/pink-pixel-flower-Photoroom.png"
            alt="pink-pixel-flower"
            className="h-16"
          />
        </div>

        <button
          className={`mt-4 px-4 py-2 rounded-lg border-2 border-gray-400 hover:bg-gray-100 bg-white hover:cursor-pointer transition ${marcellus.className} `}
        >
          Open for Hire
          <span className="h-3 w-3 ml-1.5 rounded-full bg-green-500 inline-block border-2 border-black"></span>
        </button>

        <img
          src="/images/resume-cute-icon-Photoroom.png"
          alt="resume-cute-icon"
          className="h-16 mx-6"
        />

        <p
          className={`mt-6 bg-pink-200 py-3 px-4 mx-auto w-fit rounded-lg ${marcellus.className} `}
        >
          I make Pixel Perfect React Applications!
        </p>
        {/* 
        <img src={flower.src} alt="flower-pots" />
        <img src={flowerPixel.src} alt="pixel-flower" />
        */}
      </div>
    </section>
  )
}
