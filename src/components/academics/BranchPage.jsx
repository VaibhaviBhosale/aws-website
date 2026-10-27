import { useState } from "react";
import AcademicCard from "./AcademicCard";
import SectionTabs from "./SectionTabs";

function BranchPage({ branch }) {
  const sections = branch.sections || [];

  const [activeSection, setActiveSection] = useState(
    () => sections[0]?.id || ""
  );

  const currentSection =
    sections.find((section) => section.id === activeSection) ||
    sections[0];

  return (
    <main className="min-h-screen bg-[#fffaf0]">

      {/* Main Content */}
      <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-12 sm:px-8 lg:pt-16">

        {/* Heading - No Images */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#243650] sm:text-4xl lg:text-[38px]">
            {branch.name} Academics
          </h1>

          <p className="mt-4 text-sm text-[#777777] sm:text-base">
            {branch.subtitle}
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#dba400]" />
        </header>

        {/* Section Tabs */}
        {sections.length > 0 ? (
          <>
            <SectionTabs
              sections={sections}
              activeSection={currentSection?.id || activeSection}
              onSectionChange={setActiveSection}
            />

            {/* Selected Section */}
            {currentSection && (
              <section className="mt-10">
                <h2 className="mb-8 text-center text-2xl font-bold text-[#243650]">
                  {currentSection.name}
                </h2>

                {/* Academic Cards */}
                <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-stretch justify-center gap-6">
                {currentSection.categories.map((category) => (
                    <div
                    key={category.slug}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-20px)]"
                    >
                    <AcademicCard
                        category={category}
                        branch={branch.slug}
                        section={currentSection.id}
                    />
                    </div>
                ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <p className="py-12 text-center text-gray-500">
            Academic information will be available soon.
          </p>
        )}
      </div>
    </main>
  );
}

export default BranchPage;