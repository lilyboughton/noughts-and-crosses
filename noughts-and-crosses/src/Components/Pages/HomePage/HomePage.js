import NewGameButton from "../../Atoms/NewGameButton/NewGameButton";
import './HomePage.css'

const HomePage = () => {
    return (
        <>
            <section>
                <NewGameButton opponent="CPU" />
                <NewGameButton opponent="Player" />
            </section>
        </>
    )
}

export default HomePage