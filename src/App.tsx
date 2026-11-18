import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Cover from './components/Cover';
import Agenda from './components/Agenda';

/* ══════════════════════════════════════════════════════════════════════
   ECOSISTEMA LISTO PARA TU PRESENTACIÓN DE CIBERSEGURIDAD
   En cuanto compartas los temas, este archivo será reemplazado por el
   deck completo con narrativa, métricas reales, diagramas y speaker notes.
   Atajos del motor: ← → navegar · G vista grid · S índice · P presentador · A anotar · H ocultar UI
   ══════════════════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <Deck>
      <Cover
        nav="Portada"
        notes="Slide de preparación. Lista para reemplazar con el título real y la tesis central."
        kicker="Ciberseguridad · Briefing"
        title={
          <>
            Arquitectura <span className="accent-text">Minimalista</span>
          </>
        }
        subtitle="Ecosistema preparado y listo para desplegar en Vercel. Envíame los temas para construir la presentación."
        foot="Listo para producción · Vite + React + Vercel"
      />

      <Slide
        center
        nav="Enfoque"
        notes="Principio rector: menos texto, mayor impacto visual y una idea clara por slide."
      >
        <div className="kicker" style={{ marginBottom: 14 }}>
          Principio de diseño
        </div>
        <h2
          className="headline"
          style={{ fontSize: 'clamp(34px, 5.2vw, 64px)', marginInline: 'auto' }}
        >
          Claridad extrema.{' '}
          <span className="accent-text">Cero ruido visual.</span>
        </h2>
        <Build at={1}>
          <p className="subhead" style={{ marginTop: 20 }}>
            Una idea por slide, tipografía de alto contraste y componentes
            interactivos listos para audiencia ejecutiva o técnica.
          </p>
        </Build>
      </Slide>

      <Agenda
        nav="Capacidades"
        notes="Componentes disponibles en el sistema para estructurar tus temas."
        kicker="Sistema preparado"
        title="Módulos listos para usar."
        items={[
          { title: 'Globo 3D de superficie de ataque y nodos', hint: 'Globe' },
          { title: 'Comparativas Zero Trust vs. legado', hint: 'Contrast' },
          { title: 'Líneas de tiempo y kill-chain de incidentes', hint: 'Timeline' },
          { title: 'Reglas, logs, CVEs y políticas en vivo', hint: 'CodeWindow' },
        ]}
      />
    </Deck>
  );
}
