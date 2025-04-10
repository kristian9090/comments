import { comments } from "../../../sanity/schemaTypes/comments";
import { client, writeClient } from "../client";

export async function fetchAllProducts() {
  const data = await client.fetch(
    `*[_type == 'products']{name, _id, comments, "slug": slug.current}`
  );
  return data;
}

export async function fetchProductBySlug(slug) {
  const data = await client.fetch(
    `*[_type == 'products' && slug.current == $slug]{name, _id, 
        comments[]{
            _key,
            comment,
            user->{
                _id,
                name,
                "image": image.asset -> url,
                slug
            }
        }
    }`,
    { slug }
  );
  return data;
}

/*Skirve en funksjon for å sette inn eller oppdatere kommentar arrayen som ligger på produkter */

export async function updateComments(userId, productId, comment) {
  const result = await writeClient
    .patch(productId)
    .setIfMissing({ comments: [] })
    .append("comments", [
      { user: { _type: "user", _ref: userId }, comment: comment },
    ])
    .commit({ autoGenerateArrayKeys: true })
    .then(() => {
      return "success";
    })
    .catch((error) => {
      return "Error" + error.message;
    });
  return result;
}
