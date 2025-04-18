import React from 'react';

const AboutPage = () => {
  return (
    <div className="App bg-gray-900 text-white">      
      <main className="p-4">
        <section id="about" className="my-8">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p>Welcome to Booking Hub, your go-to solution for booking conference rooms and meeting spaces. Our mission is to provide a seamless and efficient booking experience for all your event needs.</p>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Our Story</h3>
            <p>Founded in 2025, Booking Hub was created to address the growing demand for flexible and well-equipped meeting spaces. We offer a variety of rooms with different capacities, equipped with state-of-the-art audiovisual equipment and catering services.</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Our Team</h3>
            <p>Our dedicated team is committed to ensuring that your booking experience is smooth and hassle-free. We are here to assist you with any inquiries and provide support throughout your event planning process.</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Our Values</h3>
            <ul className="list-disc list-inside">
              <li>Customer Satisfaction</li>
              <li>Innovation</li>
              <li>Reliability</li>
              <li>Flexibility</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
