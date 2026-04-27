/* ═══════════════════════════════════════════════
   DIFFERENTIATORS DATA — "¿Por qué OtterTask?"
   ═══════════════════════════════════════════════ */

export const METRICS = [
  { value: '100%', label: 'Control Multi-Local', color: '#34d399' },
  { value: '1', label: 'Plataforma Integrada', color: '#06b6d4' },
  { value: '0', label: 'Comisiones por venta', color: '#a78bfa' },
  { value: '24/7', label: 'Auditoría Total', color: '#f472b6' },
];

/* ─────────────────────────────────────────────────────
   V2 — Image Showcase cards
   ───────────────────────────────────────────────────── */
export const SHOWCASE_CARDS = [
  {
    id: 'multisucursal',
    span: 'wide',
    accent: '#06b6d4',
    tag: 'Escalable',
    title: 'Multi-Negocio y Multi-Local Nativo',
    desc: 'Administrá múltiples negocios y locales desde una sola cuenta. Cada local tiene su propio inventario, ventas y empleados asignados.',
    img: '/diff/multisucursal.png',
  },
  {
    id: 'roles',
    span: 'normal',
    accent: '#f472b6',
    tag: 'Seguro',
    title: 'Roles y permisos granulares',
    desc: 'Implementamos RBAC. Creá roles custom y asigná permisos específicos a cada empleado. Vos controlás qué puede ver o editar cada uno.',
    img: '/diff/roles.png',
  },
  {
    id: 'qr',
    span: 'normal',
    accent: '#a78bfa',
    tag: 'Integrado',
    title: 'Código QR en cada producto',
    desc: 'Generá, descargá e imprimí códigos QR con diseño profesional directamente desde el sistema para agilizar ventas.',
    img: '/diff/qr.png',
  },
  {
    id: 'caja',
    span: 'normal',
    accent: '#fbbf24',
    tag: 'Contable',
    title: 'Cierre de caja con PDF',
    desc: 'Desglose automático por efectivo, tarjeta y transferencia. Generación y descarga automática de comprobantes en PDF.',
    img: '/diff/caja.png',
  },
  {
    id: 'auditoria',
    span: 'normal',
    accent: '#ef4444',
    tag: 'Transparente',
    title: 'Auditoría completa',
    desc: 'Log completo de todas las acciones del sistema. Sabé exactamente quién hizo qué, cuándo y en qué local.',
    img: '/diff/auditoria.png',
  },
  {
    id: 'velocidad',
    span: 'wide',
    accent: '#60a5fa',
    tag: 'Productividad',
    title: 'Flujo de trabajo ultra rápido',
    desc: 'Atajos de teclado para navegación y acciones (Alt+1 a 8), combos y variantes de producto, devoluciones parciales y diseño mobile-first.',
    img: '/diff/velocidad.png',
  },
];

/* ─────────────────────────────────────────────────────
   COMPARISON DATA — OtterTask vs Competencia
   ───────────────────────────────────────────────────── */
