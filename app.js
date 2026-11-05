const official = 'https://www.jdl.com';

const services = [
  {name:'快递快运服务',icon:'assets/line-express.png',description:'向企业及个人客户提供安全可靠、时效领先、专业贴心的快递及快运服务，以及在此基础上的多种增值服务',products:[['快递',null],['京东特快','/express/jdFastest/'],['京东标快','/express/jdStandard/'],['增值服务','/express/addValueService/'],['查看更多','/express/'],['快运',null],['重货标快','/freight/fastCargo/'],['整车直达','/freight/completeVehicle/']],image:'assets/visual-express.png',link:'/express/'},
  {name:'仓配一体服务',icon:'assets/line-supplyChain.png',description:'整合仓储、配送与数智系统，打造高效的一体化供应链履约体验。',products:[['商务仓','/supplyChain/businessWarehouse/'],['电商仓','/supplyChain/eWarehouse/'],['智能仓储','/supplyChain/intelligentWarehouse/'],['云仓','/supplyChain/cloudWarehouse/']],image:'assets/supply-photo.jpeg',link:'/supplyChain/'},
  {name:'大件服务',icon:'assets/line-bulky.png',description:'针对家电、家居等大件商品，提供专业配送与送装服务。',products:[['大件运输','/bulky/business/'],['家电服务','/bulky/homeAppliances/'],['增值服务','/bulky/addValueService/']],image:'assets/express-photo.jpeg',link:'/bulky/'},
  {name:'送仓服务',icon:'assets/line-warehouse.png',description:'连接产地、工厂与仓库，满足多样化的入仓运输需求。',products:[['快递送仓','/reachWarehouse/fast/'],['零担送仓','/reachWarehouse/large/'],['整车专送','/reachWarehouse/whole/']],image:'assets/supply-photo.jpeg',link:'/reachWarehouse/'},
  {name:'冷链服务',icon:'assets/line-coldChain.png',description:'覆盖仓储、干线及末端配送的多温层冷链服务。',products:[['生鲜商务仓','/coldChain/bizWarehouse/'],['冷链卡班','/coldChain/truckService/'],['冷链城配','/coldChain/cityColdChain/'],['冷链专送','/coldChain/exclusiveDelivery/']],image:'assets/express-photo.jpeg',link:'/coldChain/'},
  {name:'医药服务',icon:'assets/line-medicine.png',description:'合规、可视、可靠的医药仓储与医药冷链服务。',products:[['医药商务仓','/medicine/business/'],['医冷快递','/medicine/coldExpress/'],['医冷零担','/medicine/coldLTL/']],image:'assets/supply-photo.jpeg',link:'/medicine/'},
  {name:'京东服务',icon:'assets/line-servicePlus.png',description:'面向家庭和企业的安装、维修、清洗等专业服务。',products:[['安装服务','/servicePlus/install/'],['维修服务','/servicePlus/repair/'],['清洗服务','/servicePlus/cleaning/']],image:'assets/visual-express.png',link:'/servicePlus/'},
  {name:'运力服务',icon:'assets/line-capacity.png',description:'以多样化运力资源满足不同规模的运输需求。',products:[['专线包仓','/capacity/dedicatedLine/'],['全货机包机','/capacity/fullCargo/']],image:'assets/visual-capacity.png',link:'/capacity/'},
  {name:'国际物流',icon:'assets/line-inter.png',description:'连接全球的跨境运输与海外仓配解决方案。',products:[['国际快递','/crossBorder/internationalC2C/'],['国际运输','/crossBorder/internationalTrans/'],['海外仓配','/crossBorder/overseasWarehouse/']],image:'assets/express-photo.jpeg',link:'/crossBorder/'},
  {name:'物流科技',icon:'assets/line-technology.png',description:'以智能仓储、自动化与数智平台助力供应链升级。',products:[['智能仓储','/technology/intelligentWarehouse/'],['智能物流园区','/technology/intelligentPark/'],['数智化供应链','/technology/digitizedSupplyChain/']],image:'assets/supply-photo.jpeg',link:'/technology/'}
];

