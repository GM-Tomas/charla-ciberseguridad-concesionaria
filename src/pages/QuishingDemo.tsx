import { useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  BadgeCheck,
  Building2,
  Eye,
  KeyRound,
  Mail,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

/**
 * RUTA 2: /encuesta — Simulación educativa de Quishing (100% inofensiva)
 * - Sin backend, sin llamadas de red, sin <form>, sin almacenamiento ni consola.
 * - Identidad ficticia ("Pulso · Encuestas") con diseño moderno de portal de quiz/encuesta
 *   (sin marcas ni logotipos de terceros reales).
 * - Los campos son estrictamente readOnly y cualquier toque/clic dispara al instante
 *   el cartel educativo "¡ESTO ES QUISHING!".
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
    <main className="quish-page quiz-bg">
      <header className="quish-topbar">
        <div className="quish-brand">
          <span className="quish-brand-mark" aria-hidden>
            <Sparkles size={16} />
          </span>
          <span className="quish-brand-name">Pulso!</span>
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

        <div className="quish-provider-grid">
          <button
            type="button"
            className="quish-provider-btn"
            onClick={triggerAlert}
            onTouchStart={triggerAlert}
          >
            <Mail size={20} className="quish-prov-icon accent-blue" />
            <span>Correo</span>
          </button>

          <button
            type="button"
            className="quish-provider-btn"
            onClick={triggerAlert}
            onTouchStart={triggerAlert}
          >
            <Building2 size={20} className="quish-prov-icon accent-teal" />
            <span>Empresa</span>
          </button>

          <button
            type="button"
            className="quish-provider-btn"
            onClick={triggerAlert}
            onTouchStart={triggerAlert}
          >
            <BadgeCheck size={20} className="quish-prov-icon accent-slate" />
            <span>Legajo</span>
          </button>

          <button
            type="button"
            className="quish-provider-btn"
            onClick={triggerAlert}
            onTouchStart={triggerAlert}
          >
            <KeyRound size={20} className="quish-prov-icon accent-indigo" />
            <span>Token</span>
          </button>
        </div>

        <button
          type="button"
          className="quish-sso-btn"
          onClick={triggerAlert}
          onTouchStart={triggerAlert}
        >
          Continuar con SSO
        </button>

        <div className="quish-divider" aria-hidden>
          <span />
          <em>o</em>
          <span />
        </div>

        <div className="quish-stack-field">
          <label htmlFor="survey-user-preview" className="quish-field-label">
            Nombre de usuario o email
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
          className="quish-help-link"
          onClick={triggerAlert}
          onTouchStart={triggerAlert}
        >
          ¿Tenés problemas para iniciar sesión?
        </button>

        <button
          type="button"
          className="quish-submit-btn"
          onClick={triggerAlert}
          onTouchStart={triggerAlert}
        >
          Iniciar sesión
        </button>

        <div className="quish-signup-row">
          <span>¿No tenés una cuenta?</span>{' '}
          <button
            type="button"
            className="quish-help-link inline"
            onClick={triggerAlert}
            onTouchStart={triggerAlert}
          >
            Registrarse
          </button>
        </div>
      </section>
    </main>
  );
}