export const COMPARISON_DATA = [
  { category: 'VENTAS', icon: '💼' },
  { feature: 'POS / punto de venta', comp: '❌ Manual o planilla. Errores en hora pico.', otter: '✅ Atajos de teclado. Sin mouse, sin demoras.' },
  { feature: 'Velocidad en caja', comp: '❌ Mouse obligatorio. Fila en hora pico.', otter: '✅ Alt+N abre venta, Alt+V confirma. Sin interrupciones.' },
  { feature: 'Devoluciones', comp: '❌ Anulás toda la venta y la rehacés.', otter: '✅ Por ítem con motivo. Stock se ajusta solo.' },
  { feature: 'Ticket de venta', comp: '⚠️ Papel o app externa.', otter: '✅ Ticket imprimible generado desde el sistema.' },
  { feature: 'Venta vinculada a cliente', comp: '❌ La venta queda suelta, sin historial.', otter: '✅ Cada venta ligada al cliente y al local.' },
  { feature: 'Combos y variantes', comp: '❌ Solo en ERPs costosos.', otter: '✅ Nativo: combos y variantes de talle/color.' },
  { feature: 'Descuentos por producto', comp: '⚠️ Se aplican manualmente o no existen.', otter: '✅ Descuentos configurables por producto.' },

  { category: 'INVENTARIO', icon: '🏠' },
  { feature: 'Stock por sucursal', comp: '❌ Stock global sin distinción de local.', otter: '✅ Stock independiente por cada sucursal.' },
  { feature: 'Alertas de stock', comp: '❌ Te enterás cuando ya no hay mercadería.', otter: '✅ Alertas automáticas de stock bajo y nulo.' },
  { feature: 'QR de productos', comp: '❌ App externa o etiquetadora dedicada.', otter: '✅ Generá, descargá e imprimí desde el sistema.' },
  { feature: 'Importación masiva', comp: '⚠️ Producto por producto. Horas de trabajo.', otter: '✅ Importación desde CSV o Excel de una vez.' },
  { feature: 'Imágenes de producto', comp: '❌ No disponible o app aparte.', otter: '✅ Subida, recorte y visualización integrados.' },
  { feature: 'Corrección de stock', comp: '⚠️ Manual sin registro de quién lo cambió.', otter: '✅ Corrección con trazabilidad: quién y cuándo.' },
  { feature: 'Publicar / ocultar productos', comp: '❌ No disponible en sistemas básicos.', otter: '✅ Toggle de visibilidad por producto.' },
  { feature: 'Productos destacados', comp: '❌ No existe.', otter: '✅ Marcás productos como destacados desde el catálogo.' },
  { feature: 'Escáner móvil por QR', comp: '❌ Requiere hardware dedicado.', otter: '✅ Vinculás cualquier celular como escáner con un QR. Sin hardware extra.' },

  { category: 'CAJA Y FINANZAS', icon: '💰' },
  { feature: 'Movimientos de caja', comp: '❌ Cuaderno o planilla separada.', otter: '✅ Ingresos y egresos dentro del mismo sistema.' },
  { feature: 'Totales en tiempo real', comp: '❌ Sin visibilidad hasta que cerrás.', otter: '✅ Totales de caja visibles durante todo el turno.' },
  { feature: 'Cierre de caja', comp: '❌ Suma manual por medio de pago.', otter: '✅ Un clic. Desglose efectivo / tarjeta / transferencia.' },
  { feature: 'PDF de cierre', comp: '❌ Se arma a mano para contabilidad.', otter: '✅ PDF generado y descargado automáticamente.' },
  { feature: 'Compras a proveedores', comp: '⚠️ Aparte del sistema, sin conexión con stock.', otter: '✅ Compras vinculadas al proveedor y al stock del local.' },

  { category: 'EQUIPO Y PERMISOS', icon: '🛡️' },
  { feature: 'Roles de empleados', comp: '❌ Admin o vendedor. Sin punto medio.', otter: '✅ Roles completamente personalizables.' },
  { feature: 'Permisos por módulo', comp: '❌ El cajero ve lo mismo que el dueño.', otter: '✅ 8 módulos con permisos activables por rol.' },
  { feature: 'Login de empleados', comp: '❌ Todos entran con el mismo acceso.', otter: '✅ Ruta de login separada. Username y contraseña propios.' },
  { feature: 'Asignación por local', comp: '⚠️ El empleado accede a todos los locales.', otter: '✅ Cada empleado asignado a sus locales específicos.' },

  { category: 'NEGOCIOS Y LOCALES', icon: '🏢' },
  { feature: 'Múltiples negocios', comp: '❌ Una cuenta por negocio. Todo duplicado.', otter: '✅ Un acceso para todos tus negocios.' },
  { feature: 'Múltiples locales', comp: '❌ Add-on de pago o no disponible.', otter: '✅ Locales con dirección y GPS incluidos.' },
  { feature: 'Vista unificada', comp: '❌ Entrás por separado a cada cuenta.', otter: '✅ Todos los locales desde el mismo panel.' },
  { feature: 'Cambio de negocio activo', comp: '❌ Cerrar sesión y entrar de nuevo.', otter: '✅ Selector en el navbar. Un clic.' },

  { category: 'CLIENTES Y PROVEEDORES', icon: '👤' },
  { feature: 'Ficha de clientes', comp: '❌ Agenda, Excel o sin registro.', otter: '✅ Perfil completo con historial de compras.' },
  { feature: 'Deudas de clientes', comp: '❌ Se cobra de memoria o cuaderno.', otter: '✅ Historial de deudas y cobros por cliente.' },
  { feature: 'Facturas', comp: '⚠️ App aparte o no existen.', otter: '✅ Facturas por cliente con seguimiento y check-in.' },
  { feature: 'Gestión de proveedores', comp: '⚠️ Lista en papel sin vínculo con compras.', otter: '✅ Proveedores vinculados a las compras registradas.' },

  { category: 'AUDITORÍA Y SEGURIDAD', icon: '🔍' },
  { feature: 'Log de acciones', comp: '❌ No existe. Sin responsables.', otter: '✅ Quién hizo qué, sobre qué registro y cuándo.' },
  { feature: 'Trazabilidad completa', comp: '❌ Sin forma de auditar cambios.', otter: '✅ Cada acción registra usuario, negocio y timestamp.' },
  { feature: 'Protección de rutas', comp: '❌ Cualquiera accede a cualquier sección.', otter: '✅ Sin permiso -> redirige automáticamente. Sin excepciones.' },

  { category: 'DASHBOARD Y EXPERIENCIA', icon: '📈' },
  { feature: 'Dashboard en tiempo real', comp: '❌ Excel actualizado a mano.', otter: '✅ Ventas, caja y KPIs en tiempo real con gráficos.' },
  { feature: 'Top productos y clientes', comp: '❌ Análisis manual si existe.', otter: '✅ Ranking automático desde el dashboard.' },
  { feature: 'Actualizaciones en tiempo real', comp: '❌ Sin sincronización entre dispositivos.', otter: '✅ WebSockets: cambios visibles al instante en todos los dispositivos.' },
  { feature: 'Modo oscuro', comp: '⚠️ No disponible en la mayoría.', otter: '✅ Toggle de modo oscuro completo incluido.' }
];

