import {
  BookOpen,
  Puzzle,
  MessageCircle,
  FlaskConical,
  Calculator,
  GraduationCap,
  Quote,
} from "lucide-react";

import { useParams } from "react-router-dom";
import pedagogyData from "../../data/pedagogyData";

const iconMap = {
  school: BookOpen,
  puzzle: Puzzle,
  comments: MessageCircle,
  flask: FlaskConical,
  calculator: Calculator,
};

function Pedagogy() {
  const { branch, section } = useParams();

  const branchKey = branch?.toLowerCase();
  const sectionKey = section?.toLowerCase();

  const pedagogyItems = pedagogyData[branchKey]?.[sectionKey];

  const branchName =
    branchKey === "bhilarewadi"
      ? "Bhilarewadi"
      : branchKey === "warje"
        ? "Warje"
        : branchKey;

  const sectionName =
    sectionKey === "pre-primary"
      ? "Pre-Primary"
      : sectionKey
        ? sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)
        : "";

  if (!Array.isArray(pedagogyItems) || pedagogyItems.length === 0) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-[#fffdf5] via-[#fff7dc] to-[#fffdf5] px-5 py-16">
        <div className="max-w-xl text-center">
          <BookOpen
            size={42}
            className="mx-auto mb-5 text-amber-500"
            strokeWidth={1.7}
          />

          <h1
            className="mb-4 text-2xl text-[#23344e] sm:text-3xl"
            style={{ fontFamily: "TextaBlack, sans-serif", fontWeight: 900 }}
          >
            Pedagogy Content Coming Soon
          </h1>

          <p
            className="text-base leading-7 text-gray-600 sm:text-lg"
            style={{ fontFamily: "Como, sans-serif", fontWeight: 700 }}
          >
            The pedagogy content for {branchName} {sectionName} is not
            available yet.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-gradient-to-b from-[#fffdf5] via-[#fff7dc] to-[#fffdf5]">
      {pedagogyItems.map((item, index) => {
        const Icon = iconMap[item.icon] || BookOpen;

        const images = item.images?.length
          ? item.images
          : item.image
            ? [item.image]
            : [];

        return (
          <div key={item.title}>
            <section className="relative overflow-hidden py-14 sm:py-16 lg:py-[70px]">

              {/* Decorative Background Shapes */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-[58%_42%_65%_35%] bg-amber-300/20 sm:h-[420px] sm:w-[420px]" />

              <div className="pointer-events-none absolute -bottom-20 -left-24 h-[220px] w-[220px] rounded-[40%_60%_35%_65%] bg-amber-400/15 sm:h-[260px] sm:w-[260px]" />

              {/* Decorative Bubbles */}
              <div className="pointer-events-none absolute left-[12%] top-[10%] h-7 w-7 rounded-full bg-amber-300/50" />

              <div className="pointer-events-none absolute right-[12%] top-[28%] h-[18px] w-[18px] rounded-full bg-amber-400/50" />

              <div className="pointer-events-none absolute bottom-[18%] left-[18%] h-11 w-11 rounded-full bg-amber-200/40" />

              <div className="pointer-events-none absolute bottom-[14%] right-[18%] h-6 w-6 rounded-full bg-amber-400/40" />

              <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">

                  {/* Images */}
                  <div
                    className={`${
                      images.length === 2 ? "lg:col-span-5" : "lg:col-span-5"
                    } ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    {images.length > 0 && (
                      <div
                        className={
                          images.length === 1
                            ? "grid grid-cols-1 gap-3"
                            : "grid grid-cols-2 gap-3"
                        }
                      >
                        {images.map((image) => (
                          <img
                            key={image}
                            src={`/images/academics/${
                              ["manajinagar", "undri"].includes(branchKey) &&
                              sectionKey === "pre-primary"
                                ? "warje"
                                : branchKey
                            }/${
                              ["belagavi", "solapur"].includes(branchKey) &&
                              ["primary", "secondary"].includes(sectionKey)
                                ? "pre-primary"
                                : sectionKey
                            }/${image}`}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className={`w-full rounded-xl border-4 border-amber-300 bg-white p-1.5 object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02] ${
                              //img height 
                              images.length === 2
                                ? "h-[220px] sm:h-[250px]"
                                : images.length === 1
                                  ? "h-[240px] sm:h-[360px]"
                                  : "h-[150px] sm:h-[200px]"
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    <p
                      className="mt-3 text-center text-[13px] text-[#464545]"
                      style={{ fontFamily: "Como, sans-serif", fontWeight: 700 }}
                    >
                      {item.tagline || item.title}
                    </p>
                  </div>

                  {/* Content */}
                  <div
  className={`min-w-0 lg:col-span-7 ${
    index % 2 === 1 ? "lg:order-1" : ""
  }`}
>
                    <div className="mb-4 text-amber-400">
                      <Icon size={34} strokeWidth={1.8} />
                    </div>

                    <h2
                      className="mb-4 text-2xl leading-tight text-[#23344e] sm:text-3xl lg:text-[36px]"
                      style={{ fontFamily: "TextaBlack, sans-serif", fontWeight: 900 }}
                    >
                      {item.title}
                    </h2>

                    <div className="relative">
                      <Quote
                        size={34}
                        className="absolute -left-1 -top-4 text-amber-300/70"
                      />

                      <p
                       className="relative z-10 pl-6 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 lg:text-[18px] lg:leading-[1.6]"
                        style={{ fontFamily: "Como, sans-serif", fontWeight: 700 }}
                      >
                        {item.content.split(/<br\s*\/?>/i).map((line, index, lines) => (
                          <span key={index}>
                            {line}
                            {index < lines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section Divider */}
            {index !== pedagogyItems.length - 1 && (
              <div className="mx-auto flex max-w-3xl items-center justify-center px-5">
                <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#d7c18b] to-[#f4e6b1]" />

                <div className="mx-5 flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-2 border-[#e6d6a4] bg-white text-amber-600 shadow-md">
                  <GraduationCap size={26} />
                </div>

                <div className="h-0.5 flex-1 bg-gradient-to-r from-[#f4e6b1] via-[#d7c18b] to-transparent" />
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}

export default Pedagogy;