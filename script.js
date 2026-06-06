const productData = {
  cards: {
    title: 'Визитки',
    size: '90x50мм',
    image: 'assets/Визитки.png',
    mode: 'fixed',
    formats: [],
    quantities: [1000],
    sides: ['2 стороны'],
    prices: {
      1000: { '2 стороны': 2500 }
    },
    fixedNote: 'Выгодное предложение: 1000 шт., двухсторонняя печать.',
    customNote: 'Минимальные и индивидуальные тиражи просчитываются отдельно.'
  },
  booklets: {
    title: 'Евробуклет',
    size: '297x210мм',
    image: 'assets/Евробуклет.png',
    mode: 'fixed',
    formats: [],
    quantities: [1000],
    sides: ['2 стороны'],
    prices: {
      1000: { '2 стороны': 8500 }
    },
    fixedNote: 'Выгодное предложение: 1000 шт., двухсторонняя печать.',
    customNote: 'Минимальные и индивидуальные тиражи просчитываются отдельно.'
  },
  flyers: {
    title: 'Листовки',
    size: 'A4 / A5 / A6',
    image: 'assets/Листовки.png',
    mode: 'variable',
    formats: ['A4', 'A5', 'A6'],
    quantities: [100, 500, 1000],
    sides: ['1 сторона', '2 стороны'],
    prices: {
      A4: {
        100: { '1 сторона': 3500, '2 стороны': 5000 },
        500: { '2 стороны': 6500 },
        1000: { '2 стороны': 8000 }
      },
      A5: {
        100: { '1 сторона': 2600, '2 стороны': 3600 },
        500: { '2 стороны': 4000 },
        1000: { '2 стороны': 5000 }
      },
      A6: {
        100: { '1 сторона': 2100, '2 стороны': 2600 },
        500: { '2 стороны': 3200 },
        1000: { '2 стороны': 4000 }
      }
    },
    customNote: 'Минимальные и индивидуальные тиражи просчитываются отдельно.'
  },
  stickers: {
    title: 'Стикеры',
    size: 'индивидуальный расчёт',
    image: 'assets/03d888e8-36a5-457f-98f5-48d539c96e4f.png',
    mode: 'individual',
    formats: [],
    quantities: [],
    sides: [],
    prices: {},
    customNote: 'Размер, форма, материал и тираж просчитываются индивидуально.'
  },
  banners: {
    title: 'Баннеры',
    size: 'индивидуальный расчёт',
    image: 'assets/4dcc268b-8a11-40d4-b835-d9d73fb8531f.png',
    mode: 'individual',
    formats: [],
    quantities: [],
    sides: [],
    prices: {},
    customNote: 'Размер, материал, люверсы и монтаж просчитываются индивидуально.'
  },
  euroflyers: {
    title: 'Еврофлаер',
    size: '100 / 500 / 1000 шт.',
    image: 'assets/2a17a5e5-9277-4f99-b312-3f570d22683a.png',
    mode: 'variable',
    formats: [],
    quantities: [100, 500, 1000],
    sides: ['1 сторона', '2 стороны'],
    prices: {
      100: { '1 сторона': 2500, '2 стороны': 3000 },
      500: { '2 стороны': 3500 },
      1000: { '2 стороны': 4500 }
    },
    customNote: 'Минимальные и индивидуальные тиражи просчитываются отдельно.'
  }
};

const workData = [
  [
    { title: 'Комплексное оформление спорт магазина', image: 'assets/bf391dc5-3cd9-4ffa-94ae-73e46b352d96.png' },
    { title: 'Комплексное оформление магазина косметики', image: 'assets/67856d96-f682-491c-a1a7-cad47489b87c.png' },
    { title: 'Комплексное оформление ресторана', image: 'assets/7711d04b-312e-412d-a983-3c36f986d25d.png' }
  ],
  [
    { title: 'Билборд - реклама магазина мебели', image: 'assets/bbd6e111-0134-4eda-9dde-0b75976cfda6.png' },
    { title: 'Билборд - реклама клининговой компании', image: 'assets/be93dd37-5e7d-480e-b763-f8bd1fb9c0ac.png' },
    { title: 'Билборд - реклама магазина мебели', image: 'assets/461c61d5-7580-49fa-8834-d0d7871bc36b.png' }
  ],
  [
    { title: 'Комплексное оформление полиграфии', image: 'assets/6d3e999b-75dc-4bc5-a8d5-6fbcd05785f2.png' },
    { title: 'Буклет для агентства недвижимости', image: 'assets/49e72258-9c15-486b-be5b-26e1e73ee8e0.png' },
    { title: 'Комплексное оформление фирменного стиля', image: 'assets/06797aa9-46bc-4567-9f4f-1560d7538005.png' }
  ]
];

