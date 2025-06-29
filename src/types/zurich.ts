export interface ZurichCard {
  description: string;
  img: string;
  alt: string;
};

export interface ZurichPostSite {
  title: string;
  individual: string;
  link: string;
  img: string;
  alt: string;
};

export interface ZurichPosts {
  title: string;
  sites: ZurichPostSite[];
};

export interface ZurichProps {
  title: string;
  description: string;
  cards: ZurichCard[];
  posts: ZurichPosts;
};
