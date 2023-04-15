export default function CTA() {
  return (
    <div className="py-6 lg:py-20">
      <div className="space-y-6 bg-gray-800 shadow-2xl shadow-gray-900 p-6 rounded-lg lg:flex lg:justify-between lg:p-14">
        <div className="space-y-4">
          <h2 className="text-3xl font-medium lg:text-4xl">
            Let's try our service now!
          </h2>
          <p className="text-customWhite-900/70">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-br from-customTeal-100 to-customTeal-500 text-customDark-800 font-medium px-4 py-2 rounded lg:text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
