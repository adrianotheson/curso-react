
import perfil from "../../assets/perfil.png"
import ProgressBar from 'react-bootstrap/ProgressBar';
function Home() {
    return (
        <>
            <section className="container mt-5 d-flex gap-5 w-100">
                <div className="d-flex justify-content-center mt-5">
                    <img src={perfil} alt="perfil" />

                </div>
                <div className="conteudo mt-5">

                    <h2>sgsdçghsçiç  fjdsf iosafjioj</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem minima ducimus debitis dolorum nulla corrupti? Modi consequatur quidem aliquam tempora, nihil incidunt, rerum doloremque laboriosam non distinctio molestiae dicta.</p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">formação academica</button>

                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">formação academica</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            {/* <p>revolution</p> */}
                            <ul>
                                <li>Tads-ifms</li>
                                <ul>2021- cursando</ul>
                                <li>tecnico em informatica</li>
                                <ul>2016 - 2022</ul>
                            </ul>
                        </div>
                    </div>
                    
                <div className="mt-3">
                    <h5>fronte-end</h5>
                    <ProgressBar animated now={45} />
                </div>
                <div className="mt-3">
                    <h5>javiscrip</h5>
                    <ProgressBar animated now={45} />
                </div>
                <div className="mt-3">
                    <h5>html-css</h5>
                    <ProgressBar animated now={45} />
                </div>
                <div className="mt-3">
                    <h5>mobile</h5>
                    <ProgressBar animated now={45} />
                </div>

                <div className="d-flex gap-4 mt-5 justify-content-center h1">
                <i class='bx bxl-react'></i>
                <i class='bx bxl-javascript' ></i>
                <i class='bx bxl-html5' ></i>
                <i class='bx bxl-css3' ></i>

                </div>
                </div>
            </section>
        </>
    )
}


export default Home
