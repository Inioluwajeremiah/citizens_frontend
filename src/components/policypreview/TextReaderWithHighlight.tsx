import React, { useEffect, useRef, useState } from "react";
import playIcon from "../../assets/icons/playicon.svg";
import pauseicon from "../../assets/icons/pauseicon.svg";
import stopicon from "../../assets/icons/stopicon.svg";

interface TextReaderWithHighlightProps {
  text: string;
  playAudioButtonPressed: boolean;
  handleSetPlayAudioButton: () => void;
}
const TextReaderWithHighlight: React.FC<TextReaderWithHighlightProps> = ({
  text,
  playAudioButtonPressed,
  handleSetPlayAudioButton,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  const playText = () => {
    // Initialize the SpeechSynthesisUtterance if not already initialized
    if (!speechSynthesisRef.current) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";

      // Track the current word being spoken
      utterance.onboundary = (event) => {
        if (event.name === "word") {
          const charIndex = event.charIndex;
          const words = text.split(" ");
          const wordIndex = words.findIndex((word) => {
            const start = text.indexOf(word);
            const end = start + word.length;
            return charIndex >= start && charIndex < end;
          });
          setCurrentWordIndex(wordIndex);
        }
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentWordIndex(null); // Reset highlighting when done
      };

      speechSynthesisRef.current = utterance;
    }

    // Start or resume the speech synthesis
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    } else {
      window.speechSynthesis.speak(speechSynthesisRef.current);
    }

    setIsPlaying(true);
  };

  const pauseText = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
      handleSetPlayAudioButton();
    }
  };

  const stopText = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentWordIndex(null); // Reset highlighting when stopped
    speechSynthesisRef.current = null; // Reset speech synthesis
    handleSetPlayAudioButton();
  };

  // Render text with the highlighted word
  const renderedText = text.split(" ").map((word, index) => (
    <span
      key={index}
      style={{
        backgroundColor: index === currentWordIndex ? "yellow" : "transparent",
      }}
    >
      {word}{" "}
    </span>
  ));

  console.log("playAudioButtonPressed ===> ", playAudioButtonPressed);
  console.log("renderedText ===> ", renderedText);

  useEffect(() => {
    if (playAudioButtonPressed === true) {
      playText();
    }
  }, [playAudioButtonPressed]);

  useEffect(() => {
    const insertPolicyContent = document.getElementById(
      "insertPolicyContent"
    ) as HTMLDivElement | null;
    if (insertPolicyContent) {
      // insertPolicyContent.innerText = renderedText;
    }
  });
  return (
    <>
      <div className="w-full flex flex-row items-start justify-between">
        <h1 className="text-2xl md:text-[28px] lg:text-[32px] tracking-[-2.24px] font-medium">
          Introduction
        </h1>
        {/* play audio button   */}
        <button
          className="flex flow-row items-center gap-x-2"
          onClick={playText}
        >
          <img
            src={playIcon}
            alt="citizensrep play converted policy text to audio  button"
            className="h-6 w-6"
          />
          <p className="font-medium text-lg text-primaryColor">Play audio</p>
        </button>

        <button onClick={pauseText} disabled={!isPlaying}>
          <img src={pauseicon} alt="youthtrackit pause audio icon " />
        </button>
        <button onClick={stopText}>
          {" "}
          <img src={stopicon} alt="youthtrackit stop audio icon " />
        </button>
      </div>

      <p id="insertPolicyContent" className="text-sm lg:text-base mt-10">
        {renderedText}
      </p>
    </>
  );
};

export default TextReaderWithHighlight;
