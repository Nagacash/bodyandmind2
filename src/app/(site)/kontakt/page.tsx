'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const KontaktPage = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to('.contact-form-container', { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power4.out' 
    });
    
    tl.to('.form-group', { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.5 
    }, '-=0.4');
    
    tl.to('.form-actions', { 
        opacity: 1, 
        y: 0, 
        duration: 0.5 
    }, '-=0.2');
    
    const inputs = document.querySelectorAll('.form-control');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, { 
                borderColor: '#ff3e79', 
                duration: 0.3 
            });
        });
        
        input.addEventListener('blur', () => {
            if (!(input as HTMLInputElement).value) {
                gsap.to(input, { 
                    borderColor: '#555', 
                    duration: 0.3 
                });
            }
        });
    });
    
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { 
                scale: 1.05, 
                duration: 0.3 
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { 
                scale: 1, 
                duration: 0.3 
            });
        });
    });
    
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('name') as HTMLInputElement;
            const emailInput = document.getElementById('email') as HTMLInputElement;
            const messageInput = document.getElementById('message') as HTMLTextAreaElement;

            const name = nameInput ? nameInput.value : '';
            const email = emailInput ? emailInput.value : '';
            const message = messageInput ? messageInput.value : '';

            const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nNachricht:\n${message}`);

            window.location.href = `mailto:kontakt@nataliezimmermann.de?subject=${subject}&body=${body}`;
        });
    }
  }, []);

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-center mb-2">
        <h1 className="text-4xl font-bold text-black text-center mr-4">Kontakt</h1>
        <Image 
          src="/images/icons/icon-bag.svg" 
          alt="Shopping Bag Icon" 
          width={40} 
          height={40} 
        />
      </div>
      <p className="text-lg mb-6 relative inline-block text-black text-center w-full">Hier können Sie uns kontaktieren.</p>
      
      <div className="text-black mb-8 text-center">
        <p className="mb-4">Bitte füllen Sie das untenstehende Formular aus oder kontaktieren Sie uns direkt.</p>
        <ul className="list-disc list-inside ml-4 inline-block text-left">
          <li>Email: <a href="mailto:kontakt@nataliezimmermann.de" className="text-pink-600 hover:underline">kontakt@nataliezimmermann.de</a></li>
          <li>Telefon: <span className="text-pink-600">+49 123 456789</span></li>
          <li>Website: <a href="https://www.nataliezimmermann.de" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">www.nataliezimmermann.de</a></li>
        </ul>
      </div>

      <div className="contact-form-container bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto opacity-0 transform translate-y-12 will-change-transform-opacity">
        <h3 className="text-2xl font-semibold mb-4 text-white">Kontaktformular</h3>
        <form id="contactForm">
          <div className="form-group mb-4 opacity-0 transform translate-y-12 will-change-transform-opacity">
            <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" className="form-control shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="form-group mb-4 opacity-0 transform translate-y-12 will-change-transform-opacity">
            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="form-control shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="form-group mb-6 opacity-0 transform translate-y-12 will-change-transform-opacity">
            <label htmlFor="message" className="block text-gray-400 text-sm font-bold mb-2">Nachricht:</label>
            <textarea id="message" name="message" rows={5} className="form-control shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="form-actions opacity-0 transform translate-y-12 will-change-transform-opacity">
            <button type="submit" className="btn bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Senden</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KontaktPage;