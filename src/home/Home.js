import {Container} from "./style";

function Home() {
    return (
        <Container>        
            <h2>catálago</h2>

            <ul>
                <li>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7D56cpIldaRRZzOnvXoe1spDiqD.jpg" alt="Os Mercenários 4"/>
                    <span>Os Mercenários 4</span>
                </li>
                <li>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ch1BGjadaiPU59zYbb6zPUTZtyO.jpg" alt="jogos mortais "/>
                    <span>jogos mortais</span>
                </li>
                <li>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lJonRBSvmX3TEGhxSHooGmJa4GG.jpg" alt="Destinos à Deriva (2023)"/>
                    <span>Destinos à Deriva (2023)</span>
                </li>
            </ul>
        </Container>
    )
}

export default Home;
