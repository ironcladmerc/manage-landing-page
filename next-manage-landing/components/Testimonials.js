import { useState, useEffect, useCallback } from "react"
import { DotButton } from "./EmblaCarouselButtons"
import useEmblaCarousel from "embla-carousel-react"

const Testimonials = ({ slides }) => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])
    const scrollTo = useCallback(
        (index) => embla && embla.scrollTo(index),
        [embla]
    )

    const onSelect = useCallback(() => {
        if (!embla) return
        setSelectedIndex(embla.selectedScrollSnap())
    }, [embla, setSelectedIndex])

    useEffect(() => {
        if (!embla) return
        onSelect()
        setScrollSnaps(embla.scrollSnapList())
        embla.on("select", onSelect)
    }, [embla, setScrollSnaps, onSelect])

    return (
        <section id="testimonials">
            {/* <!-- Container to heading and testimonial blocks --> */}
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                {/* <!-- Heading --> */}
                <h2 className="text-4xl font-bold text-center">
                    What they've said
                </h2>
                {/* <!-- Testimonials Container --> */}
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div id="emblawrapper" className="embla">
                        <div className="embla__viewport" ref={viewportRef}>
                            <div className="embla__container">
                                {/* <!-- Testimonial #1 --> */}
                                <div className="embla__slide">
                                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
                                        <img
                                            src="avatar-anisha.png"
                                            className="w-16"
                                            alt=""
                                        />
                                        <h5 className="text-lg font-bold">
                                            Anisha Li
                                        </h5>
                                        <p className="text-sm text-darkGrayishBlue">
                                            “Manage has supercharged our team’s
                                            workflow. The ability to maintain
                                            visibility on larger milestones at
                                            all times keeps everyone motivated.”
                                        </p>
                                    </div>
                                </div>
                                <div className="embla__slide">
                                    {/* <!-- Testimonial #2 --> */}
                                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
                                        <img
                                            src="avatar-ali.png"
                                            className="w-16"
                                            alt=""
                                        />
                                        <h5 className="text-lg font-bold">
                                            Ali Bravo
                                        </h5>
                                        <p className="text-sm text-darkGrayishBlue">
                                            “We have been able to cancel so many
                                            other subscriptions since using
                                            Manage. There is no more
                                            cross-channel confusion and everyone
                                            is much more focused.”
                                        </p>
                                    </div>
                                </div>
                                <div className="embla__slide">
                                    {/* <!-- Testimonial #3 --> */}
                                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
                                        <img
                                            src="avatar-richard.png"
                                            className="w-16"
                                            alt=""
                                        />
                                        <h5 className="text-lg font-bold">
                                            Richard Watts
                                        </h5>
                                        <p className="text-sm text-darkGrayishBlue">
                                            “Manage allows us to provide
                                            structure and process. It keeps us
                                            organized and focused. I can’t stop
                                            recommending them to everyone I talk
                                            to!”
                                        </p>
                                    </div>
                                </div>
                                <div className="embla__slide">
                                    {/* <!-- Testimonial #4 --> */}
                                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
                                        <img
                                            src="avatar-shanai.png"
                                            className="w-16"
                                            alt=""
                                        />
                                        <h5 className="text-lg font-bold">
                                            Shanai Gough
                                        </h5>
                                        <p className="text-sm text-darkGrayishBlue">
                                            “Their software allows us to track,
                                            manage and collaborate on our
                                            projects from anywhere. It keeps the
                                            whole team in-sync without being
                                            intrusive.”
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Dots --> */}
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
                {/* <!-- Button --> */}
                <div className="my-16">
                    {/* <!-- Button --> */}
                    <a
                        href="#"
                        className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full align-baseline hover:bg-brightRedLight"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
