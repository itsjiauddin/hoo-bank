import sign from "../assets/icons/sign.svg";
import profile1 from "../assets/images/profile1.svg";
import profile2 from "../assets/images/profile2.svg";
import profile3 from "../assets/images/profile3.svg";
import airbnb from "../assets/images/airbnb.svg";
import binance from "../assets/images/binance.svg";
import coinbase from "../assets/images/coinbase.svg";
import dropbox from "../assets/images/dropbox.svg";

export default function Testimonial() {
  return (
    <div className="py-6 space-y-6 lg:space-y-12">
      <div className="space-y-6 lg:flex lg:space-y-0 lg:items-center lg:gap-20">
        <h2 className="text-3xl font-medium leading-relaxed lg:text-4xl lg:leading-relaxed">
          What people are saying about us
        </h2>
        <p className="text-customWhite-900/70 lg:text-lg lg:mx-40">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-6">
        <div className="bg-gradient-to-br from-customDark-600 to-customDark-700 shadow-2xl shadow-customDark-700 p-6 rounded-2xl space-y-6">
          <img className="block mx-auto" src={sign} alt="" />
          <p>
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="space-y-2">
            <img className="block mx-auto" src={profile1} alt="" />
            <div>
              <h3 className="font-medium text-lg">Herman Jensen</h3>
              <p className="text-customWhite-900/70">Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-customDark-600 to-customDark-700 shadow-2xl shadow-customDark-700 p-6 rounded-2xl space-y-6 lg:bg-none lg:shadow-none">
          <img className="block mx-auto" src={sign} alt="" />
          <p>
            Money makes your life easier. If you're lucky to have it, you're
            lucky.
          </p>
          <div className="space-y-2">
            <img className="block mx-auto" src={profile2} alt="" />
            <div>
              <h3 className="font-medium text-lg">Steve Mark</h3>
              <p className="text-customWhite-900/70">Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-customDark-600 to-customDark-700 shadow-2xl shadow-customDark-700 p-6 rounded-2xl space-y-6 lg:bg-none lg:shadow-none">
          <img className="block mx-auto" src={sign} alt="" />
          <p>
            It is usually people in the money business, finance, and
            international trade that are really rich.
          </p>
          <div className="space-y-2">
            <img className="block mx-auto" src={profile3} alt="" />
            <div>
              <h3 className="font-medium text-lg">Kenn Gallagher</h3>
              <p className="text-customWhite-900/70">Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 place-items-center gap-6 px-6 lg:flex lg:justify-center lg:gap-32">
        <img src={airbnb} alt="" />
        <img src={binance} alt="" />
        <img src={coinbase} alt="" />
        <img src={dropbox} alt="" />
      </div>
    </div>
  );
}
