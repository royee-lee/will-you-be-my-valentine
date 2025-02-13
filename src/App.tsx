'use client';
import { useState } from 'react';
import me from './me.png';
import us from './us.png';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      'No',
      'Are you sureee?',
      'Pretty please pooo',
      'I will take you to a nice place thoooo :(',
      'I will buy you yummy bbt',
      'What about a matcha latte instead',
      'or snackies',
      'PLEASE POOOOOOO',
      'But :(',
      'I am going to die',
      'Okayy im dead',
      "Now talking to poo poo's ghost",
      'please poooo',
      ':((((',
      'we could cuddle....(?)',
      'mwa mwa mwa I give kisses',
      "Don't be meannn",
      'Well I have already bought you bbt',
      'Say yes :c',
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">YAYYYYYY!!! I love you poooo mwa mwa mwa</div>
          <img className="h-[200px]" src={us} />
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Hi my love will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? 'No' : getNoButtonText()}
            </button>
          </div>
          <img className="h-[200px]" src={me} />
        </>
      )}
    </div>
  );
}
