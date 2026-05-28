(function () {
  const TOKEN_PATTERN = /\[:([^\]:]+):\]/g;

  const ICON_LIBRARY = [
    { name: 'heart-o', className: 'zmdi-favorite-outline' },
    { name: 'star', className: 'zmdi-star' },
    { name: 'flower', className: 'zmdi-flower-alt' },
        { name: 'eye', className: 'zmdi-eye' },
            { name: 'smile-o', className: 'zmdi-mood' },
    { name: 'Bicycle', className: 'zmdi-bike' },
    { name: 'briefcase', className: 'zmdi-case' },
    { name: 'camera-retro', className: 'zmdi-camera' },
    { name: 'coffee', className: 'zmdi-coffee' },
    { name: 'flash', className: 'zmdi-flash' },
    { name: 'gamepad', className: 'zmdi-gamepad' },
    { name: 'hand-peace-o', fallback: 'V' },
    { name: 'legal', className: 'zmdi-balance' },
    { name: 'mortar-board', className: 'zmdi-graduation-cap' },
    { name: 'paint-brush', className: 'zmdi-brush' },
    { name: 'quote-right', className: 'zmdi-quote' },
    { name: 'registered', fallback: 'R' },
    { name: 'snowflake-o', fallback: '*' },
    { name: 'sun', className: 'zmdi-sun' },
    { name: 'toggle-on', fallback: 'ON' },
    { name: 'truck', className: 'zmdi-truck' },
    { name: 'soccer-ball-o', fallback: 'SO' },
    { name: 'plane', className: 'zmdi-airplane' },
    { name: 'motorcycle', fallback: 'MC' },
    { name: 'heartbeat', className: 'zmdi-favorite' },
    { name: 'glass', className: 'zmdi-cocktail' },
    { name: 'film', className: 'zmdi-movie' },
    { name: 'female', className: 'zmdi-female' },
    { name: 'male', className: 'zmdi-male' },
    { name: 'car', className: 'zmdi-car' },
    { name: 'paw', fallback: 'PA' },
    { name: 'music', className: 'zmdi-collection-music' },
    { name: 'moon', fallback: 'MO' },
    { name: 'leaf', className: 'zmdi-nature' },
    { name: 'home', className: 'zmdi-home' }

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
          front: { label: 'Grabado frente', defaultActive: false },
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
          front: { label: 'Grabado frente', defaultActive: false },
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
          front: { label: 'Texto principal', defaultActive: false },
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
          front: { label: 'Grabado frente', defaultActive: false },
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
      return 'Elige la forma del mini dije grabado';
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
        '<div><p class="pp-section__eyebrow">Forma</p><h4 class="pp-section__title">Elige la forma de la pieza</h4></div>',
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
        : 'Selecciona un mini dije si deseas agregar grabado.';

      return [
        '<section class="pp-section" data-section-role="engraving-shape">',
        '<div class="pp-section__head">',
        '<div><p class="pp-section__eyebrow">' + escapeHtml(this.getEngravingShapeFieldLabel()) + '</p><h4 class="pp-section__title">' + escapeHtml(this.getEngravingShapeSelectionTitle()) + '</h4></div>',
        '<p class="pp-section__description">' + escapeHtml(description) + '</p>',
        '</div>',
        '<div class="pp-shape-grid">',
        this.rule.engravingShape.optional ? this.renderShapeCard('engravingShape', '', 'Sin forma') : '',
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
        '<p class="pp-section__description">Puedes elegir tu tipo de letra y agregar iconos (cada icono cuenta como un caracter). Máx. 40 caracteres</p>',
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
        '<div><p class="pp-section__eyebrow">Mensaje</p><h4 class="pp-section__title">' + escapeHtml(this.rule.singleText.label) + '</h4></div>',
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
        '<div><p class="pp-section__eyebrow">Fotos</p><h4 class="pp-section__title">Carga tus imágenes</h4></div>',
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
        '<div><p class="pp-section__eyebrow">Charms</p><h4 class="pp-section__title">Selecciona tus charms</h4></div>',
        '<p class="pp-section__description" data-charm-limit-copy></p>',
        '</div>',
        '<div class="pp-charm-slider">',
        '<button type="button" class="pp-slider-button" data-action="scroll-charms" data-direction="prev" aria-label="Ver charms anteriores">&larr;</button>',
        '<div class="pp-charm-slider__viewport" data-charm-scroll>',
        '<div class="pp-charm-slider__track">',
        this.charmsCatalog.map(function (charm) {
          return this.renderCharmCard(charm);
        }, this).join(''),
        '</div>',
        '</div>',
        '<button type="button" class="pp-slider-button" data-action="scroll-charms" data-direction="next" aria-label="Ver más charms">&rarr;</button>',
        '</div>',
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
        '<div class="pp-font-picker" data-font-picker="' + fieldKey + '">',
        '<p class="pp-font-picker__label" style="margin-top:10px;">Puedes elegir tu Tipo de letra:</p>',
        '<div class="pp-font-picker__grid">',
        this.fonts.map(function (font) {
          const style = 'font-family:' + font.family + ';font-weight:' + font.weight + ';font-style:' + font.style + ';';
          return [
            '<button type="button" class="pp-font-card" data-action="font-select" data-font-field="' + fieldKey + '" data-font-id="' + escapeHtml(font.id) + '" style="' + escapeHtml(style) + '">',
            '<span class="pp-font-card__name">' + escapeHtml(font.label) + '</span>',
            '<span class="pp-font-card__preview">' + escapeHtml(font.previewText || 'Texto') + '</span>',
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
        '<label class="pp-token-field__label">' + escapeHtml(options.label) + '</label>',
        '<span class="pp-token-field__count" data-token-count="' + options.fieldKey + '">0 / ' + options.max + '</span>',
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
