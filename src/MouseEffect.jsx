import { useEffect, useRef, useState } from "react";

function MouseEffect() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const trailRef = useRef(null);
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", handleMouseMove);

  let animationId;

  const animate = () => {
    trailPos.current.x += (mouse.x - trailPos.current.x) * 0.08;
    trailPos.current.y += (mouse.y - trailPos.current.y) * 0.08;

    if (trailRef.current) {
      trailRef.current.style.transform =
        `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
    }

    animationId = requestAnimationFrame(animate);
  };

  animate();

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    cancelAnimationFrame(animationId);
  };
}, []);

  return (
    <>
      <div
        className="
          fixed top-0 left-0 z-9999
          w-3 h-3 rounded-full
          bg-cyan-400
          pointer-events-none
          shadow-[0_0_15px_rgba(34,211,238,0.9)]
        "
        style={{
          transform: `translate(${mouse.x}px, ${mouse.y}px)`
        }}
      />
      <div
        ref={trailRef}
        className="
          fixed top-0 left-0 z-9998
          w-8 h-8 rounded-full
          bg-cyan-400/20
          blur-lg
          pointer-events-none
        " 
      />
    </>
  );
}

export default MouseEffect;
