function SectionTabs({ sections, activeSection, onSectionChange }) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onSectionChange(section.id)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 sm:text-base ${
              isActive
                ? "bg-amber-500 text-white shadow-md shadow-amber-200"
                : "border border-amber-200 bg-white text-gray-700 hover:border-amber-400 hover:bg-amber-50"
            }`}
          >
            {section.name}
          </button>
        );
      })}
    </div>
  );
}

export default SectionTabs;