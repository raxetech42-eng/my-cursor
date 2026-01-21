export default function ServiceProcess() {
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
        What Happens After You Contact Us
        </h2>

        <ol
          className="
            flex flex-col space-y-5
            text-sm text-gray-700
            max-w-2xl
            leading-relaxed
          "
        >
          <li>
            <span className="font-medium text-gray-900">Contact</span>
            <span className="text-gray-500">
              {" "}—  Share your travel details for an availability check..
            </span>
          </li>

          <li>
            <span className="font-medium text-gray-900">Confirmation</span>
            <span className="text-gray-500">
              {" "}—We coordinate with local drivers and confirm feasibility.
            </span>
          </li>

          <li>
            <span className="font-medium text-gray-900">Pickup</span>
            <span className="text-gray-500">
              {" "}—  A confirmed driver arrives as arranged.
            </span>
          </li>

          <li>
            <span className="font-medium text-gray-900">Drop-off</span>
            <span className="text-gray-500">
              {" "}— Direct transfer to your destination.
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}
