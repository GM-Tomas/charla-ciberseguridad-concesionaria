import { useEffect, useState } from 'react';
import { Clock, FileText, Pause, Play, RotateCcw, X } from 'lucide-react';
import { SLIDE_GUIDES, TOTAL_TALK_MINUTES } from '../data/talkMeta';

const TOTAL_SECONDS = TOTAL_TALK_MINUTES * 60;

function readSlideIndex(): number {
  const h = parseInt(window.location.hash.slice(1), 10);
  if (Number.isFinite(h) && h >= 1 && h <= SLIDE_GUIDES.length) return h - 1;
  return 0;
}

function formatClock(sec: number): string {
  const clamped = Math.max(0, sec);
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function TalkHud() {
  const isPresenter = new URLSearchParams(window.location.search).has(
    'presenter'
  );
  const [slideIdx, setSlideIdx] = useState(readSlideIndex);
  const [notesOpen, setNotesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  // Sync with Deck.tsx URL hash (Deck uses history.replaceState on slide change)
  useEffect(() => {
    const sync = () => setSlideIdx(readSlideIndex());
    const id = window.setInterval(sync, 180);
    window.addEventListener('hashchange', sync);
    return () => {
      window.clearInterval(id);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  // 30-minute talk timer
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  // Keyboard shortcuts: N toggles quick speaker notes; H mirrors Deck UI hide
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === 'TEXTAREA' ||
          t.tagName === 'INPUT' ||
          t.isContentEditable)
      ) {
        return;
      }
      if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setNotesOpen((v) => !v);
      } else if (e.key === 'h' || e.key === 'H') {
        setHidden((v) => !v);
      } else if (e.key === 'Escape') {
        setNotesOpen(false);
        setHidden(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (isPresenter) return null;

  const guide = SLIDE_GUIDES[slideIdx] ?? SLIDE_GUIDES[0];
  const progressPct = ((slideIdx + 1) / SLIDE_GUIDES.length) * 100;
  const remaining = TOTAL_SECONDS - elapsed;
  const overtime = remaining < 0;

  return (
    <>
      {/* Continuous hairline progress bar */}
      <div className="talk-progress-track" aria-hidden>
        <div
          className="talk-progress-fill"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Discreet top-right block indicator, 30-min timer & Notes (N) trigger */}
      <div className={'talk-hud' + (hidden ? ' hidden' : '')}>
        <div className="talk-pill talk-pill-block" title="Bloque y ventana sugerida">
          <span className="talk-dot" />
          <span>
            0{guide.blockIndex} · {guide.blockTitle}
          </span>
          <span className="talk-muted-sep">|</span>
          <span className="talk-mono">{guide.blockMinutes} min</span>
        </div>

        <button
          type="button"
          className={'talk-pill talk-pill-btn' + (running ? ' active' : '')}
          onClick={() => setRunning((r) => !r)}
          title={
            running
              ? 'Pausar cronómetro (objetivo 30:00)'
              : 'Iniciar cronómetro de 30 minutos'
          }
          aria-label="Cronómetro de 30 minutos"
        >
          <Clock size={13} />
          <span className="talk-mono">
            {overtime ? '+' : ''}
            {formatClock(Math.abs(remaining))}
          </span>
          {running ? <Pause size={12} /> : <Play size={12} />}
        </button>

        {elapsed > 0 && (
          <button
            type="button"
            className="talk-pill talk-pill-btn"
            onClick={() => {
              setRunning(false);
              setElapsed(0);
            }}
            title="Reiniciar cronómetro"
            aria-label="Reiniciar cronómetro"
            style={{ padding: '0 9px' }}
          >
            <RotateCcw size={12} />
          </button>
        )}

        <button
          type="button"
          className={'talk-pill talk-pill-btn' + (notesOpen ? ' active' : '')}
          onClick={() => setNotesOpen((v) => !v)}
          title="Notas del orador (Tecla N)"
          aria-pressed={notesOpen}
        >
          <FileText size={13} />
          <span>Notas (N)</span>
        </button>
      </div>

      {/* Optional Speaker Notes Overlay */}
      {notesOpen && (
        <aside
          className="notes-drawer"
          role="dialog"
          aria-label="Notas del orador"
        >
          <div className="notes-drawer-head">
            <div className="notes-drawer-meta">
              <span className="notes-drawer-kicker">
                Bloque {guide.blockIndex}/7 · {guide.blockMinutes} min (
                {guide.timeWindow})
              </span>
              <span className="notes-drawer-title">
                Slide {guide.slideNumber}/{SLIDE_GUIDES.length} · {guide.nav}
              </span>
            </div>
            <button
              type="button"
              className="notes-close"
              onClick={() => setNotesOpen(false)}
              aria-label="Cerrar notas"
            >
              <X size={15} />
            </button>
          </div>

          <div className="notes-section-label">Qué decir</div>
          <p className="notes-say">{guide.say}</p>

          <div className="notes-section-label">Lo clave que no podés olvidar</div>
          <div className="notes-key">{guide.keyTakeaway}</div>

          <div className="notes-section-label">Hilo conductor → siguiente</div>
          <p className="notes-bridge">“{guide.bridge}”</p>
        </aside>
      )}
    </>
  );
}
