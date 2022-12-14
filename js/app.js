const seccionesPagina = new fullpage('#fullpage', {

    autoScrolling: true, // Se activa el scroll.
    fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
    fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
    easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
    scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
    css3: true, // Si usara CSS3 o javascript.
    easingcss3: 'ease-out', // Curva de velocidad del efecto.
    loopBottom: true, // Regresa a la primera seccion

    //   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
		 navigation: true, // Muesta la barra de navegación.
         /*
		 menu: '#menu', // Menu de navegación.
		 anchors: ['inicio', 'productos', 'contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		
        */ navigationTooltips: ['INICIO', 'CONTEXTO', 'FUNCIONES','CLIENTES','DATOS CF', 'FODA', 'PROYECCIÓN', 'HERRAMIENTAS'], // Tooltips que mostrara por cada boton.
		 showActiveTooltip: false, // Mostrar tooltip activa.
});

