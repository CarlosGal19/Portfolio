export interface ContactProps {
    title: string;
    description: string;
    contactTitle: string;
    socialNetworks: SocialNetwork[];
}

export interface SocialNetwork {
    name: string;
    href: string;
    icon: string;
    username: string;
}
