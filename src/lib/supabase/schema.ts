import { pgTable, uuid } from "drizzle-orm/pg-core";

export const workspace = pgTable('workspaces',{
    id : uuid('id').defaultRandom()
});

