import warje1 from "../assets/images/academics/warje/warje1.jpg";
import warje2 from "../assets/images/academics/warje/warje2.jpg";
import warje3 from "../assets/images/academics/warje/warje3.jpg";
import warje4 from "../assets/images/academics/warje/warje4.jpg";
import warje5 from "../assets/images/academics/warje/warje5.jpg";
import warje6 from "../assets/images/academics/warje/warje6.jpg";
import warje8 from "../assets/images/academics/warje/warje8.jpg";

const academicsData = {
    warje: {
        slug: "warje",
        name: "Warje",
        subtitle: "Explore our academic programmes and learning journey.",

        headingImages: [warje5, warje8],

        sideImages: [
            warje1,
            warje2,
            warje3,
            warje4,
            warje5,
            warje6,
        ],

        sections: [
            {
                id: "pre-primary",
                name: "Pre-Primary",
                categories: [
                    {
                        name: "Pedagogy",
                        slug: "pedagogy",
                        description: "Learning approach",
                    },
                    {
                        name: "Curriculum",
                        slug: "curriculum",
                        description: "Learning programme",
                    },
                    {
                        name: "Team",
                        slug: "team",
                        description: "Meet our educators",
                    },
                    {
                        name: "Principal's Desk",
                        slug: "principal-preprimary",
                        description: "Message from the Principal",
                    },
                ],
            },

            {
                id: "primary",
                name: "Primary",
                categories: [
                    {
                        name: "Pedagogy",
                        slug: "pedagogy",
                        description: "Learning approach",
                    },
                    {
                        name: "Curriculum",
                        slug: "curriculum",
                        description: "Learning programme",
                    },
                    {
                        name: "Co-Curricular",
                        slug: "co-curricular",
                        description: "Beyond academics",
                    },
                    {
                        name: "Team",
                        slug: "team",
                        description: "Meet our educators",
                    },
                    {
                        name: "Principal's Desk",
                        slug: "principal-primary",
                        description: "Message from the Principal",
                    },
                ],
            },

            {
                id: "secondary",
                name: "Secondary",
                categories: [
                    {
                        name: "Pedagogy",
                        slug: "pedagogy",
                        description: "Learning approach",
                    },
                    {
                        name: "Curriculum",
                        slug: "curriculum",
                        description: "Learning programme",
                    },
                    {
                        name: "Co-Curricular",
                        slug: "co-curricular",
                        description: "Beyond academics",
                    },
                    {
                        name: "Team",
                        slug: "team",
                        description: "Meet our educators",
                    },
                    {
                        name: "Principal's Desk",
                        slug: "principal-secondary",
                        description: "Message from the Principal",
                    },
                ],
            },
        ],
    },


    bhilarewadi: {
        slug: "bhilarewadi",
        name: "Bhilarewadi",
        subtitle: "Explore our academic programmes and learning journey.",

        // Images are intentionally omitted for better loading performance.

        sections: [
            {
                id: "primary",
                name: "Primary",
                categories: [
                    {
                        name: "Pedagogy",
                        slug: "pedagogy",
                        description: "Learning approach",
                    },
                    {
                        name: "Curriculum",
                        slug: "curriculum",
                        description: "Learning programme",
                    },
                    {
                        name: "Team",
                        slug: "team",
                        description: "Meet our educators",
                    },
                    {
                        name: "Principal's Desk",
                        slug: "principal-primary",
                        description: "Message from the Principal",
                    },
                ],
            },

            {
                id: "secondary",
                name: "Secondary",
                categories: [
                    {
                        name: "Pedagogy",
                        slug: "pedagogy",
                        description: "Learning approach",
                    },
                    {
                        name: "Curriculum",
                        slug: "curriculum",
                        description: "Learning programme",
                    },
                    {
                        name: "Team",
                        slug: "team",
                        description: "Meet our educators",
                    },
                    {
                        name: "Principal's Desk",
                        slug: "principal-secondary",
                        description: "Message from the Principal",
                    },
                ],
            },
        ],
    },
};

export default academicsData;