export const translations = {
  eu: {
    sidebar: {
      dashboard: "Arbela",
      students: "Ikasleak",
      notes: "Oharrak",
      resources: "Baliabideak",
      calendar: "Egutegia",
      settings: "Ezarpenak",
      devMode: "Garapen Modua",
      session: "Saioa aktibo honela:",
    },
    dashboard: {
      hello: "Kaixo, Irakasle",
      summary: "Hemen duzu gaurko laburpena.",
      stats: {
        students: "Ikasleak Guztira",
        pending: "Esku-hartzeak Egiteke",
        notes: "Ohar Aktiboak",
      },
      pendingTitle: "Ebazteko zain",
      viewStudents: "Ikasleak ikusi",
      allClear: "Dena egunean!",
      quickActions: {
        title: "Ekintza Azkarrak",
        desc: "Kudeatu zure egunerokoa eraginkortasunez.",
        newIntervention: "Esku-hartze Berria",
        createNote: "Oharra Sortu",
      },
      dateFormat: "yyyy/MM/dd", 
    },
    students: {
      title: "Ikasleak",
      searchPlaceholder: "Bilatu izena edo taldea...",
      newStudent: "Ikasle Berria",
      back: "Zerrendara itzuli",
      history: "Esku-hartzeen Historia",
      noRecords: "Oraindik ez dago erregistrorik.",
      selectPrompt: "Aukeratu ikasle bat bere fitxa ikusteko",
      addIntervention: "Esku-hartze Berria",
      forms: {
        firstName: "Izena",
        lastName: "Abizenak",
        group: "Taldea (adib: DBH 3)",
        contact: "Gurasoen Emaila/Tel",
        tags: "Etiketak (komaz banatuta)",
        saveStudent: "Ikaslea Gorde",
        type: "Mota",
        description: "Deskribapena",
        descPlaceholder: "Gorabeheraren xehetasunak...",
        saveRecord: "Erregistroa Gorde",
      },
      status: {
        pending: "Egiteke",
        resolved: "Ebaztuta",
        markResolved: "Ebaztuta bezala markatu",
        markPending: "Egiteke bezala markatu",
      },
      types: {
        Conducta: "Jarrera",
        Académico: "Akademikoa",
        Familia: "Familia",
        Positivo: "Positiboa",
      }
    },
    notes: {
      title: "Ohar Azkarrak",
      newNote: "Ohar Berria",
      placeholder: "Idatzi zure oharra hemen...",
      save: "Gorde",
    },
    resources: {
      title: "Baliabide Liburutegia",
      searchPlaceholder: "Bilatu baliabideak...",
      add: "Gehitu",
      table: {
        resource: "Baliabidea",
        tags: "Etiketak",
        action: "Ekintza",
      },
      noResources: "Ez da baliabiderik aurkitu.",
      forms: {
        title: "Izenburua",
        url: "URL (https://...)",
        tags: "Etiketak (pdf, azterketa...)",
        category: "Kategoria",
        save: "Gorde"
      }
    },
    calendar: {
      title: "Eskola Egutegia",
      dragInstruction: "Arrastatu ohar bat egun batera ekitaldi bihurtzeko.",
      unscheduledNotes: "Planifikatu gabeko Oharrak",
      newEvent: "Ekitaldi Berria",
      todayEvents: "Gaurko Ekitaldiak",
      noEvents: "Ez dago ekitaldirik egun honetarako.",
      types: {
        general: "Orokorra",
        exam: "Azterketa",
        meeting: "Bilera"
      },
      add: "Gehitu",
      time: "Ordua",
      actions: {
        move: "Mugitu data",
        delete: "Ezabatu",
        save: "Gorde",
        cancel: "Utzi"
      }
    },
    settings: {
      title: "Firebase Konfigurazioa",
      subtitle: "Konektatu zure datu-base erreala gailu arteko sinkronizaziorako.",
      status: {
        label: "Egoera:",
        connected: "Konektatuta (Firebase)",
        mock: "Simulazio Modua (Tokiko Datuak)",
      },
      form: {
        apiKey: "API Key",
        authDomain: "Auth Domain",
        projectId: "Project ID",
        save: "Gorde eta Freskatu",
        clear: "Garbitu Konfigurazioa",
      },
      warning: "Aldaketak gordetzean orria freskatuko da."
    }
  },
  es: {
    sidebar: {
      dashboard: "Dashboard",
      students: "Mis Alumnos",
      notes: "Notas",
      resources: "Recursos",
      calendar: "Calendario",
      settings: "Configuración",
      devMode: "Modo Dev",
      session: "Sesión activa como:",
    },
    dashboard: {
      hello: "Hola, Profesor",
      summary: "Aquí tienes el resumen de hoy.",
      stats: {
        students: "Total Alumnos",
        pending: "Intervenciones Pendientes",
        notes: "Notas Activas",
      },
      pendingTitle: "Pendientes de resolver",
      viewStudents: "Ver alumnos",
      allClear: "¡Todo al día!",
      quickActions: {
        title: "Acciones Rápidas",
        desc: "Gestiona tu día a día de forma eficiente.",
        newIntervention: "Nueva Intervención",
        createNote: "Crear Nota",
      },
      dateFormat: "dd/MM/yyyy",
    },
    students: {
      title: "Alumnos",
      searchPlaceholder: "Buscar por nombre o grupo...",
      newStudent: "Nuevo Alumno",
      back: "Volver a lista",
      history: "Historial de Intervenciones",
      noRecords: "No hay registros aún.",
      selectPrompt: "Selecciona un alumno para ver su ficha",
      addIntervention: "Nueva Intervención",
      forms: {
        firstName: "Nombre",
        lastName: "Apellidos",
        group: "Grupo (ej: 3º ESO B)",
        contact: "Email/Teléfono padres",
        tags: "Etiquetas (separar por comas)",
        saveStudent: "Guardar Alumno",
        type: "Tipo",
        description: "Descripción",
        descPlaceholder: "Detalles de la incidencia...",
        saveRecord: "Guardar Registro",
      },
      status: {
        pending: "Pendiente",
        resolved: "Resuelto",
        markResolved: "Marcar como Resuelto",
        markPending: "Marcar como Pendiente",
      },
      types: {
        Conducta: "Conducta",
        Académico: "Académico",
        Familia: "Familia",
        Positivo: "Positivo",
      }
    },
    notes: {
      title: "Notas Rápidas",
      newNote: "Nueva Nota",
      placeholder: "Escribe tu nota aquí...",
      save: "Guardar",
    },
    resources: {
      title: "Biblioteca de Recursos",
      searchPlaceholder: "Buscar recursos...",
      add: "Añadir",
      table: {
        resource: "Recurso",
        tags: "Tags",
        action: "Acción",
      },
      noResources: "No se encontraron recursos.",
      forms: {
        title: "Título",
        url: "URL (https://...)",
        tags: "Tags (pdf, examen...)",
        category: "Categoría",
        save: "Guardar"
      }
    },
    calendar: {
      title: "Calendario Escolar",
      dragInstruction: "Arrastra una nota a un día para convertirla en evento.",
      unscheduledNotes: "Notas sin planificar",
      newEvent: "Nuevo Evento",
      todayEvents: "Eventos del día",
      noEvents: "No hay eventos para este día.",
      types: {
        general: "General",
        exam: "Examen",
        meeting: "Reunión"
      },
      add: "Añadir",
      time: "Hora",
      actions: {
        move: "Mover fecha",
        delete: "Eliminar",
        save: "Guardar",
        cancel: "Cancelar"
      }
    },
    settings: {
      title: "Configuración Firebase",
      subtitle: "Conecta tu base de datos real para sincronización entre dispositivos.",
      status: {
        label: "Estado:",
        connected: "Conectado (Firebase)",
        mock: "Modo Simulación (Datos Locales)",
      },
      form: {
        apiKey: "API Key",
        authDomain: "Auth Domain",
        projectId: "Project ID",
        save: "Guardar y Recargar",
        clear: "Borrar Configuración",
      },
      warning: "Al guardar los cambios la página se recargará."
    }
  }
};