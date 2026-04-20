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
<p class="p1"><span class="s1">// js/utils.js</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Функция для очистки текста (поиск без учета регистра)</span></p>
<p class="p1"><span class="s1">export function normalize(str) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return str ? str.toString().toLowerCase().trim().replace(/[‘’'"`]/g, "") : "";</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Очистка названия сервиса (убираем бренд в скобках [EKTA])</span></p>
<p class="p1"><span class="s1">export function normalizeServiceName(s) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!s) return "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return s.replace(/^\[.*?\]\s*/, '').replace(/[«»"'”`\u00A0\s]/g, '').trim().toLowerCase();</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Функция задержки (чтобы поиск не срабатывал на каждую букву мгновенно, а ждал, пока ты допишешь)</span></p>
<p class="p1"><span class="s1">export function debounce(func, wait) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let timeout;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return function(...args) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>clearTimeout(timeout);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>timeout = setTimeout(() =&gt; func.apply(this, args), wait);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>
