'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Video {
  id: string;
  src: string;
  title: string;
}

const videos: Video[] = [
  { id: '1', src: 'https://www.youtube.com/embed/Jwbx5gjUos8?si=KYbhBA76P9xBQbX0', title: 'YouTube video player 1' },
  { id: '2', src: 'https://www.youtube.com/embed/3yoKKKqGqAA?si=yLbyaMHvJ8Ro1Xa8', title: 'YouTube video player 2' },
  { id: '3', src: 'https://www.youtube.com/embed/SLAkZV6mL3E?si=Gj7FMcUHRLb2KKnH', title: 'YouTube video player 3' },
  { id: '4', src: 'https://www.youtube.com/embed/oxgrS13Fb0o?si=gjNRxmTveESoxvJ6', title: 'YouTube video player 4' },
  { id: '5', src: 'https://www.youtube.com/embed/sFCfVHTVoy4?si=JLrDf4Fj3oyrLR0e', title: 'YouTube video player 5' },
  { id: '6', src: 'https://www.youtube.com/embed/WjmfVrdd7dA', title: 'YouTube video player 6' },
  { id: '7', src: 'https://www.youtube.com/embed/2z4UgDQCOhE', title: 'YouTube video player 7' },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const VideoGallery: React.FC = () => {
  const playAudio = () => {
    const audio = new Audio('/sound/click.wav');
    audio.volume = 0.5;
    audio.play();
  };
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([oldPage]) => [oldPage + newDirection, newDirection]);
  };

  const videoIndex = Math.abs(page % videos.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="aspect-w-16 aspect-h-9 w-full h-[600px] flex items-center justify-center"
        >
          <iframe
            src={videos[videoIndex].src}
            title={videos[videoIndex].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
        <button
          onClick={() => {playAudio(); paginate(-1);}}
          className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        >
          {'<'}
        </button>
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
        <button
          onClick={() => {playAudio(); paginate(1);}}
          className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;
