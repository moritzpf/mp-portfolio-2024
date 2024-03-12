import { green, red, blue, bold, underline } from "colorette";

import type { WordpressBlockTemplate, cmsData, cmsPage, cmsBlock, cmsNavItem } from "./interfaces";


const registeredBlocks: Array<WordpressBlockTemplate> = [
    {
        "blockname": "header",
        "blockslug": "acf",
        "gqlqueryname": "AcfHeader",
        "blockbeautifulname": "Header-Galerie",
        "blockdescription": "Der Startseiten-Header mit einer Galerie im Hintergrund.",
        "blockicon": "format-gallery",
        "blockkeywords": ["header", "gallery", "startseite", "home", "frontpage", "hero", "header-galerie"],
        "attributes": {
            "testimonial": {
                "type": "string",
                "fieldType": "text",
                "fieldName": "quote",
            },
            "author": {
                "type": "string",
                "fieldType": "text",
                "fieldName": "author",
            },
        },
    },
];

class WordpressManager {
    private static graphqlUrl = "https://admin.moritz-pfeffer.de/index.php?graphql";
    public cmsData: cmsData | undefined = undefined;

    async init(): Promise<any> {
        this.cmsData = (await this.fetchData()) as cmsData;
    }

    async GetGQL(Query: string) {
        const response = await fetch(WordpressManager.graphqlUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: Query,
                variables: {},
            }),
        });

        const json = await response.json();
        return json.data as cmsData | undefined;
    }

    async fetchData(): Promise<cmsData | undefined> {
        try {
            let data = await this.GetGQL(
                `
            query GetCMSData {
                pages {
                    nodes {
                      editorBlocks(flat: true) {
                        __typename
                        name` +
                    this.buildGQLBlockAttributes() +
                    `
                      }
                      date
                      uri
                      title
                      slug
                      id
                      isPostsPage
                    }
                }
                navigationSettings {
                    navigationmenu {
                      menupunkt {
                        nameDesReiters
                        selectedPages {
                            nodes {
                              ... on Page {
                                  id
                                  title
                                  slug
                                  contentTypeName
                              }
                              ... on Artist {
                                  id
                                  slug
                                  title
                                  contentTypeName
                              }
                            }
                        }
                      }
                    }
                }
                pagesettings {
                    pageSettingsFields {
                      companyName
                      companyStreetAndNumber
                      companyZipAndCity
                      email
                      instagramLink
                      phone
                      logo {
                        node {
                          mediaItemUrl
                          srcSet
                        }
                      }
                    }
                  }
            }
          `
            );
            if (!data) {
                console.log(red("Error: No data received from CMS"));
                console.log(red("Trying minimal query..."));
                data = await this.GetGQL(
                    `
                query GetCMSData {
                    pages {
                        nodes {
                          title
                        }
                      }
                }
                `
                );
                if (!data) {
                    throw new Error(red("Error: No data received from CMS, even with minimal query. Maybe the CMS is down?"));
                } else {
                    console.log(green("Minimal query successful"));
                    throw new Error(
                        red("Error: Faulty query, try to reupload the theme and check the CMS for errors.")
                    );
                }
            }
            if (data && data.pages && data.pages.nodes) {
                data.pages.nodes.forEach((node: cmsPage) => {
                    // Loop through each editorBlock
                    node.editorBlocks.forEach((block: cmsBlock) => {
                        // Check if the block has a data attribute
                        if (block.attributes && block.attributes.data) {
                            try {
                                // Parse the JSON string into an object
                                block.attributes.data = JSON.parse(block.attributes.data);
                            } catch (e) {
                                console.error("Error parsing block data as JSON:", e);
                            }
                        }
                    });
                });
            }
            console.log(green("Fetched data from CMS"));
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return;
        }
    }

    buildGQLBlockAttributes(): string {
        let gqlBlockAttributes = "";
        for (const block of registeredBlocks) {
            // if not exactly 2 uppercase letters or contains a /, throw an error
            if (this.countUpperCaseLetters(block.gqlqueryname) !== 2) {
                throw new Error(red(`gqlqueryname '${block.gqlqueryname}' must have exactly 2 uppercase letters`));
            } else if (block.gqlqueryname.includes("/")) {
                throw new Error(red(`gqlqueryname '${block.gqlqueryname}' cannot contain a '/'`));
            }
            gqlBlockAttributes += `
            ... on ${block.gqlqueryname} {
                apiVersion
                attributes {
                    data
                  }
                }
            `;
        }
        // console.log(green("GQL Block Attributes:"));
        // console.log(gqlBlockAttributes);
        return gqlBlockAttributes;
    }

    countUpperCaseLetters(input: string): number {
        let count = 0;
        // Iterate through each character in the string
        for (let i = 0; i < input.length; i++) {
            // Check if the character is an uppercase letter
            if (input[i] >= "A" && input[i] <= "Z") {
                count++;
            }
        }
        return count;
    }
}

const wp = new WordpressManager();

export { WordpressManager, registeredBlocks, wp };
export type { WordpressBlockTemplate, cmsData, cmsPage, cmsBlock, cmsNavItem };
