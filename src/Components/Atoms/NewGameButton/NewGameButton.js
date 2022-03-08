const NewGameButton = ({ opponent }) => {
    const handleClick = () => {
        if (opponent === 'CPU') {

        } else {

        }
    };

    return (
            <button onClick={handleClick} className={opponent === 'CPU' ? 'button1' : 'button2'}>
                New Game (VS {opponent})
            </button>
    );
};

export default NewGameButton;
