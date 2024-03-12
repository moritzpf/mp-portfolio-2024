
interface WordpressBlockTemplate {
    blockname: string;
    blockslug: string;
    gqlqueryname: string;
    blockbeautifulname: string;
    blockdescription: string;
    blockicon: string;
    blockkeywords: string[];
    attributes: {
        [key: string]: {
            type: string;
            fieldType: string;
            fieldName: string;
            options?: string[];
            
        };
    };
}

interface cmsData {
    pages: {
        nodes: cmsPage[]
    }
    navigationSettings: {
        nodes: cmsNavItem[]
    }
    pagesettings: {
        pageSettingsFields: {
            companyName: string;
            companyStreetAndNumber: string;
            companyZipAndCity: string;
            email: string;
            instagramLink: string;
            phone: string;
            logo: {
                node: {
                    mediaItemUrl: string;
                    srcSet: string;
                }
            }
        }
    }
}

interface cmsNavItem {
    selectedPages: {
        nodes: [
            {
                slug: string;
                id: string;
                title: string;
                contentTypeName: string;
            }
        ]
    }
}


interface cmsPage {
    date: string;
    uri: string;
    title: string;
    slug: string;
    id: string;
    isPostsPage: boolean;
    editorBlocks: cmsBlock[];
}

interface cmsBlock {
    __typename: string;
    name: string;
    attributes: {
        data: any;
    };
}


export type {
    WordpressBlockTemplate,
    cmsData,
    cmsNavItem,
    cmsPage,
    cmsBlock
}