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

const riceImages = [rice1, rice2, rice3, rice4, rice5, rice6, rice7, rice8]

function Gallery() {
    return (
        <div className="relative mx-3 mb-3 grid grid-cols-2 gap-2 border-4 border-dashed p-2 md:grid-cols-4">
            <motion.img
                src={asuka}
                alt="Asuka"
                initial={{ opacity: 0, x: 20, rotate: 12 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute -top-16 right-5 h-20 w-20 object-cover"
            />
            {riceImages.map((src, i) => (
                <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 12, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, delay: i * 0.05, ease: 'easeOut' }}
                >
                    <div className="hover-3d border-4 p-2">
                        <img src={src} alt={`rice-${i + 1}`} className="h-auto w-full object-cover" />
                        {Array.from({ length: 8 }, (_, n) => <div key={n} />)}
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default Gallery