const solutions = [
  {name:'快消',title:'快消',description:'为消费品行业客户提供数字化、可视化、智能化的一体解决方案，向客户提供全渠道 E2E 服务，实现供应链升级',features:['多渠道多场景的供应链服务能力','广泛的物流网络覆盖能力'],image:'assets/industry-consumer.jpeg',link:'/consumerGoods/'},
  {name:'服装',title:'服装',description:'以柔性供应链响应潮流变化，支持品牌多渠道经营。',features:['柔性仓配网络','全渠道库存调度','高效退换货服务'],image:'assets/industry-dress.jpeg',link:'/dress/'},
  {name:'家电',title:'家电',description:'覆盖运输、入户与售后，打通家电交付全链路。',features:['仓运配装一体','大件商品专业交付','正逆向服务协同'],image:'assets/industry-homeAppliances.jpeg',link:'/homeAppliances/'},
  {name:'3C',title:'3C',description:'以精准、敏捷的物流服务助力电子产品高效流通。',features:['多场景履约服务','高价值商品保障','智能化库存协同'],image:'assets/industry-digital.jpeg',link:'/digital/'},
  {name:'汽车',title:'汽车',description:'连接生产、流通与服务环节，提升汽车产业链效率。',features:['零部件仓配服务','供应链网络协同','售后备件保障'],image:'assets/industry-car.jpeg',link:'/carService/'},
  {name:'生鲜',title:'生鲜',description:'从产地到消费者，让鲜活品质在全程冷链中保持。',features:['多温层冷链网络','产地到餐桌履约','全程可视化管理'],image:'assets/industry-fresh.jpeg',link:'/freshSolution/'}
];

const slides = [
  {kicker:'京东物流 · 让世界智慧流动',title:'助力企业降本增效<br>一体化供应链解决方案专家',subtitle:'以技术驱动供应链创新，让每一份托付都安心抵达',image:'assets/hero.webp',link:'/profile/'},
  {kicker:'京东物流 · 省心高效',title:'物流服务遍布全球<br>连接每一种可能',subtitle:'快递、快运、仓配一体，让物流更简单',image:'assets/solution-bg.jpg',link:'/supplyChain/'},
  {kicker:'京东物流 · 专业可靠',title:'面向丰富场景<br>提供一体化物流服务',subtitle:'凭借强大的基础设施与技术能力，服务千行百业',image:'assets/network-bg.jpg',link:'/express/'}
];

function create(tag, className, value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (value !== undefined) element.textContent = value;
  return element;
}

let activeService = 0;
const serviceTabs = document.querySelector('.service-tabs');
const serviceTitle = document.getElementById('service-title');
const serviceDesc = document.getElementById('service-desc');
const serviceProducts = document.getElementById('service-products');
const serviceLink = document.getElementById('service-link');

services.forEach((service,index) => {
  const button = create('button','service-tab');
  button.type = 'button';
  button.setAttribute('role','tab');
  button.setAttribute('aria-selected','false');
  button.setAttribute('aria-label',service.name);
  const icon = create('img');
  icon.src = service.icon;
  icon.alt = '';
  button.append(icon,create('span','',service.name));
  button.addEventListener('click',() => selectService(index));
  serviceTabs.append(button);
});

function selectService(index,shouldScroll = true) {
  activeService = index;
  const item = services[index];
  [...serviceTabs.children].forEach((tab,tabIndex) => {
    tab.classList.toggle('active',tabIndex === index);
    tab.setAttribute('aria-selected',String(tabIndex === index));
  });
  serviceTitle.textContent = item.name;
  serviceDesc.textContent = item.description;
  serviceProducts.replaceChildren();
  item.products.forEach(([name,path]) => {
    if (!path) {
      serviceProducts.append(create('strong','service-product-heading',name));
    } else {
      const link = create('a','',name + '  →');
      link.href = official + path;
      serviceProducts.append(link);
    }
  });
  serviceLink.href = official + item.link;
  const visual = document.querySelector('.service-visual');
  visual.src = item.image;
  visual.classList.toggle('is-photo',/\.jpe?g$/i.test(item.image));
  if (shouldScroll) serviceTabs.children[index].scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});
}
selectService(0,false);
document.querySelector('.tab-arrow.left').addEventListener('click',() => selectService((activeService + services.length - 1) % services.length));
document.querySelector('.tab-arrow.right').addEventListener('click',() => selectService((activeService + 1) % services.length));

