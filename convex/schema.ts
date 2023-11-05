import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    title: v.string(),
    userId: v.string(),
    isArchived: v.boolean(),
    parentDocument: v.optional(v.id("documents")),
    content: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    icon: v.optional(v.string()),
    isPublished: v.boolean(),
    slug: v.optional(v.string()),
  })
  .index("by_user", ["userId"])
  .index("by_user_parent", ["userId", "parentDocument"]),
  users: defineTable({
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    email: v.string(),
    passwordHash: v.string(),
    username: v.optional(v.string()),
    image: v.optional(v.string()),
    documentId: v.string(),
  })
  .index("by_email", ["email"])
  .index("by_username", ["username"]),
});
