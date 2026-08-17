import React from "react";

const ComparisonTable = () => {
  const plans = [
    "Brand Kickstart",
    "Growth Engine",
    "Revenue Accelerator",
    "Infinity Enterprise",
  ];

  const comparisonRows = [
    {
      category: "Strategy",
      items: [
        {
          name: "Digital Marketing Strategy",
          values: [true, true, true, true],
        },
        {
          name: "Competitor Analysis",
          values: [true, true, true, true],
        },
        {
          name: "Custom Growth Roadmap",
          values: [false, true, true, true],
        },
        {
          name: "Dedicated Growth Strategist",
          values: [false, true, true, true],
        },
      ],
    },
    {
      category: "SEO",
      items: [
        {
          name: "Technical SEO",
          values: ["Basic", "Advanced", "Advanced", "Enterprise"],
        },
        {
          name: "Keyword Research",
          values: [true, true, true, true],
        },
        {
          name: "Content Optimization",
          values: [true, true, true, true],
        },
        {
          name: "Enterprise SEO",
          values: [false, false, false, true],
        },
      ],
    },
    {
      category: "Paid Advertising",
      items: [
        {
          name: "Google Ads",
          values: [false, true, true, true],
        },
        {
          name: "Meta Ads",
          values: [false, true, true, true],
        },
        {
          name: "Advanced Paid Acquisition",
          values: [false, false, true, true],
        },
        {
          name: "Multi-Channel Campaigns",
          values: [false, false, true, true],
        },
      ],
    },
    {
      category: "Content & Social",
      items: [
        {
          name: "Social Media Management",
          values: [true, true, true, true],
        },
        {
          name: "Content Creation",
          values: ["Basic", true, true, true],
        },
        {
          name: "Brand Content Strategy",
          values: [false, true, true, true],
        },
        {
          name: "Creative Campaigns",
          values: [false, false, true, true],
        },
      ],
    },
    {
      category: "Conversion & Analytics",
      items: [
        {
          name: "Conversion Optimization",
          values: [false, true, true, true],
        },
        {
          name: "Performance Reporting",
          values: [true, true, true, true],
        },
        {
          name: "Marketing Attribution",
          values: [false, false, true, true],
        },
        {
          name: "Custom Analytics Dashboard",
          values: [false, false, false, true],
        },
      ],
    },
    {
      category: "Support",
      items: [
        {
          name: "Monthly Strategy Review",
          values: [true, true, false, false],
        },
        {
          name: "Bi-Weekly Strategy Review",
          values: [false, false, true, true],
        },
        {
          name: "Priority Support",
          values: [false, false, true, true],
        },
        {
          name: "Custom Integrations",
          values: [false, false, false, true],
        },
      ],
    },
  ];

  const renderValue = (value) => {
    if (value === true) {
      return (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10 text-xs font-semibold text-orange-400">
          ✓
        </span>
      );
    }

    if (value === false) {
      return (
        <span className="text-sm text-white/15">
          —
        </span>
      );
    }

    return (
      <span className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[9px] font-medium text-white/40">
        {value}
      </span>
    );
  };

  return (
    <section
      id="comparison"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#050505]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-orange-500/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-3.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
              Compare plans
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            See exactly what's
            <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
              included in every plan.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
            Compare services, support, strategy, and performance capabilities
            side by side before choosing the right growth partner.
          </p>

        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090909] shadow-2xl shadow-black/20 sm:mt-14">

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px] border-collapse">

              {/* Table Header */}
              <thead>

                <tr className="border-b border-white/[0.07]">

                  <th className="sticky left-0 z-10 w-[280px] bg-[#090909] px-5 py-5 text-left sm:px-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                      Features
                    </span>
                  </th>

                  {plans.map((plan, index) => (
                    <th
                      key={plan}
                      className={`w-[155px] px-4 py-5 text-center ${
                        index === 1
                          ? "bg-orange-500/[0.035]"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col items-center">

                        {index === 1 && (
                          <span className="mb-2 rounded-full bg-orange-500 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-white">
                            Popular
                          </span>
                        )}

                        <span
                          className={`text-xs font-semibold ${
                            index === 1
                              ? "text-orange-300"
                              : "text-white/55"
                          }`}
                        >
                          {plan}
                        </span>

                      </div>
                    </th>
                  ))}

                </tr>

              </thead>

              {/* Table Body */}
              <tbody>

                {comparisonRows.map((section) => (
                  <React.Fragment key={section.category}>

                    {/* Category */}
                    <tr>
                      <td
                        colSpan={5}
                        className="border-y border-white/[0.06] bg-white/[0.015] px-5 py-3 sm:px-6"
                      >
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange-400/80">
                          {section.category}
                        </span>
                      </td>
                    </tr>

                    {/* Features */}
                    {section.items.map((item) => (
                      <tr
                        key={item.name}
                        className="border-b border-white/[0.05] transition-colors duration-200 hover:bg-white/[0.015]"
                      >

                        <td className="sticky left-0 z-10 bg-[#090909] px-5 py-4 sm:px-6">
                          <span className="text-xs font-medium text-white/45">
                            {item.name}
                          </span>
                        </td>

                        {item.values.map((value, index) => (
                          <td
                            key={`${item.name}-${index}`}
                            className={`px-4 py-4 ${
                              index === 1
                                ? "bg-orange-500/[0.02]"
                                : ""
                            }`}
                          >
                            <div className="flex justify-center">
                              {renderValue(value)}
                            </div>
                          </td>
                        ))}

                      </tr>
                    ))}

                  </React.Fragment>
                ))}

              </tbody>

            </table>

          </div>

          {/* Scroll Hint */}
          <div className="flex items-center justify-center gap-2 border-t border-white/[0.06] px-4 py-3 sm:hidden">

            <span className="text-[9px] text-white/20">
              ← Swipe to compare plans →
            </span>

          </div>

        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">

          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/10 text-[9px] text-orange-400">
              ✓
            </span>

            <span className="text-[10px] text-white/25">
              Included
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-white/15">
              —
            </span>

            <span className="text-[10px] text-white/25">
              Not included
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-0.5 text-[8px] text-white/40">
              Advanced
            </span>

            <span className="text-[10px] text-white/25">
              Service level
            </span>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center text-center sm:mt-12">

          <p className="text-sm text-white/30">
            Still deciding which plan fits your business?
          </p>

          <a
            href="#contact"
            className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-300"
          >
            Talk to our team

            <span className="text-orange-400 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;