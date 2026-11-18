import { ArrowRight, Smartphone } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import Reveal from '../deck/Reveal';

export default function QrSurveySlide({
  onOpenDebrief,
}: {
  onOpenDebrief: () => void;
  nav?: string;
  notes?: string;
}) {
  const surveyUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/encuesta`
      : '/encuesta';

  return (
    <div className="slide">
      <div className="container">
        <div className="qr-split">
          <div className="qr-copy">
            <Reveal>
              <div className="kicker" style={{ marginBottom: 12 }}>
                07 · Cierre participativo · 30 segundos
              </div>
              <h2
                className="headline"
                style={{ fontSize: 'clamp(34px, 4.6vw, 56px)' }}
              >
                Encuesta rápida de cierre
              </h2>
              <p className="lead" style={{ marginTop: 14, maxWidth: '34ch' }}>
                Apuntá la cámara de tu celular al código QR para responder 3
                preguntas breves sobre la charla.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="qr-actions">
                <span className="qr-hint-chip">
                  <Smartphone size={14} /> 3 preguntas · Anónima
                </span>
                <button
                  type="button"
                  className="qr-debrief-btn"
                  onClick={onOpenDebrief}
                >
                  <span>Ver claves del ejercicio</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="qr-stage">
              <div
                className="qr-frame"
                aria-label="Código QR para la encuesta rápida de cierre"
              >
                <QRCodeSVG
                  value={surveyUrl}
                  size={268}
                  level="M"
                  bgColor="#ffffff"
                  fgColor="#09090b"
                  marginSize={0}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
