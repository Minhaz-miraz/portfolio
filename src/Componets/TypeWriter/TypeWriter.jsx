import React, { useState, useEffect } from 'react';

const TypeWriter = () => {
  const lines = [
    'Crafting exceptional web experiences with MERN STACK',
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const typingSpeed = 70; // slightly faster
  const lineDelay = 600;

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;
    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const t = setTimeout(() => {
        setCurrentText((prev) => prev + currentLine[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      if (currentLineIndex < lines.length - 1) {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentText((prev) => prev + '\n');
        setCurrentCharIndex(0);
      }
    }, lineDelay);
    return () => clearTimeout(t);
  }, [currentCharIndex, currentLineIndex, lines]);

  return (
    <div className="max-w-4xl w-full">
      <div className="font-mono text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed">
        <pre className="whitespace-pre-wrap text-[#d9ed92] break-words">
          {currentText.split('\n').map((line, index) => (
            <div key={index} className="min-h-[1em] pr-4 sm:pr-8">
              {line}
              {index === currentLineIndex && (
                <span
                  className={`inline-block align-[-0.2em] w-[2px] h-[1.2em] bg-[#d9ed92] ml-1 ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-100`}
                />
              )}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default TypeWriter;
