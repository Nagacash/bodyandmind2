import React from 'react';

const KontaktPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
      <p className="text-lg mb-4">Hier können Sie uns kontaktieren.</p>
      <div className="prose lg:prose-xl">
        <p>Bitte füllen Sie das untenstehende Formular aus oder kontaktieren Sie uns direkt.</p>
        <ul>
          <li>Email: <a href="mailto:kontakt@nataliezimmermann.de">kontakt@nataliezimmermann.de</a></li>
          <li>Telefon: +49 123 456789</li>
          <li>Website: <a href="https://www.nataliezimmermann.de" target="_blank" rel="noopener noreferrer">www.nataliezimmermann.de</a></li>
        </ul>
        {/* Placeholder for a contact form */}
        <div className="mt-8 p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Kontaktformular</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Nachricht:</label>
              <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Senden</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;
