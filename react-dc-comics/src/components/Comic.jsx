import comics from '../../dc-comics-2/comics'

export default function Comic() {

    return (

        <>

            {comics.map((comic) => (
                <div className="comic_box" key={comic.id}>
                    <img src={comic.thumb} alt="" />
                    <p>{comic.series}</p>
                </div>
            ))}

        </>

    )
}