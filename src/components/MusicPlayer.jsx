'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

// Lives in the root layout so music keeps playing continuously between pages.
// Any component can start it with: window.dispatchEvent(new CustomEvent('music:play', { detail: { src: '...' } }))
export default function MusicPlayer({ src = '/assets/music/Neeyum-Naanum-Anbe.mp3' }) {
  const audio = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(src);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [failed, setFailed] = useState(false);

  // Sync if prop changes
  useEffect(() => {
    if (src && !currentTrack) {
      setCurrentTrack(src);
    }
  }, [src, currentTrack]);

  const playSong = useCallback((trackSrc) => {
    const a = audio.current;
    if (!a) return;

    const targetSrc = trackSrc || currentTrack || src;

    // Check if we need to switch the track
    const isNewTrack = targetSrc && a.src && !a.src.endsWith(encodeURI(targetSrc)) && !a.src.endsWith(targetSrc);

    if (isNewTrack) {
      setCurrentTrack(targetSrc);
      a.src = targetSrc;
      a.load();
    } else if (!a.src || a.src === window.location.href) {
      a.src = targetSrc;
      a.load();
    }

    // If already playing this track smoothly, do not reset/restart
    if (!a.paused && a.currentTime > 0 && !isNewTrack) {
      setPlaying(true);
      setFailed(false);
      return;
    }

    const playPromise = a.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setPlaying(true);
          setFailed(false);
        })
        .catch(() => {
          // Browser autoplay restriction: defer until first user gesture
          setPlaying(false);
          const unlock = () => {
            if (audio.current) {
              audio.current
                .play()
                .then(() => {
                  setPlaying(true);
                  setFailed(false);
                })
                .catch(() => {});
            }
            ['click', 'touchstart', 'pointerdown', 'keydown'].forEach((evt) =>
              window.removeEventListener(evt, unlock)
            );
          };
          ['click', 'touchstart', 'pointerdown', 'keydown'].forEach((evt) =>
            window.addEventListener(evt, unlock, { once: true })
          );
        });
    }
  }, [currentTrack, src]);

  const pauseSong = useCallback(() => {
    if (audio.current) {
      audio.current.pause();
      setPlaying(false);
    }
  }, []);

  const toggle = useCallback(() => {
    if (playing) {
      pauseSong();
    } else {
      playSong(currentTrack);
    }
  }, [playing, pauseSong, playSong, currentTrack]);

  useEffect(() => {
    const onPlayEvent = (e) => {
      const requestedSrc = e?.detail?.src;
      playSong(requestedSrc);
    };

    const onPauseEvent = () => {
      pauseSong();
    };

    window.addEventListener('music:play', onPlayEvent);
    window.addEventListener('music:pause', onPauseEvent);

    return () => {
      window.removeEventListener('music:play', onPlayEvent);
      window.removeEventListener('music:pause', onPauseEvent);
    };
  }, [playSong, pauseSong]);

  const trackName = currentTrack?.includes('Neeyum-Naanum-Anbe')
    ? 'Neeyum Naanum Anbe ❤️'
    : 'Our Song ♫';

  return (
    <div className={`music ${playing ? 'is-playing' : ''}`} role="group" aria-label="Music player">
      <audio
        ref={audio}
        src={currentTrack}
        loop
        preload="auto"
        muted={muted}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          setFailed(true);
          setPlaying(false);
        }}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? '⏸' : '▶'}
      </button>

      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? 'Unmute' : 'Mute'}
        aria-pressed={muted}
        title={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? '🔇' : '🔊'}
      </button>

      <div className="music-info" onClick={toggle} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
        {playing && (
          <div className="music-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
        <span className={`dot ${playing ? 'on' : ''}`} role="status">
          {failed ? 'Song error' : playing ? trackName : 'Play Song ♫'}
        </span>
      </div>
    </div>
  );
}

