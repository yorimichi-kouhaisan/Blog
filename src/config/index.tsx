import { FaPython, FaReact, FaUbuntu, FaCloud} from "react-icons/fa";
import { SiCodereview, SiTypescript } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { AiTwotoneTool } from "react-icons/ai";
import { ReactNode } from "react";


export const POST_PER_PAGE: number = 6


export const PARENT_CATEGORY = {
    "Code": ["Python", "TypeScript", "MachineLearning"],
    "WebApp": ["React/Next.js", "Django", "AWS"],
    "Tools": ["Ubuntu", "VSCode"],
    "Column": ["Review",]
}


export const CATEGORIES: string[] = [
    "Python",
    "TypeScript",
    "React/Next.js",
    "C++",
    "MachineLearning",
    "Ubuntu",
    "AWS",
    "VSCode",
    "Review",
]


interface CategoryColor {
    [key: string]: string
}


export const CATEGORIES_COLOR: CategoryColor = {
    "Python": "bg-python",
    "TypeScript": "bg-typescript",
    "React/Next.js": "bg-react",
    "C++": "bg-cpp",
    "MachineLearning": "bg-machinelearning",
    "Ubuntu": "bg-ubuntu",
    "AWS": "bg-aws",
    "VSCode": "bg-vscode",
    "Review": "bg-review",
}


interface CategoryIcon {
    [key: string]: ReactNode
}


export const CATEGORIES_ICON: CategoryIcon = {
    "Python": <FaPython />,
    "TypeScript": <SiTypescript />,
    "React/Next.js": <FaReact />,
    "C++": <TbBrandCpp />,
    "MachineLearning": <AiTwotoneTool />,
    "Ubuntu": <FaUbuntu />,
    "VSCode": <DiVisualstudio />,
    "AWS": <FaCloud />,
    "Review": <SiCodereview />
}

