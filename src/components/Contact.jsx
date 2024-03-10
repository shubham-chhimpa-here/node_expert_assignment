export default function Contact() {
    return <>
        <section className="py-2 bg-blue-600 text-gray-900 rounded-lg max-w-4xl m-auto">
            <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                <div className="flex flex-col space-y-4 text-center lg:text-left">
                    <h1 className="text-3xl font-semibold text-gray-50 leadi">Contact Us!</h1>
                    <p className="text-lg text-gray-50">There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</p>
                </div>
                <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="button" className="w-2/5 p-3 font-semibold   rounded-lg sm:w-1/3 bg-violet-600 text-gray-50">Send</button>
                    </div>
                </div>
            </div>
        </section>
    </>
}