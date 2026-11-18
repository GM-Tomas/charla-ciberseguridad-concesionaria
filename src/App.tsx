import {
  AlertTriangle,
  Bot,
  Clock,
  Cpu,
  Eye,
  FileWarning,
  Gift,
  HeartHandshake,
  KeyRound,
  Lock,
  Mail,
  MessageSquare,
  PhoneCall,
  QrCode,
  ShieldAlert,
  ShieldCheck,
  Usb,
  UserCheck,
  Zap,
} from 'lucide-react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Cover from './components/Cover';
import Split from './components/Split';
import BigNumber from './components/BigNumber';
import CountUp from './components/CountUp';
import Steps from './components/Steps';
import Tabs from './components/Tabs';
import Contrast from './components/Contrast';
import Quote from './components/Quote';
import TalkHud from './components/TalkHud';
import QrSurveySlide from './components/QrSurveySlide';
import { SLIDE_GUIDES, formatPresenterNotes } from './data/talkMeta';

const n = (idx: number) => formatPresenterNotes(SLIDE_GUIDES[idx]);

export default function App() {
  return (
    <>
      <TalkHud />
      <Deck>
        {/* 01 · PORTADA (Bloque 1 · 3 min) */}
        <Cover
          nav={SLIDE_GUIDES[0].nav}
          notes={n(0)}
          kicker="Ciberseguridad Corporativa · Charla 30 min"
          title={
            <>
              La primera barrera
              <br />
              <span className="accent-text">sos vos.</span>
            </>
          }
          subtitle="Criterio cotidiano para ventas, administración, gestoría, posventa y recepción."
          image="/images/cover-showroom.jpg"
          foot="Concesionaria · Guía práctica sin tecnicismos"
        />

        {/* 02 · FACTOR HUMANO + OCTUBRE NEGRO (Bloque 1 · 3 min) */}
        <Split
          nav={SLIDE_GUIDES[1].nav}
          notes={n(1)}
          kicker="01 · Factor humano · 3 min"
          title={
            <>
              Hoy casi nadie rompe la cerradura.{' '}
              <span className="accent-text">La abrimos desde adentro.</span>
            </>
          }
          body={
            <>
              <p style={{ margin: 0 }}>
                Somos el primer punto de vulnerabilidad — pero también la{' '}
                <strong style={{ color: '#fafafa' }}>
                  primera barrera de defensa
                </strong>
                .
              </p>
              <Build at={1}>
                <div className="callout-strip">
                  <strong>Octubre Negro (oct. 2026):</strong> fallas masivas,
                  ataques a proveedores e IA. Aun así, en una PyME del día a día
                  el vector #1 sigue siendo un clic humano.
                </div>
              </Build>
            </>
          }
          media={
            <img
              className="split-photo"
              src="/images/human-door.jpg"
              alt="Puerta corporativa entreabierta dejando pasar luz"
            />
          }
        />

        {/* 03 · CASO BINANCE: LA CIFRA (Bloque 2 · 3 min) */}
        <BigNumber
          nav={SLIDE_GUIDES[2].nav}
          notes={n(2)}
          kicker="02 · Caso Binance (2019) · 3 min"
          value={<CountUp to={7000} suffix=" BTC" />}
          caption="≈ USD 40 millones robados a una de las plataformas con mayor inversión en seguridad del mundo."
          foot="Si le pasó a un gigante tecnológico, el criterio humano importa en todos lados."
        />

        {/* 04 · CASO BINANCE: CÓMO ENTRARON (Bloque 2 · 3 min) */}
        <Split
          flip
          nav={SLIDE_GUIDES[3].nav}
          notes={n(3)}
          kicker="02 · La lección"
          title="La mejor tecnología sin criterio humano no alcanza."
          body={
            <div className="clean-list">
              <div className="clean-list-item">
                <span className="clean-list-icon">
                  <KeyRound size={15} />
                </span>
                <span>
                  <strong>Phishing + malware:</strong> robaron credenciales,
                  llaves de API y códigos 2FA reales.
                </span>
              </div>
              <div className="clean-list-item">
                <span className="clean-list-icon">
                  <Lock size={15} />
                </span>
                <span>
                  <strong>El sistema confió:</strong> vio un acceso “legítimo” y
                  dejó pasar la operación.
                </span>
              </div>
              <div className="clean-list-item">
                <span className="clean-list-icon">
                  <ShieldCheck size={15} />
                </span>
                <span>
                  <strong>En la concesionaria:</strong> el antivirus no
                  reemplaza tu criterio antes de hacer clic.
                </span>
              </div>
            </div>
          }
          media={
            <img
              className="split-photo"
              src="/images/vault-key.jpg"
              alt="Llave de acceso corporativa junto a cerradura de alta seguridad"
            />
          }
        />

        {/* 05 · INGENIERÍA SOCIAL: EMOCIONES (Bloque 3 · 8 min) */}
        <Slide center nav={SLIDE_GUIDES[4].nav} notes={n(4)}>
          <Reveal>
            <div className="kicker" style={{ marginBottom: 14 }}>
              03 · Ingeniería social y phishing · 8 min
            </div>
            <h2
              className="headline"
              style={{
                fontSize: 'clamp(34px, 5.2vw, 64px)',
                marginInline: 'auto',
              }}
            >
              No hackean tu computadora.{' '}
              <span className="accent-text">Hackean tu apuro.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="emotion-row">
              <span className="emotion-chip">
                <Clock size={16} /> Urgencia
              </span>
              <span className="emotion-chip">
                <AlertTriangle size={16} /> Miedo
              </span>
              <span className="emotion-chip">
                <UserCheck size={16} /> Autoridad
              </span>
              <span className="emotion-chip">
                <Eye size={16} /> Curiosidad
              </span>
              <span className="emotion-chip">
                <Gift size={16} /> Oportunidad
              </span>
            </div>
          </Reveal>

          <Build at={1}>
            <p className="subhead" style={{ marginTop: 28 }}>
              Si un mensaje te apura para que no pienses, frená.
            </p>
          </Build>
        </Slide>

        {/* 06 · LOS 5 CANALES DEL ENGAÑO (Bloque 3 · 8 min) */}
        <Slide center nav={SLIDE_GUIDES[5].nav} notes={n(5)}>
          <div className="container">
            <Reveal>
              <div
                className="kicker"
                style={{ marginBottom: 10, textAlign: 'center' }}
              >
                03 · Tipos principales
              </div>
              <h2
                className="headline"
                style={{
                  textAlign: 'center',
                  marginInline: 'auto',
                  marginBottom: 'clamp(24px, 4vh, 40px)',
                }}
              >
                Cinco canales, la misma trampa.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="five-grid">
                <div className="five-card">
                  <div className="five-card-top">
                    <span className="five-card-icon">
                      <Mail size={18} />
                    </span>
                    <span className="five-card-num">01</span>
                  </div>
                  <h3>Phishing</h3>
                  <p>Correos falsos imitando bancos, proveedores o sistemas.</p>
                </div>

                <div className="five-card">
                  <div className="five-card-top">
                    <span className="five-card-icon">
                      <MessageSquare size={18} />
                    </span>
                    <span className="five-card-num">02</span>
                  </div>
                  <h3>Smishing</h3>
                  <p>Engaños por WhatsApp o SMS con links o pedidos urgentes.</p>
                </div>

                <div className="five-card">
                  <div className="five-card-top">
                    <span className="five-card-icon">
                      <PhoneCall size={18} />
                    </span>
                    <span className="five-card-num">03</span>
                  </div>
                  <h3>Vishing</h3>
                  <p>Llamadas de falso soporte, banco o dirección.</p>
                </div>

                <div className="five-card">
                  <div className="five-card-top">
                    <span className="five-card-icon">
                      <QrCode size={18} />
                    </span>
                    <span className="five-card-num">04</span>
                  </div>
                  <h3>Quishing</h3>
                  <p>Códigos QR que llevan a sitios falsos desde el celular.</p>
                </div>

                <div className="five-card">
                  <div className="five-card-top">
                    <span className="five-card-icon">
                      <UserCheck size={18} />
                    </span>
                    <span className="five-card-num">05</span>
                  </div>
                  <h3>Pretexting / BEC</h3>
                  <p>Suplantación de un gerente o proveedor habitual.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Slide>

        {/* 07 · 4 BANDERAS ROJAS EN 10 SEGUNDOS (Bloque 3 · 8 min) */}
        <Steps
          nav={SLIDE_GUIDES[6].nav}
          notes={n(6)}
          kicker="03 · Detectarlo en 10 segundos"
          title="Cuatro banderas rojas para frenar."
          items={[
            {
              title: 'Urgencia artificial',
              body: '“¡Tiene que salir ya, estoy en reunión y no puedo atender!”',
            },
            {
              title: 'Remitente tramposo',
              body: 'Mirá el dominio real después del @, no solo el nombre mostrado.',
            },
            {
              title: 'Pedido fuera de rutina',
              body: 'Cambio de CBU, códigos de 6 dígitos o pedidos de claves.',
            },
            {
              title: 'Links o adjuntos raros',
              body: 'Archivos .zip, enlaces acortados o facturas que nadie esperaba.',
            },
          ]}
        />

        {/* 08 · ESCENARIOS REALES EN LA CONCESIONARIA (Bloque 3 · 8 min) */}
        <Slide center nav={SLIDE_GUIDES[7].nav} notes={n(7)}>
          <div className="container">
            <Reveal>
              <div
                className="kicker"
                style={{ marginBottom: 10, textAlign: 'center' }}
              >
                03 · En nuestra concesionaria
              </div>
              <h2
                className="headline"
                style={{
                  textAlign: 'center',
                  marginInline: 'auto',
                  marginBottom: 'clamp(22px, 3.5vh, 34px)',
                }}
              >
                ¿Te suena alguno de estos mensajes?
              </h2>
            </Reveal>

            <Tabs
              tabs={[
                  {
                    label: 'WhatsApp “Gerente”',
                    content: (
                      <div className="scenario-card">
                        <div className="scenario-meta">
                          <span className="scenario-channel">
                            <MessageSquare size={14} /> WhatsApp · Número nuevo
                            con foto real
                          </span>
                          <span className="scenario-sector">
                            Administración / Caja
                          </span>
                        </div>
                        <p className="scenario-quote">
                          “Che, estoy trabado en una reunión con terminal.
                          Haceme urgente esta transferencia a este CBU y después
                          cargamos la orden.”
                        </p>
                        <div className="scenario-flag">
                          <ShieldAlert size={18} />
                          <span>
                            <strong>Bandera roja:</strong> autoridad + apuro +
                            presión para saltear el proceso normal.
                          </span>
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: 'Mail “Proveedor”',
                    content: (
                      <div className="scenario-card">
                        <div className="scenario-meta">
                          <span className="scenario-channel">
                            <Mail size={14} /> proveedor-autopartes-ar@gmail.com
                          </span>
                          <span className="scenario-sector">
                            Pagos / Posventa
                          </span>
                        </div>
                        <p className="scenario-quote">
                          “Buen día, por cambio de banco el pago de la factura
                          de hoy va a este nuevo CBU. Por favor confirmame el
                          comprobante.”
                        </p>
                        <div className="scenario-flag">
                          <ShieldAlert size={18} />
                          <span>
                            <strong>Bandera roja:</strong> cambio de CBU a
                            último momento sin confirmación por llamada.
                          </span>
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: 'Adjunto .zip',
                    content: (
                      <div className="scenario-card">
                        <div className="scenario-meta">
                          <span className="scenario-channel">
                            <FileWarning size={14} />{' '}
                            comprobante_transferencia_0km.zip
                          </span>
                          <span className="scenario-sector">
                            Ventas / Gestoría
                          </span>
                        </div>
                        <p className="scenario-quote">
                          “Hola, ahí te mandé comprimido el comprobante de la
                          seña del 0km y mi DNI para ir adelantando el
                          patentamiento.”
                        </p>
                        <div className="scenario-flag">
                          <ShieldAlert size={18} />
                          <span>
                            <strong>Bandera roja:</strong> un comprobante de
                            banco es PDF o imagen, nunca un .zip ejecutable.
                          </span>
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: 'ARCA / Soporte',
                    content: (
                      <div className="scenario-card">
                        <div className="scenario-meta">
                          <span className="scenario-channel">
                            <Zap size={14} /> Aviso urgente · ARCA / Banco /
                            Marca / IT
                          </span>
                          <span className="scenario-sector">
                            Recepción / Todos
                          </span>
                        </div>
                        <p className="scenario-quote">
                          “Detectamos un bloqueo en tu cuenta corporativa.
                          Ingresá al link o instalá acceso remoto ahora para no
                          perder el servicio.”
                        </p>
                        <div className="scenario-flag">
                          <ShieldAlert size={18} />
                          <span>
                            <strong>Bandera roja:</strong> ni ARCA, ni tu banco,
                            ni soporte real piden claves ni acceso remoto de la
                            nada.
                          </span>
                        </div>
                      </div>
                    ),
                  },
              ]}
            />
          </div>
        </Slide>

        {/* 09 · PII EN LA CONCESIONARIA (Bloque 4 · 5 min) */}
        <Split
          nav={SLIDE_GUIDES[8].nav}
          notes={n(8)}
          kicker="04 · Resguardo de información (PII) · 5 min"
          title="Todos los días tocamos datos que valen oro."
          body={
            <>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#fafafa' }}>PII</strong> es cualquier
                dato que identifica o permite suplantar a un cliente o
                compañero.
              </p>
              <div className="pii-tags">
                <span className="pii-tag">DNI (frente y dorso)</span>
                <span className="pii-tag">CUIT / CUIL</span>
                <span className="pii-tag">Domicilios</span>
                <span className="pii-tag">Recibos de sueldo</span>
                <span className="pii-tag">CBU y tarjetas</span>
                <span className="pii-tag">Cédulas y títulos</span>
                <span className="pii-tag">Patentes y legajos</span>
              </div>
            </>
          }
          media={
            <img
              className="split-photo"
              src="/images/desk-pii.jpg"
              alt="Escritorio corporativo ordenado con laptop cerrada y carpeta protegida"
            />
          }
        />

        {/* 10 · CUIDADO Y RETENCIÓN DE PII (Bloque 4 · 5 min) */}
        <Contrast
          nav={SLIDE_GUIDES[9].nav}
          notes={n(9)}
          kicker="04 · Regla de oro: no guardar por las dudas"
          title="Menos datos sueltos, menos riesgo."
          left={{
            label: 'Lo que nos expone',
            title: 'Datos sin control',
            points: [
              'Fotos de DNI en grupos masivos de WhatsApp',
              'Fotocopias y legajos abiertos sobre el mostrador',
              'Carpeta Descargas llena de meses anteriores',
              'Papeles con datos al tacho sin romper',
            ],
          }}
          right={{
            label: 'Estándar del equipo',
            title: 'Cuidado y retención justa',
            points: [
              'Solo a quien lo necesita (“necesidad de saber”)',
              'Pantalla bloqueada (Win + L) y escritorio limpio',
              'Conservar solo durante la operación o plazo legal',
              'Limpiar Descargas / chats viejos y triturar papel',
            ],
          }}
        />

        {/* 11 · IA Y CIBERSEGURIDAD: LOS DOS FRENTES (Bloque 5 · 3 min) */}
        <Split
          flip
          nav={SLIDE_GUIDES[10].nav}
          notes={n(10)}
          kicker="05 · Inteligencia Artificial · 3 min"
          title="El español perfecto ya no garantiza que sea real."
          body={
            <>
              <div className="ai-stack">
                <div className="ai-row">
                  <div className="ai-row-label">
                    <Cpu size={13} /> Afuera · IA en manos de atacantes
                  </div>
                  <p>
                    Phishing en <strong>español argentino impecable</strong> y{' '}
                    <strong>clonación de voz</strong> con pocos segundos de
                    audio imitando a un gerente.
                  </p>
                </div>

                <div className="ai-row">
                  <div className="ai-row-label">
                    <Bot size={13} /> Adentro · Shadow AI (fuga de datos)
                  </div>
                  <p>
                    Nunca pegues <strong>DNI, recibos, contratos ni balances</strong>{' '}
                    en IAs públicas gratuitas. Si usás IA autorizada, anonimizá
                    todo antes.
                  </p>
                </div>
              </div>

              <Build at={1}>
                <div className="callout-strip">
                  <strong>Regla de la vidriera:</strong> si no lo pondrías en la
                  vidriera de la concesionaria, no lo pegues en una IA pública.
                </div>
              </Build>
            </>
          }
          media={
            <img
              className="split-photo"
              src="/images/ai-voice.jpg"
              alt="Ondas luminosas minimalistas sobre vidrio oscuro representando voz sintética"
            />
          }
        />

        {/* 12 · 5 ESTÁNDARES DIARIOS (Bloque 6 · 4 min) */}
        <Slide center nav={SLIDE_GUIDES[11].nav} notes={n(11)}>
          <div className="container">
            <Reveal>
              <div
                className="kicker"
                style={{ marginBottom: 10, textAlign: 'center' }}
              >
                06 · Estándares diarios · 4 min
              </div>
              <h2
                className="headline"
                style={{
                  textAlign: 'center',
                  marginInline: 'auto',
                  marginBottom: 'clamp(24px, 4vh, 40px)',
                }}
              >
                Cinco hábitos para elevar la vara hoy.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="five-grid">
                <div className="five-card">
                  <div className="five-card-top">
                    <span className="five-card-icon">
                      <ShieldCheck size={18} />
                    </span>
                    <span className="five-card-num">01</span>
                  </div>
                  <h3>Doble factor</h3>
                  <p>Activo en mail, sistema de gestión y PIN en WhatsApp.</p>
                </div>

                <div className="five-card">
                  <div className="five-card-top">
                    <span className="five-card-icon">
                      <KeyRound size={18} />
                    </span>
                    <span className="five-card-num">02</span>
                  </div>
                  <h3>Claves únicas</h3>
                  <p>Sin papelitos en el monitor. Usá gestor de contraseñas.</p>
                </div>

                <div className="five-card">
                  <div className="five-card-top">
                    <span className="five-card-icon">
                      <Usb size={18} />
                    </span>
                    <span className="five-card-num">03</span>
                  </div>
                  <h3>PCs y USB</h3>
                  <p>
                    Cerrá WhatsApp Web compartido; cero pendrives desconocidos.
                  </p>
                </div>

                <div className="five-card">
                  <div className="five-card-top">
                    <span className="five-card-icon">
                      <PhoneCall size={18} />
                    </span>
                    <span className="five-card-num">04</span>
                  </div>
                  <h3>Doble canal</h3>
                  <p>
                    ¿Pago urgente o cambio de CBU? Llamá o hablalo en persona.
                  </p>
                </div>

                <div className="five-card">
                  <div className="five-card-top">
                    <span className="five-card-icon">
                      <HeartHandshake size={18} />
                    </span>
                    <span className="five-card-num">05</span>
                  </div>
                  <h3>Avisar ya</h3>
                  <p>
                    Si dudás o hiciste clic, avisá en el minuto 1 sin miedo.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Slide>

        {/* 13 · CULTURA SIN CULPA (Bloque 6 · cierre emocional) */}
        <Quote
          nav={SLIDE_GUIDES[12].nav}
          notes={n(12)}
          text="Equivocarse puede pasar. Esconderlo por vergüenza multiplica el daño. Avisar en el minuto 1 nos cuida a todos."
          name="Cultura sin culpa"
          role="Regla de equipo · Ante la duda, frená y avisá"
        />

        {/* 14 · ACTIVIDAD PRÁCTICA: ENCUESTA QR (Bloque 7 · 4 min) */}
        <QrSurveySlide
          nav={SLIDE_GUIDES[13].nav}
          notes={n(13)}
          onOpenDebrief={() => {
            window.location.hash = '#15';
          }}
        />

        {/* 15 · DEBRIEF DEL EJERCICIO (Bloque 7 · cierre circular) */}
        <Steps
          nav={SLIDE_GUIDES[14].nav}
          notes={n(14)}
          kicker="07 · Claves del ejercicio · Cierre"
          title="Tres reflejos que hoy te llevás en vivo."
          items={[
            {
              title: 'Mirá la URL arriba',
              body: 'Antes de tocar nada, chequeá siempre en qué dirección web estás parado.',
            },
            {
              title: 'Cuestioná el pedido',
              body: 'Si una encuesta simple te pide iniciar sesión, desconfiá de inmediato.',
            },
            {
              title: 'Frená 5 segundos',
              body: (
                <>
                  No confíes ciegamente en un QR sin contexto.{' '}
                  <strong style={{ color: '#fafafa' }}>
                    La primera barrera sos vos.
                  </strong>
                </>
              ),
            },
          ]}
        />
      </Deck>
    </>
  );
}
