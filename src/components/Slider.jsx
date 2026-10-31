import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';

export function useCarouselAutoplay(advance, { paused = false, interval = 2000 } = {}) {
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timer = window.setInterval(() => {
      if (!document.hidden) advance();
    }, interval);
    return () => window.clearInterval(timer);
  }, [advance, interval, paused]);
}

export function HeroCarousel({ slides, mobile_slides, label = 'Featured images', className = '', hideControls = false, onActiveSlideChange }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const advance = useCallback(
    () => setActiveSlide((current) => (current + 1) % slides.length),
    [slides.length],
  );
  const go = (direction) => setActiveSlide((current) => (current + direction + slides.length) % slides.length);

  useCarouselAutoplay(advance, { paused: isPaused || slides.length < 2, interval: 3000 });
  useEffect(() => {
    onActiveSlideChange?.(activeSlide);
  }, [activeSlide, onActiveSlideChange]);

  return (
    <div
      className={`hero-carousel ${className}`}
      data-active-slide={activeSlide}
      role="region"
      aria-label={label}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="hero-carousel-images" aria-live="polite">
        {slides.map((slide, index) => {
          const image = (
            <img
              key={slide.src}
              className={`hero-carousel-image${index === activeSlide ? ' is-active' : ''}`}
              src={slide.src}
              alt={index === activeSlide ? slide.alt || '' : ''}
              aria-hidden={index !== activeSlide}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          );

          return slide.tabletSrc || slide.mobileSrc ? (
            <picture key={slide.src}>
              {slide.mobileSrc && <source media="(max-width: 680px)" srcSet={slide.mobileSrc} />}
              {slide.tabletSrc && <source media="(max-width: 980px)" srcSet={slide.tabletSrc} />}
              {image}
            </picture>
          ) : (
            image
          );
        })}
      </div>
      
      {!hideControls && (
        <button
          className="hero-carousel-arrow hero-carousel-prev"
          type="button"
          aria-label="Previous hero image"
          onClick={() => go(-1)}
        >
          <Icon name="ChevronLeft" size={22} />
        </button>
      )}
      {!hideControls && (
        <div className="hero-carousel-pagination" role="group" aria-label="Choose hero image">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              className={`hero-carousel-dot${index === activeSlide ? ' is-active' : ''}`}
              type="button"
              aria-label={`Show hero image ${index + 1}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              onClick={() => setActiveSlide(index)}
            >
            </button>
          ))}
        </div>
      )}
      {!hideControls && (
        <button
          className="hero-carousel-arrow hero-carousel-next"
          type="button"
          aria-label="Next hero image"
          onClick={() => go(1)}
        >
          <Icon name="ChevronRight" size={22} />
        </button>
      )}
    </div>
  );
}

// Tesla City: sliding window of images with dots.
export function WindowSlider({ images, hoverImages = [], alts = [] }) {
  const [i, setI] = useState(images.length > 1 ? 1 : 0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef(null);
  const max = Math.max(0, images.length - 1);

  useEffect(() => {
    setI(images.length > 1 ? 1 : 0);
  }, [images.length]);

  const advance = useCallback(() => setI((current) => current + 1), []);
  const go = (direction) => {
    if (images.length < 2) return;
    setI((current) => Math.max(0, Math.min(images.length + 1, current + direction)));
  };
  useCarouselAutoplay(advance, { paused: isPaused || max === 0, interval: 3000 });
  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;
    if (i !== 0 && i !== images.length + 1) return;

    setIsTransitioning(false);
    setI(i === 0 ? images.length : 1);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
  };
  const handleTouchStart = (event) => {
    touchStart.current = event.changedTouches[0].clientX;
  };
  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 40) go(distance < 0 ? 1 : -1);
    touchStart.current = null;
  };

  return (
    <div
      className="wslider"
      role="region"
      aria-label="Tesla City image gallery"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="ws-viewport" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div
          className={`ws-track${isTransitioning ? '' : ' is-snapping'}`}
          style={{ '--i': i }}
          onTransitionEnd={handleTransitionEnd}
        >
          {(images.length > 1 ? [images[max], ...images, images[0]] : images).map((src, trackIndex) => {
            const imageIndex = images.length > 1
              ? (trackIndex === 0 ? max : trackIndex === images.length + 1 ? 0 : trackIndex - 1)
              : trackIndex;
            return (
              <div className="ws-slide" key={`${trackIndex}-${src}`}>
                <img src={src} alt={alts[imageIndex] || `Gallery image ${imageIndex + 1}`} loading="lazy" />
                {hoverImages[imageIndex] && (
                  <img className="ws-image-hover" src={hoverImages[imageIndex]} alt="" aria-hidden="true" loading="lazy" />
                )}
              </div>
            );
          })}
        </div>
        {images.length > 1 && (
          <>
            <button className="ws-arrow ws-arrow-prev" type="button" aria-label="Previous images" onClick={() => go(-1)}>
              <Icon name="ChevronLeft" size={22} />
            </button>
            <button className="ws-arrow ws-arrow-next" type="button" aria-label="Next images" onClick={() => go(1)}>
              <Icon name="ChevronRight" size={22} />
            </button>
          </>
        )}
      </div>
      <div className="dots" role="group" aria-label="Choose image slide">
        {Array.from({ length: max + 1 }).map((_, n) => (
          <button key={n} type="button" className={n === (i - 1 + images.length) % images.length ? 'on' : ''} aria-label={`Show slide ${n + 1}`} aria-current={n === (i - 1 + images.length) % images.length ? 'true' : undefined} onClick={() => setI(n + 1)} />
        ))}
      </div>
    </div>
  );
}

// Completed project: big image + thumbnails with arrows.
export function ThumbGallery({ images, alt }) {
  const [i, setI] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef(null);
  const go = (d) => setI((current) => (current + d + images.length) % images.length);
  const advance = useCallback(() => setI((current) => (current + 1) % images.length), [images.length]);
  useCarouselAutoplay(advance, { paused: isPaused || images.length < 2 });
  const handleTouchStart = (event) => {
    touchStart.current = event.changedTouches[0].clientX;
  };
  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 40) go(distance < 0 ? 1 : -1);
    touchStart.current = null;
  };
  return (
    <div
      className="tgallery"
      role="region"
      aria-label={`${alt} image gallery`}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="tg-main" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <img key={images[i]} src={images[i]} alt={`${alt} – photo ${i + 1}`} />
      </div>
      <div className="tg-bar">
        <button className="arrow" aria-label="Previous photo" onClick={() => go(-1)}><Icon name="ChevronLeft" size={20} /></button>
        <div className="tg-thumbs">
          {images.map((src, n) => (
            <button key={src} className={n === i ? 'on' : ''} onClick={() => setI(n)} aria-label={`Show photo ${n + 1}`}>
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
        <button className="arrow" aria-label="Next photo" onClick={() => go(1)}><Icon name="ChevronRight" size={20} /></button>
      </div>
    </div>
  );
}
