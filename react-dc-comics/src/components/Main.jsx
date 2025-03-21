import ComicsList from "./ComicsList";

export default function Main({ image, title }) {
    return (
        <main>
            <section id="content_container">
                <div id="content_box">
                    <div className="row">
                        <ComicsList />
                    </div>
                </div>
            </section>
        </main>
    )
}