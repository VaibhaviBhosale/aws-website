import { useParams } from "react-router-dom";
import coCurriculumData from "../../data/coCurriculumData";
import {
  FaStar,
  FaFutbol,
  FaMusic,
  FaPalette,
  FaBookOpen,
  FaLightbulb,
  FaCalendarAlt,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

const icons = {
  star: FaStar,
  futbol: FaFutbol,
  music: FaMusic,
  palette: FaPalette,
  "book-open": FaBookOpen,
  lightbulb: FaLightbulb,
  "calendar-days": FaCalendarAlt,
  users: FaUsers,
};

export default function CoCurriculum() {
  const { branch, section } = useParams();

  const branchKey = branch?.toLowerCase();
  const sectionKey = section?.toLowerCase();

  const items = coCurriculumData[branchKey]?.[sectionKey];

  if (!items) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="text-2xl font-bold">
          Co-Curricular Activities Not Found
        </h1>
        <p className="mt-3 text-gray-600">
          The requested activities are not available.
        </p>
      </div>
    );
  }

  return (
    <main className="overflow-hidden bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-50">
      {items.map((item, index) => {
        const Icon = icons[item.icon] || FaGraduationCap;

        const images = item.images?.length
          ? item.images
          : item.image
            ? [item.image]
            : [];

        return (
          <div key={item.title}>
            <section className="relative px-4 py-10 sm:px-6 lg:py-16">
              {/* Decorative circles */}
              <div className="pointer-events-none absolute left-[8%] top-[12%] h-5 w-5 rounded-full bg-amber-400/20" />
              <div className="pointer-events-none absolute right-[10%] top-[25%] h-4 w-4 rounded-full bg-amber-400/20" />
              <div className="pointer-events-none absolute bottom-[18%] left-[16%] h-8 w-8 rounded-full bg-amber-400/20" />
              <div className="pointer-events-none absolute bottom-[12%] right-[15%] h-5 w-5 rounded-full bg-amber-400/20" />

              <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                  {/* Images */}
                  {images.length > 0 && (
                    <div
                      className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""
                        }`}
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {images.map((image) => (
                          <div
                            key={image}
                            className="overflow-hidden rounded-xl border-4 border-amber-200 bg-white p-1 shadow-lg"
                          >
                            <img
                              src={`/images/academics/${branchKey}/${sectionKey}/cocurriculum/${image}`}
                              alt={`${item.title} - ${image}`}
                              loading="lazy"
                              className="h-32 w-full object-cover transition duration-300 hover:scale-105 sm:h-40 lg:h-44"
                            />
                          </div>
                        ))}
                      </div>

                      {item.tagline && (
                        <p className="mt-4 text-center text-sm font-semibold italic text-gray-600">
                          “{item.tagline.replace(/^["“]|["”]$/g, "")}”
                        </p>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div
                    className={`${images.length > 0 ? "lg:col-span-7" : "lg:col-span-12"
                      } ${index % 2 === 1 && images.length > 0
                        ? "lg:order-1"
                        : ""
                      }`}
                  >
                    <article className="rounded-3xl border border-amber-200/60 bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8 lg:p-10">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 shadow-md">
                        <Icon className="text-3xl text-amber-600" />
                      </div>

                      <h2 className="mb-5 text-2xl font-bold leading-tight text-gray-800 sm:text-3xl">
                        {item.title}
                      </h2>

                      <div className="text-justify text-base leading-8 text-gray-600 sm:text-lg">
                        {item.content}
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>

            {index !== items.length - 1 && (
              <div className="flex items-center justify-center px-6">
                <div className="h-0.5 max-w-56 flex-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200" />

                <div className="mx-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-amber-200 bg-white text-xl text-amber-600 shadow-md">
                  <FaGraduationCap />
                </div>

                <div className="h-0.5 max-w-56 flex-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200" />
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}