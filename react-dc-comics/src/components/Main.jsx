import ComicsList from "./ComicsList";

export default function Main({ image, title }) {
    return (
        <main>
            <section id="content_container">
                <div id="content_box">
                    <div className="series_btn">
                        <button>CURRENT SERIES</button>
                    </div>
                    <div className="row">
                        <ComicsList />
                    </div>
                    <div className="load_btn">
                        <button>LOAD MORE</button>
                    </div>
                </div>
            </section>
        </main>
    )
}