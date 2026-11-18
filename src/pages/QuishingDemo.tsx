import { useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ClipboardCheck,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';

/**
 * RUTA 2: /encuesta — Simulación educativa de Quishing (100% inofensiva)
 * - Sin backend, sin llamadas de red, sin <form>, sin almacenamiento ni consola.
 * - No suplanta a ningún proveedor externo real: usa un portal genérico de encuesta interna.
 * - El campo es estrictamente readOnly y dispara el cartel educativo al primer toque/clic/foco.
 */
export default function QuishingDemo() {
  const [revealed, setRevealed] = useState(false);

  const triggerAlert = () => {
    setRevealed(true);
  };

  if (revealed) {
    const currentHost =
      typeof window !== 'undefined' ? window.location.host : 'este dominio';

    return (
      <main className="quish-page revealed">
        <section className="quish-alert-card" role="alert" aria-live="assertive">
          <div className="quish-alert-badge">
            <AlertTriangle size={14} />
            <span>Simulación educativa · Charla en vivo</span>
          </div>

          <h1 className="quish-alert-title">
            ¡ESTO ES <span>QUISHING!</span>
          </h1>

          <div className="quish-calm">
            <strong>Tranquilo/a: esto es parte de la charla.</strong> No se
            guardó ningún dato ni tu correo. Esta página ni siquiera permite
            escribir.
          </div>

          <p className="quish-lead">
            Acabás de comprobar en vivo lo fácil que es confiar en un código QR
            y entregar tu acceso en piloto automático.
          </p>

          <div className="quish-tips">
            <div className="quish-tip">
              <span className="quish-tip-num">1</span>
              <div>
                <strong>Mirá la URL arriba:</strong> estabas en{' '}
                <span className="quish-url-chip">{currentHost}</span>, no en un
                portal oficial de inicio de sesión.
              </div>
            </div>

            <div className="quish-tip">
              <span className="quish-tip-num">2</span>
              <div>
                <strong>Cuestioná el pedido:</strong> ¿para responder una
                encuesta simple y anónima de 3 preguntas hacía falta tu cuenta?
              </div>
            </div>

            <div className="quish-tip">
              <span className="quish-tip-num">3</span>
              <div>
                <strong>Frená 5 segundos antes de tocar</strong> cada vez que
                escaneás un código QR — un QR es solo un link disfrazado.
              </div>
            </div>
          </div>

          <div className="quish-alert-footer">
            <button
              type="button"
              className="quish-ghost-btn"
              onClick={() => setRevealed(false)}
            >
              <RotateCcw size={14} />
              <span>Ver pantalla inicial</span>
            </button>

            <a href="/" className="quish-ghost-btn">
              <ArrowLeft size={14} />
              <span>Volver a la charla</span>
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="quish-page">
      <section className="quish-card" aria-label="Acceso a Encuesta Interna">
        <div className="quish-emblem" aria-hidden>
          <ClipboardCheck size={22} />
        </div>

        <h1 className="quish-title">Iniciar sesión</h1>
        <p className="quish-subtitle">
          Usá tu cuenta corporativa para continuar a{' '}
          <strong>Encuesta Interna · Concesionaria</strong>
        </p>

        <div className="quish-field">
          <input
            id="survey-identity-preview"
            type="text"
            className="quish-input"
            value=""
            readOnly
            inputMode="none"
            autoComplete="off"
            aria-label="Correo electrónico o teléfono"
            onFocus={triggerAlert}
            onClick={triggerAlert}
            onTouchStart={triggerAlert}
          />
          <label htmlFor="survey-identity-preview" className="quish-label">
            Correo electrónico o teléfono
          </label>
        </div>

        <button
          type="button"
          className="quish-link-btn"
          onClick={triggerAlert}
          onTouchStart={triggerAlert}
        >
          ¿Olvidaste el correo electrónico?
        </button>

        <p className="quish-info">
          ¿No es tu equipo? Usá una ventana privada para acceder de forma
          segura.
        </p>

        <div className="quish-actions">
          <button
            type="button"
            className="quish-link-btn"
            onClick={triggerAlert}
            onTouchStart={triggerAlert}
          >
            Crear cuenta
          </button>

          <button
            type="button"
            className="quish-primary-btn"
            onClick={triggerAlert}
            onTouchStart={triggerAlert}
          >
            Siguiente
          </button>
        </div>
      </section>

      <div className="quish-footer-note">
        <ShieldCheck
          size={13}
          style={{ verticalAlign: '-2px', marginRight: 5 }}
        />
        Encuesta rápida de cierre · 3 preguntas
      </div>
    </main>
  );
}
