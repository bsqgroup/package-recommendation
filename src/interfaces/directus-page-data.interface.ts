export interface DirectusPageData {
  directus: {
    items: {
      pages: {
        id: string;
        slug: string;
        title: string;
        description: string;
        keywords?: string[];
        robots: string;
        canonical?: string;
      }[];
    };
  };
}
