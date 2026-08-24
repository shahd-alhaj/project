/* ============ KIRAZ APP ============ */

const IMG = {
  heelsA:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80",
  heelsA2:"https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=80",
  heelsB:"https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=700&q=80",
  heelsB2:"https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=700&q=80",
  shoesC:"https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80",
  shoesC2:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=700&q=80",
  flatShoes:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
  bagA:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=700&q=80",
  bagA2:"https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=700&q=80",
  bagB:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
  bagB2:"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80",
  jewelryA:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80",
  jewelryB:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80",
  flatlay:"https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=80",
  scarf:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
  modelA:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80",
  modelB:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
  modelC:"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
  modelD:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
  modelE:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
  modelF:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=80",
  modelG:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80",
  modelH:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?auto=format&fit=crop&w=700&q=80",
};

const COLOR_HEX = {Black:"#1B1815",Nude:"#D9BFA3",Bordeaux:"#5E2331",Gold:"#AD8752",Taupe:"#A8927E",Beige:"#D8CBBB",Brown:"#6B4A34",Ivory:"#F1E9DB",White:"#FFFFFF",Blush:"#E8C9C4",Silver:"#C7C7C7",Pearl:"#EFE7DA",Charcoal:"#332E29"};

const PRODUCTS = [
  {id:1,name:"Elodie Pointed Pumps",cat:"Shoes",price:189,colors:["Black","Nude","Bordeaux"],sizes:[36,37,38,39,40],img1:IMG.heelsA,img2:IMG.heelsA2,rating:4.8,tags:["bestseller","evening","elegant","black"],desc:"A razor-sharp pointed-toe pump crafted from supple Italian leather, balanced on a 90mm heel for all-day elegance."},
  {id:2,name:"Marlowe Ankle Strap Heels",cat:"Shoes",price:215,colors:["Black","Gold"],sizes:[36,37,38,39,40],img1:IMG.heelsB,img2:IMG.heelsB2,rating:4.6,tags:["new","evening","elegant","gold"],desc:"A fine ankle strap and sculpted heel give this silhouette a quiet drama, finished in hand-burnished leather."},
  {id:3,name:"Camille Leather Loafers",cat:"Shoes",price:165,colors:["Taupe","Black"],sizes:[36,37,38,39,40,41],img1:IMG.shoesC,img2:IMG.shoesC2,rating:4.7,tags:["bestseller","everyday","classic","taupe"],desc:"The everyday loafer, reimagined — a soft round toe, a low stacked heel, and buttery leather that only gets better with time."},
  {id:4,name:"Noor Braided Sandals",cat:"Shoes",price:145,colors:["Beige","Brown"],sizes:[36,37,38,39,40],img1:IMG.flatShoes,img2:IMG.shoesC,rating:4.5,tags:["everyday","casual","beige"],desc:"Hand-braided straps in vegetable-tanned leather, designed for warm days and long walks through the old city."},
  {id:5,name:"Aurelie Structured Tote",cat:"Bags",price:260,colors:["Ivory","Black"],sizes:[],img1:IMG.bagA,img2:IMG.bagA2,rating:4.9,tags:["bestseller","work","classic","ivory"],desc:"A disciplined silhouette in full-grain leather, roomy enough for a laptop and elegant enough for evening."},
  {id:6,name:"Rêve Mini Shoulder Bag",cat:"Bags",price:195,colors:["Beige","Bordeaux"],sizes:[],img1:IMG.bagB,img2:IMG.bagB2,rating:4.6,tags:["new","occasion","elegant","beige"],desc:"A jewel-like proportion on a slim chain strap — made for evenings that call for very little, carried very well."},
  {id:7,name:"Lumière Clutch",cat:"Bags",price:135,colors:["Gold","Black"],sizes:[],img1:IMG.bagA2,img2:IMG.bagA,rating:4.4,tags:["occasion","evening","gold"],desc:"A softly pleated evening clutch in metallic leather, sized for the essentials and nothing more."},
  {id:8,name:"Simone Crossbody",cat:"Bags",price:175,colors:["Taupe","White"],sizes:[],img1:IMG.bagB2,img2:IMG.bagB,rating:4.7,tags:["bestseller","everyday","casual","taupe"],desc:"Hands-free ease with a structured edge — an adjustable strap and a magnetic close for a day on the move."},
  {id:9,name:"Étoile Gold Hoops",cat:"Accessories",price:65,colors:["Gold"],sizes:[],img1:IMG.jewelryA,img2:IMG.jewelryB,rating:4.8,tags:["everyday","classic","gold"],desc:"Fourteen-karat gold-plated hoops with a satisfying weight, designed to move gently with you."},
  {id:10,name:"Cascade Layered Necklace",cat:"Accessories",price:89,colors:["Gold","Silver"],sizes:[],img1:IMG.jewelryB,img2:IMG.jewelryA,rating:4.5,tags:["new","occasion","trendy","gold"],desc:"Three fine chains, cascading — worn together or separated, always with quiet intention."},
  {id:11,name:"Ombre Silk Scarf",cat:"Accessories",price:55,colors:["Ivory","Charcoal"],sizes:[],img1:IMG.scarf,img2:IMG.flatlay,rating:4.6,tags:["everyday","classic","ivory"],desc:"Hand-rolled edges on pure mulberry silk, dip-dyed for a gradient that shifts with the light."},
  {id:12,name:"Perle Statement Earrings",cat:"Accessories",price:72,colors:["Gold","Pearl"],sizes:[],img1:IMG.flatlay,img2:IMG.jewelryA,rating:4.9,tags:["bestseller","occasion","elegant","gold"],desc:"Freshwater pearls set in brushed gold — the kind of earrings that finish a look without asking for attention."},
  {id:13,name:"Vienne Block Heel Boots",cat:"Shoes",price:225,colors:["Black","Brown"],sizes:[36,37,38,39,40,41],img1:IMG.shoesC2,img2:IMG.heelsB,rating:4.7,tags:["new","work","classic","black"],desc:"A grounded block heel and clean ankle line make this boot the season's most versatile piece."},
  {id:14,name:"Nour Woven Belt Bag",cat:"Bags",price:150,colors:["Beige"],sizes:[],img1:IMG.bagA,img2:IMG.bagB,rating:4.4,tags:["new","casual","trendy","beige"],desc:"A hand-woven belt bag that sits at the hip, made for markets, museums, and everything between."},
  {id:15,name:"Adele Satin Slingbacks",cat:"Shoes",price:198,colors:["Blush","Black"],sizes:[36,37,38,39,40],img1:IMG.heelsA2,img2:IMG.heelsA,rating:4.8,tags:["bestseller","evening","elegant","blush"],desc:"Liquid satin, a delicate slingback strap, and a heel height built for dancing until the very end."},
  {id:16,name:"Celeste Chain Belt",cat:"Accessories",price:58,colors:["Gold"],sizes:[],img1:IMG.jewelryA,img2:IMG.flatlay,rating:4.3,tags:["new","trendy","gold"],desc:"A slouchy gold chain belt that dresses down denim and dresses up nearly everything else."}
];

