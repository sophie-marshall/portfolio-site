export type Project = {
    title: string;
    description: string;
    image?: string;
    link?: string;
};

export const projects: Project[] = [
    {
        title: "Data Analysis Project",
        description: "A comprehensive data analysis project using Python and pandas",
        image: "/images/project1.jpg",
        link: "https://github.com/yourusername/project1"
    },
    {
        title: "Machine Learning Model",
        description: "Implemented a machine learning model for predictive analytics",
        image: "/images/project2.jpg",
        link: "https://github.com/yourusername/project2"
    },
    {
        title: "Data Visualization Dashboard",
        description: "Created an interactive dashboard using D3.js",
        image: "/images/project3.jpg",
        link: "https://github.com/yourusername/project3"
    },
    {
        title: "Big Data Pipeline",
        description: "Built a scalable data pipeline using Apache Spark",
        image: "/images/project4.jpg",
        link: "https://github.com/yourusername/project4"
    }
]; 