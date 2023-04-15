import star from "../assets/icons/star.svg";

export default function About() {
  return (
    <div className="py-6 flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 lg:gap-10 lg:py-12">
      <div className="space-y-6">
        <h2 className="text-3xl leading-relaxed font-medium lg:text-4xl lg:leading-relaxed">
          You do the business, we'll handle the money.
        </h2>
        <p className="text-customWhite-900/70 lg:leading-relaxed">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="bg-gradient-to-br from-customTeal-100 to-customTeal-500 text-customDark-800 font-medium px-4 py-2 rounded lg:text-lg">
          Get Started
        </button>
      </div>
      <div className="max-w-sm mx-auto space-y-6 md:max-w-xl">
        <div className="flex gap-6 md:gap-10">
          <img src={star} alt="" />
          <div className="text-left">
            <h3 className="font-medium text-lg">Rewards</h3>
            <p className="text-customWhite-900/70">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="flex gap-6 md:gap-10">
          <img src={star} alt="" />
          <div className="text-left">
            <h3 className="font-medium text-lg">100% Secured</h3>
            <p className="text-customWhite-900/70">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div className="flex gap-6 md:gap-10">
          <img src={star} alt="" />
          <div className="text-left">
            <h3 className="font-medium text-lg">Balance Transfer</h3>
            <p className="text-customWhite-900/70 ">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
