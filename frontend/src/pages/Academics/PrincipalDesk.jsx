import { useParams, Link } from "react-router-dom";
import {
  School,
  GraduationCap,
  BookOpen,
  Dumbbell,
  ArrowLeft,
} from "lucide-react";

import principalDeskData from "../../data/principalDeskData";

const highlightIcons = {
  school: School,
  graduate: GraduationCap,
  book: BookOpen,
  sports: Dumbbell,
};

function PrincipalDesk() {
  const { branch, section } = useParams();

  const branchKey = branch?.toLowerCase();
  const sectionKey = section?.toLowerCase();

  const branchData = principalDeskData[branchKey];

  const pageData =
    branchKey === "warje" &&
      (sectionKey === "primary" || sectionKey === "secondary")
      ? branchData?.principal
      : branchData?.[sectionKey];

  const principal = pageData?.principal;

  if (!principal) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#fafafa] px-4 py-16">
        <div className="max-w-lg text-center">
          <h1 className="mb-4 text-3xl font-bold text-[#23344e]">
            Principal's Desk Coming Soon
          </h1>

          <p className="mb-7 leading-7 text-gray-600">
            The Principal's Desk information for this section will be
            available soon.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#23344e] px-6 py-3 font-semibold text-white transition hover:bg-[#d39c08]"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Principal Profile and Leadership Message */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:py-[50px]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Principal Profile */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.08)] lg:sticky lg:top-[90px]">
                <img
                  src={`/images/principal/${principal.image}`}
                  alt={principal.imageAlt || principal.name}
                  className="h-[350px] w-full rounded-2xl object-cover object-top sm:h-[420px] lg:h-[420px]"
                  fetchPriority="high"
                />

                <div className="px-2 pb-4 pt-2 text-center">
                  <h1
                    style={{ fontFamily: '"TextaBlack", sans-serif' }}
                    className="mt-5 text-3xl font-extrabold text-[#23344e] sm:text-[34px]"
                  >
                    {principal.name}
                  </h1>

                  <p
                    style={{ fontFamily: '"Como", sans-serif' }}
                    className="mt-2 text-lg font-medium text-[#d39c08]"
                  >
                    {principal.designation}
                  </p>

                  <p
                    style={{ fontFamily: '"Como", sans-serif' }}
                    className="mt-1 text-base text-gray-600"
                  >
                    {principal.campus}
                  </p>

                  <div className="mx-auto my-[18px] h-1 w-20 rounded-full bg-[#d39c08]" />

                  <blockquote
                    style={{ fontFamily: '"Como", sans-serif' }}
                    className="mt-4 text-center text-base italic leading-8 text-gray-500"
                  >
                    &ldquo;{principal.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Leadership Message */}
            <div className="lg:col-span-7">
              <div className="mt-4 lg:mt-0 lg:pl-8">
                <p
                  style={{ fontFamily: '"Como", sans-serif' }}
                  className="mb-4 text-sm font-bold uppercase tracking-[3px] text-[#d39c08]"
                >
                  {principal.messageTag}
                </p>

                <h2
                  style={{ fontFamily: '"TextaBlack", sans-serif' }}
                  className="mb-7 text-3xl font-extrabold leading-tight text-[#24364b] sm:text-4xl"
                >
                  {principal.messageTitle}
                </h2>

                <div
                  style={{ fontFamily: '"Como", sans-serif' }}
                  className="space-y-5 text-justify text-base leading-8 text-gray-600 sm:text-[17px]"
                >
                  {principal.message.map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      {pageData.highlights?.length > 0 && (
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-7xl">
            <h2
              style={{ fontFamily: '"TextaBlack", sans-serif' }}
              className="mb-10 text-center text-3xl font-extrabold text-[#24364b] sm:mb-12 sm:text-4xl"
            >
              Key Highlights
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pageData.highlights.map((item, index) => {
                const Icon = highlightIcons[item.icon] || School;

                return (
                  <article
                    key={item.title}
                    className="h-full rounded-3xl bg-white px-5 py-7 text-center shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(35,52,78,0.14)] sm:px-6"
                  >
                    <div className="mx-auto mb-5 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#fff8e4] text-[#d39c08]">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <h3
                      style={{ fontFamily: '"TextaBlack", sans-serif' }}
                      className="mb-4 text-xl font-bold text-[#23344e] sm:text-[22px]"
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{ fontFamily: '"Como", sans-serif' }}
                      className="text-[15px] leading-7 text-gray-600"
                    >
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default PrincipalDesk;