import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const TabNav = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: 'Home',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page!</h2>
          <p className="mb-4">
            We are thrilled to have you here. This page provides an overview of our platform, 
            showcasing the latest updates, news, and features we’ve recently introduced. Whether you're a new visitor 
            or a returning user, there’s always something exciting to discover here.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Latest News: Stay updated with our recent announcements.</li>
            <li>Highlighted Features: Explore our most popular services.</li>
            <li>User Stories: Hear from users who’ve benefited from our platform.</li>
          </ul>
          <p>
            Feel free to explore our other tabs or dive deeper into our offerings by visiting the 
            different sections. Let’s embark on this journey together!
          </p>
        </>
      )
    },
    {
      id: 1,
      label: 'About',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Our company was founded with a vision to provide world-class solutions that address real-world challenges.
            Since our inception in 2020, we have been committed to innovation, excellence, and customer satisfaction.
          </p>
          <p className="mb-4">
            <strong>Our Mission:</strong> To empower businesses and individuals with cutting-edge technology and insights 
            that drive growth and success.
          </p>
          <p className="mb-4">
            <strong>Our Values:</strong> Integrity, innovation, and customer-centricity form the core of our business philosophy. 
            We believe in working collaboratively with our clients to help them achieve their goals.
          </p>
          <p>
            Discover our journey, meet the team behind our success, and learn about the driving force that motivates us to continuously evolve.
          </p>
        </>
      )
    },
    {
      id: 2,
      label: 'Services',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="mb-4">
            We offer a comprehensive range of services tailored to meet the unique needs of our clients. 
            Whether you're looking for consulting, technical solutions, or creative strategies, we have something for everyone.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Business Consulting: Expert advice to help you navigate the complexities of the market.</li>
            <li>Product Development: Customized solutions built to your specifications.</li>
            <li>Marketing Strategies: Innovative approaches to reach and engage your target audience.</li>
          </ul>
          <p>
            Let’s work together to transform your vision into reality. Contact us to learn more about our offerings 
            and how we can collaborate to achieve your goals.
          </p>
        </>
      )
    },
    {
      id: 3,
      label: 'Contact',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            We'd love to hear from you! Whether you have a question, want to inquire about our services, or are interested in a partnership,
            we're here to help.
          </p>
          <p className="mb-4">
            <strong>Email:</strong> <a href="mailto:support@company.com" className="text-blue-600 underline">support@company.com</a>
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="mb-4">
            Follow us on our social media platforms to stay updated with our latest news and announcements:
          </p>
          <ul className="list-disc ml-6">
            <li>Facebook: <a href="https://facebook.com" className="text-blue-600 underline">facebook.com/company</a></li>
            <li>Twitter: <a href="https://twitter.com" className="text-blue-600 underline">twitter.com/company</a></li>
            <li>LinkedIn: <a href="https://linkedin.com" className="text-blue-600 underline">linkedin.com/company</a></li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="container flex flex-col items-center py-8">
      <div className="flex justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 mx-2 text-lg font-medium ${
              activeTab === tab.id ? 'text-white bg-blue-500' : 'text-blue-500'
            } rounded-md transition-colors duration-300 ease-in-out`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white shadow-lg h-[500px] rounded-lg p-6">
        <Transition
          show={activeTab === tabs[activeTab].id}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>{tabs[activeTab].content}</div>
        </Transition>
      </div>
    </div>
  );
};

export default TabNav;
