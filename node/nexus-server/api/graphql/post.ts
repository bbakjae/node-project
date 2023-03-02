import { extendType, nonNull, objectType, stringArg } from "nexus"
import { Post } from "../db";

export const tPost = objectType({
    name: "Post",
    definition(t) {
        t.int("id");
        t.string("title");
        t.string("content");
        t.boolean("isActive");
        t.string("createdAt");
    }
})

export const PostQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.boolean("test", {
            resolve: async (root, args, ctx) => {
                await ctx.prisma.post.findMany({
                    where: {
                        OR: [
                            { title: { contains: "keyword" }, },
                            { content: { contains: "keyword" } }
                        ]
                    }
                })
                return true
            }
        })
        t.nonNull.list.field("drafts", {
            type: "Post",
            resolve: async (root, args, ctx) => {
                const posts = await ctx.prisma.post.findMany({
                    where: {
                        isActive: true
                    },
                    orderBy: [{ id: "desc" }]
                })
                return posts;
                /**
                 * SELECT * FROM post
                 * WHERE isActive=true
                 */
                return ctx.db.posts;
            }
        });
        t.nonNull.list.field("activePostList", {
            type: "Post",
            resolve: (root, args, ctx) => {
                return ctx.db.posts.filter(v => v.isActive);
            }
        })
    }
})

export const PostMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createPost", {
            type: "Boolean",
            args: {
                title: nonNull(stringArg()),
                content: nonNull(stringArg())
            },
            resolve: async (root, args, ctx) => {
                await ctx.prisma.post.create({
                    data: {
                        title: args.title,
                        content: args.content
                    }
                })
                return true
            }
        })
    },
})