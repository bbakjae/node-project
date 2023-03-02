export interface Post {
    id: number;
    title: string;
    content: string;
    isActive: boolean;
}
// all_in_one <- python
// allInOne <- java, javascript
export interface Db {
    posts: Post[]
}

export const db: Db = {
    posts: [
        {
            id: 1,
            title: "title1",
            content: "content22211122",
            isActive: true
        },
        {
            id: 2,
            title: "title2",
            content: "content22222",
            isActive: false
        },
        {
            id: 3,
            title: "title3",
            content: "content22233322",
            isActive: true
        },
        {
            id: 4,
            title: "title4",
            content: "content22224442",
            isActive: true
        },
        {
            id: 5,
            title: "title5",
            content: "content222552",
            isActive: true
        },
        {
            id: 6,
            title: "title124",
            content: "aqerg5",
            isActive: false
        },
    ]
}