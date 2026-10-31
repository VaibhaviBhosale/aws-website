<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GalleryPhoto;
use App\Models\Branch;
use App\Models\GallerySubcategory;

class GalleryController extends Controller
{
    public function index(Request $request)
    {
        // Fetch active branches having gallery photos
        $branches = Branch::where('active', 1)
            ->whereIn('id', GalleryPhoto::select('branch_id')->distinct())
            ->orderByRaw("
        CASE
            WHEN name = 'Bhilarewadi' THEN 1
            WHEN name = 'Warje' THEN 2
            WHEN name = 'Manajinagar' THEN 3
            WHEN name = 'Manajinagar' THEN 4
            WHEN name = 'Datta Nagar' THEN 5
            WHEN name = 'Solapur' THEN 6
            WHEN name = 'Belagavi' THEN 7
            ELSE 8
        END
    ")
            ->get();

        // Select requested branch or first available branch
        $selectedBranch = $request->query('branch');

        if (!$selectedBranch || !$branches->contains('id', $selectedBranch)) {
            $selectedBranch = optional($branches->first())->id;
        }

        if (!$selectedBranch) {
            return response()->json([
                'success' => true,
                'branches' => $branches,
                'selected_branch' => null,
                'categories' => [],
                'subcategories' => [],
                'photos' => [],
            ]);
        }

        // Fetch active photos for selected branch
        $photos = GalleryPhoto::where('status', 1)
            ->where('branch_id', $selectedBranch)
            ->orderByDesc('id')
            ->get();

        // Fetch distinct categories
        $categories = $photos->pluck('category')
            ->filter()
            ->unique()
            ->values();

        // Fetch subcategories for selected branch
        $subcategories = GallerySubcategory::where('branch_id', $selectedBranch)
            ->get()
            ->groupBy(function ($item) {
                return strtolower($item->category);
            });

        // Prepare complete image URLs
        $photos = $photos->map(function ($photo) {
            $photo->image_url = asset(
                'website/images/gallery/new_photos/' .
                $photo->category . '/' . $photo->image
            );

            return $photo;
        });

        // Random gallery images for hero slider
$sliderPhotos = GalleryPhoto::where('status', 1)
    ->inRandomOrder()
    ->limit(8)
    ->get()
    ->map(function ($photo) {
        return [
            'id' => $photo->id,
            'image_url' => asset(
                'website/images/gallery/new_photos/' .
                $photo->category . '/' . $photo->image
            ),
            'title' => $photo->title,
        ];
    });

        return response()->json([
            'success' => true,
            'branches' => $branches,
            'selected_branch' => $selectedBranch,
            'categories' => $categories,
            'subcategories' => $subcategories,
            'photos' => $photos,
            'slider_photos' => $sliderPhotos,
        ]);
    }
}