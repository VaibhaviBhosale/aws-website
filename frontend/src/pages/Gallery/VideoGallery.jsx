import { useState } from "react";

const videos = [
    {
        id: "-sq_Z-Et6_g",
        start: 9,
        category: "events",
        title: "Aaryans Presents Healthy Baby Show",
    },
    {
        id: "k7IarbHcO_c",
        category: "sports",
        title: "Healthy Baby Show & Kids Carnival",
    },
    {
        id: "EXQLIb3759w",
        category: "academics",
        title: "Happy Diwali From Aaryans Pre-School !!!",
    },
    {
        id: "hjDCnNcy7gQ",
        category: "events",
        title: "Happy Diwali From Aaryans World School",
    },
    {
        id: "t0PItz20wsU",
        category: "sports",
        title: "Eco-Friendly Ganpati Idol Making",
    },
    {
        id: "Vw-OJ_hLTqw",
        category: "cultural",
        title: "Celebrating the spirit of freedom and",
    },
];

const categories = [
    "all",
    ...new Set(videos.map((video) => video.category)),
];

export default function VideoGallery() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredVideos =
        selectedCategory === "all"
            ? videos
            : videos.filter(
                  (video) => video.category === selectedCategory
              );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Banner */}
            <section className="relative flex h-[180px] items-center justify-center overflow-hidden bg-gray-900 sm:h-[220px]">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-700 opacity-95"></div>

                <div className="relative z-10 px-4 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-yellow-400">
                        Memories & Moments
                    </p>

                    <h1 className="text-4xl font-bold text-white sm:text-5xl">
                        Video Gallery
                    </h1>

                    <p className="mt-4 text-sm text-gray-300 sm:text-base">
                        Explore the memorable moments of Aaryans World School
                    </p>
                </div>
            </section>

            {/* Gallery Content */}
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                {/* Category Filters */}
                <div className="mb-10 flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`cursor-pointer rounded-full border px-6 py-2.5 text-sm font-semibold capitalize transition-all ${
                                selectedCategory === category
                                    ? "border-yellow-500 bg-yellow-500 text-gray-900 shadow-md"
                                    : "border-gray-200 bg-white text-gray-600 hover:border-yellow-400 hover:bg-yellow-50"
                            }`}
                        >
                            {category === "all" ? "All Videos" : category}
                        </button>
                    ))}
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredVideos.map((video) => (
                        <div
                            key={video.id}
                            className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* YouTube Video */}
                            <div className="aspect-video w-full bg-black">
                                <iframe
                                    className="h-full w-full"
                                    src={`https://www.youtube.com/embed/${video.id}${
                                        video.start
                                            ? `?start=${video.start}`
                                            : ""
                                    }`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>

                            {/* Video Details */}
                            <div className="p-5">
                                <span className="inline-block rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold capitalize text-yellow-700">
                                    {video.category}
                                </span>

                                <h3 className="mt-3 text-lg font-semibold leading-snug text-gray-800">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredVideos.length === 0 && (
                    <div className="py-16 text-center text-gray-500">
                        No videos available.
                    </div>
                )}
            </section>
        </div>
    );
}