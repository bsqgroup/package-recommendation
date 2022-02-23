export type DirectusId = number;
export type DirectusSort = number | null;
export type DirectusStatus = 'published' | 'draft' | 'deleted';
export type DirectusMarkdown = string;
export type DirectusColor = string;
export type DirectusPrice = string | number;

export interface DirectusPage {
    slug: string;
}

export interface IStep {
    id: string;
    name: string;
    question?: IQuestion;
    recommendation?: IRecommendation;
    type: string;
}

export interface IQuestion {
    id: string;
    name: string;
    question: DirectusMarkdown;
    info_text :DirectusMarkdown;
    answers: IAnswer[];
}

export interface IRecommendation {
    id: string;
    name: string;
    recommended_package: IPackage;
    recommended_package_content: DirectusMarkdown;
    optional_package?: IPackage;
    optional_package_content?: DirectusMarkdown;
}

export interface IAnswer {
    id: string;
    name: string;
    answer: string;
    next_question: IStep;
    recommendation: IRecommendation;
    quit_quiz: boolean;
}

export interface IPackage {
    id: string;
    name: string;
    description: string;
    price: string;
    buy_link: string;
    details_link: string;
}
