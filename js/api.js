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
<p class="p1"><span class="s1">// js/api.js</span></p>
<p class="p1"><span class="s1">import { state, CONFIG } from './state.js';</span></p>
<p class="p1"><span class="s1">import { setAppStatus, enableUI } from './ui.js';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">export async function loadData(first = false) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>setAppStatus('loading');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const response = await fetch(CONFIG.API_URL + '?nocache=' + Date.now());</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const dataStr = await response.text();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (dataStr.trim().startsWith('&lt;')) throw new Error("CORS/Auth Error");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let newDb = JSON.parse(dataStr);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (newDb.error) throw new Error(newDb.error);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>state.db = newDb;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>localStorage.setItem(CONFIG.CACHE_KEY, dataStr);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>setAppStatus('ok');</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>enableUI();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} catch (e) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>console.error("Помилка завантаження API:", e);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const cached = localStorage.getItem(CONFIG.CACHE_KEY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (cached) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>state.db = JSON.parse(cached);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>setAppStatus('ok');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>enableUI();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>} else {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>setAppStatus('error');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>const loader = document.getElementById('appLoader');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>if (first &amp;&amp; loader) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>loader.querySelector('.loader-text').innerHTML = "❌ Відсутній інтернет.&lt;br&gt;Немає кешу.";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>loader.querySelector('.spinner-logo').style.display = 'none';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">export async function initApp() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const cached = localStorage.getItem(CONFIG.CACHE_KEY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (cached) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>state.db = JSON.parse(cached);<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>enableUI();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>setAppStatus('ok');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>loadData(); // Фонове оновлення бази</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>} catch(e) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>await loadData(true);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} else {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>await loadData(true);<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>
