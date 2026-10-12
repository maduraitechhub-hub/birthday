export default function FloatingHearts() {
  return (
    <div className="fh" aria-hidden="true">
      {Array.from({ length: 10 }, (_, i) => <span key={i}>{i % 3 ? '💗' : '🤍'}</span>)}
    </div>
  );
}
