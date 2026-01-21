export default function ServiceSection() {
  return (
    <section className="w-full py-36">
      <div
        className="
          mx-auto max-w-5xl px-6
          flex flex-col space-y-10
        "
      >
        <h2
          className="
            text-3xl md:text-4xl
            font-semibold tracking-tight
          "
        >
          Airport Transfer Service
        </h2>

        <p
          className="
            text-base text-gray-700
            leading-relaxed max-w-2xl
          "
        >
          We coordinate private airport pickup and drop-off services
          through partner drivers and transport providers
          across selected Southeast Asian destinations.
          <br />
          <br />
          This service is designed for travelers who prefer
          a simple, private, and pre-arranged transfer
          without shared rides or complex booking systems.
        </p>

        <ul
          className="
            flex flex-col space-y-3
            text-sm text-gray-700
          "
        >
          <li>Airport pickup and drop-off</li>
          <li>Point-to-point private transfers</li>
          <li>Suitable for travelers with luggage or family</li>
        </ul>

        <p className="text-sm text-gray-500 max-w-xl">
          Private charter and custom trips may be arranged
          depending on route and availability.
        </p>

        <p className="text-xs text-gray-400">
          Private · Coordinated · Hassle-free
        </p>
      </div>
    </section>
  );
}
