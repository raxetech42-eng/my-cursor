export default function VehicleStandards() {
  return (
    <section className="w-full py-28">
      <div
        className="
          mx-auto max-w-5xl px-6
          flex flex-col space-y-8
        "
      >
        <h2
          className="
            text-2xl md:text-3xl
            font-semibold tracking-tight
          "
        >
          Vehicle Standards
        </h2>

        <ul
          className="
            flex flex-col space-y-4
            text-sm text-gray-600
            max-w-2xl
            leading-relaxed
          "
        >
          <li>
            Suitable for small groups traveling with luggage
          </li>
          <li>
            Clean interiors with proper air-conditioning
          </li>
          <li>
            Regularly maintained to meet basic safety standards
          </li>
          <li>
            Drivers operate vehicles they are familiar with
          </li>
        </ul>
      </div>
    </section>
  );
}
