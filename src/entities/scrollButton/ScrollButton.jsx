import { useEffect, useState } from 'react';
import './scrollButton.scss';
import scrollButton from './ScrollButton.svg';

export function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`scroll-btn ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <img src={scrollButton} alt="Scroll to top" />
    </div>
  );
}