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
