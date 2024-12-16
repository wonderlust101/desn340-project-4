declare global {
}

export {};declare global {
    type Bike = {
        imgURL: string;
        name: string;
        type: string;
        size: string;
        price: number;
        content: string;
        asIs: boolean;
    }
    
    type Blog = {
        title: string;
        date: string;
        imgURL: string;
        imgAlt: string;
        content: string;
    }
    
    type Links = {
        header: string;
        href: string;
        subLinks: SubLink[];
    }

    type SubLink = {
        header: string;
        href: string;
    }

    type Button = {
        title: string;
        href: string;
    }

    type TextContent = string | {
        beforeText?: string;
        definition: (string | string[] | TextContent)[];
        header?: string;
    };

    type TextSection = {
        header: string;
        subHeader?: string;
        text: TextContent[];
        button: Button;
    }
}

export {};