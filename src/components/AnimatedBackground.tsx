import React, {useRef, useEffect} from 'react';

const COLORS = [
  'rgba(173, 216, 230, 0.35)', // light blue
  'rgba(179, 229, 252, 0.25)', // lighter blue
  'rgba(255, 182, 193, 0.22)', // light pink
  'rgba(221, 160, 221, 0.18)', // light purple
  'rgba(224, 247, 250, 0.30)' // very light blue
];
const SHAPE_COUNT = 75; // fewer shapes overall
const MIN_RADIUS = 18;
const MAX_RADIUS = 48;
const MIN_SPEED = 0.5;
const MAX_SPEED = 1;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface Shape {
  x: number;
  y: number;
  r: number;
  speed: number;
  dx: number;
  dy: number;
  color: string;
  isHeart: boolean;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const shapes = useRef<Shape[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize shapes (bubbles and hearts)
    shapes.current = Array.from({length: SHAPE_COUNT}, () => {
      const isHeart = Math.random() < 0.8; // HEARTS COUNT
      return {
        x: randomBetween(0, window.innerWidth),
        y: randomBetween(0, window.innerHeight),
        r: randomBetween(MIN_RADIUS, MAX_RADIUS),
        speed: randomBetween(MIN_SPEED, MAX_SPEED),
        dx: randomBetween(-0.12, 0.12),
        dy: isHeart ? randomBetween(-0.5, -0.18) : randomBetween(-0.32, -0.08),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        isHeart
      };
    });

    // Draw a heart shape at (x, y) with size r
    function drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, y + r * 0.3);
      ctx.bezierCurveTo(x, y, x - r, y, x - r, y + r * 0.3);
      ctx.bezierCurveTo(x - r, y + r, x, y + r * 1.2, x, y + r * 1.7);
      ctx.bezierCurveTo(x, y + r * 1.2, x + r, y + r, x + r, y + r * 0.3);
      ctx.bezierCurveTo(x + r, y, x, y, x, y + r * 0.3);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const shape of shapes.current) {
        if (shape.isHeart) {
          drawHeart(ctx, shape.x, shape.y, shape.r * 0.45, shape.color);
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.r, 0, 2 * Math.PI);
          ctx.fillStyle = shape.color;
          ctx.shadowColor = shape.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.restore();
        }
        // Animate
        shape.x += shape.dx;
        shape.y += shape.dy * shape.speed;
        // Respawn if out of bounds
        if (shape.y + shape.r < 0 || shape.x + shape.r < 0 || shape.x - shape.r > canvas.width) {
          shape.x = randomBetween(0, canvas.width);
          shape.y = canvas.height + shape.r;
          shape.r = randomBetween(MIN_RADIUS, MAX_RADIUS);
          shape.speed = randomBetween(MIN_SPEED, MAX_SPEED);
          shape.dx = randomBetween(-0.12, 0.12);
          if (shape.isHeart) {
            shape.dy = randomBetween(-0.5, -0.18);
          } else {
            shape.dy = randomBetween(-0.32, -0.08);
          }
          shape.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        transition: 'background 1s'
      }}
    />
  );
};

export default AnimatedBackground;
