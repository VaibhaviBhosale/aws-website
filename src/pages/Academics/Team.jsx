import { useParams, Link } from "react-router-dom";
import teamData from "../../data/teamData";

function Team() {
  const { branch, section } = useParams();

  const branchKey = branch?.toLowerCase();
  const sectionKey = section?.toLowerCase();

  const branchData = teamData[branchKey];
  const team = branchData?.[sectionKey];

  if (!team) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#fafafa] px-4">
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold text-[#23344e]">
            Team Page Coming Soon
          </h1>

          <p className="mb-6 text-gray-600">
            Team details for this section will be available soon.
          </p>

          <Link
            to="/"
            className="inline-block rounded-full bg-[#23344e] px-6 py-3 font-semibold text-white transition hover:bg-[#d49c07]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const imageFolder =
    branchKey === "bhilarewadi"
      ? "/images/team/bw"
      : "/images/team/warje";

  const getImagePath = (image) => `${imageFolder}/${image}`;

  // Reusable profile card for leadership and coordinators
  const ProfileCard = ({ person }) => (
    <article className="group h-full rounded-3xl bg-white p-6 text-center shadow-[0_5px_25px_rgba(35,52,78,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(35,52,78,0.15)]">
      <div className="mb-5 flex justify-center">
        <img
          src={getImagePath(person.image)}
          alt={person.name}
          loading="lazy"
          className="h-[180px] w-[180px] rounded-full border-[8px] border-white object-cover shadow-[0_4px_18px_rgba(35,52,78,0.15)] transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <h3 className="mb-2 text-2xl font-bold leading-snug text-[#23344e]">
        {person.name}
      </h3>

      <p className="text-base font-semibold leading-relaxed text-[#d49c07]">
        {person.designation}
      </p>

      <div className="mx-auto my-4 h-[3px] w-16 rounded-full bg-[#d49c07]" />

      {person.description && (
        <p className="text-[15px] leading-7 text-gray-600">
          {person.description}
        </p>
      )}
    </article>
  );

  // Reusable section for leadership and coordinator cards
  const ProfileSection = ({ title, people }) => {
    if (!people || people.length === 0) return null;

    return (
      <section className="mb-16">
        {title && (
          <h2 className="mb-8 text-center text-3xl font-bold text-[#23344e] md:text-4xl">
            {title}
          </h2>
        )}

        <div
          className={`mx-auto grid max-w-6xl grid-cols-1 gap-8 ${
            people.length === 1
              ? "md:max-w-xl"
              : people.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {people.map((person, index) => (
            <ProfileCard
              key={`${person.name}-${index}`}
              person={person}
            />
          ))}
        </div>
      </section>
    );
  };

  // Standard incharge card
  const InchargeCard = ({ person }) => (
    <article className="group h-full rounded-3xl bg-white p-6 text-center shadow-[0_5px_25px_rgba(35,52,78,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(35,52,78,0.15)]">
      <div className="mb-5 flex justify-center">
        <img
          src={getImagePath(person.image)}
          alt={person.name}
          loading="lazy"
          className="h-[180px] w-[180px] rounded-full border-[8px] border-white object-cover shadow-[0_4px_18px_rgba(35,52,78,0.15)] transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <h3 className="mb-3 text-2xl font-bold leading-snug text-[#23344e]">
        {person.name}
      </h3>

      <div className="mx-auto mb-4 h-[3px] w-16 rounded-full bg-[#d49c07]" />

      <p className="text-base font-semibold leading-relaxed text-[#d49c07]">
        {person.designation}
      </p>
    </article>
  );

  // Group photograph and teaching-team description
  const GroupTeamSection = ({ groupTeam }) => {
    if (!groupTeam) return null;

    return (
      <section className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#23344e] md:text-4xl">
          {groupTeam.title}
        </h2>

        <div className="rounded-3xl bg-white p-4 shadow-[0_5px_25px_rgba(35,52,78,0.08)] sm:p-6 md:p-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={getImagePath(groupTeam.image)}
              alt={groupTeam.imageAlt || groupTeam.title}
              loading="lazy"
              className="h-[220px] w-full object-cover sm:h-[320px] md:h-[420px] lg:h-[480px]"
            />
          </div>

          <div className="px-2 pb-3 pt-7 text-center sm:px-5 sm:pt-9">
            <h3 className="mb-4 text-2xl font-bold text-[#23344e] md:text-3xl">
              {groupTeam.title}
            </h3>

            {groupTeam.description && (
              <p className="mx-auto max-w-4xl text-base leading-8 text-gray-600 md:text-[17px]">
                {groupTeam.description}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-100px] top-40 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-100px] top-[550px] h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl"
      />

      <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-[70px]">
        <div className="mx-auto max-w-7xl">
          {/* Page heading */}
          <header className="mb-12 text-center md:mb-16">
            <h1 className="mb-5 text-4xl font-extrabold leading-tight text-[#23344e] sm:text-5xl">
              {team.title}
            </h1>

            {team.subtitle && (
              <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
                {team.subtitle}
              </p>
            )}

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#d49c07]" />
          </header>

          {/* Leadership: Director, Principal, Vice Principal */}
          <ProfileSection people={team.leadership} />

          {/* Coordinators: Warje Primary */}
          <ProfileSection
            title={team.coordinators ? "Our Coordinators" : undefined}
            people={team.coordinators}
          />

          {/* Standard Incharges: Warje Primary */}
          {team.standardIncharges?.length > 0 && (
            <section className="mb-16">
              <h2 className="mb-8 text-center text-3xl font-bold text-[#23344e] md:text-4xl">
                Standard Incharges
              </h2>

              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                {team.standardIncharges.map((person, index) => (
                  <InchargeCard
                    key={`${person.name}-${index}`}
                    person={person}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Group photograph and team description */}
          <GroupTeamSection groupTeam={team.groupTeam} />
        </div>
      </section>
    </main>
  );
}

export default Team;