(function () {
  const TOKEN_PATTERN = /\[:([^\]:]+):\]/g;

  const ICON_LIBRARY = [
    { name: 'Corazón', className: 'zmdi-favorite-outline' },
    { name: 'Corazón bold', className: 'zmdi-favorite' },
    { name: 'Estrella', className: 'zmdi-star' },
    { name: 'Flor', className: 'zmdi-flower-alt' },
        { name: 'Ojo', className: 'zmdi-eye' },
            { name: 'Carita feliz', className: 'zmdi-mood' },
    { name: 'Bicicleta', className: 'zmdi-bike' },
    { name: 'Maletín', className: 'zmdi-case' },
    { name: 'Cámara', className: 'zmdi-camera' },
    { name: 'Café', className: 'zmdi-coffee' },
    { name: 'Flash', className: 'zmdi-flash' },
    { name: 'Gamepad', className: 'zmdi-gamepad' },
    { name: 'Amor y Paz', fallback: 'V' },
    { name: 'Partenón', className: 'zmdi-balance' },
    { name: 'Graduación', className: 'zmdi-graduation-cap' },
    { name: 'Pincel', className: 'zmdi-brush' },
    { name: 'Comillas', className: 'zmdi-quote' },
    { name: 'Registrado', svg: '<svg x="0px" y="0px" viewBox="0 0 12 12" style="width: 12px;"><style type="text/css">.st0{fill:#DC4F85;}</style><path class="st0" d="M18.67,3.16v2.11l-1.84-1.05c0,0-0.62-1.91-0.7-2.12c-0.08-0.21-0.36-0.21-0.54-0.13c-0.18,0.07-0.29,0.23-0.19,0.58c0.1,0.35,0.34,1.05,0.34,1.05s-1.25-0.82-1.36-0.82s-0.41,0.02-0.48,0.25c-0.07,0.23-0.01,0.45,0.17,0.57c0.18,0.11,1.23,0.72,1.23,0.72s-0.88,0.15-1.15,0.21c-0.27,0.06-0.33,0.31-0.28,0.53c0.04,0.22,0.19,0.31,0.6,0.27c0.41-0.05,1.97-0.38,1.97-0.38l1.82,1.03l-1.8,1.09c0,0-1.96-0.41-2.13-0.41s-0.44,0.11-0.47,0.41c-0.03,0.3,0.26,0.42,0.37,0.42s1.1,0.21,1.1,0.21s-1.11,0.67-1.3,0.79c-0.18,0.12-0.21,0.39-0.07,0.57c0.13,0.18,0.31,0.23,0.57,0.11c0.25-0.12,1.22-0.73,1.22-0.73s-0.35,0.92-0.38,1.11s0,0.47,0.27,0.52c0.27,0.05,0.52-0.12,0.56-0.25c0.04-0.13,0.68-2.02,0.68-2.02l1.81-1.09l-0.02,2.2c0,0-1.34,1.49-1.4,1.57s-0.16,0.4,0.08,0.54c0.24,0.15,0.48,0.18,0.63,0c0.15-0.18,0.71-0.85,0.71-0.85s-0.04,1.22,0,1.5s0.29,0.34,0.43,0.33c0.15-0.01,0.42-0.1,0.42-0.4s0-1.49,0-1.49s0.61,0.73,0.8,0.93c0.19,0.21,0.42,0.05,0.59-0.05c0.17-0.1,0.12-0.47,0-0.59S19.5,8.79,19.5,8.79V6.72l1.82,1.07c0,0,0.67,1.82,0.71,2.02c0.05,0.21,0.33,0.34,0.56,0.25c0.23-0.08,0.29-0.27,0.27-0.48c-0.02-0.22-0.4-1.11-0.4-1.11l1.27,0.67c0,0,0.47,0.13,0.57-0.17c0.1-0.3-0.08-0.5-0.29-0.61s-1.14-0.64-1.14-0.64s1.08-0.27,1.23-0.28s0.26-0.2,0.22-0.48c-0.04-0.28-0.32-0.34-0.45-0.32c-0.13,0.01-2.09,0.42-2.09,0.42l-1.82-1.04l1.82-1.07c0,0,1.92,0.4,2.08,0.41c0.16,0.01,0.45-0.01,0.47-0.34c0.03-0.33-0.22-0.51-0.35-0.52c-0.13-0.01-1.09-0.22-1.09-0.22s1.26-0.74,1.34-0.77c0.08-0.04,0.18-0.4,0.04-0.54s-0.38-0.21-0.59-0.08c-0.22,0.12-1.2,0.68-1.2,0.68s0.33-0.99,0.38-1.17c0.05-0.18-0.13-0.41-0.31-0.47c-0.18-0.05-0.48,0.15-0.51,0.32c-0.02,0.17-0.67,1.97-0.67,1.97l-1.85,1.07V3.12c0,0,1.36-1.51,1.46-1.65s0.06-0.42-0.13-0.54c-0.19-0.12-0.5-0.05-0.58,0.11C20.18,1.2,19.53,1.9,19.53,1.9V0.34c0,0-0.11-0.36-0.43-0.34c-0.32,0.02-0.42,0.41-0.42,0.41l-0.02,1.51c0,0-0.78-0.96-0.84-1.03s-0.34-0.04-0.48,0.11c-0.15,0.15-0.19,0.4,0.04,0.65S18.67,3.16,18.67,3.16z"/><g><g><path class="st0" d="M3.4,8.98V2.86H6c0.65,0,1.13,0.06,1.43,0.16c0.3,0.11,0.53,0.31,0.71,0.59c0.18,0.28,0.27,0.6,0.27,0.96c0,0.46-0.14,0.84-0.41,1.14C7.73,6.02,7.33,6.2,6.79,6.28C7.06,6.44,7.28,6.61,7.45,6.8c0.17,0.19,0.41,0.52,0.7,0.99L8.9,8.98H7.43L6.53,7.65C6.21,7.18,6,6.88,5.88,6.75C5.76,6.63,5.64,6.54,5.51,6.5C5.38,6.45,5.17,6.43,4.89,6.43H4.64v2.56H3.4zM4.64,5.45h0.91c0.59,0,0.96-0.03,1.11-0.08c0.15-0.05,0.26-0.14,0.35-0.26c0.08-0.12,0.13-0.28,0.13-0.46c0-0.21-0.06-0.37-0.17-0.5C6.86,4.03,6.7,3.95,6.5,3.92C6.4,3.9,6.1,3.9,5.6,3.9H4.64V5.45z"/><path class="st0" d="M11.5,5.75c0,3.18-2.57,5.75-5.75,5.75S0,8.93,0,5.75S2.57,0,5.75,0S11.5,2.57,11.5,5.75z M5.75,1.13c-2.55,0-4.62,2.07-4.62,4.62s2.07,4.62,4.62,4.62s4.62-2.07,4.62-4.62S8.3,1.13,5.75,1.13z"/></svg>'},
    { name: 'Nieve', svg: '<svg x="0px" y="0px" viewBox="0 0 12 12" style="width: 12px;"><style type="text/css">.st0{fill:#DC4F85;}</style><path class="st0" d="M5.67,3.16v2.11L3.83,4.21c0,0-0.62-1.91-0.7-2.12C3.04,1.89,2.76,1.89,2.58,1.96C2.4,2.04,2.29,2.19,2.39,2.54c0.1,0.35,0.34,1.05,0.34,1.05S1.48,2.77,1.37,2.77c-0.11,0-0.41,0.02-0.48,0.25C0.81,3.26,0.87,3.48,1.06,3.59s1.23,0.72,1.23,0.72S1.41,4.46,1.14,4.52C0.87,4.58,0.81,4.83,0.86,5.05c0.04,0.22,0.19,0.31,0.6,0.27c0.41-0.05,1.97-0.38,1.97-0.38l1.82,1.03l-1.8,1.09c0,0-1.96-0.41-2.13-0.41S0.88,6.76,0.84,7.06C0.81,7.36,1.1,7.48,1.21,7.48c0.11,0,1.1,0.21,1.1,0.21S1.2,8.35,1.02,8.48C0.84,8.6,0.81,8.86,0.95,9.04c0.13,0.18,0.31,0.23,0.57,0.11c0.25-0.12,1.22-0.73,1.22-0.73S2.39,9.35,2.36,9.54s0,0.47,0.27,0.52c0.27,0.05,0.52-0.12,0.56-0.25c0.04-0.13,0.68-2.02,0.68-2.02L5.67,6.7L5.65,8.9c0,0-1.34,1.49-1.4,1.57c-0.06,0.08-0.16,0.4,0.08,0.54c0.24,0.15,0.48,0.18,0.63,0c0.15-0.18,0.71-0.85,0.71-0.85s-0.04,1.22,0,1.5S5.96,12.01,6.1,12c0.15-0.01,0.42-0.1,0.42-0.4s0-1.49,0-1.49s0.61,0.73,0.8,0.93c0.19,0.21,0.42,0.05,0.59-0.05c0.17-0.1,0.12-0.47,0-0.59S6.5,8.79,6.5,8.79V6.72l1.82,1.07c0,0,0.67,1.82,0.71,2.02c0.05,0.21,0.33,0.34,0.56,0.25S9.88,9.8,9.86,9.58s-0.4-1.11-0.4-1.11l1.27,0.67c0,0,0.47,0.13,0.57-0.17c0.1-0.3-0.08-0.5-0.29-0.61C10.8,8.25,9.87,7.71,9.87,7.71s1.08-0.27,1.23-0.28s0.26-0.2,0.22-0.48c-0.04-0.28-0.32-0.34-0.45-0.32c-0.13,0.01-2.09,0.42-2.09,0.42L6.96,6.02l1.82-1.07c0,0,1.92,0.4,2.08,0.41s0.45-0.01,0.47-0.34c0.03-0.33-0.22-0.51-0.35-0.52c-0.13-0.01-1.09-0.22-1.09-0.22s1.26-0.74,1.34-0.77s0.18-0.4,0.04-0.54s-0.38-0.21-0.59-0.08C10.46,3,9.48,3.56,9.48,3.56s0.33-0.99,0.38-1.17C9.91,2.2,9.72,1.97,9.54,1.92C9.36,1.87,9.06,2.07,9.03,2.24C9.01,2.41,8.37,4.21,8.37,4.21L6.52,5.28V3.12c0,0,1.36-1.51,1.46-1.65c0.11-0.13,0.06-0.42-0.13-0.54s-0.5-0.05-0.58,0.11S6.53,1.9,6.53,1.9V0.34c0,0-0.11-0.36-0.43-0.34S5.67,0.41,5.67,0.41L5.65,1.93c0,0-0.78-0.96-0.84-1.03C4.75,0.82,4.47,0.86,4.33,1.01c-0.15,0.15-0.19,0.4,0.04,0.65C4.59,1.91,5.67,3.16,5.67,3.16z"/></svg>' },
    { name: 'Sol', className: 'zmdi-sun' },
    { name: 'Switch', svg: '<svg x="0px" y="0px" viewBox="0 0 12 12" style="width: 12px;"><style type="text/css">.st0{fill:#DE4F87;}</style><path class="st0" d="M26,12h-0.64l-1.76-1.76c0,0-2.24,0.66-4.24-0.23s-3-2.82-3.34-4.24c-0.34-1.42-1.08-4.74-1.3-5.04c0,0,4.44-0.41,7.19,1.6s2.45,6.18,2.13,7.51L26,12zM19.5,4.26c-1.14-1.79-3.34-2.61-3.34-2.61c0.62,0.11,1.49,1.26,3.27,4.47c1.79,3.21,4.05,3.57,4.05,3.57C21.6,8.75,20.64,6.05,19.5,4.26z"/><path class="st0"d="M8.38,9.33H4.12c-2,0-3.62-1.62-3.62-3.62v0c0-2,1.62-3.62,3.62-3.62h4.26c2,0,3.62,1.62,3.62,3.62v0C12,7.71,10.38,9.33,8.38,9.33z M8.38,2.84c-1.58,0-2.86,1.28-2.86,2.86S6.8,8.57,8.38,8.57s2.86-1.28,2.86-2.86 S9.96,2.84,8.38,2.84z"/></svg>' },
    { name: 'Camión', className: 'zmdi-truck' },
    { name: 'Balón', svg: '<svg x="0px" y="0px" viewBox="0 0 12 12" style="width: 12px;"><style type="text/css">.st0{fill:#DC4F85;}</style><g><path class="st0" d="M11.85,5.86c0,3.23-2.62,5.86-5.86,5.86S0.14,9.09,0.14,5.86S2.76,0,6,0S11.85,2.62,11.85,5.86z M1.93,2.89L2.8,2.81l0.42,2.07L1.62,6.32L0.95,5.74c0.05,1.87,1,3.02,1,3.02l0.19-0.86l2.14,0.23l0.89,1.93l-0.78,0.47c1.93,0.44,3.14,0,3.14,0l-0.74-0.45l0.89-1.95l2.1-0.28l0.2,0.9c1.04-1.48,0.98-3.02,0.98-3.02l-0.69,0.59L8.71,4.89L9.1,2.81l0.92,0.06c-1.05-1.33-2.55-1.8-2.55-1.8l0.3,0.9l-1.95,0.9L4.08,1.82l0.33-0.75C2.61,1.66,1.93,2.89,1.93,2.89z"/><polygon class="st0" points="5.95,3.94 4.14,5.26 4.84,7.44 7.09,7.44 7.79,5.29 	"/></g></svg>' },
    { name: 'Avión', className: 'zmdi-airplane' },
    { name: 'Motocicleta', svg: '<svg x="0px" y="0px" viewBox="0 0 12 12"style="width: 14px;"><style type="text/css">.st0{fill:#DC4F85;}</style><path class="st0" d="M7.36,3.66L6.88,2.98c0,0-0.84,0.01-1.06,0.01c-0.22,0-0.37-0.15-0.37-0.33c0-0.19,0.16-0.35,0.29-0.35c0.13,0,1.07,0,1.25,0c0.17,0,0.3,0.09,0.36,0.15c0.06,0.06,0.38,0.56,0.38,0.56L8.4,2.31c0,0,0.51,0,0.67,0s0.32,0.22,0.32,0.31c0,0.09,0,0.38,0,0.58c0,0.2-0.09,0.43-0.26,0.43c-0.17,0-1,0-1,0l0.59,0.88c0.02-0.07,1.13-0.43,1.86-0.06c0.73,0.37,1.62,1.24,1.39,2.52c-0.24,1.29-1.48,2.12-2.55,1.92s-2-1.03-2.02-2.24C7.38,5.44,8.18,4.91,8.18,4.91L7.81,4.34C7.08,4.74,6.75,6.04,6.75,6.41S6.64,6.91,6.38,6.91c-0.26,0-1.62,0.01-1.62,0.01C4.61,8.13,3.49,8.88,2.55,8.89S0.37,8.36,0.21,6.92s0.8-2.29,1.6-2.52s1.46,0.06,1.46,0.06l0.15-0.24C2.88,3.61,1.79,3.62,1.55,3.63C1.3,3.64,1.17,3.49,1.17,3.31S1.26,3,1.36,3c0.1,0,0.4-0.04,1.2,0s1.55,0.63,1.55,0.63L7.36,3.66z M1.6,5.16c-0.43,0.2-1.1,1.2-0.64,2.08s1.2,1.18,2.08,0.92s1.06-1.25,1.06-1.25s-1.15,0-1.52,0S2.12,6.64,2.2,6.46c0.09-0.17,0.74-1.43,0.74-1.43C2.71,4.91,2.03,4.97,1.6,5.16z M8.09,6.14c-0.07,0.3-0.17,1.53,0.83,1.93c1,0.4,1.77,0.01,2.16-0.57s0.42-1.61-0.36-2.21C9.95,4.68,9.05,5.08,9.05,5.08s0.78,1.05,0.96,1.45c0.19,0.4-0.43,0.48-0.56,0.27S8.51,5.42,8.51,5.42S8.16,5.85,8.09,6.14z"/></svg>' },
    { name: 'Copa', className: 'zmdi-cocktail' },
    { name: 'Película', className: 'zmdi-movie' },
    { name: 'Mujer', className: 'zmdi-female' },
    { name: 'Hombre', className: 'zmdi-male' },
    { name: 'Auto', className: 'zmdi-car' },
    { name: 'Huella', svg: '<svg x="0px" y="0px" viewBox="0 0 12 12" style="width: 12px;"><style type="text/css">.st0{fill:#DE4F87;}</style><g><ellipse transform="matrix(0.9691 -0.2468 0.2468 0.9691 -0.5979 1.096)" class="st0" cx="4.07" cy="2.93" rx="1.59" ry="2.14"/><ellipse transform="matrix(0.9444 -0.3288 0.3288 0.9444 -1.9277 0.8841)" class="st0" cx="1.65" cy="6.14" rx="1.6" ry="2.03"/><ellipse transform="matrix(0.2785 -0.9604 0.9604 0.2785 1.5791 14.3852)" class="st0" cx="10.36" cy="6.14" rx="2.03" ry="1.6"/><ellipse transform="matrix(0.1867 -0.9824 0.9824 0.1867 3.6659 10.2943)" class="st0" cx="8.05" cy="2.93" rx="2.14" ry="1.59"/><path class="st0" d="M6.01,6.5c1.4-0.19,3.6,1.95,3.96,3.29c0.36,1.33,0.14,1.56-0.22,1.82c-0.36,0.26-1.16,0.26-2.01,0 s-1.21-0.52-1.73-0.47c-0.52,0.05-1.47,0.38-1.75,0.47s-1.33,0.52-2.09-0.12s0.24-2.39,0.86-3.09S4.61,6.69,6.01,6.5z"/></g></svg>' },
    { name: 'Música', className: 'zmdi-collection-music' },
    { name: 'Luna', svg: '<svg x="0px" y="0px" viewBox="0 0 12 12" style="width: 12px;"><style type="text/css">.st0{fill:#DE4F87;}</style><path class="st0" d="M5.64,0c0,0-2.47,3.24-0.44,6.48s6.44,2.27,6.44,2.27s-1.63,3.88-6.5,3.16c-4.88-0.72-5.44-5.94-4.6-8.1 S3.95,0,5.64,0z"/></svg>' },
    { name: 'Hoja', svg: '<svg x="0px" y="0px" viewBox="0 0 12 12" style="width: 12px;"><style type="text/css">.st0{fill:#DE4F87;}</style><path class="st0" d="M12,12h-0.64L9.6,10.24c0,0-2.24,0.66-4.24-0.23s-3-2.82-3.34-4.24s-1.08-4.74-1.3-5.04c0,0,4.44-0.41,7.19,1.6s2.45,6.18,2.13,7.51L12,12z M5.5,4.26C4.35,2.48,2.16,1.65,2.16,1.65c0.62,0.11,1.49,1.26,3.27,4.47s4.05,3.57,4.05,3.57C7.6,8.75,6.64,6.05,5.5,4.26z"/></svg>' },
    { name: 'Casa', className: 'zmdi-home' }

  ];

  const FALLBACK_FONTS = [
    {
      id: 'signpainter-medium',
      label: 'SignPainter Medium',
      family: '"SignPainter", "Brush Script MT", cursive',
      weight: '500',
      style: 'normal',
      previewText: 'Siempre'
    },
    {
      id: 'great-vibes',
      label: 'Great Vibes',
      family: '"Great Vibes", "Snell Roundhand", cursive',
      weight: '400',
      style: 'normal',
      previewText: 'Amor'
    },
    {
      id: 'atma',
      label: 'Atma',
      family: '"Atma", "Trebuchet MS", sans-serif',
      weight: '400',
      style: 'normal',
      previewText: 'Familia'
    },
    {
      id: 'georgia',
      label: 'Georgia',
      family: 'Georgia, "Times New Roman", serif',
      weight: '400',
      style: 'normal',
      previewText: 'A+M'
    }
  ];

  const FALLBACK_CHARMS = [
    { id: 'charm-heart', code: 'heart', label: 'Corazon', description: 'Charm romantico', accent: '#d26a7a', image: '' },
    { id: 'charm-star', code: 'star', label: 'Estrella', description: 'Brillo delicado', accent: '#c9a851', image: '' },
    { id: 'charm-moon', code: 'moon', label: 'Luna', description: 'Acabado nocturno', accent: '#6b7194', image: '' },
    { id: 'charm-flower', code: 'flower', label: 'Flor', description: 'Detalle suave', accent: '#b77b90', image: '' },
    { id: 'charm-sun', code: 'sun', label: 'Sol', description: 'Acento luminoso', accent: '#d8aa5d', image: '' },
    { id: 'charm-leaf', code: 'leaf', label: 'Hoja', description: 'Textura organica', accent: '#7a9470', image: '' },
    { id: 'charm-home', code: 'home', label: 'Hogar', description: 'Recuerdo cercano', accent: '#8f7b67', image: '' },
    { id: 'charm-paw', code: 'paw', label: 'Huella', description: 'Compania fiel', accent: '#6f6258', image: '' },
    { id: 'charm-music', code: 'music', label: 'Musica', description: 'Nota especial', accent: '#5f6d87', image: '' },
    { id: 'charm-eye', code: 'eye', label: 'Ojo', description: 'Proteccion simbolica', accent: '#597792', image: '' }
  ];

  const PERSONALIZATION_RULES = {
    'Personalizacion_1': {
      displayName: 'Collar Multicharms',
      label: 'Personalizado 1',
      previewStyle: 'multicharm',
      highlights: ['1 a 5 espacios totales', 'Mini dije grabado opcional', 'Hasta 10 caracteres o íconos por lado'],
      charms: { enabled: true, max: 5, combinedMin: 1, optional: false },
      engravingShape: {
        enabled: true,
        optional: true,
        shapes: ['Rectangulo Vertical', 'Circulo', 'Corazon'],
        consumesCharmSlot: 1,
        minChars: 1,
        maxChars: 10,
        fontSelectable: true,
        sides: {
          front: { label: 'Frente', defaultActive: true },
          back: { label: 'Atrás', defaultActive: false }
        }
      },
      photos: { enabled: false }
    },
    'Personalizacion_2': {
      displayName: 'Brazaletes',
      label: 'Personalizado 2',
      previewStyle: 'bracelet',
      highlights: ['Grabado opcional', 'Frente y atrás', '3 a 40 caracteres o íconos por lado'],
      sideText: {
        enabled: true,
        minChars: 3,
        maxChars: 40,
        minRequiredSides: 0,
        fontSelectable: true,
        sides: {
          front: { label: 'Grabado frente', defaultActive: true },
          back: { label: 'Grabado atrás', defaultActive: false }
        }
      },
      charms: { enabled: false },
      photos: { enabled: false }
    },
    'Personalizacion_3': {
      displayName: 'Pulseras y Esclavas',
      label: 'Personalizado 3',
      previewStyle: 'bracelet',
      highlights: ['Grabado opcional', 'Hasta 20 caracteres o íconos', '1 charm opcional'],
      sideText: {
        enabled: true,
        minChars: 1,
        maxChars: 20,
        minRequiredSides: 0,
        fontSelectable: true,
        sides: {
          front: { label: 'Grabado frente', defaultActive: true },
          back: { label: 'Grabado atrás', defaultActive: false }
        }
      },
      charms: { enabled: true, max: 1, optional: true, minWhenSelected: 1 },
      photos: { enabled: false }
    },
    'Personalizacion_4': {
      displayName: 'Sobre con mensaje especial',
      label: 'Personalizado 4',
      previewStyle: 'envelope',
      highlights: ['Texto opcional a 1 lado', '1 foto opcional', 'Hasta 2 charms opcionales'],
      singleText: {
        enabled: true,
        label: 'Mensaje',
        minChars: 1,
        maxChars: 20,
        fontSelectable: false
      },
      charms: { enabled: true, max: 2, optional: true, minWhenSelected: 1 },
      photos: { enabled: true, min: 0, max: 1 }
    },
    'Personalizacion_5': {
      displayName: 'Llaveritos',
      label: 'Personalizado 5',
      previewStyle: 'keychain',
      highlights: ['Texto opcional por ambos lados', '1 foto opcional', '1 a 3 charms opcionales'],
      sideText: {
        enabled: true,
        minChars: 1,
        maxChars: 20,
        minRequiredSides: 0,
        fontSelectable: true,
        sides: {
          front: { label: 'Texto principal', defaultActive: true },
          back: { label: 'Texto secundario', defaultActive: false }
        }
      },
      charms: { enabled: true, max: 3, optional: true, minWhenSelected: 1 },
      photos: { enabled: true, min: 0, max: 1 }
    },
    'Personalizacion_6': {
      displayName: 'Personalizacion avanzada completa',
      label: 'Personalizado 6',
      previewStyle: 'atelier',
      highlights: ['Hasta 5 espacios de texto', 'Hasta 4 fotos', 'Charms, forma y textos combinables'],
      multiText: {
        enabled: true,
        minChars: 1,
        maxChars: 20,
        maxSlots: 5,
        fontSelectable: true
      },
      engravingShape: {
        enabled: true,
        optional: true,
        shapes: ['Rectangulo Vertical', 'Circulo', 'Corazon'],
        consumesCharmSlot: 0,
        singleTextLabel: 'Texto para forma de grabado',
        minChars: 1,
        maxChars: 10,
        fontSelectable: true,
        singleText: true
      },
      charms: { enabled: true, max: 5, optional: true, minWhenSelected: 1 },
      photos: { enabled: true, min: 0, max: 4 }
    },
    'Personalizacion_7': {
      displayName: 'Dije y Collar Plaquita',
      label: 'Personalizado 7',
      previewStyle: 'plate',
      shapeSelector: {
        enabled: false,
        required: false,
        syncVariant: false,
        shapes: ['Corazon', 'Circulo', 'Rombo', 'Rectangulo Vertical']
      },
      sideText: {
        enabled: true,
        minChars: 3,
        maxChars: 40,
        minRequiredSides: 0,
        fontSelectable: true,
        sides: {
          front: { label: 'Grabado frente', defaultActive: true },
          back: { label: 'Grabado atrás', defaultActive: false }
        }
      },
      charms: { enabled: true, max: 3, optional: true, minWhenSelected: 1 },
      photos: { enabled: true, min: 0, max: 1 }
    },
    'Personalizacion_8': {
      displayName: 'Relicario',
      label: 'Personalizado 8',
      previewStyle: 'locket',
      highlights: ['1 o 2 fotos obligatorias', 'Al menos un lado con texto', 'Forma sincronizable'],
      shapeSelector: {
        enabled: false,
        required: false,
        syncVariant: false,
        shapes: ['Circulo chico', 'Circulo grande', 'Corazon chico', 'Corazon grande']
      },
      sideText: {
        enabled: true,
        minChars: 1,
        maxChars: 40,
        minRequiredSides: 1,
        fontSelectable: true,
        sides: {
          front: { label: 'Grabado frente', defaultActive: true },
          back: { label: 'Grabado atrás', defaultActive: false }
        }
      },
      charms: { enabled: true, max: 3, optional: true, minWhenSelected: 1 },
      photos: { enabled: true, min: 1, max: 2 }
    },
    'Personalizacion_9': {
      displayName: 'Collares para perros',
      label: 'Personalizado 9',
      previewStyle: 'pet',
      highlights: ['Al menos un lado con texto', 'Hasta 25 caracteres o íconos', '1 o 3 charms opcionales'],
      shapeSelector: {
        enabled: false,
        required: false,
        syncVariant: false,
        shapes: ['Corazon', 'Circulo', 'Hueso grande', 'Hueso pequeno']
      },
      sideText: {
        enabled: true,
        minChars: 1,
        maxChars: 25,
        minRequiredSides: 1,
        fontSelectable: true,
        sides: {
          front: { label: 'Grabado frente', defaultActive: true },
          back: { label: 'Grabado atrás', defaultActive: false }
        }
      },
      charms: { enabled: true, max: 3, optional: true, minWhenSelected: 1, allowedTotalCounts: [1, 3] },
      photos: { enabled: false }
    }
  };

  const ICON_INDEX = ICON_LIBRARY.reduce(function (accumulator, item) {
    accumulator[normalizeValue(item.name)] = item;
    return accumulator;
  }, {});

  function normalizeValue(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function tokenizeRawValue(rawValue) {
    const parts = [];
    const value = String(rawValue || '');
    let lastIndex = 0;

    value.replace(TOKEN_PATTERN, function (match, tokenName, offset) {
      if (offset > lastIndex) {
        parts.push({ type: 'text', value: value.slice(lastIndex, offset) });
      }

      parts.push({ type: 'icon', value: tokenName });
      lastIndex = offset + match.length;
      return match;
    });

    if (lastIndex < value.length) {
      parts.push({ type: 'text', value: value.slice(lastIndex) });
    }

    if (!parts.length) {
      parts.push({ type: 'text', value: '' });
    }

    return parts;
  }

  function countRawCharacters(rawValue) {
    const value = String(rawValue || '');
    let count = 0;
    let lastIndex = 0;

    value.replace(TOKEN_PATTERN, function (match, tokenName, offset) {
      count += value.slice(lastIndex, offset).length;
      count += 1;
      lastIndex = offset + match.length;
      return match;
    });

    count += value.slice(lastIndex).length;
    return count;
  }

  function rawToPropertyValue(rawValue) {
    return String(rawValue || '').replace(TOKEN_PATTERN, function (match, tokenName) {
      return '[' + tokenName + ']';
    });
  }

  function createIconTokenElement(iconName) {
    const token = document.createElement('span');
    const icon = ICON_INDEX[normalizeValue(iconName)] || { name: iconName, fallback: iconName.slice(0, 2).toUpperCase() };

    token.className = 'pp-inline-icon';
    token.setAttribute('data-icon-token', icon.name);
    token.setAttribute('contenteditable', 'false');
    token.setAttribute('title', icon.name);

    if (icon.className) {
      token.innerHTML = '<i class="zmdi ' + icon.className + '" aria-hidden="true"></i>';
    } else {
      token.innerHTML = '<span class="pp-inline-icon__fallback">' + escapeHtml(icon.fallback || icon.name.slice(0, 2).toUpperCase()) + '</span>';
    }

    if (icon.svg) {  
      token.innerHTML = icon.svg; 
    } else if (icon.className) {  
      token.innerHTML = '<i class="zmdi ' + icon.className + '" aria-hidden="true"></i>'; 
    } else {  
      token.innerHTML = '<span class="pp-inline-icon__fallback">' + icon.fallback + '</span>'; 
    }

    return token;
  }

  function rawToHtml(rawValue) {
    return tokenizeRawValue(rawValue).map(function (part) {
      if (part.type === 'icon') {
        return createIconTokenElement(part.value).outerHTML;
      }

      return escapeHtml(part.value).replace(/\n/g, '<br>');
    }).join('');
  }

  function editorToRawValue(editor) {
    const pieces = [];

    function readNode(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        pieces.push(node.textContent || '');
        return;
      }

      if (node.nodeType !== Node.ELEMENT_NODE) {
        return;
      }

      if (node.hasAttribute('data-icon-token')) {
        pieces.push('[:' + node.getAttribute('data-icon-token') + ':]');
        return;
      }

      Array.from(node.childNodes).forEach(readNode);
    }

    Array.from(editor.childNodes).forEach(readNode);
    return pieces.join('').replace(/\u00a0/g, ' ');
  }

  function fillEditor(editor, rawValue) {
    const fragment = document.createDocumentFragment();

    tokenizeRawValue(rawValue).forEach(function (part) {
      if (part.type === 'icon') {
        fragment.appendChild(createIconTokenElement(part.value));
      } else if (part.value) {
        fragment.appendChild(document.createTextNode(part.value));
      }
    });

    editor.innerHTML = '';
    editor.appendChild(fragment);
  }

  function setCaretAfterNode(node) {
    const selection = window.getSelection();
    if (!selection) return;

    const range = document.createRange();
    range.setStartAfter(node);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function slugifyShape(shapeLabel) {
    const normalized = normalizeValue(shapeLabel);

    if (normalized.indexOf('corazon') > -1) return 'heart';
    if (normalized.indexOf('circulo') > -1) return 'circle';
    if (normalized.indexOf('rombo') > -1) return 'diamond';
    if (normalized.indexOf('hueso') > -1) return 'bone';
    return 'rectangle';
  }

  function shapeSvg(shapeLabel) {
    const slug = slugifyShape(shapeLabel);

    switch (slug) {
      case 'heart':
        return '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M60 108 18 66C5 53 5 32 18 19s34-13 42 2c8-15 29-15 42-2s13 34 0 47Z" fill="currentColor"></path></svg>';
      case 'circle':
        return '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="46" fill="currentColor"></circle></svg>';
      case 'diamond':
        return '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M60 10 110 60 60 110 10 60Z" fill="currentColor"></path></svg>';
      case 'bone':
        return '<svg viewBox="0 0 180 120" aria-hidden="true"><path d="M38 24c10 0 18 7 21 16h62c3-9 11-16 21-16 13 0 23 10 23 23 0 8-4 15-11 19 7 4 11 11 11 19 0 13-10 23-23 23-10 0-18-7-21-16H59c-3 9-11 16-21 16-13 0-23-10-23-23 0-8 4-15 11-19-7-4-11-11-11-19 0-13 10-23 23-23Z" fill="currentColor"></path></svg>';
      default:
        return '<svg viewBox="0 0 90 120" aria-hidden="true"><rect x="18" y="8" width="54" height="104" rx="20" fill="currentColor"></rect></svg>';
    }
  }

  function unique(values) {
    return values.filter(function (value, index) {
      return values.indexOf(value) === index;
    });
  }

  function hasRawValue(rawValue) {
    return countRawCharacters(rawValue) > 0;
  }

  class ProductPersonalizer {
    constructor(root) {
      this.root = root;
      this.form = root.closest('form') || document.getElementById(root.dataset.formId);
      this.config = this.readConfig();
      this.rule = PERSONALIZATION_RULES[this.config.activeTag];

      if (!this.form || !this.rule) {
        return;
      }

      this.fieldsContainer = this.root.querySelector('[data-personalizer-fields]');
      this.statusContainer = this.root.querySelector('[data-personalizer-status]');
      this.errorsContainer = this.root.querySelector('[data-personalizer-errors]');
      this.summaryContainer = this.root.querySelector('[data-summary-list]');
      this.propertiesContainer = this.root.querySelector('[data-personalizer-properties]');
      this.previewMain = this.root.querySelector('[data-preview-main]');
      this.previewEmpty = this.root.querySelector('[data-preview-empty]');
      this.previewGallery = this.root.querySelector('[data-preview-gallery]');
      this.previewCharms = this.root.querySelector('[data-preview-charms]');
      this.shapeBadge = this.root.querySelector('[data-preview-shape-badge]');
      this.addButton = this.form.querySelector('[name="add"]');
      this.fonts = (this.config.fonts && this.config.fonts.length ? this.config.fonts : FALLBACK_FONTS).map(function (font, index) {
        return {
          id: font.id || 'font-' + index,
          label: font.label || 'Font ' + (index + 1),
          family: font.family || FALLBACK_FONTS[0].family,
          weight: font.weight || '400',
          style: font.style || 'normal',
          previewText: font.previewText || 'Texto'
        };
      });
      this.charmsCatalog = this.config.charms && this.config.charms.length ? this.config.charms : FALLBACK_CHARMS;
      this.activeEditor = null;
      this.nativeShapeControl = this.findNativeShapeControl();
      this.modal = this.root.querySelector('[data-pp-modal]');
      this.triggerSubtitle = this.root.querySelector('[data-pp-trigger-subtitle]');
      this.triggerCheck = this.root.querySelector('[data-pp-trigger-check]');
      this.inlinePanel = this.root.querySelector('[data-pp-inline-panel]');
      this.inlinePreview = this.root.querySelector('[data-pp-inline-preview]');
      this.inlineDetails = this.root.querySelector('[data-pp-inline-details]');
      this.inlineTotal = this.root.querySelector('[data-pp-inline-total]');
      this.inlineTotalValue = this.root.querySelector('[data-pp-inline-total-value]');
      this.confirmButton = this.root.querySelector('[data-action="confirm-personalizer"]');
      this._escHandler = this.handleEscape.bind(this);
      this.state = this.buildInitialState();
      this.initialProductShape = this.state.productShape || '';
      this.savedSelectionByField = {};
      this.isSubmitting = false;
      this._variantRenderedHandler = this.handleVariantRendered.bind(this);

      this.renderFields();

      this._triggerRoot = this.root;
      if (this.modal) {
        document.body.appendChild(this.modal);
        this.root = this.modal;
        var formId = this.form.id;
        if (formId) {
          Array.from(this.modal.querySelectorAll('input[type="file"][name]')).forEach(function (el) {
            el.setAttribute('form', formId);
          });
        }
      }

      this.bindEvents();
      document.addEventListener('product:variant:rendered', this._variantRenderedHandler);
      this.updateAll();
      this._triggerRoot.classList.add('is-ready');
    }

    readConfig() {
      const script = this.root.querySelector('[data-personalizer-config]');
      return script ? JSON.parse(script.textContent) : {};
    }

    buildInitialState() {
      const defaultFont = this.fonts[0] ? this.fonts[0].id : '';
      const initialShape = this.nativeShapeControl ? this.getNativeShapeValue() : '';
      const photos = [];
      const maxPhotos = this.rule.photos && this.rule.photos.max ? this.rule.photos.max : 0;

      for (let index = 0; index < maxPhotos; index += 1) {
        photos.push({ file: null, url: '' });
      }

      return {
        productShape: initialShape || (this.rule.shapeSelector && this.rule.shapeSelector.required ? this.rule.shapeSelector.shapes[0] : ''),
        engravingShape: '',
        engravingFrontActive: false,
        engravingBackActive: false,
        engravingFrontText: '',
        engravingBackText: '',
        engravingFrontFont: defaultFont,
        engravingBackFont: defaultFont,
        mainFrontActive: !!(this.rule.sideText && this.rule.sideText.sides.front && this.rule.sideText.sides.front.defaultActive),
        mainBackActive: !!(this.rule.sideText && this.rule.sideText.sides.back && this.rule.sideText.sides.back.defaultActive),
        mainFrontText: '',
        mainBackText: '',
        mainFrontFont: defaultFont,
        mainBackFont: defaultFont,
        singleText: '',
        singleFont: defaultFont,
        shapeText: '',
        shapeFont: defaultFont,
        textSlots: [],
        charms: {},
        photos: photos,
        isValid: true
      };
    }

    bindEvents() {
      if (this._triggerRoot && this._triggerRoot !== this.root) {
        this._triggerRoot.addEventListener('click', this.handleClick.bind(this));
      }
      this.root.addEventListener('click', this.handleClick.bind(this));
      this.root.addEventListener('change', this.handleChange.bind(this));
      this.root.addEventListener('input', this.handleInput.bind(this));
      this.root.addEventListener('focusin', this.handleFocusIn.bind(this));
      this.root.addEventListener('keyup', this.handleEditorSelection.bind(this));
      this.root.addEventListener('mouseup', this.handleEditorSelection.bind(this));
      this.root.addEventListener('keydown', this.handleKeyDown.bind(this));
      this.root.addEventListener('paste', this.handlePaste.bind(this));
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
      this.form.addEventListener('change', this.handleVariantSync.bind(this));
    }

    handleFocusIn(event) {
      const editor = event.target.closest('[data-token-editor]');
      if (editor) {
        this.activeEditor = editor;
        this.rememberSelection(editor);
      }
    }

    handleEditorSelection(event) {
      const editor = event.target.closest('[data-token-editor]');
      if (!editor) return;

      this.activeEditor = editor;
      this.rememberSelection(editor);
    }

    handleKeyDown(event) {
      const editor = event.target.closest('[data-token-editor]');
      if (editor && event.key === 'Enter') {
        event.preventDefault();
      }
    }

    handlePaste(event) {
      const editor = event.target.closest('[data-token-editor]');
      if (!editor) return;

      event.preventDefault();
      const text = (event.clipboardData || window.clipboardData).getData('text');
      document.execCommand('insertText', false, text);
      this.rememberSelection(editor);
    }

    handleClick(event) {
      const target = event.target.closest('[data-action]');
      if (!target) return;

      const action = target.getAttribute('data-action');

      if (action === 'open-personalizer') {
        this.openModal();
      } else if (action === 'close-personalizer') {
        this.closeModal();
      } else if (action === 'confirm-personalizer') {
        this.confirmModal();
      } else if (action === 'shape-select') {
        this.handleShapeSelect(target);
      } else if (action === 'font-select') {
        this.handleFontSelect(target);
      } else if (action === 'insert-icon') {
        this.handleInsertIcon(target);
      } else if (action === 'add-slot') {
        this.addTextSlot();
      } else if (action === 'remove-slot') {
        this.removeTextSlot(target.getAttribute('data-slot-id'));
      } else if (action === 'charm-increase') {
        this.updateCharmQuantity(target.getAttribute('data-charm-code'), 1);
      } else if (action === 'charm-decrease') {
        this.updateCharmQuantity(target.getAttribute('data-charm-code'), -1);
      } else if (action === 'clear-photo') {
        this.clearPhoto(target.getAttribute('data-photo-index'));
      } else if (action === 'scroll-charms') {
        this.scrollCharms(target.getAttribute('data-direction'));
      }
    }

    handleChange(event) {
      if (event.target.matches('[data-side-toggle]')) {
        const field = event.target.getAttribute('data-side-toggle');
        this.state[field] = event.target.checked;
        this.updateAll();
        return;
      }

      if (event.target.matches('[data-photo-input]')) {
        this.handlePhotoChange(event.target);
      }
    }

    handleInput(event) {
      const editor = event.target.closest('[data-token-editor]');
      if (!editor) return;

      const fieldKey = editor.getAttribute('data-token-editor');
      this.setValueByFieldKey(fieldKey, editorToRawValue(editor));
      this.rememberSelection(editor);
      this.updateAll({ skipEditors: true });
    }

    handleSubmit(event) {
      const validation = this.validateState();
      if (validation.errors.length) {
        event.preventDefault();
        this.openModal();
        this.updateAll();
        return;
      }

      event.preventDefault();
      this.submitPersonalizedForm();
    }

    handleVariantSync(event) {
      if (!this.nativeShapeControl) return;

      const target = event.target;
      if (this.nativeShapeControl.type === 'radio' && target.name === this.nativeShapeControl.name) {
        this.state.productShape = this.getNativeShapeValue();
        this.updateAll();
        return;
      }

      if (this.nativeShapeControl.type === 'select' && target === this.nativeShapeControl.element) {
        this.state.productShape = this.getNativeShapeValue();
        this.updateAll();
      }
    }

    rememberSelection(editor) {
      const selection = window.getSelection();
      if (!selection || !selection.rangeCount) return;

      const range = selection.getRangeAt(0);
      if (!editor.contains(range.commonAncestorContainer)) return;

      this.savedSelectionByField[editor.getAttribute('data-token-editor')] = range.cloneRange();
    }

    restoreSelection(editor) {
      const fieldKey = editor.getAttribute('data-token-editor');
      const savedRange = this.savedSelectionByField[fieldKey];
      const selection = window.getSelection();

      if (!selection) return null;

      if (savedRange && editor.contains(savedRange.commonAncestorContainer)) {
        selection.removeAllRanges();
        selection.addRange(savedRange);
        return savedRange;
      }

      const range = document.createRange();
      range.selectNodeContents(editor);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
      return range;
    }

    handleVariantRendered(event) {
      if (!event.detail || String(event.detail.sectionId) !== String(this.config.sectionId)) {
        return;
      }

      this.updateAll({ skipEditors: true });
    }

    handleShapeSelect(button) {
      const targetField = button.getAttribute('data-shape-field');
      const value = button.getAttribute('data-shape-value') || '';

      if (targetField === 'productShape') {
        this.state.productShape = value;
        if (this.nativeShapeControl) {
          this.setNativeShapeValue(value);
          this.state.productShape = this.getNativeShapeValue() || value;
        }
      } else if (targetField === 'engravingShape') {
        this.state.engravingShape = value;
        if (value && this.rule.engravingShape && this.rule.engravingShape.sides && !this.state.engravingFrontActive && !this.state.engravingBackActive) {
          this.state.engravingFrontActive = true;
        }
      }

      this.updateAll();
    }

    handleFontSelect(button) {
      const fieldKey = button.getAttribute('data-font-field');
      const value = button.getAttribute('data-font-id');
      this.setValueByFieldKey(fieldKey, value);
      this.updateAll();
    }

    handleInsertIcon(button) {
      const tokenField = button.closest('[data-token-field]');
      const editor = tokenField ? tokenField.querySelector('[data-token-editor]') : this.activeEditor;
      const iconName = button.getAttribute('data-icon-name');

      if (!editor || !iconName) return;

      editor.focus();
      const range = this.restoreSelection(editor);
      const iconNode = createIconTokenElement(iconName);

      if (range) {
        range.deleteContents();
        range.insertNode(iconNode);
        setCaretAfterNode(iconNode);
      } else {
        editor.appendChild(iconNode);
        setCaretAfterNode(iconNode);
      }

      const fieldKey = editor.getAttribute('data-token-editor');
      this.rememberSelection(editor);
      this.setValueByFieldKey(fieldKey, editorToRawValue(editor));
      this.updateAll({ skipEditors: true });
    }

    getMainTextSectionTitle() {
      return this.config.activeTag === 'Personalizacion_5' ? 'Grabado de los elementos' : 'Escribe tus textos';
    }

    getEngravingShapeFieldLabel() {
      return 'Mini dije grabado';
    }

    getEngravingShapeSelectionTitle() {
      return '¿Quieres agregar un Mini Dije grabado?';
    }

    getEngravingTextSectionTitle() {
      return 'Grabado sobre mini dije personalizado';
    }

    shouldShowShapeInPreview() {
      return !!this.state.engravingShape;
    }

    hasMeaningfulSelection() {
      const hasMainText = hasRawValue(this.state.mainFrontText) || hasRawValue(this.state.mainBackText);
      const hasEngravingText = hasRawValue(this.state.engravingFrontText) || hasRawValue(this.state.engravingBackText) || hasRawValue(this.state.shapeText);
      const hasSingleText = hasRawValue(this.state.singleText);
      const hasMultiText = this.state.textSlots.some(function (slot) {
        return hasRawValue(slot.text);
      });
      const hasPhotos = this.state.photos.some(function (item) {
        return !!item.file;
      });
      const hasCharms = this.getTotalCharms() > 0;
      const hasEngravingShape = !!this.state.engravingShape;
      return hasMainText || hasEngravingText || hasSingleText || hasMultiText || hasPhotos || hasCharms || hasEngravingShape;
    }

    renderFields() {
      const sections = [];

      if (this.rule.shapeSelector && this.rule.shapeSelector.enabled) {
        sections.push(this.renderShapeSelectorSection());
      }

      if (this.rule.engravingShape && this.rule.engravingShape.enabled) {
        sections.push(this.renderEngravingShapeSection());
      }

      if (this.rule.sideText && this.rule.sideText.enabled) {
        sections.push(this.renderSideTextSection('main', this.rule.sideText, this.getMainTextSectionTitle()));
      }

      if (this.rule.engravingShape && this.rule.engravingShape.enabled && this.rule.engravingShape.sides) {
        sections.push(this.renderSideTextSection('engraving', this.rule.engravingShape, this.getEngravingTextSectionTitle()));
      }

      if (this.rule.singleText && this.rule.singleText.enabled) {
        sections.push(this.renderSingleTextSection());
      }

      if (this.rule.multiText && this.rule.multiText.enabled) {
        sections.push(this.renderMultiTextSection());
      }

      if (this.rule.photos && this.rule.photos.enabled) {
        sections.push(this.renderPhotosSection());
      }

      if (this.rule.charms && this.rule.charms.enabled) {
        sections.push(this.renderCharmsSection());
      }

      this.fieldsContainer.innerHTML = sections.join('');
      this.hydrateEditors();
      this.renderMultiTextSlots();
    }

    renderShapeSelectorSection() {
      const description = this.rule.shapeSelector && this.rule.shapeSelector.description ? this.rule.shapeSelector.description : '';
      return [
        '<section class="pp-section" data-section-role="product-shape">',
        '<div class="pp-section__head">',
        '<div><!--p class="pp-section__eyebrow">Forma</p--><h4 class="pp-section__title">Elige la forma de la pieza</h4></div>',
        description ? '<p class="pp-section__description">' + escapeHtml(description) + '</p>' : '',
        '</div>',
        '<div class="pp-shape-grid">',
        this.rule.shapeSelector.shapes.map(function (shape) {
          return this.renderShapeCard('productShape', shape);
        }, this).join(''),
        '</div>',
        '</section>'
      ].join('');
    }

    renderEngravingShapeSection() {
      const description = this.rule.engravingShape.singleText
        ? 'Activa un mini dije si deseas agregar un grabado especial.'
        : 'Selecciona la forma de tu Mini Dije.';

      return [
        '<section class="pp-section" data-section-role="engraving-shape">',
        '<div class="pp-section__head">',
        '<div><!--p class="pp-section__eyebrow">' + escapeHtml(this.getEngravingShapeFieldLabel()) + '</p--><h4 class="pp-section__title">' + escapeHtml(this.getEngravingShapeSelectionTitle()) + '</h4></div>',
        '<p class="pp-section__description">' + escapeHtml(description) + '</p>',
        '</div>',
        '<div class="pp-shape-grid">',
        this.rule.engravingShape.optional ? this.renderShapeCard('engravingShape', '', 'Sin Mini Dije') : '',
        this.rule.engravingShape.shapes.map(function (shape) {
          return this.renderShapeCard('engravingShape', shape);
        }, this).join(''),
        '</div>',
        this.rule.engravingShape.singleText ? this.renderShapeSingleTextPanel() : '',
        '</section>'
      ].join('');
    }

    renderShapeSingleTextPanel() {
      return [
        '<div class="pp-shape-text-panel" data-shape-text-panel>',
        this.renderTokenField({
          fieldKey: 'shapeText',
          fontFieldKey: 'shapeFont',
          label: this.rule.engravingShape.singleTextLabel || 'Texto para el mini dije',
          min: this.rule.engravingShape.minChars,
          max: this.rule.engravingShape.maxChars,
          placeholder: 'Escribe el texto del mini dije'
        }),
        this.rule.engravingShape.fontSelectable ? this.renderFontPicker('shapeFont') : '',
        '</div>'
      ].join('');
    }

    renderSideTextSection(prefix, config, title) {
      const isEngraving = prefix === 'engraving';
      const frontActiveKey = isEngraving ? 'engravingFrontActive' : 'mainFrontActive';
      const backActiveKey = isEngraving ? 'engravingBackActive' : 'mainBackActive';
      const frontTextKey = isEngraving ? 'engravingFrontText' : 'mainFrontText';
      const backTextKey = isEngraving ? 'engravingBackText' : 'mainBackText';
      const frontFontKey = isEngraving ? 'engravingFrontFont' : 'mainFrontFont';
      const backFontKey = isEngraving ? 'engravingBackFont' : 'mainBackFont';

      const sections = [
        '<section class="pp-section" data-section-role="' + prefix + '-sides">',
        '<div class="pp-section__head">',
        '<div><!--p class="pp-section__eyebrow">Texto</p--><h4 class="pp-section__title">' + escapeHtml(title) + '</h4></div>',
        '<p class="pp-section__description">Elige tu tipo de letra y agrega iconos <span style="font-style: italic;">(cada icono cuenta como un caracter).</span></p>',
        '</div>',
        '<div class="pp-side-panels">'
      ];

      sections.push(this.renderSidePanel({
        toggleKey: frontActiveKey,
        textKey: frontTextKey,
        fontKey: frontFontKey,
        label: config.sides.front.label,
        min: config.minChars,
        max: config.maxChars,
        placeholder: 'Escribe el grabado frontal',
        fontSelectable: config.fontSelectable
      }));

      if (config.sides.back) {
        sections.push(this.renderSidePanel({
          toggleKey: backActiveKey,
          textKey: backTextKey,
          fontKey: backFontKey,
          label: config.sides.back.label,
          min: config.minChars,
          max: config.maxChars,
          placeholder: 'Escribe el grabado trasero',
          fontSelectable: config.fontSelectable
        }));
      }

      sections.push('</div>');
      sections.push('</section>');
      return sections.join('');
    }

    renderSidePanel(options) {
      return [
        '<div class="pp-side-panel" data-side-wrapper="' + options.toggleKey + '">',
        '<label class="pp-toggle">',
        '<input type="checkbox" data-side-toggle="' + options.toggleKey + '"' + (this.state[options.toggleKey] ? ' checked' : '') + '>',
        '<span>' + escapeHtml(options.label) + '</span>',
        '</label>',
        '<div class="pp-side-panel__body" data-side-body="' + options.toggleKey + '">',
        this.renderTokenField({
          fieldKey: options.textKey,
          fontFieldKey: options.fontKey,
          label: options.label,
          min: options.min,
          max: options.max,
          placeholder: options.placeholder
        }),
        options.fontSelectable ? this.renderFontPicker(options.fontKey) : '',
        '</div>',
        '</div>'
      ].join('');
    }

    renderSingleTextSection() {
      return [
        '<section class="pp-section" data-section-role="single-text">',
        '<div class="pp-section__head">',
        '<div><!--p class="pp-section__eyebrow">Mensaje</p--><h4 class="pp-section__title">' + escapeHtml(this.rule.singleText.label) + '</h4></div>',
        '<p class="pp-section__description">Puedes mezclar texto con íconos dentro del mensaje.</p>',
        '</div>',
        this.renderTokenField({
          fieldKey: 'singleText',
          fontFieldKey: 'singleFont',
          label: this.rule.singleText.label,
          min: this.rule.singleText.minChars,
          max: this.rule.singleText.maxChars,
          placeholder: 'Escribe tu mensaje'
        }),
        this.rule.singleText.fontSelectable ? this.renderFontPicker('singleFont') : '',
        '</section>'
      ].join('');
    }

    renderMultiTextSection() {
      return [
        '<section class="pp-section" data-section-role="multi-text">',
        '<div class="pp-section__head">',
        '<div><p class="pp-section__eyebrow">Textos múltiples</p><h4 class="pp-section__title">Agrega hasta 5 espacios de texto</h4></div>',
        '<button type="button" class="pp-inline-button" data-action="add-slot">Agregar espacio</button>',
        '</div>',
        '<p class="pp-section__description">Cada espacio puede llevar una tipografía distinta.</p>',
        '<div class="pp-slot-list" data-multi-text-slots></div>',
        '</section>'
      ].join('');
    }

    renderPhotosSection() {
      const slots = [];
      for (let index = 0; index < this.rule.photos.max; index += 1) {
        const label = 'Subir Fotografía ' + (index + 1);
        slots.push([
          '<div class="pp-photo-slot" data-photo-slot="' + index + '">',
          '<div class="pp-photo-slot__frame">',
          '<input type="file" accept="image/*" class="pp-photo-slot__input" name="properties[' + label + ']" data-photo-input="' + index + '">',
          '<div class="pp-photo-slot__surface" data-photo-surface="' + index + '">',
          '<span class="pp-photo-slot__placeholder">',
          '<strong>' + escapeHtml(label) + '</strong>',
          '<em class="pp-photo-slot__filename" data-photo-file-name="' + index + '">Ningún archivo seleccionado</em>',
          '</span>',
          '</div>',
          '</div>',
          '<button type="button" class="pp-inline-button pp-inline-button--muted" data-action="clear-photo" data-photo-index="' + index + '" hidden>Quitar</button>',
          '</div>'
        ].join(''));
      }

      return [
        '<section class="pp-section" data-section-role="photos">',
        '<div class="pp-section__head">',
        '<div><!--p class="pp-section__eyebrow">Fotos</p--><h4 class="pp-section__title">Carga tus imágenes</h4></div>',
        '<p class="pp-section__description">Selecciona de ' + this.rule.photos.min + ' a ' + this.rule.photos.max + ' imágenes según este diseño.</p>',
        '</div>',
        '<div class="pp-photo-grid">',
        slots.join(''),
        '</div>',
        '</section>'
      ].join('');
    }

    renderCharmsSection() {
      return [
        '<section class="pp-section" data-section-role="charms">',
        '<div class="pp-section__head">',
        '<div><!--p class="pp-section__eyebrow">Charms</p--><h4 class="pp-section__title">Selecciona tus charms</h4></div>',
        '<p class="pp-section__description" data-charm-limit-copy></p>',
        '</div>',
        '<div class="pp-charm-slider">',
        '<div class="pp-charm-slider__viewport" data-charm-scroll>',
        '<div class="pp-charm-slider__track">',
        this.charmsCatalog.map(function (charm) {
          return this.renderCharmCard(charm);
        }, this).join(''),
        '</div>',
        '</div>',
        '</div>',
        '<div style="margin-top: 10px;"><button type="button" class="pp-slider-button" data-action="scroll-charms" data-direction="prev" aria-label="Ver charms anteriores">&larr;</button> <button type="button" class="pp-slider-button" style="float: right;" data-action="scroll-charms" data-direction="next" aria-label="Ver más charms">&rarr;</button></div>',
        '</section>'
      ].join('');
    }

    renderCharmCard(charm) {
      return [
        '<article class="pp-charm-card" data-charm-card="' + escapeHtml(charm.code) + '">',
        '<div class="pp-charm-card__visual">',
        this.renderCharmVisual(charm),
        '<span class="pp-charm-card__badge" data-charm-badge="' + escapeHtml(charm.code) + '" hidden>0</span>',
        '</div>',
        '<div class="pp-charm-card__body">',
        '<h5 class="pp-charm-card__title">' + escapeHtml(charm.label) + '</h5>',
        '</div>',
        '<div class="pp-charm-card__controls">',
        '<button type="button" data-action="charm-decrease" data-charm-code="' + escapeHtml(charm.code) + '" aria-label="Restar charm">-</button>',
        '<span class="pp-charm-card__qty" data-charm-qty="' + escapeHtml(charm.code) + '">0</span>',
        '<button type="button" data-action="charm-increase" data-charm-code="' + escapeHtml(charm.code) + '" aria-label="Sumar charm">+</button>',
        '</div>',
        '</article>'
      ].join('');
    }

    renderCharmVisual(charm) {
      if (charm.image) {
        return '<img src="' + charm.image + '" alt="' + escapeHtml(charm.label) + '">';
      }

      return [
        '<span class="pp-charm-card__placeholder" style="--charm-accent:' + escapeHtml(charm.accent || '#f669a0') + ';">',
        '<span>' + escapeHtml((charm.label || 'C').slice(0, 2).toUpperCase()) + '</span>',
        '</span>'
      ].join('');
    }

    renderShapeCard(fieldName, shapeValue, emptyLabel) {
      const isEmpty = !shapeValue;
      const label = emptyLabel || shapeValue;
      const svg = isEmpty ? '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M25 25 95 95M95 25 25 95" stroke="currentColor" stroke-width="10" stroke-linecap="round"></path></svg>' : shapeSvg(shapeValue);
      return [
        '<button type="button" class="pp-shape-card" data-action="shape-select" data-shape-field="' + fieldName + '" data-shape-value="' + escapeHtml(shapeValue) + '">',
        '<span class="pp-shape-card__icon">' + svg + '</span>',
        '<span class="pp-shape-card__label">' + escapeHtml(label) + '</span>',
        '</button>'
      ].join('');
    }

    renderFontPicker(fieldKey) {
      return [
        '<div class="pp-font-picker" data-font-picker="' + fieldKey + '"  style="margin-top:10px;">',
        '<span class="pp-font-picker__label">Tipo de letra:</span>',
        '<div class="pp-font-picker__grid">',
        this.fonts.map(function (font) {
          const style = 'font-family:' + font.family + ';font-weight:' + font.weight + ';font-style:' + font.style + ';';
          return [
            '<button type="button" class="pp-font-card" data-action="font-select" data-font-field="' + fieldKey + '" data-font-id="' + escapeHtml(font.id) + '" style="' + escapeHtml(style) + '">',
            '<span class="pp-font-card__name">' + escapeHtml(font.label) + '</span>',
            '<!--span class="pp-font-card__preview">' + escapeHtml(font.previewText || 'Texto') + '</span-->',
            '</button>'
          ].join('');
        }).join(''),
        '</div>',
        '</div>'
      ].join('');
    }

    renderTokenField(options) {
      return [
        '<div class="pp-token-field" data-token-field data-field-key="' + options.fieldKey + '" data-min="' + options.min + '" data-max="' + options.max + '"' + (options.fontFieldKey ? ' data-font-field-key="' + options.fontFieldKey + '"' : '') + '>',
        '<div class="pp-token-field__head">',
        '<!--label class="pp-token-field__label">' + escapeHtml(options.label) + '</label-->',
        '<span class="pp-token-field__count">Caracteres:</span><span class="pp-token-field__count" data-token-count="' + options.fieldKey + '"> 0 / ' + options.max + '</span>',
        '</div>',
        '<div class="pp-token-field__editor-shell">',
        '<div class="pp-token-field__editor" contenteditable="true" spellcheck="false" data-token-editor="' + options.fieldKey + '" data-placeholder="' + escapeHtml(options.placeholder) + '"></div>',
        '</div>',
        '<details class="pp-icon-picker">',
        '<summary>Agregar ícono</summary>',
        '<div class="pp-icon-picker__grid">',
        ICON_LIBRARY.map(function (icon) {
          return [
            '<button type="button" class="pp-icon-button" data-action="insert-icon" data-icon-name="' + escapeHtml(icon.name) + '" title="' + escapeHtml(icon.name) + '">',
            createIconTokenElement(icon.name).outerHTML,
            '<span>' + escapeHtml(icon.name) + '</span>',
            '</button>'
          ].join('');
        }).join(''),
        '</div>',
        '</details>',
        '<!--p class="pp-token-field__hint">Mín. ' + options.min + ' - Máx. ' + options.max + '. ' + escapeHtml(this.config.ui.iconHelp || 'Los íconos cuentan como un carácter.') + '</p-->',
        '</div>'
      ].join('');
    }

    renderMultiTextSlots() {
      const container = this.root.querySelector('[data-multi-text-slots]');
      if (!container) return;

      if (!this.state.textSlots.length) {
        container.innerHTML = '<div class="pp-slot-empty">Aún no agregas espacios de texto.</div>';
        return;
      }

      container.innerHTML = this.state.textSlots.map(function (slot, index) {
        return [
          '<div class="pp-text-slot" data-slot-id="' + slot.id + '">',
          '<div class="pp-text-slot__head">',
          '<strong>Espacio ' + (index + 1) + '</strong>',
          '<button type="button" class="pp-inline-button pp-inline-button--muted" data-action="remove-slot" data-slot-id="' + slot.id + '">Quitar</button>',
          '</div>',
          this.renderTokenField({
            fieldKey: 'slot-text::' + slot.id,
            fontFieldKey: 'slot-font::' + slot.id,
            label: 'Texto espacio ' + (index + 1),
            min: this.rule.multiText.minChars,
            max: this.rule.multiText.maxChars,
            placeholder: 'Escribe el texto del espacio ' + (index + 1)
          }),
          this.renderFontPicker('slot-font::' + slot.id),
          '</div>'
        ].join('');
      }, this).join('');

      this.hydrateEditors(container);
    }

    hydrateEditors(scope) {
      const container = scope || this.root;
      Array.from(container.querySelectorAll('[data-token-editor]')).forEach(function (editor) {
        fillEditor(editor, this.getValueByFieldKey(editor.getAttribute('data-token-editor')));
      }, this);
      this.updateTokenFieldFonts(container);
    }

    addTextSlot() {
      if (!this.rule.multiText || this.state.textSlots.length >= this.rule.multiText.maxSlots) {
        return;
      }

      this.state.textSlots.push({
        id: String(Date.now()) + '-' + String(this.state.textSlots.length + 1),
        text: '',
        font: this.fonts[0] ? this.fonts[0].id : ''
      });
      this.renderMultiTextSlots();
      this.updateAll();
    }

    removeTextSlot(slotId) {
      this.state.textSlots = this.state.textSlots.filter(function (slot) {
        return slot.id !== slotId;
      });
      this.renderMultiTextSlots();
      this.updateAll();
    }

    getValueByFieldKey(fieldKey) {
      if (fieldKey.indexOf('slot-text::') === 0) {
        const slotId = fieldKey.split('slot-text::')[1];
        const slot = this.state.textSlots.find(function (item) {
          return item.id === slotId;
        });
        return slot ? slot.text : '';
      }

      if (fieldKey.indexOf('slot-font::') === 0) {
        const slotId = fieldKey.split('slot-font::')[1];
        const slot = this.state.textSlots.find(function (item) {
          return item.id === slotId;
        });
        return slot ? slot.font : '';
      }

      return this.state[fieldKey];
    }

    setValueByFieldKey(fieldKey, value) {
      if (fieldKey.indexOf('slot-text::') === 0) {
        const slotId = fieldKey.split('slot-text::')[1];
        this.state.textSlots = this.state.textSlots.map(function (slot) {
          if (slot.id === slotId) {
            return Object.assign({}, slot, { text: value });
          }
          return slot;
        });
        return;
      }

      if (fieldKey.indexOf('slot-font::') === 0) {
        const slotId = fieldKey.split('slot-font::')[1];
        this.state.textSlots = this.state.textSlots.map(function (slot) {
          if (slot.id === slotId) {
            return Object.assign({}, slot, { font: value });
          }
          return slot;
        });
        return;
      }

      this.state[fieldKey] = value;
    }

    handlePhotoChange(input) {
      const index = Number(input.getAttribute('data-photo-input'));
      const file = input.files && input.files[0] ? input.files[0] : null;
      const current = this.state.photos[index];

      if (current && current.url) {
        URL.revokeObjectURL(current.url);
      }

      this.state.photos[index] = {
        file: file,
        url: file ? URL.createObjectURL(file) : ''
      };

      this.updateAll();
    }

    clearPhoto(indexValue) {
      const index = Number(indexValue);
      const input = this.root.querySelector('[data-photo-input="' + index + '"]');
      const current = this.state.photos[index];

      if (current && current.url) {
        URL.revokeObjectURL(current.url);
      }

      if (input) {
        input.value = '';
      }

      this.state.photos[index] = { file: null, url: '' };
      this.updateAll();
    }

    updateCharmQuantity(charmCode, delta) {
      const currentQuantity = Number(this.state.charms[charmCode] || 0);
      const nextQuantity = Math.max(0, currentQuantity + delta);
      const nextTotal = this.getTotalCharms() - currentQuantity + nextQuantity;
      const maxAllowed = this.getCharmMaxAllowed();

      if (nextTotal > maxAllowed) {
        return;
      }

      if (nextQuantity === 0) {
        delete this.state.charms[charmCode];
      } else {
        this.state.charms[charmCode] = nextQuantity;
      }

      this.updateAll();
    }

    getTotalCharms() {
      return Object.keys(this.state.charms).reduce(function (total, charmCode) {
        return total + Number(this.state.charms[charmCode] || 0);
      }.bind(this), 0);
    }

    getCharmMaxAllowed() {
      let max = this.rule.charms && this.rule.charms.max ? this.rule.charms.max : 0;

      if (this.rule.engravingShape && this.rule.engravingShape.consumesCharmSlot && this.state.engravingShape) {
        max -= this.rule.engravingShape.consumesCharmSlot;
      }

      return Math.max(0, max);
    }

    scrollCharms(direction) {
      const viewport = this.root.querySelector('[data-charm-scroll]');
      if (!viewport) return;

      const amount = viewport.clientWidth * 0.8;
      viewport.scrollBy({
        left: direction === 'prev' ? amount * -1 : amount,
        behavior: 'smooth'
      });
    }

    findNativeShapeControl() {
      if (!this.rule.shapeSelector || !this.rule.shapeSelector.enabled || !this.rule.shapeSelector.syncVariant) return null;

      const preferredNames = (this.config.shapeOptionNames || []).map(normalizeValue);
      const desiredValues = this.rule.shapeSelector.shapes.map(normalizeValue);

      const fieldsets = Array.from(this.form.querySelectorAll('product-variant-swatch fieldset'));
      for (let index = 0; index < fieldsets.length; index += 1) {
        const fieldset = fieldsets[index];
        const inputs = Array.from(fieldset.querySelectorAll('input[type="radio"]'));
        if (!inputs.length) continue;

        const labelElement = fieldset.querySelector('.product-single__control-label');
        const labelText = normalizeValue((labelElement ? labelElement.textContent : inputs[0].name).split(':')[0]);
        const values = inputs.map(function (input) { return normalizeValue(input.value); });
        const matchesLabel = preferredNames.indexOf(labelText) > -1;
        const matchesValues = values.some(function (value) { return desiredValues.indexOf(value) > -1; });

        if (matchesLabel || matchesValues) {
          return { type: 'radio', name: inputs[0].name, inputs: inputs };
        }
      }

      const selects = Array.from(this.form.querySelectorAll('product-variant-dropdown select, .product-form__input select'));
      for (let index = 0; index < selects.length; index += 1) {
        const select = selects[index];
        const nameMatch = select.name && select.name.match(/options\[(.+)\]/);
        const labelText = normalizeValue(nameMatch ? nameMatch[1] : select.name);
        const values = Array.from(select.options).map(function (option) { return normalizeValue(option.value); });
        const matchesLabel = preferredNames.indexOf(labelText) > -1;
        const matchesValues = values.some(function (value) { return desiredValues.indexOf(value) > -1; });

        if (matchesLabel || matchesValues) {
          return { type: 'select', element: select };
        }
      }

      return null;
    }

    getNativeShapeValue() {
      if (!this.nativeShapeControl) return '';

      if (this.nativeShapeControl.type === 'radio') {
        const checked = this.nativeShapeControl.inputs.find(function (input) {
          return input.checked;
        });
        return checked ? checked.value : '';
      }

      return this.nativeShapeControl.element.value;
    }

    setNativeShapeValue(shapeValue) {
      if (!this.nativeShapeControl) return;
      const normalizedTarget = normalizeValue(shapeValue);

      if (this.nativeShapeControl.type === 'radio') {
        const target = this.nativeShapeControl.inputs.find(function (input) {
          return normalizeValue(input.value) === normalizedTarget;
        });

        if (target && !target.checked) {
          target.checked = true;
          target.dispatchEvent(new Event('change', { bubbles: true }));
        }
        return;
      }

      const select = this.nativeShapeControl.element;
      const option = Array.from(select.options).find(function (item) {
        return normalizeValue(item.value) === normalizedTarget;
      });

      if (option && select.value !== option.value) {
        select.value = option.value;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    getFontById(fontId) {
      return this.fonts.find(function (font) {
        return font.id === fontId;
      }) || this.fonts[0];
    }

    validateState() {
      const errors = [];
      const notices = [];

      if (this.rule.shapeSelector && this.rule.shapeSelector.required && !this.state.productShape) {
        errors.push('Debes seleccionar una forma para continuar.');
      }

      if (this.rule.engravingShape && this.rule.engravingShape.enabled) {
        if (this.state.engravingShape) {
          if (this.rule.engravingShape.consumesCharmSlot) {
            notices.push(this.config.ui.shapeConsumesNote || 'Seleccionar una forma reduce en 1 el número disponible de charms.');
          }

          if (this.rule.engravingShape.singleText) {
            const count = countRawCharacters(this.state.shapeText);
            if (count && count < this.rule.engravingShape.minChars) {
              errors.push('La forma de grabado necesita al menos ' + this.rule.engravingShape.minChars + ' carácter.');
            }
            if (count > this.rule.engravingShape.maxChars) {
              errors.push('Has superado el máximo de ' + this.rule.engravingShape.maxChars + ' caracteres para la forma.');
            }
            if (!count) {
              errors.push('La forma de grabado necesita al menos 1 carácter o ícono.');
            }
          } else {
            const activeSides = [];
            if (this.state.engravingFrontActive) activeSides.push({ label: 'frontal', raw: this.state.engravingFrontText });
            if (this.state.engravingBackActive) activeSides.push({ label: 'trasero', raw: this.state.engravingBackText });

            if (!activeSides.length) {
              errors.push('Selecciona al menos un lado para el grabado de la forma.');
            }

            activeSides.forEach(function (side) {
              const count = countRawCharacters(side.raw);
              if (!count) {
                errors.push('El grabado ' + side.label + ' es obligatorio cuando activas la forma.');
              }
              if (count && count < this.rule.engravingShape.minChars) {
                errors.push('El grabado ' + side.label + ' requiere al menos ' + this.rule.engravingShape.minChars + ' carácter.');
              }
              if (count > this.rule.engravingShape.maxChars) {
                errors.push('Has superado el máximo de ' + this.rule.engravingShape.maxChars + ' caracteres en el lado ' + side.label + '.');
              }
            }, this);
          }
        }
      }

      if (this.rule.sideText && this.rule.sideText.enabled) {
        const activeSides = [];
        if (this.state.mainFrontActive) activeSides.push({ label: 'frontal', raw: this.state.mainFrontText });
        if (this.state.mainBackActive) activeSides.push({ label: 'trasero', raw: this.state.mainBackText });

        if (activeSides.length < this.rule.sideText.minRequiredSides) {
          errors.push('Debes grabar al menos ' + this.rule.sideText.minRequiredSides + ' lado.');
        }

        activeSides.forEach(function (side) {
          const count = countRawCharacters(side.raw);
          if (!count) {
            errors.push('El grabado ' + side.label + ' es obligatorio.');
          }
          if (count && count < this.rule.sideText.minChars) {
            errors.push('El grabado ' + side.label + ' requiere mínimo ' + this.rule.sideText.minChars + ' caracteres o íconos.');
          }
          if (count > this.rule.sideText.maxChars) {
            errors.push('Has superado el máximo de ' + this.rule.sideText.maxChars + ' caracteres en el lado ' + side.label + '.');
          }
        }, this);
      }

      if (this.rule.singleText && this.rule.singleText.enabled) {
        const count = countRawCharacters(this.state.singleText);
        if (count && count < this.rule.singleText.minChars) {
          errors.push('El mensaje necesita al menos ' + this.rule.singleText.minChars + ' carácter.');
        }
        if (count > this.rule.singleText.maxChars) {
          errors.push('Has superado el máximo de ' + this.rule.singleText.maxChars + ' caracteres.');
        }
      }

      if (this.rule.multiText && this.rule.multiText.enabled) {
        if (this.state.textSlots.length > this.rule.multiText.maxSlots) {
          errors.push('Solo puedes agregar hasta ' + this.rule.multiText.maxSlots + ' espacios de texto.');
        }

        this.state.textSlots.forEach(function (slot, index) {
          const count = countRawCharacters(slot.text);
          if (!count) {
            errors.push('El Texto espacio ' + (index + 1) + ' necesita al menos 1 carácter.');
          }
          if (count > this.rule.multiText.maxChars) {
            errors.push('El Texto espacio ' + (index + 1) + ' supera los ' + this.rule.multiText.maxChars + ' caracteres.');
          }
        }, this);
      }

      if (this.rule.photos && this.rule.photos.enabled) {
        const photosCount = this.state.photos.filter(function (item) {
          return !!item.file;
        }).length;

        if (photosCount < this.rule.photos.min) {
          errors.push('Debes agregar al menos ' + this.rule.photos.min + ' foto.');
        }

        if (photosCount > this.rule.photos.max) {
          errors.push('Solo puedes cargar hasta ' + this.rule.photos.max + ' fotos.');
        }
      }

      if (this.rule.charms && this.rule.charms.enabled) {
        const totalCharms = this.getTotalCharms();
        const maxAllowed = this.getCharmMaxAllowed();

        if (totalCharms > maxAllowed) {
          errors.push('Seleccionar una forma reduce en 1 el número disponible de charms.');
        }

        if (this.rule.charms.allowedTotalCounts && totalCharms && this.rule.charms.allowedTotalCounts.indexOf(totalCharms) === -1) {
          errors.push('Para este producto solo se acepta 1 o 3 charms.');
        }

        if (this.rule.charms.combinedMin) {
          const combinedCount = totalCharms + (this.state.engravingShape ? 1 : 0);
          if (combinedCount < this.rule.charms.combinedMin) {
            errors.push('Debes seleccionar al menos 1 charm o una forma de grabado.');
          }
        } else if (totalCharms && totalCharms < (this.rule.charms.minWhenSelected || 1)) {
          errors.push('Debes agregar al menos ' + (this.rule.charms.minWhenSelected || 1) + ' charm.');
        }
      }

      return { errors: unique(errors), notices: unique(notices) };
    }

    updateAll(options) {
      const settings = options || {};

      if (!settings.skipEditors) {
        this.hydrateEditors();
      }

      this.updateVisibility();
      this.updateTokenCounters();
      this.updateTokenFieldFonts();
      this.updateFontCards();
      this.updateShapeCards();
      this.updateCharmCards();
      this.updatePhotoSlots();
      this.updateStatusAndErrors();
      this.updatePreview();
      this.updateSummary();
      this.syncProperties();
      this.updatePriceDisplay();
      this.toggleAddToCart();
      this.updateInlineSummary();
    }

    updateVisibility() {
      const engravingSidesSection = this.root.querySelector('[data-section-role="engraving-sides"]');
      if (engravingSidesSection) {
        engravingSidesSection.hidden = !this.state.engravingShape || !!this.rule.engravingShape.singleText;
      }

      const shapeTextPanel = this.root.querySelector('[data-shape-text-panel]');
      if (shapeTextPanel) {
        shapeTextPanel.hidden = !this.state.engravingShape;
      }

      Array.from(this.root.querySelectorAll('[data-side-body]')).forEach(function (body) {
        const field = body.getAttribute('data-side-body');
        body.hidden = !this.state[field];
        const wrapper = body.closest('[data-side-wrapper]');
        if (wrapper) {
          wrapper.classList.toggle('is-active', !body.hidden);
        }
      }, this);

      const multiTextButton = this.root.querySelector('[data-action="add-slot"]');
      if (multiTextButton && this.rule.multiText) {
        multiTextButton.disabled = this.state.textSlots.length >= this.rule.multiText.maxSlots;
      }

      const charmCopy = this.root.querySelector('[data-charm-limit-copy]');
      if (charmCopy && this.rule.charms) {
        charmCopy.textContent = 'Elementos restantes: ' + this.getCharmMaxAllowed() + ' charms.';
      }

      if (this.shapeBadge) {
        const activeShape = this.state.engravingShape;
        if (activeShape) {
          this.shapeBadge.hidden = false;
          this.shapeBadge.textContent = activeShape;
        } else {
          this.shapeBadge.hidden = true;
        }
      }
    }

    updateTokenCounters() {
      Array.from(this.root.querySelectorAll('[data-token-count]')).forEach(function (counter) {
        const fieldKey = counter.getAttribute('data-token-count');
        const wrapper = counter.closest('[data-token-field]');
        const max = Number(wrapper.getAttribute('data-max'));
        const count = countRawCharacters(this.getValueByFieldKey(fieldKey));
        counter.textContent = count + ' / ' + max;
        counter.classList.toggle('is-over', count > max);
      }, this);
    }

    updateTokenFieldFonts(scope) {
      const container = scope || this.root;

      Array.from(container.querySelectorAll('[data-token-field]')).forEach(function (wrapper) {
        const fontFieldKey = wrapper.getAttribute('data-font-field-key');
        if (!fontFieldKey) return;

        const font = this.getFontById(this.getValueByFieldKey(fontFieldKey));
        const editorShell = wrapper.querySelector('.pp-token-field__editor-shell');
        const editor = wrapper.querySelector('[data-token-editor]');
        const styleValue = this.fontStyle(font);

        if (editorShell) {
          editorShell.setAttribute('style', styleValue);
        }

        if (editor) {
          editor.setAttribute('style', styleValue);
        }
      }, this);
    }

    updateFontCards() {
      Array.from(this.root.querySelectorAll('[data-font-picker]')).forEach(function (picker) {
        const fieldKey = picker.getAttribute('data-font-picker');
        const currentValue = this.getValueByFieldKey(fieldKey);
        Array.from(picker.querySelectorAll('[data-font-id]')).forEach(function (button) {
          button.classList.toggle('is-active', button.getAttribute('data-font-id') === currentValue);
        });
      }, this);
    }

    updateShapeCards() {
      Array.from(this.root.querySelectorAll('[data-shape-field]')).forEach(function (button) {
        const field = button.getAttribute('data-shape-field');
        const value = button.getAttribute('data-shape-value') || '';
        const activeValue = field === 'productShape' ? this.state.productShape : this.state.engravingShape;
        button.classList.toggle('is-active', normalizeValue(value) === normalizeValue(activeValue));
      }, this);
    }

    updateCharmCards() {
      Array.from(this.root.querySelectorAll('[data-charm-card]')).forEach(function (card) {
        const code = card.getAttribute('data-charm-card');
        const quantity = Number(this.state.charms[code] || 0);
        const quantityNode = card.querySelector('[data-charm-qty="' + code + '"]');
        const badgeNode = card.querySelector('[data-charm-badge="' + code + '"]');
        if (quantityNode) quantityNode.textContent = quantity;
        if (badgeNode) {
          badgeNode.hidden = quantity === 0;
          badgeNode.textContent = quantity;
        }
        card.classList.toggle('is-active', quantity > 0);
      }, this);
    }

    updatePhotoSlots() {
      this.state.photos.forEach(function (item, index) {
        const placeholder = this.root.querySelector('[data-photo-surface="' + index + '"] .pp-photo-slot__placeholder');
        const surface = this.root.querySelector('[data-photo-surface="' + index + '"]');
        const fileName = this.root.querySelector('[data-photo-file-name="' + index + '"]');
        const clear = this.root.querySelector('[data-photo-index="' + index + '"]');

        if (placeholder) {
          placeholder.hidden = false;
        }

        if (surface) {
          surface.classList.toggle('has-file', !!item.url);
        }

        if (fileName) {
          fileName.textContent = item.file ? item.file.name : 'Ningún archivo seleccionado';
        }

        if (clear) {
          clear.hidden = !item.url;
        }
      }, this);
    }

    updateStatusAndErrors() {
      const validation = this.validateState();
      this.state.isValid = validation.errors.length === 0;
      this.statusContainer.innerHTML = '';
      this.errorsContainer.innerHTML = '';
    }

    buildPreviewFaces() {
      const faces = [];
      const previewShape = this.shouldShowShapeInPreview() ? this.state.engravingShape : '';

      if (this.rule.engravingShape && this.state.engravingShape && this.rule.engravingShape.singleText) {
        faces.push(this.renderPreviewFace({
          label: this.getEngravingShapeFieldLabel(),
          rawText: this.state.shapeText,
          font: this.getFontById(this.state.shapeFont),
          shape: this.state.engravingShape
        }));
      }

      if (this.rule.engravingShape && this.state.engravingShape && this.rule.engravingShape.sides) {
        const engravingSides = [];
        if (this.state.engravingFrontActive) {
          engravingSides.push({
            label: 'Frente',
            rawText: this.state.engravingFrontText,
            font: this.getFontById(this.state.engravingFrontFont)
          });
        }
        if (this.state.engravingBackActive) {
          engravingSides.push({
            label: 'Atrás',
            rawText: this.state.engravingBackText,
            font: this.getFontById(this.state.engravingBackFont)
          });
        }
        if (engravingSides.length) {
          faces.push(this.renderDualPreviewFace({
            title: this.getEngravingShapeFieldLabel(),
            shape: this.state.engravingShape,
            sides: engravingSides
          }));
        }
      }

      if (this.rule.sideText && this.rule.sideText.enabled) {
        const mainSides = [];
        if (this.state.mainFrontActive) {
          mainSides.push({
            label: this.rule.sideText.sides.front.label,
            rawText: this.state.mainFrontText,
            font: this.getFontById(this.state.mainFrontFont)
          });
        }

        if (this.state.mainBackActive) {
          mainSides.push({
            label: this.rule.sideText.sides.back.label,
            rawText: this.state.mainBackText,
            font: this.getFontById(this.state.mainBackFont)
          });
        }

        if (mainSides.length) {
          faces.push(this.renderDualPreviewFace({
            title: this.getMainTextSectionTitle(),
            shape: previewShape,
            sides: mainSides
          }));
        }
      }

      if (this.rule.singleText && hasRawValue(this.state.singleText)) {
        faces.push(this.renderPreviewFace({
          label: this.rule.singleText.label,
          rawText: this.state.singleText,
          font: this.getFontById(this.state.singleFont),
          shape: ''
        }));
      }

      if (this.rule.multiText && this.state.textSlots.length) {
        faces.push([
          '<div class="pp-preview-face pp-preview-face--stack">',
          '<div class="pp-preview-face__label">Textos múltiples</div>',
          '<div class="pp-preview-stack">',
          this.state.textSlots.map(function (slot, index) {
            const font = this.getFontById(slot.font);
            return '<div class="pp-preview-stack__line" style="' + escapeHtml(this.fontStyle(font)) + '">' + (slot.text ? rawToHtml(slot.text) : '<span class="pp-preview-face__placeholder">Texto ' + (index + 1) + '</span>') + '</div>';
          }, this).join(''),
          '</div>',
          '</div>'
        ].join(''));
      }

      if (!faces.length && this.state.engravingShape) {
        faces.push(this.renderPreviewFace({
          label: this.getEngravingShapeFieldLabel(),
          rawText: '',
          font: this.getFontById(this.state.shapeFont || this.state.mainFrontFont),
          shape: this.state.engravingShape
        }));
      }

      return faces;
    }

    renderPreviewFace(options) {
      const fontStyle = this.fontStyle(options.font);
      const hasText = hasRawValue(options.rawText);

      return [
        '<div class="pp-preview-face pp-preview-face--' + escapeHtml(this.rule.previewStyle) + '">',
        options.shape ? '<div class="pp-preview-face__shape" aria-hidden="true">' + shapeSvg(options.shape) + '</div>' : '',
        '<div class="pp-preview-face__label">' + escapeHtml(options.label) + '</div>',
        '<div class="pp-preview-face__text" style="' + escapeHtml(fontStyle) + '">',
        hasText ? rawToHtml(options.rawText) : '<span class="pp-preview-face__placeholder">Sin grabado</span>',
        '</div>',
        '</div>'
      ].join('');
    }

    renderPreviewSide(options) {
      return [
        '<div class="pp-preview-face__side">',
        '<div class="pp-preview-face__label">' + escapeHtml(options.label) + '</div>',
        '<div class="pp-preview-face__text" style="' + escapeHtml(this.fontStyle(options.font)) + '">',
        hasRawValue(options.rawText) ? rawToHtml(options.rawText) : '<span class="pp-preview-face__placeholder">Sin grabado</span>',
        '</div>',
        '</div>'
      ].join('');
    }

    renderDualPreviewFace(options) {
      return [
        '<div class="pp-preview-face pp-preview-face--split pp-preview-face--' + escapeHtml(this.rule.previewStyle) + '">',
        options.shape ? '<div class="pp-preview-face__shape" aria-hidden="true">' + shapeSvg(options.shape) + '</div>' : '',
        options.title ? '<div class="pp-preview-face__meta">' + escapeHtml(options.title) + '</div>' : '',
        '<div class="pp-preview-face__split' + (options.sides.length === 1 ? ' is-single' : '') + '">',
        options.sides.map(function (side) {
          return this.renderPreviewSide(side);
        }, this).join(''),
        '</div>',
        '</div>'
      ].join('');
    }

    fontStyle(font) {
      if (!font) return '';
      return 'font-family:' + font.family + ';font-weight:' + font.weight + ';font-style:' + font.style + ';';
    }

    updatePreview() {
      const faces = this.buildPreviewFaces();
      const photos = this.state.photos.filter(function (item) { return !!item.url; });
      const charms = this.getSelectedCharms();
      const hasContent = faces.length || photos.length || charms.length || this.state.engravingShape || this.hasMeaningfulSelection();

      this.previewEmpty.hidden = hasContent;
      this.previewMain.innerHTML = faces.join('');

      if (photos.length) {
        this.previewGallery.hidden = false;
        this.previewGallery.innerHTML = photos.map(function (item, index) {
          return '<figure class="pp-preview-photo"><img src="' + item.url + '" alt="Foto ' + (index + 1) + '"></figure>';
        }).join('');
      } else {
        this.previewGallery.hidden = true;
        this.previewGallery.innerHTML = '';
      }

      if (charms.length) {
        this.previewCharms.hidden = false;
        this.previewCharms.innerHTML = charms.map(function (item) {
          return [
            '<div class="pp-preview-charm">',
            '<div class="pp-preview-charm__visual">' + this.renderCharmVisual(item) + '</div>',
            '<div class="pp-preview-charm__copy">',
            '<span>' + escapeHtml(item.label) + '</span>',
            '<strong>x' + item.quantity + '</strong>',
            '</div>',
            '</div>'
          ].join('');
        }, this).join('');
      } else {
        this.previewCharms.hidden = true;
        this.previewCharms.innerHTML = '';
      }
    }

    getSelectedCharms() {
      return Object.keys(this.state.charms).map(function (code) {
        const charm = this.charmsCatalog.find(function (item) {
          return item.code === code;
        });
        return charm ? Object.assign({}, charm, { quantity: this.state.charms[code] }) : null;
      }, this).filter(Boolean);
    }

    getCurrentVariant() {
      const idInput = this.form.querySelector('input[name="id"]');
      const currentVariantId = Number(idInput ? idInput.value : this.config.selectedVariantId);

      return (this.config.variants || []).find(function (variant) {
        return Number(variant.id) === currentVariantId;
      }) || null;
    }

    getBasePrice() {
      const currentVariant = this.getCurrentVariant();
      return currentVariant ? Number(currentVariant.price || 0) : 0;
    }

    getCharmExtrasPrice() {
      return this.getSelectedCharms().reduce(function (total, charm) {
        return total + (Number(charm.price || 0) * Number(charm.quantity || 0));
      }, 0);
    }

    getPersonalizationExtrasPrice() {
      return this.getCharmExtrasPrice();
    }

    getTotalPrice() {
      return this.getBasePrice() + this.getPersonalizationExtrasPrice();
    }

    formatMoney(cents) {
      const moneyFormat = (window.theme && window.theme.moneyFormat) || this.config.moneyFormat || '${{amount}}';

      if (window.Shopify && typeof window.Shopify.formatMoney === 'function') {
        return window.Shopify.formatMoney(cents, moneyFormat);
      }

      return '$' + (Number(cents || 0) / 100).toFixed(2);
    }

    updatePriceDisplay() {
      const priceRoot = document.getElementById('ProductPrice-' + this.config.sectionId) || document.querySelector('[data-personalizer-price-root]');
      if (!priceRoot) return;

      const totalNode = priceRoot.querySelector('[data-personalizer-total-price]');
      const summaryNode = priceRoot.querySelector('[data-personalizer-price-summary]');
      if (!totalNode || !summaryNode) return;

      const showTotal = this.hasMeaningfulSelection();
      totalNode.textContent = this.formatMoney(this.getTotalPrice());
      summaryNode.hidden = !showTotal;
    }

    updateSummary() {
      const items = [];
      const selectedCharms = this.getSelectedCharms();
      const selectedPhotos = this.state.photos.filter(function (item) { return !!item.file; });
      const frontLabel = this.rule.sideText && this.rule.sideText.sides.front ? this.rule.sideText.sides.front.label : 'Texto frente';
      const backLabel = this.rule.sideText && this.rule.sideText.sides.back ? this.rule.sideText.sides.back.label : 'Texto atrás';

      items.push({ label: 'Tipo de personalización', value: this.rule.label + ' - ' + this.rule.displayName });

      if (this.state.productShape && this.state.productShape !== this.initialProductShape) items.push({ label: 'Forma seleccionada', value: this.state.productShape });
      if (this.state.engravingShape) items.push({ label: this.getEngravingShapeFieldLabel(), value: this.state.engravingShape });

      if (this.state.mainFrontActive) {
        items.push({ label: frontLabel, value: rawToPropertyValue(this.state.mainFrontText) || 'Pendiente' });
        items.push({ label: 'Tipografía ' + frontLabel.toLowerCase(), value: this.getFontById(this.state.mainFrontFont).label });
      }

      if (this.state.mainBackActive) {
        items.push({ label: backLabel, value: rawToPropertyValue(this.state.mainBackText) || 'Pendiente' });
        items.push({ label: 'Tipografía ' + backLabel.toLowerCase(), value: this.getFontById(this.state.mainBackFont).label });
      }

      if (this.state.engravingShape && this.rule.engravingShape && this.rule.engravingShape.singleText) {
        items.push({ label: 'Texto del mini dije', value: rawToPropertyValue(this.state.shapeText) || 'Pendiente' });
        items.push({ label: 'Tipografía del mini dije', value: this.getFontById(this.state.shapeFont).label });
      }

      if (this.state.engravingShape && this.rule.engravingShape && this.rule.engravingShape.sides) {
        if (this.state.engravingFrontActive) {
          items.push({ label: 'Mini dije frente', value: rawToPropertyValue(this.state.engravingFrontText) || 'Pendiente' });
          items.push({ label: 'Fuente mini dije frente', value: this.getFontById(this.state.engravingFrontFont).label });
        }
        if (this.state.engravingBackActive) {
          items.push({ label: 'Mini dije atrás', value: rawToPropertyValue(this.state.engravingBackText) || 'Pendiente' });
          items.push({ label: 'Fuente mini dije atrás', value: this.getFontById(this.state.engravingBackFont).label });
        }
      }

      if (this.state.singleText) {
        items.push({ label: 'Mensaje', value: rawToPropertyValue(this.state.singleText) });
      }

      if (this.state.textSlots.length) {
        this.state.textSlots.forEach(function (slot, index) {
          items.push({ label: 'Texto espacio ' + (index + 1), value: rawToPropertyValue(slot.text) || 'Pendiente' });
          items.push({ label: 'Fuente espacio ' + (index + 1), value: this.getFontById(slot.font).label });
        }, this);
      }

      if (selectedPhotos.length) {
        items.push({ label: 'Fotos cargadas', value: selectedPhotos.map(function (item) { return item.file.name; }).join(', ') });
      }

      if (selectedCharms.length) {
        items.push({ label: 'Charms seleccionados', value: selectedCharms.map(function (item) { return item.label + ' x' + item.quantity; }).join(', ') });
        items.push({ label: 'Cantidad de charms', value: String(this.getTotalCharms()) });
        items.push({ label: 'Costo charms', value: this.formatMoney(this.getCharmExtrasPrice()) });
      }

      items.push({ label: 'Total personalizado', value: this.formatMoney(this.getTotalPrice()) });

      this.summaryContainer.innerHTML = items.map(function (item) {
        return [
          '<div class="pp-summary__item">',
          '<span class="pp-summary__label">' + escapeHtml(item.label) + '</span>',
          '<span class="pp-summary__value">' + escapeHtml(item.value) + '</span>',
          '</div>'
        ].join('');
      }).join('');
    }

    syncProperties() {
      const properties = [];
      const selectedCharms = this.getSelectedCharms();
      const selectedPhotos = this.state.photos.filter(function (item) { return !!item.file; });
      const frontLabel = this.rule.sideText && this.rule.sideText.sides.front ? this.rule.sideText.sides.front.label : 'Texto frente';
      const backLabel = this.rule.sideText && this.rule.sideText.sides.back ? this.rule.sideText.sides.back.label : 'Texto atrás';

      properties.push({ name: 'Tipo de personalización', value: this.rule.label + ' - ' + this.rule.displayName });

      if (this.state.productShape && this.state.productShape !== this.initialProductShape) properties.push({ name: 'Forma seleccionada', value: this.state.productShape });
      if (this.nativeShapeControl && this.state.productShape) properties.push({ name: 'Forma sincronizada con variante', value: 'Si' });
      if (this.state.engravingShape) properties.push({ name: this.getEngravingShapeFieldLabel(), value: this.state.engravingShape });

      if (this.rule.sideText && this.rule.sideText.enabled) {
        properties.push({ name: 'Lado frente activo', value: this.state.mainFrontActive ? 'Si' : 'No' });
        properties.push({ name: 'Lado atrás activo', value: this.state.mainBackActive ? 'Si' : 'No' });
      }

      if (this.rule.sideText && this.state.mainFrontActive && this.state.mainFrontText) {
        properties.push({ name: frontLabel, value: rawToPropertyValue(this.state.mainFrontText) });
        properties.push({ name: 'Tipografía ' + frontLabel.toLowerCase(), value: this.getFontById(this.state.mainFrontFont).label });
      }

      if (this.rule.sideText && this.state.mainBackActive && this.state.mainBackText) {
        properties.push({ name: backLabel, value: rawToPropertyValue(this.state.mainBackText) });
        properties.push({ name: 'Tipografía ' + backLabel.toLowerCase(), value: this.getFontById(this.state.mainBackFont).label });
      }

      if (this.state.engravingShape && this.rule.engravingShape && this.rule.engravingShape.singleText && this.state.shapeText) {
        properties.push({ name: 'Texto mini dije grabado', value: rawToPropertyValue(this.state.shapeText) });
        properties.push({ name: 'Tipografía mini dije grabado', value: this.getFontById(this.state.shapeFont).label });
      }

      if (this.state.engravingShape && this.rule.engravingShape && this.rule.engravingShape.sides) {
        properties.push({ name: 'Lado forma frente activo', value: this.state.engravingFrontActive ? 'Si' : 'No' });
        properties.push({ name: 'Lado forma atrás activo', value: this.state.engravingBackActive ? 'Si' : 'No' });
      }

      if (this.state.engravingShape && this.state.engravingFrontActive && this.state.engravingFrontText) {
        properties.push({ name: 'Texto mini dije frente', value: rawToPropertyValue(this.state.engravingFrontText) });
        properties.push({ name: 'Fuente mini dije frente', value: this.getFontById(this.state.engravingFrontFont).label });
      }

      if (this.state.engravingShape && this.state.engravingBackActive && this.state.engravingBackText) {
        properties.push({ name: 'Texto mini dije atrás', value: rawToPropertyValue(this.state.engravingBackText) });
        properties.push({ name: 'Fuente mini dije atrás', value: this.getFontById(this.state.engravingBackFont).label });
      }

      if (this.state.singleText) {
        properties.push({ name: 'Mensaje personalizado', value: rawToPropertyValue(this.state.singleText) });
      }

      this.state.textSlots.forEach(function (slot, index) {
        if (slot.text) properties.push({ name: 'Texto espacio ' + (index + 1), value: rawToPropertyValue(slot.text) });
        properties.push({ name: 'Fuente espacio ' + (index + 1), value: this.getFontById(slot.font).label });
      }, this);

      if (selectedCharms.length) {
        properties.push({ name: 'Charms seleccionados', value: selectedCharms.map(function (item) { return item.label + ' x' + item.quantity; }).join(', ') });
        properties.push({ name: 'Cantidad de charms', value: String(this.getTotalCharms()) });
        properties.push({ name: 'Costo charms', value: this.formatMoney(this.getCharmExtrasPrice()) });
      }

      properties.push({ name: 'Total personalizado estimado', value: this.formatMoney(this.getTotalPrice()) });

      this.propertiesContainer.innerHTML = properties.map(function (item) {
        return '<input type="hidden" name="properties[' + escapeHtml(item.name) + ']" value="' + escapeHtml(item.value) + '">';
      }).join('');
    }

    async addSelectedCharmsToCart() {
      const items = this.getSelectedCharms().filter(function (charm) {
        return !!charm.variantId && Number(charm.quantity) > 0;
      }).map(function (charm) {
        return {
          id: Number(charm.variantId),
          quantity: Number(charm.quantity),
          properties: {
            '_Pieza personalizada': this.config.productTitle
          }
        };
      }, this);

      if (!items.length) return;

      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({ items: items })
      });

      if (!response.ok) {
        let message = 'No pudimos agregar los charms seleccionados.';
        try {
          const errorPayload = await response.json();
          message = errorPayload.description || errorPayload.message || message;
        } catch (error) {
          message = message;
        }
        throw new Error(message);
      }
    }

    async submitPersonalizedForm() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;
      if (this.addButton) this.addButton.classList.add('loading');
      if (this.confirmButton) this.confirmButton.disabled = true;
      this.toggleAddToCart();

      try {
        const formData = new FormData(this.form);
        const photoInputs = Array.from(this.modal.querySelectorAll('input[type="file"][name]'));
        photoInputs.forEach(function (input) {
          formData.delete(input.name);
          if (input.files && input.files[0]) {
            formData.append(input.name, input.files[0], input.files[0].name);
          }
        });
        const hasSelectedPhotos = this.state.photos.some(function (item) {
          return !!(item && item.file);
        });
        const endpoint = hasSelectedPhotos ? '/cart/add' : '/cart/add.js';
        const requestHeaders = hasSelectedPhotos
          ? {
              'X-Requested-With': 'XMLHttpRequest'
            }
          : {
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            };
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: requestHeaders,
          body: formData
        });

        if (!response.ok) {
          let message = 'No pudimos agregar esta personalización al carrito.';
          try {
            const errorPayload = await response.json();
            message = errorPayload.description || errorPayload.message || message;
          } catch (error) {
            message = message;
          }
          throw new Error(message);
        }

        await this.addSelectedCharmsToCart();
        window.location.href = '/cart';
      } catch (error) {
        this.openModal();
        this.errorsContainer.innerHTML = '<div class="pp-alert pp-alert--error">' + escapeHtml(error.message || 'No pudimos agregar esta personalización al carrito.') + '</div>';
      } finally {
        this.isSubmitting = false;
        if (this.addButton) this.addButton.classList.remove('loading');
        this.toggleAddToCart();
      }
    }

    openModal() {
      if (!this.modal) return;
      this.modal.hidden = false;
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', this._escHandler);
      requestAnimationFrame(function () {
        this.modal.classList.add('is-open');
      }.bind(this));
    }

    closeModal() {
      if (!this.modal) return;
      this.modal.classList.remove('is-open');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', this._escHandler);
      var modal = this.modal;
      setTimeout(function () {
        modal.hidden = true;
      }, 300);
      this.updateInlineSummary();
    }

    confirmModal() {
      var validation = this.validateState();
      if (validation.errors.length) {
        this.updateAll();
        var firstError = this.root.querySelector('.pp-alert--error');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      this.closeModal();
    }

    handleEscape(event) {
      if (event.key === 'Escape') this.closeModal();
    }

    updateInlineSummary() {
      if (!this.triggerSubtitle) return;
      var tags = [];
      var previewHtml = [];
      var selectedCharms = this.getSelectedCharms();
      var selectedPhotos = this.state.photos ? this.state.photos.filter(function (item) { return !!item.file; }) : [];
      var activeShape = this.shouldShowShapeInPreview() ? this.state.engravingShape : '';
      var hasSelections = this.hasMeaningfulSelection();
      var frontLabel = this.rule.sideText && this.rule.sideText.sides.front ? this.rule.sideText.sides.front.label : 'Frente';
      var backLabel = this.rule.sideText && this.rule.sideText.sides.back ? this.rule.sideText.sides.back.label : 'Atrás';

      if (this.state.engravingShape) tags.push(this.getEngravingShapeFieldLabel() + ': ' + this.state.engravingShape);

      if (this.state.mainFrontActive && hasRawValue(this.state.mainFrontText)) {
        var frontFont = this.getFontById(this.state.mainFrontFont);
        tags.push(frontLabel);
        previewHtml.push(
          '<div class="pp-inline-preview-face">' +
          (activeShape ? '<div class="pp-inline-preview-face__shape">' + shapeSvg(activeShape) + '</div>' : '') +
          '<span class="pp-inline-preview-face__label">' + escapeHtml(frontLabel) + '</span>' +
          '<span class="pp-inline-preview-face__text" style="' + escapeHtml(this.fontStyle(frontFont)) + '">' + rawToHtml(this.state.mainFrontText) + '</span>' +
          '</div>'
        );
      }
      if (this.state.mainBackActive && hasRawValue(this.state.mainBackText)) {
        var backFont = this.getFontById(this.state.mainBackFont);
        tags.push(backLabel);
        previewHtml.push(
          '<div class="pp-inline-preview-face">' +
          '<span class="pp-inline-preview-face__label">' + escapeHtml(backLabel) + '</span>' +
          '<span class="pp-inline-preview-face__text" style="' + escapeHtml(this.fontStyle(backFont)) + '">' + rawToHtml(this.state.mainBackText) + '</span>' +
          '</div>'
        );
      }
      if (hasRawValue(this.state.singleText)) {
        tags.push('Mensaje');
        previewHtml.push(
          '<div class="pp-inline-preview-face">' +
          '<span class="pp-inline-preview-face__label">Mensaje</span>' +
          '<span class="pp-inline-preview-face__text">' + rawToHtml(this.state.singleText) + '</span>' +
          '</div>'
        );
      }
      if (hasRawValue(this.state.shapeText)) {
        tags.push('Mini dije');
        previewHtml.push(
          '<div class="pp-inline-preview-face">' +
          (this.state.engravingShape ? '<div class="pp-inline-preview-face__shape">' + shapeSvg(this.state.engravingShape) + '</div>' : '') +
          '<span class="pp-inline-preview-face__label">' + escapeHtml(this.getEngravingShapeFieldLabel()) + '</span>' +
          '<span class="pp-inline-preview-face__text" style="' + escapeHtml(this.fontStyle(this.getFontById(this.state.shapeFont))) + '">' + rawToHtml(this.state.shapeText) + '</span>' +
          '</div>'
        );
      }
      if (this.state.textSlots && this.state.textSlots.some(function (slot) { return hasRawValue(slot.text); })) {
        tags.push(this.state.textSlots.length + ' texto(s)');
      }

      selectedPhotos.forEach(function (item, index) {
        previewHtml.push('<div class="pp-inline-preview-photo"><img src="' + item.url + '" alt="Foto ' + (index + 1) + '"></div>');
      });

      selectedCharms.forEach(function (charm) {
        var visual = charm.image ? '<img src="' + charm.image + '" alt="' + escapeHtml(charm.label) + '">' : '';
        previewHtml.push('<span class="pp-inline-preview-charm">' + visual + escapeHtml(charm.label) + ' x' + charm.quantity + '</span>');
      });

      if (selectedPhotos.length) tags.push(selectedPhotos.length + ' foto(s)');
      if (selectedCharms.length) tags.push(this.getTotalCharms() + ' charm(s)');

      this.triggerSubtitle.textContent = hasSelections ? tags.join(' \u00B7 ') : 'Configura tu diseño personalizado';

      var trigger = this._triggerRoot.querySelector('.pp-trigger');
      if (trigger) trigger.classList.toggle('has-selections', hasSelections);
      if (this.triggerCheck) this.triggerCheck.hidden = !hasSelections;

      if (this.inlinePanel) {
        this.inlinePanel.hidden = !hasSelections;
      }
      if (this.inlinePreview) {
        this.inlinePreview.innerHTML = previewHtml.join('');
      }
      if (this.inlineDetails) {
        this.inlineDetails.innerHTML = tags.map(function (tag) {
          return '<span class="pp-inline-tag">' + escapeHtml(tag) + '</span>';
        }).join('');
      }
      if (this.inlineTotal) {
        this.inlineTotal.hidden = !hasSelections;
      }
      if (this.inlineTotalValue) {
        this.inlineTotalValue.textContent = this.formatMoney(this.getTotalPrice());
      }
    }

    toggleAddToCart() {
      if (!this.addButton) return;

      var validation = this.validateState();
      var shouldDisable = validation.errors.length > 0 || this.isSubmitting;
      this.addButton.disabled = shouldDisable;
      this.addButton.classList.toggle('is-personalizer-disabled', shouldDisable);
      this._triggerRoot.classList.toggle('is-invalid', shouldDisable);
      if (this.confirmButton) this.confirmButton.disabled = shouldDisable;
    }
  }

  function initPersonalizers() {
    Array.from(document.querySelectorAll('[data-product-personalizer]')).forEach(function (root) {
      if (root.dataset.personalizerMounted === 'true') return;
      root.dataset.personalizerMounted = 'true';
      new ProductPersonalizer(root);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPersonalizers);
  } else {
    initPersonalizers();
  }
})();