const solutionTabs = document.querySelector('.solution-tabs');
const solutionTitle = document.getElementById('solution-title');
const solutionDesc = document.getElementById('solution-desc');
const solutionFeatures = document.getElementById('solution-features');
const solutionLink = document.getElementById('solution-link');
const solutionBackdrop = document.querySelector('.solutions-backdrop');

solutions.forEach((solution,index) => {
  const button = create('button','solution-tab',solution.name);
  button.type = 'button';
  button.setAttribute('role','tab');
  button.setAttribute('aria-selected','false');
  button.addEventListener('mouseenter',() => selectSolution(index));
  button.addEventListener('focus',() => selectSolution(index));
  button.addEventListener('click',() => selectSolution(index));
  solutionTabs.append(button);
});

function selectSolution(index) {
  const item = solutions[index];
  [...solutionTabs.children].forEach((tab,tabIndex) => {
    tab.classList.toggle('active',tabIndex === index);
    tab.setAttribute('aria-selected',String(tabIndex === index));
  });
  solutionTitle.textContent = item.title;
  solutionDesc.textContent = item.description;
  solutionFeatures.replaceChildren();
  item.features.forEach(feature => solutionFeatures.append(create('li','',feature)));
  solutionLink.href = official + item.link;
  solutionBackdrop.style.backgroundImage = 'url("' + item.image + '")';
}
selectSolution(0);

const nav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click',() => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('.nav-trigger').forEach(trigger => {
  trigger.addEventListener('click',() => {
    const group = trigger.parentElement;
    const open = group.classList.toggle('open');
    document.querySelectorAll('.nav-group').forEach(other => {
      if (other !== group) {
        other.classList.remove('open');
        other.querySelector('.nav-trigger').setAttribute('aria-expanded','false');
      }
    });
    trigger.setAttribute('aria-expanded',String(open));
  });
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click',() => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));

const form = document.getElementById('waybill-form');
const input = document.getElementById('waybill-number');
const error = document.getElementById('search-error');
const clearInput = document.querySelector('.clear-input');
input.addEventListener('input',() => {
  error.textContent = '';
  clearInput.classList.toggle('visible',Boolean(input.value));
});
clearInput.addEventListener('click',() => {
  input.value = '';
  error.textContent = '';
  clearInput.classList.remove('visible');
  input.focus();
});
form.addEventListener('submit',event => {
  event.preventDefault();
  const numbers = input.value.split(/[\s,，]+/).map(value => value.trim()).filter(Boolean);
  if (!numbers.length) {
    error.textContent = '请输入运单号';
    input.focus();
    return;
  }
  window.location.href = official + '/orderSearch?waybillCodes=' + encodeURIComponent(numbers.join(','));
});

const hero = document.querySelector('.hero');
const heroImage = document.querySelector('.hero-image');
const heroDots = [...document.querySelectorAll('.hero-pagination button')];
let activeSlide = 0;
let slideTimer;
function showSlide(index) {
  activeSlide = index;
  const slide = slides[index];
  heroImage.style.backgroundImage = 'url("' + slide.image + '")';
  hero.querySelector('.hero-kicker').textContent = slide.kicker;
  hero.querySelector('h1').innerHTML = slide.title;
  hero.querySelector('.hero-subtitle').textContent = slide.subtitle;
  hero.querySelector('.outline-button').href = official + slide.link;
  heroDots.forEach((dot,dotIndex) => dot.classList.toggle('on',dotIndex === index));
}
heroDots.forEach((dot,index) => dot.addEventListener('click',() => {
  showSlide(index);
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide((activeSlide + 1) % slides.length),15000);
}));
slideTimer = setInterval(() => showSlide((activeSlide + 1) % slides.length),15000);

const newsBackdrop = document.querySelector('.news-backdrop');
document.querySelectorAll('.news-card').forEach(card => card.addEventListener('mouseenter',() => {
  const image = card.querySelector('img');
  newsBackdrop.style.backgroundImage = 'linear-gradient(rgba(42,42,46,.67),rgba(42,42,46,.7)),url("' + image.getAttribute('src') + '")';
}));

const header = document.querySelector('.site-header');
const backTop = document.getElementById('back-top');
window.addEventListener('scroll',() => header.classList.toggle('scrolled',window.scrollY > 20),{passive:true});
backTop.addEventListener('click',() => window.scrollTo({top:0,behavior:'smooth'}));
