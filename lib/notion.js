import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });
const dbID = process.env.NOTION_DATABASE_ID;

const


//check if there is a post in queue and post it if there is one
export const checkStatus = async () => {
    const response = await notion.databases.query({
        database_id: dbID,
        filter: {
            property: "Tags",
            select: {
                equals: "Post"
            }
        }
    });
    return response.results[0].id;
}

//change the status of the post to posted
export const changeStatus = async (id) => {
    const response = await notion.pages.update({
        page_id: id,
        properties: {
            "Tags": {
                select: {
                    name: "Posted"
                }
            }
        }
    })

    console.log(response)
}