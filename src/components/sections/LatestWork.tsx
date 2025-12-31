import AppleCardsCarouselDemo from "@/components/ui/apple-cards-carousel-demo";

export function LatestWork() {
  return (
    <section id="latest-work" className="bg-black relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Background layers similar to hero */}
      <div className="absolute inset-0 z-0">
        {/* Base black with subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Color accents */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-blue-800/5" />
        
        {/* Abstract shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-white/3 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <AppleCardsCarouselDemo />
      </div>
    </section>
  );
}