const LOOKBOOK_IMAGES = [IMG.modelA,IMG.modelB,IMG.modelC,IMG.modelD,IMG.modelE,IMG.modelF,IMG.modelG,IMG.modelH,IMG.heelsA,IMG.bagA];
const REVIEWS = [
  {name:"Lina H.",text:"Every piece feels like it was chosen by someone who actually understands how a woman gets dressed. The loafers have not left my feet in weeks."},
  {name:"Rana Q.",text:"Walked in for a pair of heels for a wedding and left with three things I didn't know I needed. The staff have real taste."},
  {name:"Yasmin A.",text:"The quality is a different tier from anything else available here — this feels like something you'd find in a Milan boutique."},
  {name:"Dima S.",text:"My go-to for gifts. The gold hoops were wrapped so beautifully I almost didn't want to give them away."},
  {name:"Farah M.",text:"KIRAZ understands restraint. Nothing is loud, everything is considered, and it all somehow goes together."},
];

/* ============ STATE ============ */
const state = { cart: [], wishlist: [], featuredIndex: 0, finderStep: 0, finderAnswers: {}, tryonProductId: null, lightboxIndex: 0, pdpProductId: null, pdpColor:null, pdpSize:null, pdpQty:1, pdpTab:'details' };

const money = n => `$${n.toFixed(0)}`;
const findProduct = id => PRODUCTS.find(p => p.id === id);
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

/* ============ TOAST ============ */
let toastTimer;
function showToast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2400);
}

/* ============ CHERRY ICON HELPER ============ */
const heartIcon = filled => `<svg viewBox="0 0 24 24" width="16" height="16" fill="${filled?'currentColor':'none'}" stroke="currentColor" stroke-width="1.4"><path d="M12 20.5s-8-4.8-8-11A4.9 4.9 0 0 1 12 6.2 4.9 4.9 0 0 1 20 9.5c0 6.2-8 11-8 11z"/></svg>`;

