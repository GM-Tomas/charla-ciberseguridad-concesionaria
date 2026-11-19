import { useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  Eye,
  Mail,
} from 'lucide-react';

/**
 * RUTA 2: /encuesta — Simulación educativa de Quishing (100% inofensiva)
 * - Sin backend, sin llamadas de red, sin <form>, sin almacenamiento ni consola.
 * - Los campos son estrictamente readOnly y cualquier toque/clic dispara al instante
 *   el cartel educativo "¡ESTO ES QUISHING!".
 */
export default function QuishingDemo() {
  const [revealed, setRevealed] = useState(false);

  const triggerAlert = () => {
    setRevealed(true);
  };

  if (revealed) {
    return (
      <main className="quish-page revealed">
        <section
          className="quish-alert-card minimal"
          role="alert"
          aria-live="assertive"
        >
          <div className="quish-alert-badge">
            <AlertTriangle size={14} />
            <span>Simulación educativa</span>
          </div>

          <h1 className="quish-alert-title">
            ¡ESTO ES <span>QUISHING!</span>
          </h1>

          <p className="quish-lead minimal">
            Tranquilo/a: <strong>no se guardó ningún dato.</strong> Solo
            comprobaste lo fácil que es tocar un QR sin frenar a mirar la URL.
          </p>

          <a href="/#1" className="quish-primary-link">
            <ArrowLeft size={15} />
            <span>Ir a la presentación</span>
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="quish-page quiz-bg">
      <header className="quish-topbar">
        <div className="quish-brand">
          <span className="quish-brand-text">
            Kahot<span className="quish-brand-bang">!</span>
          </span>
        </div>
      </header>

      <section
        className="quish-card quiz-card"
        aria-label="Acceso a Encuesta Rápida"
      >
        <h1 className="quish-title">Iniciar sesión</h1>
        <p className="quish-subtitle">
          Ingresá para responder <strong>Encuesta rápida de cierre</strong>
        </p>

        <button
          type="button"
          className="quish-sso-btn"
          onClick={triggerAlert}
          onTouchStart={triggerAlert}
        >
          <Mail size={18} className="quish-sso-icon" />
          <span>Continuar con Google</span>
        </button>

        <div className="quish-divider" aria-hidden>
          <span />
          <em>o</em>
          <span />
        </div>

        <div className="quish-stack-field">
          <label htmlFor="survey-user-preview" className="quish-field-label">
            Correo electrónico
          </label>
          <input
            id="survey-user-preview"
            type="text"
            className="quish-clean-input"
            value=""
            readOnly
            inputMode="none"
            autoComplete="off"
            onFocus={triggerAlert}
            onClick={triggerAlert}
            onTouchStart={triggerAlert}
          />
        </div>

        <div className="quish-stack-field">
          <label htmlFor="survey-pass-preview" className="quish-field-label">
            Contraseña
          </label>
          <div className="quish-pass-wrap">
            <input
              id="survey-pass-preview"
              type="text"
              className="quish-clean-input has-icon"
              value=""
              readOnly
              inputMode="none"
              autoComplete="off"
              onFocus={triggerAlert}
              onClick={triggerAlert}
              onTouchStart={triggerAlert}
            />
            <button
              type="button"
              className="quish-eye-btn"
              aria-label="Mostrar contraseña"
              onClick={triggerAlert}
              onTouchStart={triggerAlert}
            >
              <Eye size={18} />
            </button>
          </div>
        </div>

        <button
          type="button"
          className="quish-submit-btn"
          onClick={triggerAlert}
          onTouchStart={triggerAlert}
        >
          Iniciar sesión
        </button>
      </section>
    </main>
  );
}
