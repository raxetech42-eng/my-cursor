export default function HeroSection() {
  return (
    <section className="w-full">
      <div
        className="
          mx-auto
          max-w-6xl
          px-6
          py-28
          grid
          grid-cols-1
          md:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* Left: Text */}
        <div className="flex flex-col space-y-8">

          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.14] tracking-tight">
            Airport Transfer
            <br />
            & Private Car Service
          </h1>

          <p className="text-sm text-gray-700 leading-relaxed max-w-xl">
            Reliable airport pickup and drop-off,
            arranged in advance for a smooth arrival.
          </p>

          <p className="text-xs text-gray-500">
            Available across selected Southeast Asian destinations.
            <br />
            Private charter and custom trips are available upon request.
          </p>

          <a
            href="/booking"
            className="
              inline-block
              mt-8
              rounded-md
              px-7
              py-3
              text-base
              font-semibold
              bg-black
              text-white
              w-fit
            "
          >
            Get a quick quote
          </a>

          <p className="text-[11px] text-gray-500 mt-2">
            No payment required. This is just an availability check.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full">
          <img
            src="/HeroBanner.jpg"
            alt="Private airport transfer with driver assisting travelers"
            className="
              w-full
              h-auto
              rounded-xl
              object-cover
              brightness-[0.95]
              shadow-sm
            "
          />
        </div>
      </div>
    </section>
  );
}
