import css from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({loading}) {
  return (
    <div className={css.loaderContainer}>
      <ClipLoader
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </div>
  )
}