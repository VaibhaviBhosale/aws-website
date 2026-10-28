import { useParams } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import curriculumData from "../../data/curriculumData";

function Curriculum() {
  const { branch, section } = useParams();

  const branchKey = branch?.toLowerCase();
  const sectionKey = section?.toLowerCase();

  const curriculumItems = curriculumData[branchKey]?.[sectionKey];

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

  if (!Array.isArray(curriculumItems) || curriculumItems.length === 0) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-b from-[#fffdf5] via-[#fff8e7] to-[#fffdf5] px-5 py-16">
        <div className="max-w-xl text-center">
          <GraduationCap
            size={44}
            className="mx-auto mb-5 text-amber-500"
            strokeWidth={1.7}
          />

          <h1 className="mb-4 text-2xl font-bold text-[#23344e] sm:text-3xl">
            Curriculum Content Coming Soon
          </h1>

          <p className="text-base leading-7 text-gray-600 sm:text-lg">
            The curriculum content for {branchName} {sectionName} is not
            available yet.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-gradient-to-b from-[#fffdf5] via-[#fff8e7] to-[#fffdf5]">
      {curriculumItems.map((item, index) => (
        <div key={`${item.title}-${index}`}>
          <section className="relative overflow-hidden py-[30px] sm:py-12 lg:py-[60px]">
            {/* Decorative Background Shapes */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-[58%_42%_65%_35%] bg-amber-300/15 sm:h-[420px] sm:w-[420px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-24 h-[220px] w-[220px] rounded-full bg-amber-400/10 sm:h-[260px] sm:w-[260px]" />

            {/* Decorative Bubbles */}
            <div className="pointer-events-none absolute left-[8%] top-[12%] h-[22px] w-[22px] rounded-full bg-amber-400/20" />

            <div className="pointer-events-none absolute right-[10%] top-[25%] h-[14px] w-[14px] rounded-full bg-amber-400/20" />

            <div className="pointer-events-none absolute bottom-[18%] left-[16%] h-[34px] w-[34px] rounded-full bg-amber-400/20" />

            <div className="pointer-events-none absolute bottom-[12%] right-[15%] h-[18px] w-[18px] rounded-full bg-amber-400/20" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
              <div className="mx-auto max-w-6xl">
                <div className="rounded-2xl border border-amber-300/25 bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.06)] sm:rounded-3xl sm:p-10 lg:p-12">
                  <h2 className="mb-5 text-2xl font-bold text-[#23344e] sm:mb-6 sm:text-3xl lg:text-[36px]">
                    {item.title}
                  </h2>

                  <div className="text-base leading-8 text-[#555] sm:text-lg sm:leading-[1.9]">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Divider */}
          {index !== curriculumItems.length - 1 && (
            <div className="mx-auto flex max-w-3xl items-center justify-center px-5">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#d7c18b] to-[#f4e6b1]" />

              <div className="mx-5 flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-2 border-[#e6d6a4] bg-white text-amber-600 shadow-md">
                <GraduationCap size={26} />
              </div>

              <div className="h-0.5 flex-1 bg-gradient-to-r from-[#f4e6b1] via-[#d7c18b] to-transparent" />
            </div>
          )}
        </div>
      ))}
    </main>
  );
}

export default Curriculum;