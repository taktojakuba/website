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
            <img
                src={asuka}
                alt="Asuka"
                className="absolute -top-16 right-5 h-20 w-20 grayscale transition-all duration-500 hover:grayscale-0"
            />
            {[rice1, rice2, rice3, rice4, rice5, rice6, rice7, rice8].map((src, i) => (
                <div key={i} className="border-4 p-2">
                    <img
                        src={src}
                        alt={`rice-${i + 1}`}
                        className="z-1 h-auto w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-150 hover:z-10"
                    />
                </div>
            ))}
        </div>
    )
}

export default Gallery