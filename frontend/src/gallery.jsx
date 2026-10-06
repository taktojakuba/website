import { motion } from 'framer-motion'

import rice1 from './assets/rice1.png'
import rice2 from './assets/rice2.png'
import rice3 from './assets/rice3.png'
import rice4 from './assets/rice4.png'
import rice5 from './assets/rice5.png'
import rice6 from './assets/rice6.png'
import rice7 from './assets/rice7.png'
import rice8 from './assets/rice8.png'
import asuka from './assets/asuka.png'

function Gallery() {
    return (
        <div className="relative mx-3 mb-3 grid grid-cols-4 gap-2 border-dashed border-4 p-2">
            <motion.img
                src={asuka}
                alt="Asuka"
                initial={{ right: '-20px'}}
                animate={{ right: '10px'}}
                transition={{ duration: 0.5 }}
                className="absolute -top-16 right-5 h-20 w-20"
            />
            {[rice1, rice2, rice3, rice4, rice5, rice6, rice7, rice8].map((src, i) => (
                <div key={i} className="border-4 p-2">
                    <motion.img
                        src={src}
                        alt={`rice-${i + 1}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-1 h-auto w-full object-cover transition-all duration-500 hover:z-10 hover:scale-150"
                    />
                </div>
            ))}
        </div>
    )
}

export default Gallery