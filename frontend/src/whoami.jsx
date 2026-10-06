import rei from './assets/rei.png'
import { motion } from 'framer-motion'

function Whoami() {
    return (
        <div className="relative mx-3 my-6 border-dashed border-4 p-2">
            <motion.img
                src={rei}
                alt="Rei"
                initial={{ top: '-80px' }}
                animate={{ top: '-40px' }}
                transition={{ duration: 0.5 }}
                className="absolute right-0 h-26 w-26"
            />
            <div className="mb-2 border-4 p-2">
                <h1 className="title text-3xl leading-tight">Welcome !!</h1>
                <p className="desc mt-2 text-base leading-relaxed">
                    I am Jakub known as taktojakuba on <i>internet</i>
                </p>
            </div>

            <div className="mb-2 border-4 p-2">
                <h3 className="subtitle text-xl">About me:</h3>
                <p className="desc mt-2 text-base leading-relaxed">
                    Polish student who is into computers <br></br>
                    In free time I like to watch anime's
                </p>
            </div>

            <div className="mb-2 border-4 p-2">
                <h3 className="subtitle text-xl">Why did I make this website ?</h3>
                <p className="desc mt-2 text-base leading-relaxed">
                    I always wanted to have my own place on the <i>internet</i> so this is why I decided to make this website
                </p>
            </div>

            <div className="border-4 p-2">
                <h3 className="subtitle text-xl">My current setup</h3>
                <p className="desc mt-2 text-base leading-relaxed">
                    System Nixos with dwl
                </p>
            </div>
        </div>
    );
}

export default Whoami;