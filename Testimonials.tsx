import React from 'react';
import { Quote, Sparkles, Star, Edit3, UserCheck, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA, TestimonialItem } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Testimonials: React.FC = () => {
  const { testimonials } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAF8F5] relative border-t border-[#EAE3D6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border text-xs font-semibold mb-3 shadow-xs"
            style={{ color: currentPalette.primary, borderColor: currentPalette.border }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight mb-4">
            What Founders Say About Working With Me
          </h2>
          <p className="text-[#665E55] text-sm sm:text-base leading-relaxed">
            Feedback from coaches, founders, and digital business owners who offloaded operations, automated manual tasks, and scaled with systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((item: TestimonialItem) => (
            <div
              key={item.id}
              className="relative p-7 sm:p-8 rounded-3xl bg-white border border-[#E8E0D5] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group hover:-translate-y-1"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = currentPalette.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
              }}
            >
              <div>
                {/* Rating stars & Quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                        style={{ color: currentPalette.primary }}
                      />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#EADFCF] transition-colors" />
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-[#292524] leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#EAE3D6]">
                <div
                  className="w-10 h-10 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs"
                  style={{
                    backgroundColor: currentPalette.surface,
                    borderColor: currentPalette.border,
                    color: currentPalette.primary,
                  }}
                >
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1C1917] tracking-tight">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-[#78716C]">
                    {item.role}, <span className="font-semibold text-[#1C1917]">{item.company}</span>
                  </p>
                  {item.location && (
                    <p className="text-[10px] text-[#A8A29E] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-2.5 h-2.5" />
                      <span>{item.location}</span>
                    </p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* References Note */}
        <div className="text-center mt-12">
          <p className="text-xs text-[#78716C]">
            Direct client references & live GoHighLevel walk-throughs available upon request during our discovery call.
          </p>
        </div>

      </div>
    </section>
  );
};