const CONTACTS = {
  phone: '+79783036766',
  phoneText: '+7 978 303-67-66',
  email: 'reklamacrimeaalushta@gmail.com',
  telegram: 'https://t.me/ReklamaCrimeaAlushta'
};

const LEADS_KEY = 'reklamaCrimeaLeads';

const calcState = {
  product: 'cards',
  format: 'A3',
  quantity: 100,
  side: '1 сторона'
};

const productModal = document.querySelector('#productModal');
const calcImage = document.querySelector('#calcImage');
const calcTitle = document.querySelector('#calcTitle');
const calcSize = document.querySelector('#calcSize');
const formatOptions = document.querySelector('#formatOptions');
const quantityOptions = document.querySelector('#quantityOptions');
const sideOptions = document.querySelector('#sideOptions');
const price = document.querySelector('#price');
const calcNote = document.querySelector('#calcNote');
const dealButton = document.querySelector('#dealButton');
const leadForm = document.querySelector('#leadForm');
const leadStatus = document.querySelector('#leadStatus');

function formatMoney(value) {
  return new Intl.NumberFormat('ru-RU').format(value).replace(/\s/g, '') + '₽';
}

function currentProduct() {
  return productData[calcState.product];
}

function priceTable() {
  const product = currentProduct();
  return product.formats.length ? product.prices[calcState.format] : product.prices;
}

function sideAvailable(side) {
  return Boolean(priceTable()[calcState.quantity]?.[side]);
}

function currentPrice() {
  return priceTable()[calcState.quantity][calcState.side];
}

function bestOffer() {
  const product = currentProduct();
  if (product.mode !== 'variable' || calcState.quantity === 1000) return null;

  const table = priceTable();
  const target = table[1000]?.['2 стороны'];
  if (!target) return null;

  return {
    label: calcState.quantity === 100
      ? `☼ Выгоднее на 80% - 1000 шт за ${formatMoney(target)}`
      : `☼ Выгоднее - 1000 шт за ${formatMoney(target)}`,
    quantity: 1000,
    side: '2 стороны'
  };
}

