import css from "./ImageCard.module.css";

export default function ImageCard({ item: { alt_description, urls }, onClick }) {
    return (
<div>
  <img className={css.img} src={urls.small} alt={alt_description} onClick={onClick} />
</div>
    )
}