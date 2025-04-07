import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";

export default function SearchBar({handleSubmit, query, setQuery}) {
  const onSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter text to search for images!");
      return;
    }
    handleSubmit(query);
  }

    return (
<header className ={css.header}>
  <form onSubmit={onSubmit}>
    <input
    className={css.input}
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button className={css.btn} type="submit">Search</button>
  </form>
</header>
    )
}