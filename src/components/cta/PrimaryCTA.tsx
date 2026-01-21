export default function PrimaryCTA() {
  return (
    <section className="w-full py-32">
      <div
        className="
          mx-auto
          max-w-5xl
          px-6
          flex
          flex-col
          items-start
          space-y-8
        "
      >
        <h2
          className="
            text-2xl
            md:text-3xl
            font-semibold
            tracking-tight
            leading-snug
          "
        >
          Ready to get started?
        </h2>

        <p className="text-base text-gray-700 max-w-xl leading-relaxed">
          Share your travel details and we’ll help you check
          availability and provide a quick quote
        </p>

        <a
          href="/booking"
          className="
            inline-block
            mt-2
            rounded-md
            px-8
            py-4
            text-base
            font-semibold
            bg-black
            text-white
          "
        >
          Get a quick quote
        </a>

        <p className="text-[11px] text-gray-500 mt-1">
          No payment required. You can ask first and decide later.
        </p>
      </div>
    </section>
  );
}
