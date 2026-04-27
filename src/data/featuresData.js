export const FEATURES = [
  { 
    id: 'balance',
    icon: '📊', 
    title: 'Dashboard (Analíticas)', 
    desc: 'Tu centro de control financiero. Obtén una visión panorámica y en tiempo real de tu rentabilidad mediante gráficos dinámicos que procesan automáticamente cada venta y gasto del día. No más cálculos manuales para saber cuánto ganaste.', 
    pills: [
      { label: 'Balance ingresos vs egresos', icon: '⚖️' },
      { label: 'Ranking de productos estrella', icon: '⭐' },
      { label: 'KPIs de ventas semanales', icon: '📈' }
    ],
    imgUrl: '/ottertask.png',
    imgStyle: { filter: 'hue-rotate(0deg)' } 
  },
  { 
    id: 'stock',
    icon: '📦', 
    title: 'Stock (Inventario)', 
    desc: 'Gestión de existencias con precisión milimétrica. Controla tu stock de forma independiente por local, realiza ajustes rápidos y recibe notificaciones proactivas antes de quedarte sin mercadería.', 
    pills: [
      { label: 'Alertas de stock bajo', icon: '⚠️' },
      { label: 'Trazabilidad de ajustes manuales', icon: '🔍' },
      { label: 'Visibilidad de stock entre sucursales', icon: '🏢' }
    ],
    imgUrl: '/ottertask.png',
    imgStyle: { filter: 'hue-rotate(45deg)' }
  },
  { 
    id: 'productos',
    icon: '🏷️', 
    title: 'Productos (Catálogo)', 
    desc: 'Digitaliza tu mercadería con flexibilidad total. Crea productos con variantes (talle/color), organiza combos promocionales y genera etiquetas QR profesionales listas para imprimir y usar en tu mostrador.', 
    pills: [
      { label: 'Variantes ilimitadas', icon: '👕' },
      { label: 'Generador de QR nativo', icon: '📱' },
      { label: 'Importación masiva desde Excel', icon: '📥' }
    ],
    imgUrl: '/ottertask.png',
    imgStyle: { filter: 'hue-rotate(90deg)' }
  },
  { 
    id: 'ventas',
    icon: '🛒', 
    title: 'Ventas (Punto de Venta)', 
    desc: 'El POS más rápido del mercado. Diseñado para agilizar la fila de clientes, permite realizar ventas por escaneo o búsqueda rápida, descontando stock al instante y generando tickets PDF profesionales.', 
    pills: [
      { label: 'Emisión de tickets PDF', icon: '📄' },
      { label: 'Gestión de devoluciones por producto', icon: '🔄' },
      { label: 'Soporte para lectores de códigos', icon: '⚡' }
    ],
    imgUrl: '/ottertask.png',
    imgStyle: { filter: 'hue-rotate(180deg)' }
  },
  { 
    id: 'caja',
    icon: '💰', 
    title: 'Caja (Finanzas)', 
    desc: 'Control absoluto del flujo de dinero. Registra aperturas, cierres y movimientos diarios con un desglose automático por método de pago para garantizar que la caja siempre cierre a la perfección.', 
    pills: [
      { label: 'Reporte de cierre en PDF automático', icon: '📅' },
      { label: 'Desglose por Efectivo/Tarjeta/Transferencia', icon: '💳' },
      { label: 'Registro de retiros de dinero', icon: '📤' }
    ],
    imgUrl: '/ottertask.png',
    imgStyle: { filter: 'hue-rotate(270deg)' }
  },
  { 
    id: 'clientes',
    icon: '👥', 
    title: 'Clientes (CRM)', 
    desc: 'Potencia la fidelización de tus compradores. Mantén un historial completo de consumos y gestiona cuentas corrientes de forma segura, sabiendo siempre quién te debe y cuánto.', 
    pills: [
      { label: 'Gestión de deudas y pagos parciales', icon: '📝' },
      { label: 'Perfiles detallados de consumo', icon: '👤' },
      { label: 'Identificación de clientes VIP', icon: '💎' }
    ],
    imgUrl: '/ottertask.png',
    imgStyle: { filter: 'hue-rotate(300deg)' }
  }
];
