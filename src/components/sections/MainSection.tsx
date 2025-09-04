import Link from 'next/link';
import Image from 'next/image';

export default function MainSection() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        {/* Background with Logo Image */}
        <div className="absolute inset-0">
          <Image
            src="/simplai-website/images/backgrounds/background.avif"
            alt="SIMPL AI Background"
            fill
            className="object-cover opacity-100"
            priority
            unoptimized
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <h1 className="text-6xl sm:text-6xl lg:text-6xl font-bold leading-tight text-gray-200">
                  Get intelligent AI reporting<br />
                  from your core business systems.
                </h1>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-500">
                  Without touching your data.
                </h2>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-500">
                  Secure. Fast. Unlimited.
                </h2>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-800">
                  Private AI technology for your system.
                </h3>

                <div className="pt-4">
                  <Link
                    href="#solutions"
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors duration-200 inline-block"
                  >
                    Discover More
                  </Link>
                </div>
              </div>

              {/* Right Column - Side Image */}
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/simplai-website/images/branding/simplai_logo.svg"
                  alt="SIMPL AI Logo"
                  width={450}
                  height={300}
                  className="object-cover rounded-lg shadow-lg"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}