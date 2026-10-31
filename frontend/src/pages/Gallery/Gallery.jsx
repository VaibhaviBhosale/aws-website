import { useEffect, useState } from "react";
import api from "../../services/api";

function Gallery() {
    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState("");

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const [subcategories, setSubcategories] = useState({});
    const [selectedSubcategory, setSelectedSubcategory] = useState("");

    const [photos, setPhotos] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [selectedImage, setSelectedImage] = useState(null);
    const [sliderPhotos, setSliderPhotos] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Fetch gallery data
    const fetchGallery = async (branchId = "") => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get("/gallery", {
                params: branchId ? { branch: branchId } : {},
            });

            const data = response.data;

            setBranches(data.branches || []);
            setSelectedBranch(data.selected_branch || "");

            const nextCategories = data.categories || [];
            const nextSubcategories = data.subcategories || {};

            const firstCategory = nextCategories[0] || "";

            const firstSubcategory = firstCategory
                ? (nextSubcategories[firstCategory.toLowerCase()] || [])[0]
                : null;

            setCategories(nextCategories);
            setSubcategories(nextSubcategories);
            setPhotos(data.photos || []);

            setSliderPhotos(data.slider_photos || []);
            setCurrentSlide(0);

            // Automatically select first category and subcategory
            setSelectedCategory(firstCategory);
            setSelectedSubcategory(firstSubcategory?.name || "");;

        } catch (err) {
            console.error("Gallery API Error:", err);
            setError("Unable to load gallery images.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);
    useEffect(() => {
        if (sliderPhotos.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderPhotos.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [sliderPhotos]);

    // Branch selection
    const handleBranchChange = (branchId) => {
        setSelectedBranch(branchId);
        setSelectedCategory("");
        setSelectedSubcategory("");
        fetchGallery(branchId);
    };

    // Category selection
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);

        const categorySubcategories =
            subcategories[category.toLowerCase()] || [];

        const firstSubcategory = categorySubcategories[0];

        setSelectedSubcategory(firstSubcategory?.name || "");
    };

    // Get subcategories for selected category
    const availableSubcategories = selectedCategory
        ? subcategories[selectedCategory.toLowerCase()] || []
        : [];

    // Filter photos by selected branch, category and subcategory
    const filteredPhotos = photos.filter((photo) => {
        const branchMatch =
            String(photo.branch_id) === String(selectedBranch);

        const categoryMatch =
            photo.category?.toLowerCase() === selectedCategory.toLowerCase();

        const subcategoryMatch =
            photo.sub_category === selectedSubcategory;

        return branchMatch && categoryMatch && subcategoryMatch;
    });

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Gallery Banner */}
            {/* Gallery Image Slider Banner */}
            <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gray-950 text-center text-white md:min-h-[450px]">

                {/* Background Images */}
                {sliderPhotos.map((photo, index) => (
                    <div
                        key={photo.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={photo.image_url}
                            alt={photo.title || "Aaryans World School"}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Banner Content */}
                <div className="relative z-10 mx-auto px-4 py-20">

                    <p className="mb-3 text-sm font-bold uppercase tracking-[5px] text-yellow-400">
                        Aaryans World School
                    </p>

                    <h1 className="text-4xl font-extrabold md:text-6xl">
                        Photo Gallery
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-xl">
                        Explore the moments, achievements and memories
                        that make our school special.
                    </p>

                    {/* Slider Indicators */}
                    {sliderPhotos.length > 1 && (
                        <div className="mt-8 flex justify-center gap-2">
                            {sliderPhotos.map((photo, index) => (
                                <button
                                    key={photo.id}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`h-2.5 rounded-full transition-all ${currentSlide === index
                                        ? "w-8 bg-yellow-400"
                                        : "w-2.5 bg-white/60"
                                        }`}
                                />
                            ))}
                        </div>
                    )}

                </div>
            </section>

            <div className="mx-auto max-w-7xl px-4 py-12">

                {/* Loading */}
                {loading && (
                    <div className="py-20 text-center">
                        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-yellow-500"></div>
                        <p className="mt-4 text-gray-500">
                            Loading gallery...
                        </p>
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="rounded-xl bg-red-50 p-6 text-center text-red-600">
                        {error}
                    </div>
                )}

                {!loading && !error && (
                    <>

                        {/* Gallery Filters */}
                        <div className="mb-8 space-y-5">
                            {/* Branch Selection */}
                            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-200 pb-4">
                                {branches.map((branch) => (
                                    <button
                                        key={branch.id}
                                        onClick={() => handleBranchChange(branch.id)}
                                        className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${String(selectedBranch) === String(branch.id)
                                                ? "border-yellow-500 bg-yellow-500 text-gray-900 shadow-sm"
                                                : "border-gray-200 bg-white text-gray-600 hover:border-yellow-400 hover:bg-yellow-50"
                                            }`}
                                    >
                                        {branch.name}
                                    </button>
                                ))}
                            </div>

                            {/* Category Navigation */}
                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-gray-200 pb-3">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`cursor-pointer relative pb-3 text-sm font-semibold uppercase tracking-wide transition-colors ${selectedCategory === category
                                                ? "text-gray-900"
                                                : "text-gray-500 hover:text-gray-900"
                                            }`}
                                    >
                                        {category}
                                        {selectedCategory === category && (
                                            <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-yellow-500" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Subcategory Navigation */}
                            {selectedCategory && (
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    {availableSubcategories.map((subcategory) => (
                                        <button
                                            key={subcategory.id}
                                            onClick={() => setSelectedSubcategory(subcategory.name)}
                                            className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all ${selectedSubcategory === subcategory.name
                                                    ? "border-gray-900 bg-gray-900 text-white"
                                                    : "border-gray-200 bg-white text-gray-600 hover:border-yellow-500 hover:text-gray-900"
                                                }`}
                                        >
                                            {subcategory.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Photo Gallery */}
                        {selectedCategory && selectedSubcategory ? (
                            <>
                                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">
                                            {selectedSubcategory}
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {selectedCategory} / {selectedSubcategory}
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-gray-800">
                                        {filteredPhotos.length} Photos
                                    </span>
                                </div>

                                {filteredPhotos.length === 0 ? (
                                    <div className="rounded-xl bg-white py-20 text-center shadow-sm">
                                        <p className="text-lg font-semibold text-gray-700">
                                            No photos found.
                                        </p>

                                        <p className="mt-2 text-gray-500">
                                            There are no images in this subcategory.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                                        {filteredPhotos.map((photo) => (
                                            <div
                                                key={photo.id}
                                                onClick={() => setSelectedImage(photo)}
                                                className="group mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm"
                                            >
                                                <div className="relative overflow-hidden">
                                                    <img
                                                        src={photo.image_url}
                                                        alt={photo.title || photo.category}
                                                        loading="lazy"
                                                        className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
                                                    />

                                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                        <p className="p-4 text-sm font-semibold text-white">
                                                            {photo.title || photo.category}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="rounded-xl bg-white py-16 text-center shadow-sm">
                                <h3 className="text-xl font-bold text-gray-700">
                                    Select a Category and Subcategory
                                </h3>

                                <p className="mt-2 text-gray-500">
                                    Choose the filters above to view gallery photographs.
                                </p>
                            </div>
                        )}

                    </>
                )}
            </div>

            {/* Image Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-2xl text-white hover:bg-white/40"
                        aria-label="Close image"
                    >
                        &times;
                    </button>

                    <div
                        className="max-h-[90vh] max-w-5xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image_url}
                            alt={selectedImage.title || "Gallery image"}
                            className="max-h-[80vh] max-w-full rounded-lg object-contain"
                        />

                        {selectedImage.title && (
                            <p className="mt-4 text-center text-lg font-semibold text-white">
                                {selectedImage.title}
                            </p>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
}

export default Gallery;