/* ============ PRODUCT CARD RENDER ============ */
function productCard(p){
  const wished = state.wishlist.includes(p.id);
  const tag = p.tags.includes('new') ? '<span class="pc-tag">New</span>' : (p.tags.includes('bestseller') ? '<span class="pc-tag">Bestseller</span>' : '');
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="pc-media">
      ${tag}
      <button class="pc-wish ${wished?'active':''}" data-wish="${p.id}" aria-label="Toggle wishlist">${heartIcon(wished)}</button>
      <img class="img-a" loading="lazy" src="${p.img1}" alt="${p.name}">
      <img class="img-b" loading="lazy" src="${p.img2}" alt="${p.name} alternate view">
      <button class="pc-quick" data-quick="${p.id}">Quick View</button>
    </div>
    <div class="pc-info">
      <span class="pc-cat">${p.cat}</span>
      <h3 class="pc-name" data-detail="${p.id}">${p.name}</h3>
      <div class="pc-bottom">
        <span class="pc-price">${money(p.price)}</span>
        <span class="pc-colors">${p.colors.map(c=>`<span class="pc-color" style="background:${COLOR_HEX[c]||'#ccc'}"></span>`).join('')}</span>
      </div>
      <button class="pc-add" data-quickadd="${p.id}">Add to Bag</button>
    </div>
  </div>`;
}

function bindProductCardEvents(container){
  container.querySelectorAll('[data-wish]').forEach(btn=>btn.addEventListener('click', e=>{e.stopPropagation();toggleWishlist(parseInt(btn.dataset.wish));}));
  container.querySelectorAll('[data-quick]').forEach(btn=>btn.addEventListener('click', e=>{e.stopPropagation();openQuickView(parseInt(btn.dataset.quick));}));
  container.querySelectorAll('[data-detail]').forEach(el=>el.addEventListener('click', ()=>openProductDetail(parseInt(el.dataset.detail))));
  container.querySelectorAll('[data-quickadd]').forEach(btn=>btn.addEventListener('click', e=>{
    e.stopPropagation();
    const p = findProduct(parseInt(btn.dataset.quickadd));
    addToCart(p.id, p.colors[0], p.sizes[0]||null, 1);
  }));
}

/* ============ FEATURED CAROUSEL ============ */
function renderFeatured(){
  const el = $('#featuredCarousel');
  el.innerHTML = PRODUCTS.slice(0,10).map(productCard).join('');
  bindProductCardEvents(el);
}
$('#featPrev').addEventListener('click', ()=> $('#featuredCarousel').scrollBy({left:-620,behavior:'smooth'}));
$('#featNext').addEventListener('click', ()=> $('#featuredCarousel').scrollBy({left:620,behavior:'smooth'}));

/* ============ BEST SELLERS GRID (filter/sort/search) ============ */
let activeCatFilter = 'all';
function renderGrid(){
  let list = PRODUCTS.filter(p => activeCatFilter==='all' || p.cat===activeCatFilter);
  const price = $('#priceFilter').value;
  if(price !== 'all'){
    const [lo,hi] = price.split('-').map(Number);
    list = list.filter(p => p.price >= lo && p.price <= hi);
  }
  const sort = $('#sortFilter').value;
  if(sort==='price-asc') list = [...list].sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') list = [...list].sort((a,b)=>b.price-a.price);
  if(sort==='name') list = [...list].sort((a,b)=>a.name.localeCompare(b.name));
  if(sort==='featured') list = [...list].sort((a,b)=>(b.tags.includes('bestseller')?1:0)-(a.tags.includes('bestseller')?1:0));

  const grid = $('#bestSellersGrid');
  grid.innerHTML = list.map(productCard).join('');
  bindProductCardEvents(grid);
  $('#gridEmpty').hidden = list.length !== 0;
}
$$('#catFilters .chip').forEach(chip=>chip.addEventListener('click', ()=>{
  $$('#catFilters .chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');
  activeCatFilter = chip.dataset.filter;
  renderGrid();
}));
$('#priceFilter').addEventListener('change', renderGrid);
$('#sortFilter').addEventListener('change', renderGrid);

/* ============ NAV CATEGORY LINKS -> jump + filter ============ */
$$('[data-cat]').forEach(link=>link.addEventListener('click', (e)=>{
  const cat = link.dataset.cat;
  if(!cat) return;
  setTimeout(()=>{
    if(cat==='New'){ activeCatFilter='all'; renderGrid(); return; }
    activeCatFilter = cat === 'all' ? 'all' : cat;
    const chip = $$('#catFilters .chip').find(c=>c.dataset.filter===cat) || $$('#catFilters .chip')[0];
    $$('#catFilters .chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    renderGrid();
    document.getElementById('shop').scrollIntoView({behavior:'smooth'});
  }, 50);
  closeMobileMenu();
}));
$('#exploreNewBtn').addEventListener('click', ()=>{
  const sorted = [...PRODUCTS].filter(p=>p.tags.includes('new'));
  activeCatFilter='all';
  $$('#catFilters .chip').forEach(c=>c.classList.remove('active'));
  $$('#catFilters .chip')[0].classList.add('active');
  renderGrid();
  document.querySelector('.best-sellers').scrollIntoView({behavior:'smooth'});
});

/* ============ CART ============ */
function addToCart(productId, color, size, qty){
  const existing = state.cart.find(i=>i.productId===productId && i.color===color && i.size===size);
  if(existing){ existing.qty += qty; }
  else{ state.cart.push({productId,color,size,qty}); }
  updateCartUI();
  showToast('Added to your bag');
}
function removeFromCart(idx){ state.cart.splice(idx,1); updateCartUI(); }
function changeQty(idx, delta){
  state.cart[idx].qty += delta;
  if(state.cart[idx].qty <= 0) state.cart.splice(idx,1);
  updateCartUI();
}
function cartTotal(){ return state.cart.reduce((sum,i)=>sum + findProduct(i.productId).price * i.qty, 0); }
function cartCount(){ return state.cart.reduce((sum,i)=>sum+i.qty,0); }

function updateCartUI(){
  const count = cartCount();
  $('#cartBadge').textContent = count;
  $('#stickyBag').hidden = count === 0;
  $('#stickyBagInfo').textContent = `${count} item${count!==1?'s':''} · ${money(cartTotal())}`;

  const body = $('#cartBody');
  if(state.cart.length === 0){
    body.innerHTML = `<div class="empty-drawer">${heartBagSvg()}<p>Your bag is empty.</p><p style="font-size:12px;">Pieces you add will appear here.</p></div>`;
    $('#cartFoot').innerHTML = '';
    return;
  }
  body.innerHTML = state.cart.map((item,idx)=>{
    const p = findProduct(item.productId);
    return `<div class="cart-item">
      <img src="${p.img1}" alt="${p.name}">
      <div style="flex:1;">
        <div class="ci-name">${p.name}</div>
        <div class="ci-meta">${item.color}${item.size?` · Size ${item.size}`:''}</div>
        <div class="ci-qty">
          <button data-dec="${idx}">−</button><span>${item.qty}</span><button data-inc="${idx}">+</button>
          <span class="ci-price">${money(p.price*item.qty)}</span>
        </div>
      </div>
      <button class="ci-remove" data-remove="${idx}">Remove</button>
    </div>`;
  }).join('');
  body.querySelectorAll('[data-inc]').forEach(b=>b.addEventListener('click',()=>changeQty(parseInt(b.dataset.inc),1)));
  body.querySelectorAll('[data-dec]').forEach(b=>b.addEventListener('click',()=>changeQty(parseInt(b.dataset.dec),-1)));
  body.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>removeFromCart(parseInt(b.dataset.remove))));

  const subtotal = cartTotal();
  $('#cartFoot').innerHTML = `
    <div class="cart-row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
    <div class="cart-row"><span>Shipping</span><span>${subtotal>150?'Free':'$8'}</span></div>
    <div class="cart-row total"><span>Total</span><span>${money(subtotal + (subtotal>150?0:8))}</span></div>
    <button class="btn btn-dark" style="width:100%;margin-top:16px;" id="checkoutBtn">Checkout</button>
  `;
  $('#checkoutBtn').addEventListener('click', ()=>{
    closeDrawer('cartOverlay');
    showToast('This is a UI preview — checkout isn\'t connected yet.');
  });
}
function heartBagSvg(){ return `<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 8h12l-1 12.5a1 1 0 0 1-1 .9H8a1 1 0 0 1-1-.9L6 8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>`; }

/* ============ WISHLIST ============ */
function toggleWishlist(id){
  const idx = state.wishlist.indexOf(id);
  if(idx>-1) state.wishlist.splice(idx,1); else state.wishlist.push(id);
  updateWishlistUI();
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(btn=>{
    btn.classList.toggle('active');
    btn.innerHTML = heartIcon(state.wishlist.includes(id));
  });
  if(state.pdpProductId===id){
    const wb = document.getElementById('pdpWishBtn');
    if(wb){ wb.classList.toggle('active'); wb.innerHTML = heartIcon(state.wishlist.includes(id)) + ' Wishlist'; }
  }
}
function updateWishlistUI(){
  $('#wishlistBadge').textContent = state.wishlist.length;
  const body = $('#wishlistBody');
  if(state.wishlist.length===0){
    body.innerHTML = `<div class="empty-drawer">${heartIcon(false).replace('width="16" height="16"','width="34" height="34"')}<p>Your wishlist is empty.</p><p style="font-size:12px;">Tap the heart on any piece to save it here.</p></div>`;
    return;
  }
  body.innerHTML = state.wishlist.map(id=>{
    const p = findProduct(id);
    return `<div class="cart-item">
      <img src="${p.img1}" alt="${p.name}">
      <div style="flex:1;">
        <div class="ci-name">${p.name}</div>
        <div class="ci-meta">${money(p.price)}</div>
        <button class="btn btn-sm btn-outline-dark" data-wadd="${p.id}">Add to Bag</button>
      </div>
      <button class="ci-remove" data-wremove="${p.id}">Remove</button>
    </div>`;
  }).join('');
  body.querySelectorAll('[data-wadd]').forEach(b=>b.addEventListener('click',()=>{
    const p = findProduct(parseInt(b.dataset.wadd));
    addToCart(p.id, p.colors[0], p.sizes[0]||null, 1);
  }));
  body.querySelectorAll('[data-wremove]').forEach(b=>b.addEventListener('click',()=>toggleWishlist(parseInt(b.dataset.wremove))));
}

/* ============ DRAWERS / OVERLAYS ============ */
function openDrawer(id){ document.getElementById(id).classList.add('open'); document.body.style.overflow='hidden'; }
function closeDrawer(id){ document.getElementById(id).classList.remove('open'); document.body.style.overflow=''; }
$('#cartBtn').addEventListener('click', ()=>openDrawer('cartOverlay'));
$('#cartClose').addEventListener('click', ()=>closeDrawer('cartOverlay'));
$('#cartOverlay').addEventListener('click', e=>{ if(e.target.id==='cartOverlay') closeDrawer('cartOverlay'); });
$('#wishlistBtn').addEventListener('click', ()=>openDrawer('wishlistOverlay'));
$('#wishlistClose').addEventListener('click', ()=>closeDrawer('wishlistOverlay'));
$('#wishlistOverlay').addEventListener('click', e=>{ if(e.target.id==='wishlistOverlay') closeDrawer('wishlistOverlay'); });
$('#accountBtn').addEventListener('click', ()=>showToast('Sign-in is coming soon to KIRAZ.'));

/* ============ SEARCH ============ */
$('#searchBtn').addEventListener('click', ()=>{
  openDrawer('searchOverlay');
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(()=>$('#searchInput').focus(), 300);
});
$('#searchClose').addEventListener('click', ()=>closeDrawer('searchOverlay'));
$('#searchOverlay').addEventListener('click', e=>{ if(e.target.id==='searchOverlay') closeDrawer('searchOverlay'); });
$('#searchInput').addEventListener('input', e=>{
  const q = e.target.value.trim().toLowerCase();
  const res = $('#searchResults');
  if(!q){ res.innerHTML=''; return; }
  const matches = PRODUCTS.filter(p=>p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.tags.some(t=>t.includes(q)));
  res.innerHTML = matches.length ? matches.map(p=>`
    <div class="sr-item" data-goto="${p.id}">
      <img src="${p.img1}" alt="${p.name}">
      <div><div class="sr-name">${p.name}</div><div class="sr-price">${money(p.price)}</div></div>
    </div>`).join('') : `<p class="search-empty">No pieces found for "${e.target.value}".</p>`;
  res.querySelectorAll('[data-goto]').forEach(el=>el.addEventListener('click', ()=>{
    closeDrawer('searchOverlay');
    openProductDetail(parseInt(el.dataset.goto));
  }));
});

/* ============ QUICK VIEW ============ */
function openQuickView(id){
  const p = findProduct(id);
  const modal = $('#quickviewModal');
  modal.innerHTML = `
    <button class="qv-close" id="qvClose">&times;</button>
    <div class="qv-grid">
      <div class="qv-media"><img src="${p.img1}" alt="${p.name}"></div>
      <div class="qv-info">
        <span class="pc-cat">${p.cat}</span>
        <h2 class="pdp-name" style="font-size:28px;">${p.name}</h2>
        <div class="pdp-price">${money(p.price)}</div>
        <div class="pdp-rating">★★★★★ <span style="color:var(--taupe);">${p.rating}</span></div>
        <p class="pdp-desc">${p.desc}</p>
        <p class="pdp-select-label">Color</p>
        <div class="pdp-colors">${p.colors.map((c,i)=>`<span class="pdp-color-dot ${i===0?'selected':''}" data-qvcolor="${c}" style="background:${COLOR_HEX[c]}" title="${c}"></span>`).join('')}</div>
        ${p.sizes.length?`<p class="pdp-select-label">Size</p><div class="pdp-sizes">${p.sizes.map((s,i)=>`<span class="pdp-size ${i===0?'selected':''}" data-qvsize="${s}">${s}</span>`).join('')}</div>`:''}
        <div class="pdp-actions" style="margin-top:20px;">
          <button class="btn btn-dark" style="flex:1;" id="qvAdd">Add to Bag</button>
          <button class="pdp-wish-btn ${state.wishlist.includes(p.id)?'active':''}" id="qvWish">${heartIcon(state.wishlist.includes(p.id))}</button>
        </div>
        <a href="#" class="link-arrow" id="qvFull">View Full Details <span>→</span></a>
      </div>
    </div>`;
  let selColor = p.colors[0], selSize = p.sizes[0]||null;
  modal.querySelectorAll('[data-qvcolor]').forEach(el=>el.addEventListener('click',()=>{
    modal.querySelectorAll('[data-qvcolor]').forEach(e=>e.classList.remove('selected'));
    el.classList.add('selected'); selColor = el.dataset.qvcolor;
  }));
  modal.querySelectorAll('[data-qvsize]').forEach(el=>el.addEventListener('click',()=>{
    modal.querySelectorAll('[data-qvsize]').forEach(e=>e.classList.remove('selected'));
    el.classList.add('selected'); selSize = el.dataset.qvsize;
  }));
  $('#qvAdd').addEventListener('click', ()=>addToCart(p.id, selColor, selSize, 1));
  $('#qvWish').addEventListener('click', ()=>{ toggleWishlist(p.id); $('#qvWish').classList.toggle('active'); $('#qvWish').innerHTML = heartIcon(state.wishlist.includes(p.id)); });
  $('#qvClose').addEventListener('click', ()=>closeDrawer('quickviewOverlay'));
  $('#qvFull').addEventListener('click', (e)=>{ e.preventDefault(); closeDrawer('quickviewOverlay'); openProductDetail(p.id); });
  openDrawer('quickviewOverlay');
}
$('#quickviewOverlay').addEventListener('click', e=>{ if(e.target.id==='quickviewOverlay') closeDrawer('quickviewOverlay'); });

/* ============ PRODUCT DETAIL PANEL ============ */
function openProductDetail(id){
  const p = findProduct(id);
  state.pdpProductId = id; state.pdpColor = p.colors[0]; state.pdpSize = p.sizes[0]||null; state.pdpQty = 1; state.pdpTab='details';
  renderPDP(p);
  openDrawer('pdpOverlay');
  document.getElementById('pdpOverlay').scrollTop = 0;
}
function renderPDP(p){
  const related = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4);
  const tabsContent = {
    details: p.desc + " Crafted in small batches with meticulous attention to finish, hardware, and stitch.",
    shipping: "Free shipping on orders over $150. Standard delivery across the West Bank in 2–4 business days. Returns accepted within 14 days in original condition.",
    size: "KIRAZ footwear runs true to size. If you are between sizes, we recommend sizing up for the most comfortable fit.",
    reviews: `${p.rating} out of 5 based on recent customer feedback. "${REVIEWS[p.id % REVIEWS.length].text}" — ${REVIEWS[p.id % REVIEWS.length].name}`
  };
  $('#pdpPanel').innerHTML = `
    <button class="pdp-close" id="pdpClose">&times;</button>
    <div class="pdp-grid">
      <div>
        <div class="pdp-gallery-main"><img id="pdpMainImg" src="${p.img1}" alt="${p.name}"></div>
        <div class="pdp-thumbs">
          <img src="${p.img1}" class="active" data-thumb="${p.img1}">
          <img src="${p.img2}" data-thumb="${p.img2}">
        </div>
      </div>
      <div>
        <span class="pc-cat">${p.cat}</span>
        <h1 class="pdp-name">${p.name}</h1>
        <div class="pdp-price">${money(p.price)}</div>
        <div class="pdp-rating">★★★★★ <span style="color:var(--taupe);">${p.rating} · ${8+p.id} reviews</span></div>
        <p class="pdp-desc">${p.desc}</p>
        <p class="pdp-select-label">Color — <span id="pdpColorLabel">${p.colors[0]}</span></p>
        <div class="pdp-colors">${p.colors.map((c,i)=>`<span class="pdp-color-dot ${i===0?'selected':''}" data-pcolor="${c}" style="background:${COLOR_HEX[c]}" title="${c}"></span>`).join('')}</div>
        ${p.sizes.length?`<p class="pdp-select-label">Size</p><div class="pdp-sizes">${p.sizes.map((s,i)=>`<span class="pdp-size ${i===0?'selected':''}" data-psize="${s}">${s}</span>`).join('')}</div>`:''}
        <p class="pdp-select-label">Quantity</p>
        <div class="pdp-qty"><button id="pdpQtyDec">−</button><span id="pdpQtyVal">1</span><button id="pdpQtyInc">+</button></div>
        <div class="pdp-actions">
          <button class="btn btn-dark" style="flex:1;" id="pdpAdd">Add to Bag</button>
          <button class="pdp-wish-btn ${state.wishlist.includes(p.id)?'active':''}" id="pdpWishBtn">${heartIcon(state.wishlist.includes(p.id))}</button>
        </div>
        <div class="pdp-tabs">
          <button class="pdp-tab active" data-tab="details">Details</button>
          <button class="pdp-tab" data-tab="shipping">Shipping &amp; Returns</button>
          <button class="pdp-tab" data-tab="size">Size Guide</button>
          <button class="pdp-tab" data-tab="reviews">Reviews</button>
        </div>
        <div class="pdp-tab-content active" data-content="details">${tabsContent.details}</div>
        <div class="pdp-tab-content" data-content="shipping">${tabsContent.shipping}</div>
        <div class="pdp-tab-content" data-content="size">${tabsContent.size}</div>
        <div class="pdp-tab-content" data-content="reviews">${tabsContent.reviews}</div>
      </div>
    </div>
    <div class="pdp-related">
      <h3>You may also like</h3>
      <div class="pdp-related-grid" id="pdpRelatedGrid"></div>
    </div>
  `;
  $('#pdpRelatedGrid').innerHTML = related.map(productCard).join('');
  bindProductCardEvents($('#pdpRelatedGrid'));
  $$('#pdpRelatedGrid [data-detail]').forEach(el=>el.addEventListener('click', ()=>openProductDetail(parseInt(el.dataset.detail))));

  $('#pdpClose').addEventListener('click', ()=>closeDrawer('pdpOverlay'));
  $$('.pdp-thumbs img').forEach(img=>img.addEventListener('click', ()=>{
    $$('.pdp-thumbs img').forEach(i=>i.classList.remove('active'));
    img.classList.add('active');
    $('#pdpMainImg').src = img.dataset.thumb;
  }));
  $$('[data-pcolor]').forEach(el=>el.addEventListener('click', ()=>{
    $$('[data-pcolor]').forEach(e=>e.classList.remove('selected'));
    el.classList.add('selected'); state.pdpColor = el.dataset.pcolor;
    $('#pdpColorLabel').textContent = state.pdpColor;
  }));
  $$('[data-psize]').forEach(el=>el.addEventListener('click', ()=>{
    $$('[data-psize]').forEach(e=>e.classList.remove('selected'));
    el.classList.add('selected'); state.pdpQty = state.pdpQty; state.pdpSize = el.dataset.psize;
  }));
  $('#pdpQtyInc').addEventListener('click', ()=>{ state.pdpQty++; $('#pdpQtyVal').textContent = state.pdpQty; });
  $('#pdpQtyDec').addEventListener('click', ()=>{ if(state.pdpQty>1) state.pdpQty--; $('#pdpQtyVal').textContent = state.pdpQty; });
  $('#pdpAdd').addEventListener('click', ()=>addToCart(p.id, state.pdpColor, state.pdpSize, state.pdpQty));
  $('#pdpWishBtn').addEventListener('click', ()=>toggleWishlist(p.id));
  $$('.pdp-tab').forEach(tab=>tab.addEventListener('click', ()=>{
    $$('.pdp-tab').forEach(t=>t.classList.remove('active'));
    $$('.pdp-tab-content').forEach(c=>c.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`[data-content="${tab.dataset.tab}"]`).classList.add('active');
  }));
}
$('#pdpOverlay').addEventListener('click', e=>{ if(e.target.id==='pdpOverlay') closeDrawer('pdpOverlay'); });

/* ============ STYLE FINDER ============ */
const FINDER_QUESTIONS = [
  {key:'occasion', q:'What are you shopping for?', options:['Everyday','Work','Occasion','Evening']},
  {key:'style', q:"What's your style?", options:['Classic','Elegant','Casual','Trendy']},
  {key:'color', q:'What color do you love?', options:['Black','Beige','White','Brown']},
];
function renderFinderStep(){
  const stepsEl = $('#finderSteps');
  if(state.finderStep >= FINDER_QUESTIONS.length){
    renderFinderResults();
    stepsEl.innerHTML = `<div class="finder-step active" style="text-align:center;">
      <p class="finder-q">Here's what we found for you.</p>
      <button class="btn btn-outline-dark" id="finderRestart">Start Over</button>
    </div>`;
    $('#finderRestart').addEventListener('click', ()=>{ state.finderStep=0; state.finderAnswers={}; renderFinderStep(); });
    $('#finderProgress').style.width = '100%';
    return;
  }
  const q = FINDER_QUESTIONS[state.finderStep];
  stepsEl.innerHTML = `<div class="finder-step active">
    <p class="finder-q">${q.q}</p>
    <div class="finder-options">${q.options.map(o=>`<button class="finder-opt" data-opt="${o}">${o}</button>`).join('')}</div>
    ${state.finderStep>0?'<div style="text-align:center;"><button class="finder-back" id="finderBack">← Back</button></div>':''}
  </div>`;
  $('#finderProgress').style.width = `${((state.finderStep)/FINDER_QUESTIONS.length)*100+10}%`;
  stepsEl.querySelectorAll('[data-opt]').forEach(btn=>btn.addEventListener('click', ()=>{
    state.finderAnswers[q.key] = btn.dataset.opt.toLowerCase();
    state.finderStep++;
    renderFinderStep();
  }));
  const back = document.getElementById('finderBack');
  if(back) back.addEventListener('click', ()=>{ state.finderStep--; renderFinderStep(); });
}
function renderFinderResults(){
  const {occasion, style, color} = state.finderAnswers;
  let scored = PRODUCTS.map(p=>{
    let score = 0;
    if(occasion && p.tags.includes(occasion)) score += 2;
    if(style && p.tags.includes(style)) score += 2;
    if(color && p.tags.includes(color)) score += 1;
    return {p, score};
  }).sort((a,b)=>b.score-a.score);
  let top = scored.filter(s=>s.score>0).slice(0,4).map(s=>s.p);
  if(top.length < 4) top = [...top, ...PRODUCTS.filter(p=>!top.includes(p)).slice(0,4-top.length)];
  $('#finderResults').innerHTML = `<p class="finder-results-head show">Recommended for you</p><div class="finder-grid">${top.map(productCard).join('')}</div>`;
  bindProductCardEvents($('#finderResults'));
}
renderFinderStep();

/* ============ VIRTUAL TRY-ON ============ */
function renderTryonProducts(){
  const wrap = $('#tryonProducts');
  const items = PRODUCTS.slice(0,8);
  wrap.innerHTML = items.map(p=>`<div class="tryon-thumb" data-tid="${p.id}"><img src="${p.img1}" alt="${p.name}"></div>`).join('');
  wrap.querySelectorAll('[data-tid]').forEach(el=>el.addEventListener('click', ()=>{
    wrap.querySelectorAll('.tryon-thumb').forEach(t=>t.classList.remove('selected'));
    el.classList.add('selected');
    state.tryonProductId = parseInt(el.dataset.tid);
    updateTryonOverlay();
  }));
}
function updateTryonOverlay(){
  const overlay = $('#tryonOverlay');
  if(state.tryonProductId){
    const p = findProduct(state.tryonProductId);
    overlay.src = p.img1;
    overlay.hidden = false;
  }
}
$('#tryonUploadBtn').addEventListener('click', ()=>$('#tryonInput').click());
$('#tryonInput').addEventListener('change', e=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev=>{
    $('#tryonPhoto').src = ev.target.result;
    $('#tryonPhoto').hidden = false;
    $('#tryonPlaceholder').hidden = true;
    updateTryonOverlay();
  };
  reader.readAsDataURL(file);
});

/* ============ LOOKBOOK & LIGHTBOX ============ */
function renderLookbook(){
  const grid = $('#lookbookGrid');
  grid.innerHTML = LOOKBOOK_IMAGES.map((img,i)=>`<div class="lb-item" data-lb="${i}"><img loading="lazy" src="${img}" alt="KIRAZ lookbook image ${i+1}"></div>`).join('');
  grid.querySelectorAll('[data-lb]').forEach(el=>el.addEventListener('click', ()=>openLightbox(parseInt(el.dataset.lb))));
}
function openLightbox(i){
  state.lightboxIndex = i;
  $('#lightboxImg').src = LOOKBOOK_IMAGES[i];
  openDrawer('lightbox');
}
$('#lightboxClose').addEventListener('click', ()=>closeDrawer('lightbox'));
$('#lightbox').addEventListener('click', e=>{ if(e.target.id==='lightbox') closeDrawer('lightbox'); });
$('#lbPrev').addEventListener('click', ()=>{ state.lightboxIndex = (state.lightboxIndex-1+LOOKBOOK_IMAGES.length)%LOOKBOOK_IMAGES.length; $('#lightboxImg').src = LOOKBOOK_IMAGES[state.lightboxIndex]; });
$('#lbNext').addEventListener('click', ()=>{ state.lightboxIndex = (state.lightboxIndex+1)%LOOKBOOK_IMAGES.length; $('#lightboxImg').src = LOOKBOOK_IMAGES[state.lightboxIndex]; });

/* ============ REVIEWS ============ */
function renderReviews(){
  $('#reviewsTrack').innerHTML = REVIEWS.map(r=>`
    <div class="review-card">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"${r.text}"</p>
      <p class="review-name">${r.name}</p>
    </div>`).join('');
}

/* ============ INSTAGRAM GRID ============ */
function renderInsta(){
  const imgs = [IMG.modelA,IMG.heelsB,IMG.bagB,IMG.modelD,IMG.jewelryA,IMG.modelF];
  $('#instaGrid').innerHTML = imgs.map(img=>`
    <a class="insta-item" href="https://instagram.com" target="_blank" rel="noopener">
      <img loading="lazy" src="${img}" alt="KIRAZ instagram post">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor"/></svg>
    </a>`).join('');
}

/* ============ FORMS ============ */
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
$('#nlForm').addEventListener('submit', e=>{
  e.preventDefault();
  const val = $('#nlEmail').value.trim();
  const msg = $('#nlMsg');
  if(!emailRe.test(val)){ msg.textContent = 'Please enter a valid email address.'; msg.className='form-msg error'; return; }
  msg.textContent = "You're on the list — welcome to the KIRAZ world.";
  msg.className = 'form-msg success';
  $('#nlForm').reset();
});
$('#contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  const name = $('#cfName').value.trim(), email = $('#cfEmail').value.trim(), message = $('#cfMessage').value.trim();
  const msg = $('#cfMsg');
  if(!name || !emailRe.test(email) || !message){ msg.textContent = 'Please fill in every field with a valid email.'; msg.className='form-msg error'; return; }
  msg.textContent = 'Thank you — we will reply within one business day.';
  msg.className = 'form-msg success';
  $('#contactForm').reset();
});
$$('[data-info]').forEach(a=>a.addEventListener('click', e=>{
  e.preventDefault();
  const map = {shipping:'Free shipping within Ramallah on orders over $150. Delivery across the West Bank in 2–4 business days.', returns:'Returns accepted within 14 days of purchase in original, unworn condition with tags attached.', faq:'For any question about sizing, materials or care, reach us on WhatsApp or call +970 2 242 1043.'};
  showToast(map[a.dataset.info]);
}));

/* ============ NAV SCROLL / MOBILE MENU ============ */
window.addEventListener('scroll', ()=>{
  $('#nav').classList.toggle('scrolled', window.scrollY > 60);
});
function closeMobileMenu(){ $('#mobileMenu').classList.remove('open'); document.body.style.overflow=''; }
$('#burgerBtn').addEventListener('click', ()=>{ $('#mobileMenu').classList.add('open'); document.body.style.overflow='hidden'; });
$('#mmClose').addEventListener('click', closeMobileMenu);
$$('.mm-link').forEach(l=>l.addEventListener('click', closeMobileMenu));

/* ============ STICKY BAG BAR ============ */
$('#stickyBag').addEventListener('click', ()=>openDrawer('cartOverlay'));

/* ============ SCROLL REVEAL OBSERVER ============ */
function initReveal(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, {threshold:0.14});
  $$('.reveal').forEach(el=>io.observe(el));
}

/* ============ MAGNETIC BUTTONS ============ */
function initMagnetic(){
  $$('.magnetic').forEach(btn=>{
    btn.addEventListener('mousemove', e=>{
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) * 0.25;
      const y = (e.clientY - r.top - r.height/2) * 0.35;
      btn.style.transform = `translate(${x}px,${y}px)`;
    });
    btn.addEventListener('mouseleave', ()=>{ btn.style.transform = 'translate(0,0)'; });
  });
}

/* ============ ESC KEY CLOSES OVERLAYS ============ */
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape'){
    ['cartOverlay','wishlistOverlay','searchOverlay','quickviewOverlay','pdpOverlay','lightbox'].forEach(closeDrawer);
    closeMobileMenu();
  }
});

/* ============ INIT ============ */
window.addEventListener('load', ()=>{
  setTimeout(()=>$('#loader').classList.add('hide'), 500);
});

renderFeatured();
renderGrid();
renderTryonProducts();
renderLookbook();
renderReviews();
renderInsta();
updateCartUI();
updateWishlistUI();
initReveal();
initMagnetic();
