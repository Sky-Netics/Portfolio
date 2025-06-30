import { MapPinIcon, PhoneIcon, MailIcon } from "./ui/icones";
import logoPng from "../../../public/images/logo-transparent-png.png";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full bg-orange-50 py-12  px-5 md:py-20 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 text-center md:text-left">
            <p className="text-blue-600 font-medium mb-4 cursor-pointer">
              How can we help you?
            </p>
            <h2 className="text-5xl font-bold text-gray-900/90 mb-6">
              Contact us
            </h2>
            <p className="text-lg text-gray-900/80 mb-12">
              We're here to help and answer any questions you might have. We
              look forward to hearing from you!
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-sm">
                <MapPinIcon size={20} className="text-blue-600 mt-1" />
                <span className="text-gray-700 font-semibold"> Tehran </span>
              </div>

              <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow-sm">
                <PhoneIcon size={20} className="text-blue-600" />
                <a
                  href="tel:+4571997707"
                  className="text-gray-900/80 font-semibold hover:text-blue-600 transition-colors"
                >
                  +98 990 888 44 02
                </a>
              </div>

              <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow-sm">
                <MailIcon size={20} className="text-blue-600" />
                <a
                  href="mailto:mail@sleeknote.com"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  mail@skynetics.com
                </a>
              </div>
            </div>
          </div>

          <div className="order-2  flex justify-center  ">
              <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
                <Image
                  src={logoPng}
                  alt="Skynetics Logo"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain hover:scale-110 transition-all duration-300"
                  priority
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
