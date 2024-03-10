import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
export default function Features() {
    return <>
        <section className="m-4 md:m-8  text-gray-800">
            <div className="container mx-auto p-4 my-6 space-y-2 flex flex-col gap-4 text-center m-auto max-w-xl">
                <h2 className="text-4xl font-semibold">We provide various kind of learning modules for you</h2>
                <p className="text-gray-600">It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem</p>
            </div>
            <div className="container mx-auto flex justify-evenly  text-center">
                <div className="flex flex-col items-center  p-4  bg-gray-50  rounded-xl max-w-xs">
                    <div className='max-h-60 overflow-hidden'>
                        <img src={img1} className='h-full' />
                    </div>
                    <h3 className="my-3 text-3xl font-semibold">Learn Anything</h3>
                    <div className="space-y-1 leadi">
                        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</p>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4  bg-gray-50 rounded-xl max-w-xs">
                    <div className='max-h-60 overflow-hidden'>
                        <img src={img2} className='h-full' />
                    </div>
                    <h3 className="my-3 text-3xl font-semibold">Flexible Learning</h3>
                    <div className="space-y-1 leadi">
                        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4  bg-gray-50  rounded-xl max-w-xs">
                    <div className='max-h-60 overflow-hidden'>
                        <img src={img3} className='h-full' />
                    </div>
                    <h3 className="my-3 text-3xl font-semibold">Expert Connect</h3>
                    <div className="space-y-1 leadi">

                        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}