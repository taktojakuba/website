import kurisu from './assets/kurisu.png'

function Contacts() {
    return (
            <div className="min-w-0 flex-1 border-4 p-2">
                <img
                src={kurisu}
                alt=" Kurisu"
                className="absolute bottom-12 left-26 h-15 w-12 -scale-x-100 grayscale transition-all duration-500 hover:grayscale-0"
                />
                <h1 className="title text-3xl leading-tight">Contact Me:</h1>
                <p className="desc mt-2 text-base leading-relaxed">
                    <ul>
                        <li><a href="https://discordapp.com/users/768727776323829790" target="_blank" rel="noopener noreferrer">Discord</a></li>
                        <li><a href="https://github.com/taktojakuba" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://t.me/taktojakuba" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                    </ul>
                </p>
            </div>
    );
}

export default Contacts;