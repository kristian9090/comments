import { client } from "../client";

export async function fetchAllUsers() {
  const data = await client.fetch(`*[_type == 'users']
                {_id,
                name,
                "image": image.asset -> url,
                "slug": slug.current
            }`);
  return data;
}

export async function fetchUserBySlug(slug) {
  const data = await client.fetch(
    `*[_type == 'users' && slug.current == $slug]{
                _id,
                name,
                "image": image.asset -> url,
                slug
            }`,
    { slug }
  );
  return data;
}
/*En fetch som henter en bruker basert på id, denne er foreløpelig statisk*/
export async function fetchUserById() {
  const data = await client.fetch(
    `*[_type == "users" && _id == "f56e3a72-66e7-40f1-b892-7b3cd5b5ff49"]`
  );
  return data;
}

/*TODO: Skrive en fetch funksjon for å hente alle kommentarerene en bruker har gjort på et produkt */

export async function fetchAllFromUser(id) {
  const data = await client.fetch(
    `*[
 _type == 'products'
]
{
  name,
  "comments": comments [
    user._id == "$id"
    {comment}
    ]
}`,
    { id }
  );
  return data;
}
