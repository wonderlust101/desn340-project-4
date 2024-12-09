declare global {
}

export {};declare global {
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