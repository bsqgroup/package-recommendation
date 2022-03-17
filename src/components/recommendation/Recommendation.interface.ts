import { DirectusMarkdown } from 'interfaces';

export interface Props {
    id: string;
    name: string;
    recommended_package: Package;
    recommended_package_content: DirectusMarkdown;
    optional_package?: Package;
    optional_package_content?: DirectusMarkdown;
}

export interface Package {
    id: string;
    name: string;
    description: string;
    price: string;
    buy_link: string;
    details_link: string;
}
