declare global {
}

export {};declare global {
    type Bike = {
        imgURL: string;
        name: string;
        type: string;
        price: number;
        content: string;
    }
    
    type Blog = {
        title: string;
        date: string;
        imgURL: string;
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

    type TextContent = string | {
        beforeText?: string;
        content: (string | string[] | TextContent)[];
        header?: string;
    };

    interface Regulation {
        header: string;
        subHeader?: string;
        text: TextContent[];
    }

    type RegulationList = Regulation[];

}

export {};