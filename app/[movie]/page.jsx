import Image from "next/image"
import Link from "next/link"


export default async function MovieDetail({ params }) {

    const { movie } = params
    const imgPath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.REACT_APP_API_KEY}`,
        { next: { revalidate: 0 } }
    )
    const res = await data.json()

    return (
        <div>
            <Link href={`/`} className="text-white	 bg-black inline-block my-2 py-2 px-4 rounded">
                Back
            </Link>
            <h1 className="text-2xl">{res.title} </h1>
            <h2 className="text-lg">{res.release_date}</h2>
            <h3>Runtime: {res.runtime} minutes</h3>
            <h3 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded">{res.release_date} </h3>
            <Image className="my-12" alt={res.title} src={imgPath + res.backdrop_path} width={1000} height={1000} />
            <p>{res.overview}</p>
        </div>
    )
}