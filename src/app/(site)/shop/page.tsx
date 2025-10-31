"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ShopProductSkeleton from '../../components/Skeleton/ShopProduct';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  link: string;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));

      const dummyProducts = [
        {
          id: 1,
          name: "Back Tape Rücken Basic-Set",
          price: "98,00 €",
          description: "Aktivieren und beleben Sie Ihren Rücken! Begradigen Sie das Becken mit dem zugelassen Medizinprodukt Back-Tape. Die Anwendung des Back-Tap ruft durch Energieschwingungen auf die Vitalisierung eine Ausrichtung des Beckens hervor, die sich wiederum positiv auf die Wirbelsäule auswirken kann.",
          image: "/images/shop/tape7.png",
          link: "https://new-generation-bio.com/jtl/Back-Tape-Ruecken-Vitalisierung"
        },
        {
          id: 2,
          name: "Men's Health + Women's Health - Mindset der Champions",
          price: "24,90 €",
          description: "Als Leistungssportlerin bin ich durch viele Höhen und Tiefen. Es ist die Einstellung zu den Geschehnissen, die den Unterschied machen. Wie ein Champion denkt und fühlt kann jeder lernen. Ich zeig Dir wie",
          image: "/images/shop/boxa9.jpg",
          link: "https://www.amazon.de/-/en/Mens-Health-Womens-Erfolgsgeheimnisse-Box-Weltmeisterin/dp/3613509911/ref=sr_1_1?crid=2SE9AXYVFIL9S&dib=eyJ2IjoiMSJ9.1nanqQDcMcQOEAm1yex9hYgD8iEfspOrwJIxmz5BEixNe2pmHjbM3CTMtb87PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88lHM7B6sc17wZ8Fr1M1bRUeylfRXBUTvVW2IxfcU5TO8hfmUtTe8eYe6KnjB9Qit6EoDVuACRqN6ybgVqY_I4oW2ET3Z-LAXYkgbAis9ST6CWM6mg7yPYpYf9HJYz6pAmCsY0.i6xWYFHqVEIkyMPtv-WUGjgftIhhD3mRo8_REVL0tg&dib_tag=se&keywords=natalie+zimmermann&qid=1761492965&sprefix=natalie+zim%2Caps%2C166&sr=8-1"
        }
      ];
      setProducts(dummyProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Shop!</h1>
      <h2 className="text-lg mb-24 text-center">Entdecken Sie unsere hochwertigen Produkte für Ihr Wohlbefinden.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          Array.from({ length: 2 }).map((_, index) => (
            <ShopProductSkeleton key={index} />
          ))
        ) : (
          products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
              <div>
                <div className="relative w-full h-64 mb-4">
                  <Image src={product.image} alt={product.name} fill className="object-contain" />
                </div>
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-black font-bold mt-2">{product.price}</p>
                <p className="text-gray-700 mt-2">{product.description}</p>
              </div>
              <Link href={product.link} target="_blank" rel="noopener noreferrer" className="mt-4 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded inline-block">
                Jetzt kaufen
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopPage;