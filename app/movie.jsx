import Link from "next/link"
import Image from "next/image"

export default function Movie({ id, title, poster_path, release_date }) {
    const imgPath = "https://image.tmdb.org/t/p/original"
    return (
        <div>
            <h2>{title}</h2>
            <h3>{release_date}</h3>
            <Link href={`/${id}`}>
                <Image src={imgPath + poster_path} width={800} height={800} alt={title}></Image>
            </Link>
        </div>
    )
}