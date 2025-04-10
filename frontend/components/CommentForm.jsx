import { useState } from "react";
import { updateComments } from "../sanity/services/productServices";

export default function CommentForm({ productid, loggedInUser }) {
  const [comment, setComment] = useState([]);

  /*TODO: Lage en funksjon som tar imot de ulike verdiene vi må sende til sanity for å legge igjen en ny kommentar */

  const updateComment = async (e) => {
    e.preventDefault();
    const result = await updateComments(loggedInUser._id, productid, comment);
    if (result == "success") {
      console.log("din kommentar er sendt");
    }
  };

  /*TODO: Funksjon for å håndtere endringer i kommentar feltet*/

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  console.log("fra comment", loggedInUser, productid);
  return (
    <form>
      <label>
        Brukernavn
        <input
          type="text"
          name="user"
          defaultValue={loggedInUser?.name}
          placeholder={loggedInUser?.name}
        />
      </label>
      <label>
        Kommentar
        <textarea name="comment" onChange={handleChange}></textarea>
      </label>
      <button onClick={updateComment}>Send</button>
    </form>
  );
}
