import {
    useEffect,
    useState
} from "react";
import "./App.css";
import {
    FemaleOrNot
} from "./pages/FemaleOrNot";
import {
    Header
} from "./components/Header.tsx";
import {
    CharacterInfo,
    Response
} from "./types.ts";
import {
    InfoCharacter
} from "./components/InfoCharacter.tsx";
import {
    SubTitle
} from "./components/SubTitle.tsx";

async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data: Response = await response.json();
            return data;
        } else {
            throw new Error("Network response was not ok.");
        }
    } catch (error) {
        console.error("Failed to fetch data from url:", error);
        throw error;
    }
}


function App() {
    const [data, setData] = useState<Response>();
    const [loading, setLoading] = useState(true);
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterInfo>('unknown');
    const [isFemale, setIsFemale] = useState(false);

    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/character")
            .then(data => setData(data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);



    return (
        <div>
            <Header
                title={'Rick and Morty'}/>
            <FemaleOrNot
                isFemale={isFemale}/>
            {
                selectedCharacter ? (
                    <div
                        className="selected">
                        <SubTitle
                            text={'Вы пока никого не выбрали, нажмите по персонажу'}/>
                        <div>
                                <InfoCharacter name={'Gender'} value={selectedCharacter.gender} />
                                <InfoCharacter name={'Status'} value={selectedCharacter.status}/>
                                <InfoCharacter name={'Species'} value={selectedCharacter.species}/>
                        </div>
                    </div>
                ) : (
                    <div
                        className="selected">
                        <SubTitle
                            text={'Выбранный персонаж'}/>

                        <InfoCharacter
                            name={'Gender'}/>
                        <InfoCharacter
                            name={'Status'}/>
                        <InfoCharacter
                            name={'Species'}/>

                    </div>
                )
            }
            {
                loading ?
                    <p className={'loading-text'}>Loading...</p> : (
                        <div
                            className="wrapper">
                            {
                                data?.results?.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                setSelectedCharacter(item);
                                            }}
                                            className="card">
                                            <div
                                                className="image_container">
                                                <img
                                                    className="image"
                                                    src={item.image}
                                                    alt="Картинка Персонажа"/>
                                                <strong>{item.name}</strong>
                                            </div>
                                            <div
                                                className="list">
                                                <div>
                                                    <InfoCharacter name={'Gender'} value={item.status}/>
                                                </div>
                                                <div>
                                                    <InfoCharacter name={'Status'} value={item.status}/>
                                                </div>
                                                <div>
                                                    <InfoCharacter name={'Species'} value={item.species}/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
            }
        </div>
    );
}

export default App;