function getLeads() {
  try {
    return JSON.parse(localStorage.getItem(LEADS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveLead(lead) {
  const leads = getLeads();
  leads.push({ ...lead, createdAt: new Date().toLocaleString('ru-RU') });
  try {
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  } catch {
    console.warn('Не удалось сохранить заявку локально');
  }
}

function leadMessage(lead) {
  const lines = [
    'Новая заявка с сайта Реклама',
    `Тип: ${lead.type}`,
    lead.name ? `Имя: ${lead.name}` : '',
    lead.phone ? `Телефон: ${lead.phone}` : '',
    lead.product ? `Продукт: ${lead.product}` : '',
    lead.format ? `Формат: ${lead.format}` : '',
    lead.quantity ? `Тираж: ${lead.quantity} шт` : '',
    lead.side ? `Печать: ${lead.side}` : '',
    lead.price ? `Стоимость: ${lead.price}` : '',
    lead.comment ? `Комментарий: ${lead.comment}` : ''
  ];
  return lines.filter(Boolean).join('\n');
}

function openTelegramLead(lead) {
  const text = leadMessage(lead);
  const telegramUrl = `${CONTACTS.telegram}?text=${encodeURIComponent(text)}`;
  window.location.href = telegramUrl;
}

function makePill(text, active, disabled, onClick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'pill';
  button.textContent = text;
  button.disabled = disabled;
  if (active) button.classList.add('active');
  button.addEventListener('click', onClick);
  return button;
}

function openProduct(productKey) {
  const product = productData[productKey];
  calcState.product = productKey;
  calcState.format = product.formats[0] || '';
  calcState.quantity = product.quantities[0] || null;
  calcState.side = product.sides[0] || '';
  if (product.mode !== 'individual' && !sideAvailable(calcState.side)) {
    calcState.side = Object.keys(priceTable()[calcState.quantity])[0];
  }
  renderProductModal();
  productModal.hidden = false;
}

function renderProductModal() {
  const product = currentProduct();
  calcImage.src = product.image;
  calcImage.alt = product.title;
  calcTitle.textContent = product.title;
  calcSize.textContent = product.size;
  const isIndividual = product.mode === 'individual';

  formatOptions.innerHTML = '';
  formatOptions.hidden = isIndividual || !product.formats.length;
  product.formats.forEach((format) => {
    formatOptions.append(makePill(format, calcState.format === format, false, () => {
      calcState.format = format;
      renderProductModal();
    }));
  });

  quantityOptions.innerHTML = '';
  quantityOptions.hidden = isIndividual;
  product.quantities.forEach((quantity) => {
    quantityOptions.append(makePill(`${quantity}шт`, calcState.quantity === quantity, false, () => {
      calcState.quantity = quantity;
      if (!sideAvailable(calcState.side)) calcState.side = Object.keys(priceTable()[quantity])[0];
      renderProductModal();
    }));
  });

  sideOptions.innerHTML = '';
  sideOptions.hidden = isIndividual;
  product.sides.forEach((side) => {
    sideOptions.append(makePill(side, calcState.side === side, !sideAvailable(side), () => {
      calcState.side = side;
      renderProductModal();
    }));
  });

  price.classList.toggle('is-text', isIndividual);
  price.textContent = isIndividual ? 'Просчёт индивидуальный' : formatMoney(currentPrice());
  calcNote.textContent = product.customNote || '';

  const offer = bestOffer();
  dealButton.classList.toggle('visible', Boolean(offer || product.fixedNote));
  dealButton.disabled = !offer;
  dealButton.textContent = offer ? offer.label : product.fixedNote || '';
}

document.querySelectorAll('[data-product]').forEach((button) => {
  button.addEventListener('click', () => openProduct(button.dataset.product));
});

dealButton.addEventListener('click', () => {
  const offer = bestOffer();
  if (!offer) return;
  calcState.quantity = offer.quantity;
  calcState.side = offer.side;
  renderProductModal();
});

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const lead = {
    type: 'Расчет с главной формы',
    name: document.querySelector('#leadName').value.trim(),
    phone: document.querySelector('#leadPhone').value.trim()
  };
  saveLead(lead);
  leadStatus.textContent = 'Заявка сохранена. Открываем Telegram.';
  openTelegramLead(lead);
  leadForm.reset();
});

document.querySelector('#submitOrder').addEventListener('click', () => {
  const product = currentProduct();
  const lead = {
    type: 'Заказ продукции',
    product: product.title,
    format: calcState.format,
    quantity: calcState.quantity,
    side: calcState.side,
    price: price.textContent,
    comment: product.mode === 'individual' ? product.customNote : ''
  };
  saveLead(lead);
  openTelegramLead(lead);
});

const worksModal = document.querySelector('#worksModal');
const popupImage = document.querySelector('#popupImage');
const popupCaption = document.querySelector('#popupCaption');
let currentWork = 0;
let currentWorkCategory = 0;

function renderWork() {
  const category = workData[currentWorkCategory];
  popupImage.src = category[currentWork].image;
  popupImage.alt = category[currentWork].title;
  popupCaption.textContent = category[currentWork].title;
}

function openWork(index) {
  currentWorkCategory = index;
  currentWork = 0;
  renderWork();
  worksModal.hidden = false;
}

document.querySelectorAll('[data-work]').forEach((button) => {
  button.addEventListener('click', () => openWork(Number(button.dataset.work)));
});

document.querySelector('#closeProduct').addEventListener('click', () => {
  productModal.hidden = true;
});
document.querySelector('#closeWorks').addEventListener('click', () => {
  worksModal.hidden = true;
});
document.querySelector('#prevWork').addEventListener('click', () => {
  currentWork = (currentWork - 1 + workData[currentWorkCategory].length) % workData[currentWorkCategory].length;
  renderWork();
});
document.querySelector('#nextWork').addEventListener('click', () => {
  currentWork = (currentWork + 1) % workData[currentWorkCategory].length;
  renderWork();
});

worksModal.addEventListener('click', (event) => {
  if (event.target === worksModal) worksModal.hidden = true;
});

productModal.addEventListener('click', (event) => {
  if (event.target === productModal) productModal.hidden = true;
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    productModal.hidden = true;
    worksModal.hidden = true;
  }
  if (!worksModal.hidden && event.key === 'ArrowLeft') document.querySelector('#prevWork').click();
  if (!worksModal.hidden && event.key === 'ArrowRight') document.querySelector('#nextWork').click();
});

fetch('prices.json')
  .then((response) => response.ok ? response.json() : null)
  .then((prices) => {
    if (!prices) return;
    Object.keys(prices).forEach((key) => {
      if (productData[key]) productData[key].prices = prices[key];
    });
  })
  .catch(() => {});
