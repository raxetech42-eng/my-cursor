export default function BookingPage() {
  return (
    <main className="w-full py-24">
      <section
        className="
          mx-auto
          max-w-4xl
          px-6
          flex
          flex-col
          space-y-10
        "
      >
        {/* Page title */}
        <h1 className="text-2xl md:text-3xl font-semibold">
          Check Availability & Get in Touch
        </h1>

        {/* Reassurance FIRST */}
        <p className="text-base leading-relaxed text-gray-700">
          This step is only for an initial availability check.
          <br />
          <strong>No payment is required</strong>, and there is no obligation to proceed.
        </p>

        {/* What this step is */}
        <p className="text-sm text-gray-600 max-w-2xl">
          Simply share your travel details, and we’ll let you know whether the service
          is available and provide a quote if needed.
        </p>

        {/* What to prepare */}
        <div className="flex flex-col space-y-2">
          <p className="font-medium">
            To help us respond quickly, you may prepare:
          </p>

          <ul className="flex flex-col space-y-1 text-sm text-gray-700">
            <li>Travel date</li>
            <li>Number of passengers</li>
            <li>Pickup and drop-off locations</li>
            <li>Luggage details (if any)</li>
          </ul>
        </div>

        {/* Primary action */}
        <div>
          <a
            href="https://wa.me/60108820049"
            className="
              inline-block
              px-6
              py-3
              rounded-md
              bg-black
              text-white
              font-medium
            "
          >
            Contact via WhatsApp
          </a>
        </div>

        {/* Soft reassurance */}
        <p className="text-sm text-gray-600">
          You can ask first and decide later. We’ll only proceed if you’re comfortable.
        </p>
      </section>
    </main>
  );
}
