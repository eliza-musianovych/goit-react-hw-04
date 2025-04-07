import css from "./ImageGallery.module.css";
import ImageCard from "../imageCard/ImageCard";

export default function ImageGallery({gallery, modalOpen}) {
    return (
<ul className={css.list}>
	{gallery.map((item) => (
	<li className={css.item} key={item.id}>
        <ImageCard item={item} onClick={() => modalOpen(item)} />
	</li>))}
</ul>
    )
}