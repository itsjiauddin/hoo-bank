import img2 from "../assets/images/img2.svg";
import img3 from "../assets/images/img3.svg";
import appleStore from "../assets/images/appleStore.svg";
import googlePlay from "../assets/images/googlePlay.svg";

export default function Download() {
  return (
    <div className="py-6 space-y-12 lg:py-12 lg:space-y-20">
      <div className="lg:grid lg:grid-cols-2">
        <div>
          <img className="block mx-auto" src={img2} alt="" />
        </div>
        <div className="space-y-6 lg:pt-20 lg:ml-32">
          <h2 className="text-3xl font-medium leading-relaxed lg:text-4xl lg:leading-relaxed">
            Easily control your billing & invoicing.
          </h2>
          <p className="text-customWhite-900/70 lg:text-lg">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex justify-center gap-6 lg:justify-start lg:pt-6">
            <img src={appleStore} alt="" />
            <img src={googlePlay} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2">
        <div className="space-y-6 lg:pt-20 lg:mr-32 lg:space-y-8">
          <h2 className="text-3xl font-medium leading-relaxed lg:text-4xl lg:leading-relaxed">
            Find a better card deal in few easy steps.
          </h2>
          <p className="text-customWhite-900/70 lg:text-lg">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="bg-gradient-to-br from-customTeal-100 to-customTeal-500 text-customDark-800 font-medium px-4 py-2 rounded lg:text-lg">
            Get Started
          </button>
        </div>
        <div>
          <img className="block mx-auto" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}
