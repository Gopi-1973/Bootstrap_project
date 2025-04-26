import React from 'react'

const Faqpage = () => {
    return (
        <>
            <h1 className='text-center text-warning mt-4'>Frequently Asked Questions</h1 >
            <p className='text-center text-secondary fw-bold'>(If you have any questions, feel free to check our FAQs below:)</p>
            <div className=' faq-container'>

                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Question-1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et aliquam neque nobis quasi beatae necessitatibus quod. Doloribus, aut quibusdam Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi tincidunt, velit a scelerisque fermentum, eros justo vestibulum justo, et facilisis justo elit eu eros.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Question-2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Answer:2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minima animi eligendi. Est reiciendis delectus nisi accusamus distinctio incidunt quamconsectetur adipisicing elit. Quisquam, doloremque Quisquam, doloremque, nostrum, sed Quisquam, doloremque, nostrum, sed lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Question-3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Answer: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quae quibusdam consequatur at, obcaecati aspernatur blanditiis! Sint fuga quas a et deserunt sequi ut nisi eveniet in provident? Similique, ipsum Quisquam, doloremque, nostrum, sed aliquid qui accusantium.
                            </div>
                        </div>
                    </div>
                </div>

                    <div className='img'>
                        <img src="/images/faq_image.webp" alt="" height="350" width="400"/>
                    </div>
            </div>

        </>
    )
}

export default Faqpage
