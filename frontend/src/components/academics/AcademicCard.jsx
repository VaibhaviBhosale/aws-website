import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  Lightbulb,
  Users,
  UserRound,
  Palette,
} from "lucide-react";

const icons = {
  pedagogy: Lightbulb,
  curriculum: BookOpen,
  "co-curricular": Palette,
  team: Users,
  "principal-preprimary": UserRound,
  "principal-primary": UserRound,
  "principal-secondary": UserRound,
  "principal-desk": UserRound,
};

function AcademicCard({ category, branch, section }) {
  const Icon = icons[category.slug] || BookOpen;

  const categorySlug = category.slug.startsWith("principal-")
    ? "principal-desk"
    : category.slug === "co-curricular"
      ? "co-curriculum"
      : category.slug;

  const pageUrl = `/academics/${branch}/${section}/${categorySlug}`;

  return (
    <Link
      to={pageUrl}
      className="group flex min-h-[218px] w-full flex-col items-center rounded-[20px] border border-[#f5e8c9] bg-white px-5 py-7 text-center shadow-[0_8px_25px_rgba(80,60,20,0.07)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Icon */}
      <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#fff5d9] text-[#dba30b]">
        <Icon size={29} strokeWidth={2.2} />
      </div>

      {/* Category Title */}
      <h3
  className="mt-4 text-[18px] leading-5 text-[#293b53]"
  style={{ fontFamily: "TextaBlack, sans-serif", fontWeight: 900 }}
>
  {category.name}
</h3>

      {/* Description and Arrow */}
      <div className="relative mt-1 w-full px-1">
        <p
  className="text-sm leading-5 text-[#777777]"
  style={{ fontFamily: "Como, sans-serif", fontWeight: 700 }}
>
  {category.description}
</p>

        <ArrowUpRight
          size={20}
          className="absolute -right-1 -top-1 text-[#dba000] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export default AcademicCard;