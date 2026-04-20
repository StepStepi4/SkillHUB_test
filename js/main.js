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
<p class="p1"><span class="s1">// js/main.js</span></p>
<p class="p1"><span class="s1">import { state } from './state.js';</span></p>
<p class="p1"><span class="s1">import { initApp, loadData } from './api.js';</span></p>
<p class="p1"><span class="s1">import { switchPage } from './ui.js';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">document.addEventListener('DOMContentLoaded', () =&gt; {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// 1. Встановлення теми</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.documentElement.setAttribute('data-theme', state.currentTheme);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const themeToggle = document.getElementById('themeToggle');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (themeToggle) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>themeToggle.addEventListener('click', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>document.documentElement.setAttribute('data-theme', state.currentTheme);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>localStorage.setItem('theme', state.currentTheme);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// 2. Кліки по нижньому меню (навігація)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.querySelectorAll('.nav-item').forEach(navBtn =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>navBtn.addEventListener('click', (e) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>const pageId = e.currentTarget.getAttribute('data-page');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>switchPage(pageId);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// 3. Кнопка ручного оновлення бази (в налаштуваннях)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const forceUpdateBtn = document.getElementById('forceUpdateBtn');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (forceUpdateBtn) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>forceUpdateBtn.addEventListener('click', async function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>this.innerHTML = "🔄 Оновлюю...";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>await loadData(false);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>setTimeout(() =&gt; { this.innerHTML = "🔄 Оновити базу даних"; }, 500);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// 4. Запускаємо завантаження даних!</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>initApp();</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
