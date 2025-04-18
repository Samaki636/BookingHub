import React from 'react';

const HomePage = () => {
    return (
        <div className="App bg-gray-900 text-white">
            <main className="p-4">
                <section id="home" className="my-8">
                    <h2 className="text-2xl font-semibold">Welcome to Booking Hub</h2>
                    <p>Book conference rooms and meeting spaces easily and quickly.</p>
                </section>
                
                <section id="features" className="my-8">
                    <h2 className="text-2xl font-semibold">Our Features</h2>
                    <ul className="list-disc list-inside">
                    <li>Real-time availability</li>
                    <li>Easy booking process</li>
                    <li>Various room capacities</li>
                    <li>Audio-visual equipment</li>
                    <li>Catering services</li>
                    </ul>
                </section>
                
                <section id="contact" className="my-8">
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <p>For any inquiries, please contact us at <a href="mailto:info@bookinghub.com" className="text-blue-400 hover:underline">info@bookinghub.com</a>.</p>
                </section>
            </main>
        </div>
    );
}

export default HomePage;
