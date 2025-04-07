import { useMemo, useRef, useEffect } from 'react';

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  const colors = ['green', 'pink', 'yellow', 'orange', 'blue'];

  const quotes = [
    { text: '"QuoteMe changed the way I start my mornings — now I’m greeted with purpose."', author: '— Chloe Bennett' },
    { text: '"I love being able to customize my own motivational quotes. No more cookie-cutter apps!"', author: '— Marcus Reed' },
    { text: '"I actually look forward to unlocking my phone now. It’s like a little dose of wisdom every time."', author: '— Sierra James' },
    { text: '"Clean, simple, and powerful. Just what I needed."', author: '— Jordan Lee' },
    { text: '"It’s my favorite way to stay inspired without distractions or ads."', author: '— Alex Nguyen' },
    { text: '"I’ve recommended QuoteMe to my entire team. It’s that good."', author: '— Priya Patel' },
    { text: '"I never realized how much I needed this app until I started using it."', author: '— Eli Martinez' },
    { text: '"It’s not just inspirational — it’s deeply personal. Love it."', author: '— Naomi Clark' },
    { text: '"The design is stunning, and the quotes keep me grounded."', author: '— Jamie Rivera' },
    { text: '"QuoteMe is the best part of my home screen."', author: '— Logan Kim' }
  ];

  const shuffleArray = (arr) =>
    arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

  const colorSpread = useMemo(() => {
    const shuffledQuotes = shuffleArray(quotes);
    const shuffledColors = shuffleArray([...colors, ...colors]);
    return shuffledQuotes.map((q, i) => ({
      ...q,
      color: shuffledColors[i % shuffledColors.length]
    }));
  }, []);

  const topRow = colorSpread.slice(0, 5);
  const bottomRow = colorSpread.slice(5, 10);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;
  
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;
    let animationId = null;
    let autoScrollPaused = false;
  
    const autoScroll = () => {
      if (autoScrollPaused) return;
  
      scroll.scrollLeft += 0.5;
  
      if (scroll.scrollLeft >= scroll.scrollWidth / 2) {
        scroll.scrollLeft = 0;
      }
  
      animationId = requestAnimationFrame(autoScroll);
    };
  
    const startAutoScroll = () => {
      if (!animationId) {
        autoScrollPaused = false;
        animationId = requestAnimationFrame(autoScroll);
      }
    };
  
    const stopAutoScroll = () => {
      autoScrollPaused = true;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };
  
    // Start scrolling initially
    startAutoScroll();
  
    // Drag events
    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - scroll.offsetLeft;
      scrollStart = scroll.scrollLeft;
      scroll.classList.add('grabbing');
      stopAutoScroll();
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - scroll.offsetLeft;
      const walk = x - startX;
      scroll.scrollLeft = scrollStart - walk;
    };
  
    const endDragging = () => {
      if (!isDragging) return;
      isDragging = false;
      scroll.classList.remove('grabbing');
      startAutoScroll();
    };
  
    // Add listeners
    scroll.addEventListener('mousedown', handleMouseDown);
    scroll.addEventListener('mousemove', handleMouseMove);
    scroll.addEventListener('mouseup', endDragging);
    scroll.addEventListener('mouseleave', endDragging);
  
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      scroll.removeEventListener('mousedown', handleMouseDown);
      scroll.removeEventListener('mousemove', handleMouseMove);
      scroll.removeEventListener('mouseup', endDragging);
      scroll.removeEventListener('mouseleave', endDragging);
    };
  }, []);
   


  return (
    <section className="testimonials">
      <h3>Testimonials</h3>

      <div className="testimonial-scroll" ref={scrollRef}>
        <div className="testimonial-wrapper">
          {/* Repeat each row twice for looping */}
          {[...Array(2)].map((_, repeatIndex) => (
            <div key={repeatIndex} className="testimonial-rows">
              <div className="testimonial-grid row-top">
                {topRow.map((q, i) => (
                  <div key={`${repeatIndex}-top-${i}`} className={`testimonial ${q.color}`}>
                    <p>{q.text}</p>
                    <p className="author">{q.author}</p>
                  </div>
                ))}
              </div>
              <div className="testimonial-grid row-bottom">
                {bottomRow.map((q, i) => (
                  <div key={`${repeatIndex}-bot-${i}`} className={`testimonial ${q.color}`}>
                    <p>{q.text}</p>
                    <p className="author">{q.author}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
