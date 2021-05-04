import { DirectusMarkdown } from 'interfaces/directus.interface';

export interface Props {
    id: number;
    name: string;
    recommended_package: Package;
    recommended_package_content: DirectusMarkdown;
    optional_package?: Package;
    optional_package_content?: DirectusMarkdown;
}

export interface Package {
    id: number;
    name: string;
    price: number;
    buy_link: string;
    details_link: string;
}