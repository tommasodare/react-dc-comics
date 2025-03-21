export default function Comic({ image, title }) {

    return (

        <>
            <div className="comic_box">
                <img src={image} alt="" />
                <p>{title}</p>
            </div>
        </>


    )
}