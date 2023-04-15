import img1 from "../assets/images/img1.svg";
import discount from "../assets/icons/discount.svg";
import line from "../assets/icons/line.svg";

export default function Header() {
  return (
    <div className="lg:py-12 lg:space-y-12">
      <div className="py-6 space-y-6 lg:grid lg:grid-cols-2 lg:space-y-0">
        <div className="space-y-4 lg:pt-20 lg:space-y-12">
          <div className="space-y-2">
            <div className="flex items-center justify-center bg-customDark-700 py-2 rounded-sm lg:justify-start lg:mx-0 lg:mr-56">
              <img src={discount} alt="" />
              <p className="text-customWhite-900/70">
                20% DISCOUNT FOR 1 MONTH ACCOUNT
              </p>
            </div>
            <h1 className="text-6xl font-semibold leading-normal">
              The Next{" "}
              <span className="bg-gradient-to-r from-customTeal-500 to-customTeal-100 text-transparent bg-clip-text">
                Generation
              </span>{" "}
              Payment Method.
            </h1>
          </div>
          <div>
            <p className="text-customWhite-900/70 lg:text-lg lg:leading-relaxed">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>
        <div className="bg-gradient-radial from-customDark-500 to-customDark-800">
          <img className="block mx-auto" src={img1} alt="" />
        </div>
      </div>
      <div className="space-y-6 lg:space-y-0 lg:flex lg:justify-between ">
        <div className="lg:flex lg:items-center lg:gap-4">
          <h2 className="text-3xl font-medium">3800+</h2>
          <p className="text-lg bg-gradient-to-r from-customTeal-500 to-customTeal-100 text-transparent bg-clip-text">
            USERS ACTIVE
          </p>
        </div>
        <div className="bg-customWhite-900/60 py-1 mx-52 lg:hidden" />
        <img className="hidden lg:inline" src={line} alt="" />
        <div className="lg:flex lg:items-center lg:gap-4">
          <h2 className="text-3xl font-medium">230+</h2>
          <p className="text-lg bg-gradient-to-r from-customTeal-500 to-customTeal-100 text-transparent bg-clip-text">
            TRUSTED BY COMPANY
          </p>
        </div>
        <img className="hidden lg:inline" src={line} alt="" />
        <div className="bg-customWhite-900/60 py-1 mx-52 lg:hidden" />
        <div className="lg:flex lg:items-center lg:gap-4">
          <h2 className="text-3xl font-medium">$230M+</h2>
          <p className="text-lg bg-gradient-to-r from-customTeal-500 to-customTeal-100 text-transparent bg-clip-text">
            TRANSACTION
          </p>
        </div>
      </div>
    </div>
  );
}
