/*
 * ALTA / SEAINT original journal.
 * Editorial drafts were prepared from the owner's stated plans and transaction claims.
 * Verify any transaction, ownership, and product-release details with company records
 * and confirm permission to disclose deal information before publishing.
 * Current release is set to published at the owner's request.
 * Third-party news is separate and is never represented as original reporting.
 */
export type Localized = { en: string; es: string };
export type EditorialSection = { heading?: Localized; paragraphs: Localized[] };
export type EditorialPost = {
  slug: string;
  status: "draft" | "published";
  title: Localized;
  summary: Localized;
  category: Localized;
  author: string;
  date: string; // YYYY-MM-DD
  sections: EditorialSection[];
};

export const editorialPosts: EditorialPost[] = [
  {
    "slug": "notori-private-sale-long-term-software-strategy",
    "status": "published",
    "title": {
      "en": "Notori: A Private Acquisition with a Long-Term View",
      "es": "Notori: una adquisición privada con visión de largo plazo"
    },
    "summary": {
      "en": "A privately negotiated acquisition of Notori reflects our preference for thoughtful software ownership over public spectacle.",
      "es": "La adquisición de Notori mediante una operación privada refleja nuestra preferencia por construir valor en software, sin convertir cada transacción en espectáculo."
    },
    "category": {
      "en": "Transactions",
      "es": "Operaciones"
    },
    "author": "ALTA / SEAINT Editorial",
    "date": "2026-11-03",
    "sections": [
      {
        "heading": {
          "en": "The transaction, without the theater",
          "es": "La operación, sin el espectáculo"
        },
        "paragraphs": [
          {
            "en": "We acquired Notori through a privately negotiated sale. For us, the significance of the transaction lies less in announcing a deal than in the responsibility that follows it: understanding the product, preserving what works and identifying where disciplined operating support can create lasting value.",
            "es": "Adquirimos Notori mediante una venta negociada de manera privada. Para nosotros, lo importante no es anunciar una operación, sino asumir la responsabilidad que viene después: comprender el producto, conservar lo que funciona e identificar dónde una gestión disciplinada puede generar valor duradero."
          },
          {
            "en": "We are not publishing a transaction price, seller identity, ownership percentage or other contractual terms. Those details should never be inferred from this announcement. The story we can tell is about our approach to acquiring software businesses and the work required beyond closing.",
            "es": "No publicamos el precio de la operación, la identidad del vendedor, el porcentaje de participación ni otros términos contractuales. Esos detalles no deben deducirse de este anuncio. Lo que sí podemos explicar es nuestro enfoque para adquirir empresas de software y el trabajo que comienza después del cierre."
          }
        ]
      },
      {
        "heading": {
          "en": "Why we look at privately held software",
          "es": "Por qué nos interesa el software privado"
        },
        "paragraphs": [
          {
            "en": "Some of the most useful software is built far from the spotlight. It may solve one recurring problem for a specific audience, hold years of accumulated product knowledge or serve customers whose workflows are too specialized for a general platform. A private transaction can create room to think carefully about that foundation.",
            "es": "Parte del software más útil se desarrolla lejos de los reflectores. Puede resolver un problema recurrente para un público específico, reunir años de conocimiento del producto o atender procesos demasiado particulares para una plataforma general. Una operación privada permite estudiar esa base con atención."
          },
          {
            "en": "Our review focuses on practical questions: who depends on the product, how customers are served, what technical obligations exist and whether we can be good long-term stewards. Ownership is not a substitute for product quality, and a purchase only matters if the operating plan is credible.",
            "es": "Nuestro análisis se centra en preguntas concretas: quién depende del producto, cómo se atiende a los clientes, qué obligaciones técnicas existen y si podemos administrarlo responsablemente a largo plazo. Ser propietario no sustituye la calidad del producto y una compra solo tiene sentido con un plan operativo sólido."
          }
        ]
      },
      {
        "heading": {
          "en": "The next chapter",
          "es": "La siguiente etapa"
        },
        "paragraphs": [
          {
            "en": "Notori sits within a broader direction for ALTA Private Equity and the SEAINT ecosystem: selectively pursue software opportunities while continuing to build our own products. Each path requires different diligence, talent and patience. We intend to be clear about which businesses are acquired and which are created internally.",
            "es": "Notori forma parte de una dirección más amplia para ALTA Private Equity y el ecosistema SEAINT: evaluar oportunidades de adquisición de software mientras seguimos desarrollando productos propios. Cada camino exige análisis, talento y paciencia distintos. Queremos distinguir claramente lo adquirido de lo creado internamente."
          },
          {
            "en": "Our measure of progress is not the number of announcements. It is whether the technology becomes more dependable, the business more resilient and the service more relevant to the people who use it.",
            "es": "Nuestra medida de avance no es la cantidad de anuncios. Es que la tecnología sea más confiable, el negocio más resistente y el servicio más relevante para quienes lo utilizan."
          }
        ]
      }
    ]
  },
  {
    "slug": "toward-250-million-technology-portfolio",
    "status": "published",
    "title": {
      "en": "Toward a $250 Million Technology Portfolio",
      "es": "Hacia una cartera tecnológica de $250 millones"
    },
    "summary": {
      "en": "The $250 million figure is a long-term portfolio ambition—not a statement of current assets, valuation or capital raised.",
      "es": "La cifra de $250 millones representa una aspiración de largo plazo, no una declaración de activos actuales, valoración ni capital captado."
    },
    "category": {
      "en": "Investment Perspective",
      "es": "Perspectiva de inversión"
    },
    "author": "ALTA / SEAINT Editorial",
    "date": "2026-11-03",
    "sections": [
      {
        "heading": {
          "en": "A destination, not a headline metric",
          "es": "Una dirección, no una cifra para presumir"
        },
        "paragraphs": [
          {
            "en": "Our ambition is to build toward a $250 million portfolio of technology and operating businesses. That number describes the scale we aspire to develop over time. It does not represent our current assets under management, enterprise value, completed acquisitions or committed investor capital.",
            "es": "Nuestra aspiración es avanzar hacia una cartera de $250 millones en tecnología y negocios operativos. Esa cifra describe la escala que buscamos construir con el tiempo. No representa activos actuales bajo gestión, valoración empresarial, adquisiciones cerradas ni capital comprometido por inversionistas."
          },
          {
            "en": "A meaningful portfolio must be earned through a sequence of decisions, not assembled in a presentation. We believe that means focusing on businesses with identifiable customers, recurring needs, healthy economics and a reason to exist after the current technology cycle has changed.",
            "es": "Una cartera relevante se construye mediante una secuencia de decisiones, no con una presentación. Eso exige enfocarse en empresas con clientes identificables, necesidades recurrentes, economía saludable y razones para seguir existiendo cuando cambie el ciclo tecnológico."
          }
        ]
      },
      {
        "heading": {
          "en": "How we think about allocation",
          "es": "Cómo pensamos la asignación de recursos"
        },
        "paragraphs": [
          {
            "en": "We look at three connected activities: acquiring software when there is a sound ownership opportunity, building software when a problem is clear enough to justify starting from zero, and improving operations where technology can remove friction. They are related disciplines, but they should not be confused with one another.",
            "es": "Observamos tres actividades conectadas: adquirir software cuando exista una oportunidad de propiedad razonable, desarrollar software cuando un problema justifique comenzar desde cero y mejorar operaciones cuando la tecnología pueda reducir fricciones. Están relacionadas, pero no son lo mismo."
          },
          {
            "en": "Our areas of interest include small-business infrastructure, construction operations, applied AI, financial workflow tools and other vertical systems. The common thread is not fashion or hype. It is the opportunity to solve an expensive, repetitive or fragmented problem for a defined group of users.",
            "es": "Entre nuestras áreas de interés están la infraestructura para pequeñas empresas, operaciones de construcción, IA aplicada, herramientas para procesos financieros y otros sistemas especializados. El vínculo no es la moda: es resolver problemas costosos, repetitivos o fragmentados para usuarios concretos."
          }
        ]
      },
      {
        "heading": {
          "en": "What will matter on the way",
          "es": "Lo que importará en el camino"
        },
        "paragraphs": [
          {
            "en": "Progress should be judged against verifiable milestones: products reaching customers, durable revenue, responsible acquisitions, better retention and stronger operations. We intend to distinguish targets from results every time we discuss the portfolio publicly.",
            "es": "El progreso debe medirse mediante hitos verificables: productos que llegan a clientes, ingresos sostenibles, adquisiciones responsables, mejor retención y operaciones más sólidas. Procuraremos distinguir las metas de los resultados cada vez que hablemos públicamente de la cartera."
          },
          {
            "en": "The $250 million ambition provides direction. Execution, evidence and time will determine how far we go.",
            "es": "La ambición de $250 millones nos da dirección. La ejecución, la evidencia y el tiempo determinarán hasta dónde llegamos."
          }
        ]
      }
    ]
  },
  {
    "slug": "buy-build-operate-software-strategy",
    "status": "published",
    "title": {
      "en": "Buy, Build, Operate: Our Software Thesis",
      "es": "Comprar, construir y operar: nuestra tesis sobre software"
    },
    "summary": {
      "en": "Why software acquisitions and products developed in-house belong in the same investment conversation—but should be described differently.",
      "es": "Por qué las adquisiciones de software y los productos desarrollados internamente pueden compartir una tesis, sin confundirse entre sí."
    },
    "category": {
      "en": "Portfolio Strategy",
      "es": "Estrategia de cartera"
    },
    "author": "ALTA / SEAINT Editorial",
    "date": "2026-11-03",
    "sections": [
      {
        "heading": {
          "en": "Two paths to the same responsibility",
          "es": "Dos caminos hacia una misma responsabilidad"
        },
        "paragraphs": [
          {
            "en": "There are two different ways to become responsible for a software product. One is to acquire an existing business or asset through a negotiated transaction. The other is to identify a problem, assemble the right people and build a new product from the ground up. Both can fit our strategy; neither guarantees an outcome.",
            "es": "Existen dos formas distintas de asumir la responsabilidad de un producto de software. Una es adquirir una empresa o activo existente mediante una operación negociada. La otra es identificar un problema, reunir al equipo adecuado y crear un producto desde cero. Ambas encajan en nuestra estrategia; ninguna garantiza el resultado."
          },
          {
            "en": "Notori represents the acquisition path we have discussed publicly. Initiatives such as SEAINT ONE, TRIST AI and ALMA represent product development work. We believe being specific about those differences is part of communicating responsibly with partners, customers and prospective sellers.",
            "es": "Notori representa la vía de adquisición que hemos descrito públicamente. Iniciativas como SEAINT ONE, TRIST AI y ALMA representan trabajo de desarrollo de producto. Ser precisos con esa diferencia es parte de comunicarnos responsablemente con socios, clientes y posibles vendedores."
          }
        ]
      },
      {
        "heading": {
          "en": "What we look for in software",
          "es": "Qué buscamos en el software"
        },
        "paragraphs": [
          {
            "en": "Our interest is drawn to products that sit close to an essential workflow: answering customers, processing payments, managing jobs, organizing records or turning complex information into decisions. Software with a narrow purpose can be more valuable to its users than a broad platform that tries to do everything.",
            "es": "Nos interesan productos cercanos a un proceso esencial: atender clientes, procesar pagos, gestionar proyectos, organizar documentos o convertir información compleja en decisiones. Un software con un propósito definido puede aportar más valor que una plataforma que intenta hacerlo todo."
          },
          {
            "en": "We also think about the less glamorous questions. Is the code maintainable? Are customers receiving support? What contracts or integration dependencies exist? Can the product grow without losing trust? These operational details determine whether a business has a future beyond its branding.",
            "es": "También analizamos preguntas menos vistosas. ¿Se puede mantener el código? ¿Reciben atención los clientes? ¿Qué contratos o integraciones condicionan el servicio? ¿Puede crecer sin perder confianza? Esos detalles operativos determinan si un negocio tiene futuro más allá de su marca."
          }
        ]
      },
      {
        "heading": {
          "en": "A portfolio that shares learning",
          "es": "Una cartera que comparte aprendizaje"
        },
        "paragraphs": [
          {
            "en": "Building and acquiring across several categories gives us a chance to reuse lessons in security, billing, user experience and customer success. It should not mean forcing unrelated products into one system. Each company needs a clear audience and its own operating logic.",
            "es": "Desarrollar y adquirir en distintas categorías nos permite reutilizar aprendizajes sobre seguridad, facturación, experiencia de usuario y servicio al cliente. Eso no significa obligar a productos diferentes a funcionar igual. Cada empresa necesita un público definido y su propia lógica operativa."
          },
          {
            "en": "The long-term opportunity is a disciplined operating culture: products that are useful on their own, supported by shared judgment and an unwillingness to confuse ambition with completed results.",
            "es": "La oportunidad de largo plazo consiste en construir una cultura operativa disciplinada: productos útiles por sí mismos, respaldados por criterios compartidos y sin confundir ambición con resultados alcanzados."
          }
        ]
      }
    ]
  },
  {
    "slug": "ai-construction-back-office-trist",
    "status": "published",
    "title": {
      "en": "Construction’s Next Technology Shift Starts in the Back Office",
      "es": "La próxima transformación de la construcción empieza en la oficina"
    },
    "summary": {
      "en": "Our work on TRIST AI explores how AI-assisted workflows can reduce administrative friction for construction operators.",
      "es": "Nuestro trabajo en TRIST AI explora cómo los procesos asistidos por IA pueden reducir la carga administrativa en empresas constructoras."
    },
    "category": {
      "en": "Construction Technology",
      "es": "Tecnología para construcción"
    },
    "author": "ALTA / SEAINT Editorial",
    "date": "2026-11-03",
    "sections": [
      {
        "heading": {
          "en": "The work between the job sites",
          "es": "El trabajo que ocurre entre obras"
        },
        "paragraphs": [
          {
            "en": "Construction companies are judged by the work they complete in the field. Yet a large share of their day is spent elsewhere: sorting email, following up with general contractors, tracking invoices, updating job information and reconciling documents. The cost of this fragmentation is not always visible on a project plan.",
            "es": "A las constructoras se las evalúa por el trabajo realizado en obra. Sin embargo, buena parte del día transcurre en tareas menos visibles: ordenar correos, dar seguimiento a contratistas generales, controlar facturas, actualizar proyectos y conciliar documentos. El costo de esa fragmentación no siempre aparece en el cronograma."
          },
          {
            "en": "We see a practical opportunity to bring those tasks into a more coherent operating environment. Not by asking construction teams to abandon established tools overnight, but by helping information move between the systems they already depend on.",
            "es": "Vemos una oportunidad concreta para reunir esas tareas en un entorno operativo más coherente. No se trata de pedir a los equipos que abandonen de inmediato las herramientas existentes, sino de facilitar que la información circule entre los sistemas que ya utilizan."
          }
        ]
      },
      {
        "heading": {
          "en": "What we are designing with TRIST AI",
          "es": "Qué estamos diseñando con TRIST AI"
        },
        "paragraphs": [
          {
            "en": "TRIST AI is a product initiative focused on the construction back office. The direction includes email triage, bid and job tracking, billing workflows, supplier documentation and natural-language assistance. Integration work involving services such as Outlook and QuickBooks is part of the product development agenda; capabilities should be presented according to their actual readiness.",
            "es": "TRIST AI es una iniciativa de producto centrada en la administración de empresas constructoras. Su dirección incluye clasificación de correos, seguimiento de ofertas y obras, procesos de facturación, documentación de proveedores y asistencia en lenguaje natural. Las integraciones con servicios como Outlook y QuickBooks forman parte del desarrollo y deben describirse según su estado real."
          },
          {
            "en": "The goal is not to replace project managers or accountants. It is to give them a clearer view of what needs attention, what has changed and which decisions still require a person. Good automation should make accountability easier, not obscure it.",
            "es": "La meta no es sustituir a gerentes de proyecto ni contadores. Es ofrecerles una visión más clara de lo urgente, lo que cambió y las decisiones que todavía requieren a una persona. La buena automatización facilita la rendición de cuentas, no la oculta."
          }
        ]
      },
      {
        "heading": {
          "en": "A vertical approach to AI",
          "es": "Un enfoque especializado de IA"
        },
        "paragraphs": [
          {
            "en": "We believe useful AI products will increasingly be judged by industry context: terminology, approvals, documentation and the consequences of errors. Construction offers a strong test of that principle because the work crosses many teams and deadlines.",
            "es": "Creemos que los productos de IA serán evaluados cada vez más por su conocimiento del sector: terminología, aprobaciones, documentación y consecuencias de los errores. La construcción ofrece una prueba exigente porque el trabajo conecta muchos equipos y plazos."
          },
          {
            "en": "Our commitment is to keep learning directly from operators and to build around real administrative pain. The most convincing demonstration of AI is not a futuristic interface; it is a workday with fewer missed details.",
            "es": "Nuestro compromiso es seguir aprendiendo de los operadores y desarrollar soluciones para problemas administrativos reales. La demostración más convincente de IA no es una interfaz futurista, sino una jornada de trabajo con menos detalles que se pierden."
          }
        ]
      }
    ]
  },
  {
    "slug": "seaint-one-small-business-operating-system",
    "status": "published",
    "title": {
      "en": "SEAINT ONE: Building an Operating Layer for Small Business",
      "es": "SEAINT ONE: una base operativa para las pequeñas empresas"
    },
    "summary": {
      "en": "An integrated direction for communications, customers, billing and booking—designed around the realities of small-business ownership.",
      "es": "Una dirección integrada para comunicación, clientes, cobros y reservas, diseñada para la realidad de quienes administran pequeñas empresas."
    },
    "category": {
      "en": "Small Business",
      "es": "Pequeñas empresas"
    },
    "author": "ALTA / SEAINT Editorial",
    "date": "2026-11-03",
    "sections": [
      {
        "heading": {
          "en": "The hidden cost of disconnected tools",
          "es": "El costo oculto de usar herramientas aisladas"
        },
        "paragraphs": [
          {
            "en": "A small business may use one service for calls, another for text messages, a spreadsheet for leads, a separate invoicing tool and a website that never speaks to any of them. Each product solves a task. The gaps between them become the owner’s problem.",
            "es": "Una pequeña empresa puede usar un servicio para llamadas, otro para mensajes, una hoja de cálculo para prospectos, otra herramienta para facturas y un sitio web que no se comunica con ninguna. Cada producto resuelve una tarea. Los vacíos entre ellos terminan siendo un problema del dueño."
          },
          {
            "en": "For operators with limited staff, fragmented software means repeated data entry, missed follow-ups and uncertainty about who owes what or which customer is waiting. We think the opportunity is not simply another dashboard; it is a more connected workflow.",
            "es": "Para equipos pequeños, el software fragmentado implica duplicar información, perder seguimientos y no tener claridad sobre pagos o clientes pendientes. Creemos que la oportunidad no es crear otro panel, sino conectar mejor los procesos."
          }
        ]
      },
      {
        "heading": {
          "en": "The SEAINT ONE direction",
          "es": "La propuesta de SEAINT ONE"
        },
        "paragraphs": [
          {
            "en": "SEAINT ONE is our ongoing product initiative for phone, SMS, customer management, invoices, payments, websites and booking in one environment. It is being developed with an emphasis on clear permissions, practical onboarding and bilingual experiences. Features and integrations should be treated as a product roadmap until they are available to customers.",
            "es": "SEAINT ONE es nuestra iniciativa de producto para reunir telefonía, SMS, gestión de clientes, facturación, pagos, sitios web y reservas en un mismo entorno. Se desarrolla con énfasis en permisos claros, incorporación práctica y experiencias bilingües. Las funciones e integraciones deben presentarse como hoja de ruta hasta que estén disponibles para clientes."
          },
          {
            "en": "Our design question is straightforward: can an owner open one workspace and understand what happened today, what needs a reply and which payments need attention? That level of clarity is more important than filling a sidebar with features.",
            "es": "Nuestra pregunta de diseño es sencilla: ¿puede una persona abrir un espacio y entender qué pasó hoy, quién espera respuesta y qué pagos requieren atención? Esa claridad importa más que llenar una barra lateral de funciones."
          }
        ]
      },
      {
        "heading": {
          "en": "Made for the businesses that keep communities moving",
          "es": "Pensado para los negocios que sostienen comunidades"
        },
        "paragraphs": [
          {
            "en": "Service companies, local shops and independent teams need software that respects their time, their budgets and their language. A product that reduces the number of systems an owner must manage can create operational value before it adds any advanced intelligence.",
            "es": "Las empresas de servicios, los comercios locales y los equipos independientes necesitan software que respete su tiempo, su presupuesto y su idioma. Reducir la cantidad de sistemas que una persona debe administrar puede generar valor incluso antes de añadir inteligencia avanzada."
          },
          {
            "en": "This is where we see technology investment meeting everyday enterprise: building tools that help smaller companies operate with the confidence of larger organizations without taking away their independence.",
            "es": "Aquí vemos el encuentro entre inversión tecnológica y empresa cotidiana: herramientas que permitan a negocios pequeños operar con la claridad de organizaciones mayores, sin perder su independencia."
          }
        ]
      }
    ]
  },
  {
    "slug": "latino-founders-bilingual-ai-alma",
    "status": "published",
    "title": {
      "en": "AI Should Speak the Language of the People Using It",
      "es": "La inteligencia artificial también debe hablar el idioma de sus usuarios"
    },
    "summary": {
      "en": "Why our ALMA work begins with English and Spanish as core product decisions, not afterthought translations.",
      "es": "Por qué nuestro trabajo en ALMA parte del inglés y el español como decisiones centrales de producto, no como traducciones de último momento."
    },
    "category": {
      "en": "Bilingual AI",
      "es": "IA bilingüe"
    },
    "author": "ALTA / SEAINT Editorial",
    "date": "2026-11-03",
    "sections": [
      {
        "heading": {
          "en": "A market is more than a translation setting",
          "es": "Un mercado es más que una opción de idioma"
        },
        "paragraphs": [
          {
            "en": "Many entrepreneurs move between English and Spanish throughout a single workday. Their customers, employees and suppliers may do the same. An interface that translates buttons but ignores how people communicate is not truly built for that audience.",
            "es": "Muchos emprendedores alternan entre inglés y español durante una misma jornada. Sus clientes, empleados y proveedores también pueden hacerlo. Una interfaz que traduce botones pero ignora la manera real de comunicarse no está diseñada para ese público."
          },
          {
            "en": "We believe Latino entrepreneurs deserve the same quality of software experience offered to any other market: considered design, reliable workflows, understandable pricing and language flexibility without sacrificing capability.",
            "es": "Creemos que los emprendedores latinos merecen la misma calidad de experiencia tecnológica que cualquier otro mercado: diseño cuidado, procesos confiables, precios comprensibles y flexibilidad lingüística sin sacrificar funciones."
          }
        ]
      },
      {
        "heading": {
          "en": "What ALMA is being built to explore",
          "es": "Lo que buscamos desarrollar con ALMA"
        },
        "paragraphs": [
          {
            "en": "ALMA is part of our consumer AI product direction, with conversational assistance, voice interaction and support for interpreting visual information among the areas being explored. We are designing for useful reasoning and approachable interaction rather than treating a familiar chat window as the entire product.",
            "es": "ALMA forma parte de nuestra dirección de IA para consumidores, con asistencia conversacional, interacción por voz y apoyo para interpretar información visual entre las áreas de desarrollo. Buscamos razonamiento útil e interacción cercana, no simplemente reproducir una ventana de chat."
          },
          {
            "en": "An English-and-Spanish experience should be coherent from onboarding to help content, not limited to a language toggle. Cultural relevance, accessibility and practical usefulness are design responsibilities that cannot be delegated to translation alone.",
            "es": "Una experiencia en inglés y español debe ser coherente desde el registro hasta la ayuda, no limitarse a un selector de idioma. La relevancia cultural, la accesibilidad y la utilidad práctica son responsabilidades de diseño que no se resuelven solo traduciendo."
          }
        ]
      },
      {
        "heading": {
          "en": "Access, trust and long-term adoption",
          "es": "Acceso, confianza y adopción sostenible"
        },
        "paragraphs": [
          {
            "en": "For small teams and individual users, trust is built through clarity: what the system can do, what it cannot do, how information is handled and when a human decision is still necessary. We want that clarity to be part of the product experience.",
            "es": "Para equipos pequeños y usuarios individuales, la confianza nace de la claridad: qué puede hacer el sistema, qué no puede hacer, cómo se maneja la información y cuándo sigue siendo necesaria una decisión humana. Queremos integrar esa claridad en la experiencia."
          },
          {
            "en": "Our long-term view is that the next wave of AI adoption will not be defined only by larger models. It will be shaped by software that understands the context, constraints and language of the people it is intended to serve.",
            "es": "Nuestra visión de largo plazo es que la siguiente etapa de adopción de IA no dependerá únicamente de modelos más grandes. La definirán productos que comprendan el contexto, las limitaciones y el idioma de las personas a las que buscan servir."
          }
        ]
      }
    ]
  },
  {
    "slug": "vertical-software-trading-property-ai",
    "status": "published",
    "title": {
      "en": "From Trading to Property Operations: The Case for Vertical Software",
      "es": "Del trading a las propiedades: el valor del software especializado"
    },
    "summary": {
      "en": "Across financial dashboards, property workflows and AI-assisted operations, our product work follows one principle: solve a specific problem well.",
      "es": "Desde paneles financieros hasta operaciones inmobiliarias y procesos con IA, nuestro trabajo sigue un principio: resolver bien un problema concreto."
    },
    "category": {
      "en": "Technology & AI",
      "es": "Tecnología e IA"
    },
    "author": "ALTA / SEAINT Editorial",
    "date": "2026-11-03",
    "sections": [
      {
        "heading": {
          "en": "Specific problems deserve specific products",
          "es": "Problemas específicos requieren productos específicos"
        },
        "paragraphs": [
          {
            "en": "A financial market participant, a property manager and a creative services operator may all use modern software. Yet the decisions they make, the information they need and the risks they face are fundamentally different. We see value in building technology around those distinctions.",
            "es": "Un participante del mercado financiero, un administrador de propiedades y un operador creativo pueden usar software moderno. Sin embargo, sus decisiones, la información que necesitan y sus riesgos son distintos. Vemos valor en desarrollar tecnología que respete esas diferencias."
          },
          {
            "en": "Our product initiatives have explored market organization through TraderView, property operations through LegacyOS and service-oriented workflows through Maison AI. These are development efforts within our broader ecosystem; mentioning them here should not be read as a claim that each is an acquired company or a fully deployed commercial platform.",
            "es": "Nuestras iniciativas han explorado organización de mercados con TraderView, operaciones inmobiliarias con LegacyOS y procesos de servicios con Maison AI. Son esfuerzos de desarrollo dentro del ecosistema; su mención no significa que cada uno sea una empresa adquirida ni una plataforma comercial completamente implementada."
          }
        ]
      },
      {
        "heading": {
          "en": "Where applied AI has a role",
          "es": "Dónde encaja la IA aplicada"
        },
        "paragraphs": [
          {
            "en": "We are interested in assistance that makes existing work easier: organizing information, preparing drafts, identifying what requires follow-up and helping people navigate complex systems. In high-stakes areas such as finance or property management, a clear boundary between support and autonomous decision-making is especially important.",
            "es": "Nos interesa la asistencia que facilite tareas existentes: organizar información, preparar borradores, identificar pendientes y ayudar a las personas a navegar sistemas complejos. En ámbitos delicados como finanzas o administración inmobiliaria, es especialmente importante separar el apoyo de la toma autónoma de decisiones."
          },
          {
            "en": "A useful product is measured less by how often it says “AI” and more by whether an operator can complete important work with fewer errors and less confusion. Reliability and responsible data handling have to develop alongside any new capability.",
            "es": "Un producto útil se mide menos por cuántas veces menciona la “IA” y más por su capacidad para ayudar a completar tareas importantes con menos errores y confusión. La confiabilidad y el manejo responsable de datos deben avanzar junto con cada función nueva."
          }
        ]
      },
      {
        "heading": {
          "en": "How the pieces fit together",
          "es": "Cómo se conectan las iniciativas"
        },
        "paragraphs": [
          {
            "en": "Our broader thesis combines selective acquisitions, internal product development and operational improvement. It is intentionally wider than one sector, but each initiative should earn its place by addressing a real customer need.",
            "es": "Nuestra tesis más amplia combina adquisiciones selectivas, desarrollo interno y mejora operativa. Abarca más de un sector, pero cada iniciativa debe justificar su lugar al atender una necesidad real de clientes."
          },
          {
            "en": "The opportunity we are pursuing is a collection of capable, focused businesses—not a collection of logos. That distinction will shape the companies we consider, the software we build and the way we communicate progress.",
            "es": "La oportunidad que buscamos es un conjunto de negocios capaces y especializados, no una colección de logotipos. Esa diferencia orientará las empresas que evaluemos, el software que desarrollemos y la manera de comunicar avances."
          }
        ]
      }
    ]
  }
];

export function getPublishedPosts(): EditorialPost[] {
  return editorialPosts.filter((post) => post.status === "published").sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublishedPost(slug: string): EditorialPost | undefined {
  return getPublishedPosts().find((post) => post.slug === slug);
}
