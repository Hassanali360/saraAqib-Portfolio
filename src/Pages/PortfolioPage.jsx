import React, { useState } from 'react';
import isbimg from "../assets/istBimg.JPG"
const SectionBlock = ({ title, children, modalContent, openModal, bgColor = 'bg-blue-500' }) => (
  <div className={`${bgColor} w-full max-w-[600px] rounded-lg flex flex-col justify-between text-white text-xl font-bold p-4 h-[350px]`}>
    <div className="flex flex-col justify-center items-center h-[70%] text-center overflow-hidden">
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-base font-medium line-clamp-6">{children}</p>
    </div>

    {modalContent && openModal && (
      <div className="mt-4 w-full flex justify-center">
        <button
          onClick={() => openModal(title, modalContent)}
          className="px-4 py-4 bg-white text-blue-500 rounded-lg font-bold text-base hover:bg-gray-200 transition"
          aria-label={`Read more about ${title}`}
        >
          More
        </button>
      </div>
    )}
  </div>
);

const VideoCard = ({ title, imageSrc, bgColor = 'bg-blue-500' }) => (
  <div className={`${bgColor} w-full max-w-[600px] h-[250px] sm:h-[300px] md:h-[350px] rounded-lg flex items-center justify-center overflow-hidden`}>
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
);


const PortfolioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
    setModalTitle('');
  };

  const sections = [
    {
      title: 'Of healing and not giving up',
      preview: `The book’s cover caught my eye, and I couldn’t resist the blurb. I began to read the preface and lingered on the first passage for a long time. It felt comforting and magical...`,
      modalContent: `The book’s cover caught my eye, and I couldn’t resist the blurb. I began to read the preface and lingered on the first passage for a long time. It felt comforting and magical, I didn’t want to read further. I was afraid to spoil that feeling. 

I had survived a long pause in my life between Thanksgiving 2020, and new year’s eve. I couldn’t seem to think which of the past events haunted me more. The place in Knoxville, we called home, no longer seemed familiar, as if I was in a lonely prison on an alien planet. Every time I stepped outside, a flashback froze my heart.

Dah… A woman was name calling and screaming at me.

Dah… An imaginary silhouette was breaking into my car and rifling through my favorite possessions.

Dah… I was unable to move and a cop was asking about the accident. Someone was telling me that we were safe.

But were we really? Isn’t there someone out there waiting to stab us? Isn’t someone waiting to break into my home the moment I stepped out? Wouldn’t people feed on my misery? No sir, I better be home, I want to be safe, and warm.

March arrived and brought a warmer breeze, blossoms unfurling like little sparks of hope. Washing away the cold, the Tennessee river’s waves shimmered yet again under the bright sunlight. ‘Do you want to come for a walk in Sequoyah hills?’, he asked one afternoon. I hesitated as always but went for his sake. We posed beneath pink cherry blossoms, swung gently in the hammock by the lake. I remembered I used to read. I picked up the book as soon as we came home. I did nothing that day but read. I realized I needed it now, more than ever.

And that’s how it started. I was being introduced to January, a curious 7 years old girl who stumbled upon a mysterious blue door in Kentucky, right at the edge of Mississippi. She turned the knob and stepped into another world - a city that smelled like cider. Each new street felt safe, quiet. Don’t we all long for places like that when the world feels hostile? Hogwarts’ lush green grounds where owl’s wander freely, or Narnia’s secret wardrobe where you could create a new reality —fantasy worlds where we slip away from our fears.

The next day I carried the book with me to the park, forgetting that I was supposed to be in my room hiding from the world. It became a habit, I was back into the pleasure of reading, my safe space. Books are magic.

Having a bad day? Read
Feeling good? Read
Need comfort? Read
Need escape? Read

Just like January did when her foster-father Mr. Locke found out about the door and burned her pocket diary - locking her in the house. She lost touch with her real father Julian and turned into a quiet, obedient teenager. She still managed to sneak short stories from Samuel, a grocer boy. One afternoon, she found an old book in her chest and let herself wander into the magical story of Adelaide, a fearless woman sailing from New Orleans on a handcrafted ship.

While Adelaide breaks all the rules and travels to new places - sailing a hand-crafted rugged ship and finding the new doors, January finds herself even more helpless - caged into Locke’s house.

She reminds me of myself, dreaming a better life yet not ready to let go of my comfort zone. 
On her seventeenth birthday, January’s world cracked open. She’s told that her father is dead, regret of not having said a proper goodbye haunts her. That night, she forgoes her comfort. 

January plans her escape and endures extensive labor to finance her travel. As you read, you will see her growing into a strong girl, making her own paths, working long hours and fighting all odds, finding and opening new doors. She keeps running, sneaking into new worlds, until she finds her parents and until she comes back to her blue door that her seven-year-old self had opened. Betrayals are stronger than a heartbreak you see. And so are the powerful words and magical stories, like this one by Alex Harrow.

I am turning the last pages, thinking of all the good and bad days it took me through, all those times when I shared my happy memories with this book, and all those moments it seeded comfort in me when I was sad.

My flashbacks no longer disturb me. I see the woman who emotionally abused me- marching out in disappointment, the silhouette fleeing into darkness, the swiveling car holding back its ground. I remember that we are together - my husband and I. And that we are safe, at a place in Knoxville that indeed is our home.

To the magical door that whispers of endless possibilities.
To the family who stands by me in despair.
To the books that never let me down.
And to myself—for not giving up.`,
      bgColor: 'bg-blue-500',
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full bg-secondary px-5 py-5 mt-3 rounded-xl rounded-br-[100px]">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4 mt-5 text-center">My Portfolio</h1>
        <p className="text-base sm:text-lg mb-8 text-center font-medium rounded-br-3xl">
          Results-driven energy professional with expertise in building energy efficiency, decarbonization, and thermal energy storage...
        </p>
      </div>

      <div className="py-8">
        <h3 className="text-2xl sm:text-3xl text-center py-8 text-accent font-extrabold">International Living</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          {sections.map((section, index) => (
            <SectionBlock
              key={index}
              title={section.title}
              modalContent={section.modalContent}
              openModal={openModal}
              bgColor={section.bgColor}
            >
              {section.preview}
            </SectionBlock>
          ))}
          <VideoCard
  title="Living in Japan"
  imageSrc={isbimg}
  bgColor="bg-blue-500"
/>

        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-4xl h-[80vh] rounded-lg p-6 overflow-y-auto relative transform transition-transform duration-300 ease-in-out scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-2xl font-bold text-gray-800 hover:text-gray-600"
            >
              &times;
            </button>
            <h4 id="modal-title" className="text-2xl font-bold mb-4 text-blue-500">{modalTitle}</h4>
            <p className="text-base font-medium text-gray-800 whitespace-pre-wrap">{modalContent}</p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center mt-2">
        <a href="/downloads/My-Guide.pdf" download="My-Guide.pdf" rel="noopener noreferrer">
          <button className="px-[35px] py-2 bg-primary text-white rounded-lg font-bold text-[20px] hover:bg-slate-400">
            Download My Guide
          </button>
        </a>
      </div>

      <div className="py-8">
        <h3 className="text-2xl sm:text-3xl text-center py-8 text-accent font-extrabold">Hobbies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <SectionBlock title="Photography" bgColor="bg-green-500">
            Passionate about capturing moments through a lens.
          </SectionBlock>
          <VideoCard
            title="Photography Hobby"
            videoUrl="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
            bgColor="bg-green-500"
          />
        </div>
      </div>

      <div className="py-8">
        <h3 className="text-2xl sm:text-3xl text-center py-8 text-accent font-extrabold">Self Discoveries</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <SectionBlock title="Overcoming Fear" bgColor="bg-red-500">
            Learning to face challenges and grow stronger.
          </SectionBlock>
          <VideoCard
            title="Overcoming Fear"
            videoUrl="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
            bgColor="bg-red-500"
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-2 mb-5">
        <a href="#" rel="noopener noreferrer">
          <button className="px-[35px] py-2 bg-primary text-white rounded-lg font-bold text-[20px] hover:bg-slate-400">
            Subscribe To My Newsletter
          </button>
        </a>
      </div>
    </div>
  );
};

export default PortfolioPage;
