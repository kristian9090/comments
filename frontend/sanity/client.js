import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "qb1lt8ts",
  dataset: "production",
  apiVersion: "v2025-03-24",
  useCdn: true,
});

/*
sette opp en for å skrive til klient
*/

export const writeClient = createClient({
  projectId: "qb1lt8ts",
  dataset: "production",
  apiVersion: "v2025-03-24",
  useCdn: true,
  token:
    "skRoYu8c5Za8BNOXtDIe9rRhE0jYOti3ouxNPvyoeycj7h8k1SsMotPXU6Gu2rOhaCir1XN5CkjKfU5EHvpq0wRQayp4CisVcYg88p496C5RgXxcU3ZglybJPIDgflUNpJSfDZmclMrOar21Zu4Ali8ezsB1HZKFKmJPRCZK8dovtYRUCOmq",
});
