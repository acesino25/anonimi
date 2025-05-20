import type { language } from '..'

export const es = {
  name: 'es',
  desc: 'Español',
  locales: {
    settings: {
      title: 'Configuración',
      save: 'Guardar',
      general: {
        title: 'General',
        requestWithBackend: 'Solicitar con backend',
        locale: 'Cambiar idioma',
      },
      openai: {
        title: 'OpenAI',
        key: '',
      },
      replicate: {},
    },
    conversations: {
      title: 'Conversaciones',
      add: 'Nueva',
      recent: 'Recientes',
      noRecent: 'No recientes',
      untitled: 'Sin título',
      promopt: {
        system: 'Información de Sistema',
        desc: 'Actuá como un abogado especializado en todas las ramas del derecho de la República Argentina (civil, penal, comercial, laboral, administrativo, ambiental, constitucional, entre otros), con sólidos conocimientos prácticos y teóricos del Código Civil y Comercial, el Código Penal, leyes provinciales y nacionales vigentes. Además, contás con nociones comparativas y contextuales del derecho internacional y de otras jurisdicciones relevantes.Tu rol es asesorar a colegas abogados y profesionales del derecho que consultan contigo para resolver dudas legales, diseñar estrategias jurídicas, interpretar normas, y comparar criterios de jurisprudencia. Respondé de forma clara, técnica cuando sea necesario, y siempre con fundamentos jurídicos precisos. Aclarás la base normativa o jurisprudencial cuando corresponda (ley, artículo, fallo, doctrina), y adaptás el nivel de detalle según lo que te pida el colega que consulta. En tus respuestas, evitás dar consejos sin aclarar si dependen de interpretación, jurisprudencia dominante, o margen de discrecionalidad judicial. Si una consulta tiene varias posibles interpretaciones o soluciones, las explicás todas brevemente. También estás preparado para: Redactar escritos jurídicos breves (modelos de demandas, contestaciones, recursos). Sugerir estrategias procesales según la jurisdicción. Explicar diferencias entre regímenes provinciales. Analizar situaciones complejas con enfoque práctico y actualizado. Si algo escapa a tu conocimiento actualizado o requiere interpretación judicial actual, lo advertís con claridad.',
      },
      emoji: 'Buscar un emoticón',
      confirm: {
        title: 'Eleminiar todos los mensajes en este chat',
        desc: 'Esta acción no puede deshacerse',
        message: 'Eliminar este registro',
        btn: 'Confirmar',
        cancel: 'Cancelar',
        submit: 'Enviar',
      },
      share: {
        title: 'Compartir conversación',
        link: {
          title: 'Compartir con Link',
          copy: 'Copiar Link',
          create: 'Crear Link',
        },
        save: 'Guardar',
        copy: 'Copiar contexto',
        messages: {
          title: 'Elegir mensaje',
          selected: 'Seleccionar mensajes',
          selectAll: 'Seleccionar todos',
        },
        tabs: {
          context: 'Compartir contexto',
          image: 'Compartir imagen',
        },
        image: {
          btn: 'Generar imagen',
          open: 'Abrir en nueva tabla',
          loading: 'Generando...',
          copy: 'Copiar imagen',
        },
      },
    },
    docs: 'Docs',
    github: 'Github',
    scroll: 'Bajar al final',
    empty: 'Sin datos',
    send: {
      placeholder: 'Ingresa tu pregunta...',
      button: 'Enviar',
    },
    copyed: 'Copiar',
  },
} as language
