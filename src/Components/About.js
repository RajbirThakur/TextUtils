import React from 'react'

export default function About() {
    return (
        <div className='container'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Analyze your text
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            In today's fast-paced digital world, having the right tools to analyze and optimize text is crucial.<strong> Our platform is designed to provide users with a seamless and effective way to gain insights into their written content</strong>. Whether you're a student aiming to perfect an essay, a professional drafting a report, or someone looking to clean up and analyze casual text, our tool is here to assist.

                            With just a few clicks, you can explore various aspects of your text, such as word count, readability, character analysis, and even identify repetitive phrases or potential improvements. The intuitive interface ensures that even users with minimal technical experience can navigate and use the features effortlessly.

                            Our tool also caters to different needs, whether you are looking to create concise summaries, identify key points, or enhance the overall structure of your content. It's more than just a basic utility—it's your partner in improving communication. Explore the full potential of your text and take your writing to the next level with our easy-to-use platform.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            Why pay for something that should be accessible to all? <strong>Our platform is completely free to use, breaking down barriers and making advanced text analysis available to everyone</strong> Whether you're an occasional user or someone who relies on this tool daily, you wont face any costs, hidden fees, or restrictions.

                            We believe that knowledge and productivity tools should be accessible regardless of your budget. That's why our service is designed to provide all features—word count, readability metrics, and other essential tools—without requiring sign-ups, trials, or subscriptions.

                            In a world where premium services often come with hefty price tags, we stand by our commitment to free access. You don’t need to compromise on quality or features when using our platform. Its built to empower users, offering them the tools they need to excel in their writing and analysis, without any financial constraints.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Browser compatible
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>No matter which browser you use, our platform is built to work seamlessly</strong> Whether you prefer Chrome, Firefox, Safari, or Edge, you can trust that our tool will perform reliably and consistently. This compatibility ensures you can focus on your text analysis without worrying about technical hiccups or errors.

                            Our responsive design ensures that the tool adapts perfectly to any screen size. Whether you're using a desktop, laptop, tablet, or smartphone, the user interface remains intuitive and efficient. You can switch between devices without losing access to your text or its analysis, making it a perfect solution for people on the go.

                            This cross-browser and cross-device compatibility make our tool a trusted companion for students, professionals, and anyone else looking to analyze their text efficiently. Forget about software installations or specific device requirements—access our tool anytime, anywhere, and from any browser.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
