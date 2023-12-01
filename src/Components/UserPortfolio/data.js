export const data = {
    template: "MainTemplate",
    data: [
        {
            type: "Navbar",
            data: {
                items: [
                    {
                        title: "Mahmoud",
                        to: "#about",
                    },
                    {
                        title: "Articles",
                        to: "#articles",
                    },
                    {
                        title: "Projects",
                        to: "#projects",
                    },
                    {
                        title: "Speaking",
                        to: "#speaking",
                    },
                    {
                        title: "Content",
                        to: "#content",
                    },
                    {
                        title: "Content",
                        to: "#content",
                    },
                ]
            }
        },
        {
            type: "MainHero",
            data: {
                topImage: null,
                headerTitle: 'Software designer, founder, and amateur astronaut.',
                subTitle: " I’m Ali Hassan, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
                leftImage: {
                    link: "https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=",
                    width: 110,
                    height: 110,
                },
                rightImage: {
                    link: "https://cdn-icons-png.flaticon.com/512/12840/12840916.png",
                    floating: false,
                    laptop: true,
                    width: 250,
                    height: 250,
                },
            },
        },
        
        {
            type: "ProjectsSection",
            data: {
                title: "My Projects",
                subTitle: "This will be a very long list, far more than you need for a title. Now go down the list and see which words are most descriptive and cross out all the rest.",
                projects: [
                    {
                        category: "React",
                        title: "React Project",
                        description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
                        image: "https://cdn.dribbble.com/userupload/2812125/file/original-18031949f352139933ed6a160e82a1c8.png?resize=1600x1200",
                        link: 'react344gdf',
                    },
                    {
                        category: "Css",
                        title: "React & Css Project",
                        description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
                        image: "https://cdn.dribbble.com/userupload/2986877/file/original-338602e796dd39345b4be2ba15ac0250.png?resize=1600x1200",
                        link: 'react2',
                    },
                    {
                        category: "C++",
                        title: "Css Project",
                        description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
                        image: "https://cdn.dribbble.com/userupload/3023702/file/original-92486f5adf0adb16511874c3025b9a51.png?resize=1600x1200",
                        link: 'react23434'
                    },
                    {
                        category: "Flutter",
                        title: "React Project",
                        description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
                        image: "https://cdn.dribbble.com/userupload/11110621/file/original-3b6d29595ab0764e469dd0eb92ac4e77.png?resize=1600x1200",
                        link: 'react23'
                    },
                ],
            },
        },
        {
            type: "AboutMeSection",
            title: "About Me",
            subTitle: "Personal information of me and my experience in the field",
            data: {
                image: {
                    link: "https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=",
                    borderRadius: 15,
                    circle: false,
                    width: 250,
                    height: 250,
                },
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat magni ipsam quis, iusto tenetur consequatur placeat quae adipisci. Natus nobis facilis id quibusdam modi aliquam dignissimos ex recusandae assumenda possimus!",
                button: {
                    text: "Download My CV",
                    link: "https://drive.google.com/file/d/1qY0s9Hti5XTsOyPLpQ8ryktAbpUE-F9_/view?usp=sharing",
                },
                experiences: [
                    {
                        icon: "fa-solid fa-lightbulb",
                        title: "Experience",
                        subTitle: "8+ Years",
                    },
                    {
                        icon: "fa-solid fa-lightbulb",
                        title: "Experience",
                        subTitle: "2+ Years",
                    },
                    {
                        icon: "fa-solid fa-lightbulb",
                        title: "Experience",
                        subTitle: "3+ Years",
                    },
                    {
                        icon: "fa-solid fa-lightbulb",
                        title: "Experience",
                        subTitle: "5+ Years",
                    },
                ]
            }
        },
        {
            type: "SkillsLevel",
            data: {
                title: "My Skills Level",
                subTitle: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
                skills: [
                    {
                        title: "PHP",
                        progress: 100
                    },
                    {
                        title: "Java",
                        progress: 100
                    },
                    {
                        title: "C++",
                        progress: 40
                    },
                    {
                        title: "Flutter",
                        progress: 80
                    },
                    {
                        title: "PHP",
                        progress: 20
                    },
                    {
                        title: "Java",
                        progress: 50
                    },
                    {
                        title: "C++",
                        progress: 40
                    },
                    {
                        title: "Flutter",
                        progress: 80
                    },
                    {
                        title: "PHP",
                        progress: 20
                    },
                    {
                        title: "Java",
                        progress: 50
                    },
                    {
                        title: "C++",
                        progress: 40
                    },
                    {
                        title: "Flutter",
                        progress: 80
                    },
                ]
            }
        },
        {
            type: "SkillsSection",
            data: {
                title: "My Skills Level",
                subTitle: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
                skills: [
                    {
                        title: "Frontend",
                        skills: [
                            "React Js",
                            "Redux",
                            "Next Js",
                            "HTML",
                            "CSS",
                            "Javascript",
                            "Bootstrap",
                            "Fluttre",
                        ],
                    },
                    {
                        title: "Backend",
                        skills: [
                            "React Js",
                            "Redux",
                            "Next Js",
                            "HTML",
                            "CSS",
                            "Javascript",
                            "Bootstrap",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                        ],
                    },
                    {
                        title: "Backend",
                        skills: [
                            "React Js",
                            "Redux",
                            "Next Js",
                            "HTML",
                            "CSS",
                            "Javascript",
                            "Bootstrap",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                        ],
                    },
                    {
                        title: "Backend",
                        skills: [
                            "React Js",
                            "Redux",
                            "Next Js",
                            "HTML",
                            "CSS",
                            "Javascript",
                            "Bootstrap",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                        ],
                    },
                    {
                        title: "Backend",
                        skills: [
                            "React Js",
                            "Redux",
                            "Next Js",
                            "HTML",
                            "CSS",
                            "Javascript",
                            "Bootstrap",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                            "Fluttre",
                        ],
                    },
                ]
            }
        },
    ],
};