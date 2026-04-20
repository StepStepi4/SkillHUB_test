<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">// js/search.js</span></p>
<p class="p1"><span class="s1">import { state } from './state.js';</span></p>
<p class="p1"><span class="s1">import { normalize, normalizeServiceName, debounce } from './utils.js';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Шукаємо всі потрібні елементи на сторінці</span></p>
<p class="p1"><span class="s1">const elCatInput = document.getElementById('catInput');</span></p>
<p class="p1"><span class="s1">const elClearBtn = document.getElementById('clearAllBtn');</span></p>
<p class="p1"><span class="s1">const elSuggList = document.getElementById('customSuggestions');</span></p>
<p class="p1"><span class="s1">const elMatchesCont = document.getElementById('matchesContainer');</span></p>
<p class="p1"><span class="s1">const elPriceInput = document.getElementById('devicePrice');</span></p>
<p class="p1"><span class="s1">const elPriceWrapper = document.getElementById('priceWrapper');</span></p>
<p class="p1"><span class="s1">const elResultBox = document.getElementById('result');</span></p>
<p class="p1"><span class="s1">const elUaTitle = document.getElementById('uaTitle');</span></p>
<p class="p1"><span class="s1">const elItemCategory = document.getElementById('itemCategory');</span></p>
<p class="p1"><span class="s1">const elTechInfo = document.getElementById('techInfo');</span></p>
<p class="p1"><span class="s1">const elServiceList = document.getElementById('serviceList');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const brandRegex = /^\[(.*?)\]/;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">export function initSearch() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!elCatInput) return;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Слухаємо ввід у рядок пошуку</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elCatInput.addEventListener('input', debounce(() =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const val = normalize(elCatInput.value);<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>elClearBtn.style.display = val.length &gt; 0 ? 'flex' : 'none';</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (val.length === 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>clearSearch();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (val.length &lt; 2) { elSuggList.style.display = 'none'; return; }</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Шукаємо в базі</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const matches = state.db.categories.filter(c =&gt; normalize(c.ua).includes(val) || normalize(c.ru).includes(val) || normalize(c.en).includes(val)).slice(0, 10);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>requestAnimationFrame(() =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>if (matches.length &gt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>elSuggList.style.display = 'block';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>elMatchesCont.innerHTML = matches.map((m, i) =&gt; `&lt;div class="suggestion-item" data-index="${i}"&gt;${m.ua}&lt;/div&gt;`).join('');</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">                </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>// Вішаємо кліки на знайдені елементи</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>Array.from(elMatchesCont.children).forEach((el) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>el.addEventListener('mousedown', () =&gt; selectItem(matches[el.dataset.index]));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>} else {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>elSuggList.style.display = 'none';<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}, 100));</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Кнопка очищення (хрестик)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elClearBtn.addEventListener('click', clearSearch);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Кнопка ОК біля ціни</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const elOkBtn = document.getElementById('okBtn');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (elOkBtn) elOkBtn.addEventListener('click', () =&gt; elPriceInput.blur());</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Перерахунок сервісів при зміні ціни</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elPriceInput.addEventListener('input', debounce(renderServices, 50));</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function clearSearch() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elCatInput.value = "";<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elPriceInput.value = "";<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elClearBtn.style.display = "none";<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elSuggList.style.display = "none";<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elPriceWrapper.style.display = "none";<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elResultBox.style.display = "none";<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>state.currentCategoryData = null;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elCatInput.focus();</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function selectItem(item) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>state.currentCategoryData = item;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elCatInput.value = item.ua;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elSuggList.style.display = 'none';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elUaTitle.innerText = item.ua;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elItemCategory.innerText = item.category || "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elPriceWrapper.style.display = 'flex';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elResultBox.style.display = 'block';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>renderServices();<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function buildTechInfoHTML(item, p) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let techHTML = `&lt;div style="font-size: 11px; font-weight: 800; color: var(--primary); text-transform: uppercase;"&gt;🛠️ Технічна довідка&lt;/div&gt;`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let hasInfo = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (item.complexity) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>hasInfo = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let s = "color: var(--text-muted); font-weight: 600;";<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const t = item.complexity.toLowerCase();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (t.includes('критич')) s = "color: #ef4444; font-weight: 900;";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>else if (t.includes('висок')) s = "color: #f97316; font-weight: 800;";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>else if (t.includes('середн')) s = "color: #eab308; font-weight: 700;";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>else if (t.includes('низьк')) s = "color: #22c55e; font-weight: 600;";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>techHTML += `&lt;div class="tech-item"&gt;&lt;div class="icon-circle bg-complexity"&gt;⚙️&lt;/div&gt;&lt;div&gt;&lt;span style="font-size:9px;color:var(--text-muted);display:block;font-weight:700;text-transform:uppercase;"&gt;СКЛАДНІСТЬ&lt;/span&gt;&lt;span style="font-size:14px; ${s}"&gt;${item.complexity}&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let calcRepairPrice = item.price ? item.price.toString() : "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (calcRepairPrice.includes('%') &amp;&amp; p &gt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let uahCalc = calcRepairPrice.replace(/(\d+(?:\.\d+)?)%/g, (match, p1) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>return Math.round(p * parseFloat(p1) / 100).toLocaleString('uk-UA') + " ₴";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>calcRepairPrice = `${calcRepairPrice} &lt;span style="color:var(--primary);"&gt;(${uahCalc})&lt;/span&gt;`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const fields = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>['💵', 'ВАРТІСТЬ ПЛАТНОГО РЕМОНТУ', calcRepairPrice, 'bg-price'],<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>['🔧', 'НАЙДОРОЖЧІ ЗАПЧАСТИНИ', item.expensiveParts, 'bg-parts'],</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>['✅', 'ГАРАНТІЙНІ ПОЛОМКИ', item.garant, 'bg-garant'],<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>['❌', 'НЕГАРАНТІЙНІ ПОЛОМКИ', item.negarant, 'bg-negarant']</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>];</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>fields.forEach(f =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (f[2] &amp;&amp; f[2].toString().trim() !== "") {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>hasInfo = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>techHTML += `&lt;div class="tech-item"&gt;&lt;div class="icon-circle ${f[3]}"&gt;${f[0]}&lt;/div&gt;&lt;div&gt;&lt;span style="font-size:9px;color:var(--text-muted);display:block;font-weight:800;text-transform:uppercase;"&gt;${f[1]}&lt;/span&gt;&lt;span style="font-size:13px;font-weight:700;color:var(--text-main);"&gt;${f[2]}&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return hasInfo ? techHTML : "";</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function renderTechInfo() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!state.currentCategoryData) return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const p = parseFloat(elPriceInput.value) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let html = buildTechInfoHTML(state.currentCategoryData, p);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elTechInfo.innerHTML = html;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>elTechInfo.style.display = html ? 'flex' : 'none';</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function calculateServicesArray(item, p) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const servicesNames = item.service ? item.service.split('|').map(s =&gt; s.trim()).filter(s =&gt; s) : [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return servicesNames.map(name =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const brandMatch = name.match(brandRegex);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const brand = brandMatch ? brandMatch[1] : "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let title = brandMatch ? name.replace(brandMatch[0], "").trim() : name;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let nameClean = normalizeServiceName(name);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const matchingTariffs = state.db.tariffs.filter(x =&gt; normalizeServiceName(x.service) === nameClean || (x.serviceRu &amp;&amp; normalizeServiceName(x.serviceRu) === nameClean));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let t = null; let isPackage = false;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (p &gt; 0) t = matchingTariffs.find(x =&gt; p &gt;= x.minPrice &amp;&amp; p &lt;= x.maxPrice);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (!t &amp;&amp; matchingTariffs.length &gt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>t = matchingTariffs.find(x =&gt; p &gt;= x.minPrice &amp;&amp; p &lt;= x.maxPrice || (p === 0 &amp;&amp; x.minPrice === 0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>if (!t) t = matchingTariffs[0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let uName = name.toUpperCase();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (uName.includes('МОНТАЖ') || uName.includes('ПІДКЛЮЧЕННЯ') || uName.includes('ВСТАНОВЛЕННЯ')) isPackage = true;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let numCost = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let label = isPackage ? "Обрати пакет" : "Дізнатись вартість";</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (!isPackage &amp;&amp; t &amp;&amp; t.cost) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>let rawCost = t.cost.toString().trim();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>if (rawCost.includes('%')) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>if (p &gt; 0) { numCost = Math.round(p * parseFloat(rawCost.replace(',', '.'))/100); label = numCost.toLocaleString('uk-UA') + " ₴"; }<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>else label = rawCost;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>let cleanCost = rawCost.replace(/\s+/g, '').replace(/[^\d.,]/g, '').replace(',', '.');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>if (cleanCost !== '') { numCost = parseFloat(cleanCost); label = isNaN(numCost) ? rawCost : numCost.toLocaleString('uk-UA') + " ₴"; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>else label = rawCost;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let cls = 'brand-other';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (uName.includes('SUPPORT') || uName.includes('НАШ СЕРВІС')) cls = 'brand-support';<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>else if (uName.includes('EKTA') || uName.includes('ЕКТА')) cls = 'brand-ekta';<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>else if (uName.includes('EPZ') || uName.includes('ЕПЗ') || uName.includes('WINDOWS')) cls = 'brand-epz';<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>else if (isPackage || uName.includes('НАЛАШТУВАННЯ')) cls = 'brand-settings';<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>else if (uName.includes('МОНТАЖ')) cls = 'brand-install';</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return { name, brand, title, numCost, label, cls, isPackage };</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}).sort((a, b) =&gt; b.numCost - a.numCost);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function generateServiceCardHTML(s) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// ПОКИ ЩО ТУТ ЗАГЛУШКА. В майбутньому тут буде відкриватися модальне вікно з описом!</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let clickHandler = `onclick="alert('Тут буде відкриватися опис послуги: ${s.title}')"`;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let brandHtml = s.brand ? `&lt;div class="brand-tag"&gt;${s.brand}&lt;/div&gt;` : `&lt;div class="brand-tag" style="display: none;"&gt;&lt;/div&gt;`;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div class="service-card ${s.cls}" style="display:flex; flex-direction:column; align-items:stretch;" ${clickHandler}&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;div style="display:flex; justify-content:space-between; align-items:center; width:100%; position:relative; z-index:2;"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;div class="service-content-left"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>${brandHtml}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;div class="service-title"&gt;${s.title}&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;div class="price-badge"&gt;${s.label || s.priceText || s.label}&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/div&gt;`;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">export function renderServices() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const p = parseFloat(elPriceInput.value) || 0;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!state.currentCategoryData || !state.currentCategoryData.service) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>elTechInfo.style.display = 'none';<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>elTechInfo.innerHTML = '';<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>elServiceList.innerHTML = '';<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>renderTechInfo();<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let dataForSort = calculateServicesArray(state.currentCategoryData, p);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>requestAnimationFrame(() =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>elServiceList.innerHTML = dataForSort.map(s =&gt; generateServiceCardHTML(s)).join('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>
