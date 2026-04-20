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
<p class="p1"><span class="s1">@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">*, *::before, *::after {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>box-sizing: border-box;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>-webkit-tap-highlight-color: transparent;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">:root {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>/* Neumorphism Світла тема */</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--bg-color: #e0e5ec;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--text-main: #31344b;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--text-muted: #8a92a5;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--primary: #2563eb;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--shadow-light: #ffffff;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--shadow-dark: #a3b1c6;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--neu-out: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.6);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--neu-in: inset 6px 6px 10px 0 rgba(163, 177, 198, 0.5), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.8);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--neu-btn-active: inset 4px 4px 8px 0 rgba(163, 177, 198, 0.5), inset -4px -4px 8px 0 rgba(255, 255, 255, 0.8);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>/* Бліді кольори брендів */</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-support-bg: #fef9c3; --clr-support-text: #854d0e;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-ekta-bg: #dbeafe; --clr-ekta-text: #1e3a8a; <span class="Apple-converted-space">   </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-epz-bg: #e0f2fe; --clr-epz-text: #0369a1; <span class="Apple-converted-space">   </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-settings-bg: #dcfce7; --clr-settings-text: #064e3b;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-install-bg: #f3e8ff; --clr-install-text: #581c87;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-other-bg: #e0e5ec; --clr-other-text: #31344b;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">[data-theme="dark"] {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>/* Neumorphism Темна тема */</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--bg-color: #262833;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--text-main: #e4e5e8;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--text-muted: #8a92a5;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--shadow-light: #323543;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--shadow-dark: #1a1c23;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--neu-out: 7px 7px 14px var(--shadow-dark), -7px -7px 14px var(--shadow-light);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--neu-in: inset 5px 5px 10px var(--shadow-dark), inset -5px -5px 10px var(--shadow-light);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--neu-btn-active: inset 3px 3px 6px var(--shadow-dark), inset -3px -3px 6px var(--shadow-light);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-support-bg: #423010; --clr-support-text: #fde047;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-ekta-bg: #1e293b; --clr-ekta-text: #93c5fd;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-epz-bg: #0c4a6e; --clr-epz-text: #bae6fd;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-settings-bg: #064e3b; --clr-settings-text: #6ee7b7;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-install-bg: #3b0764; --clr-install-text: #d8b4fe;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>--clr-other-bg: #262833; --clr-other-text: #e4e5e8;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">body.modal-open { overflow: hidden; position: fixed; width: 100%; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">body {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>font-family: 'Inter', sans-serif; background: var(--bg-color); color: var(--text-main);<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>margin: 0; padding: 0; display: flex; justify-content: center; align-items: flex-start;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>min-height: 100vh; -webkit-font-smoothing: antialiased; transition: background 0.3s ease, color 0.3s ease;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Лоадер */</span></p>
<p class="p1"><span class="s1">.app-loader {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>position: fixed; top: 0; left: 0; width: 100%; height: 100%;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>background: var(--bg-color); display: flex; flex-direction: column; justify-content: center; align-items: center;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>z-index: 999999; transition: opacity 0.4s ease, visibility 0.4s ease;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">.app-loader.hidden { opacity: 0; visibility: hidden; pointer-events: none; }</span></p>
<p class="p1"><span class="s1">.spinner-box { position: relative; width: 70px; height: 70px; display: flex; justify-content: center; align-items: center; margin-bottom: 20px; box-shadow: var(--neu-out); border-radius: 50%;}</span></p>
<p class="p1"><span class="s1">.spinner-logo { font-size: 24px; animation: pulseText 1.5s ease-in-out infinite; }</span></p>
<p class="p1"><span class="s1">.loader-text { font-size: 13px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; animation: pulseText 1.5s ease-in-out infinite; text-align: center; padding: 0 20px; line-height: 1.4; }</span></p>
<p class="p1"><span class="s1">@keyframes pulseText { 0%, 100% { transform: scale(0.95); opacity: 0.6; } 50% { transform: scale(1.05); opacity: 1; } }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.container {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>position: relative; width: 94%; max-width: 480px;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>padding: 24px; margin-top: 2vh; margin-bottom: 120px;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>min-height: 75vh; display: flex; flex-direction: column;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Сторінки */</span></p>
<p class="p1"><span class="s1">.page { display: none; animation: fadeIn 0.4s ease; }</span></p>
<p class="p1"><span class="s1">.page.active { display: block; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Neumorphism базові елементи */</span></p>
<p class="p1"><span class="s1">.neu-card { background: var(--bg-color); border-radius: 24px; box-shadow: var(--neu-out); padding: 20px; margin-bottom: 20px; }</span></p>
<p class="p1"><span class="s1">.neu-input {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>width: 100%; padding: 18px 20px; border-radius: 20px; font-size: 16px;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>background: var(--bg-color); color: var(--text-main); border: none; outline: none;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>box-shadow: var(--neu-in); font-family: inherit; font-weight: 600; transition: 0.3s;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">.neu-input::placeholder { color: var(--text-muted); opacity: 0.7; font-weight: 500; }</span></p>
<p class="p1"><span class="s1">.neu-input:focus { box-shadow: var(--neu-in), 0 0 0 2px rgba(37, 99, 235, 0.2); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.neu-btn {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>background: var(--bg-color); color: var(--text-main); border: none; border-radius: 18px;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>padding: 16px; font-weight: 800; font-size: 15px; cursor: pointer;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>box-shadow: var(--neu-out); transition: 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">.neu-btn:active { box-shadow: var(--neu-btn-active); transform: scale(0.98); }</span></p>
<p class="p1"><span class="s1">.neu-btn-primary { background: var(--primary); color: white; box-shadow: 6px 6px 12px rgba(37, 99, 235, 0.3), -6px -6px 12px rgba(255,255,255,0.1); }</span></p>
<p class="p1"><span class="s1">.neu-btn-primary:active { box-shadow: inset 4px 4px 8px rgba(0,0,0,0.2); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Шапка */</span></p>
<p class="p1"><span class="s1">.header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }</span></p>
<p class="p1"><span class="s1">h2 { color: var(--text-main); margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.05);}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.status-wrapper { display: flex; align-items: center; gap: 8px; justify-content: center; margin-bottom: 20px; }</span></p>
<p class="p1"><span class="s1">.status-text { font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }</span></p>
<p class="p1"><span class="s1">.pulse-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; box-shadow: var(--neu-out); }</span></p>
<p class="p1"><span class="s1">.dot-green { background-color: #22c55e; }</span></p>
<p class="p1"><span class="s1">.dot-red { background-color: #ef4444; }</span></p>
<p class="p1"><span class="s1">.dot-loading { background-color: #eab308; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Пошук */</span></p>
<p class="p1"><span class="s1">.search-wrapper { position: relative; margin-bottom: 20px; }</span></p>
<p class="p1"><span class="s1">.clear-data-btn { position: absolute; right: 15px; top: 50%; transform: translateY(-50%); background: var(--bg-color); color: #ef4444; border: none; width: 32px; height: 32px; border-radius: 50%; font-size: 14px; font-weight: 800; cursor: pointer; display: none; align-items: center; justify-content: center; box-shadow: var(--neu-out); transition: 0.2s; z-index: 5;}</span></p>
<p class="p1"><span class="s1">.clear-data-btn:active { box-shadow: var(--neu-btn-active); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.price-wrapper { display: none; gap: 12px; margin-bottom: 20px; align-items: stretch; animation: fadeIn 0.3s ease; }</span></p>
<p class="p1"><span class="s1">#devicePrice { flex-grow: 1; color: var(--primary); font-weight: 900; }</span></p>
<p class="p1"><span class="s1">.ok-btn { width: 80px; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.suggestions-list { position: absolute; top: 110%; left: 0; right: 0; background: var(--bg-color); border-radius: 20px; box-shadow: var(--neu-out); max-height: 250px; overflow-y: auto; z-index: 100; display: none; padding: 10px; }</span></p>
<p class="p1"><span class="s1">.suggestion-item { padding: 14px 18px; cursor: pointer; border-radius: 12px; font-size: 14px; font-weight: 600; color: var(--text-main); margin-bottom: 6px; box-shadow: var(--neu-out); transition: 0.2s ease; }</span></p>
<p class="p1"><span class="s1">.suggestion-item:active { box-shadow: var(--neu-btn-active); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.result-box { display: none; padding-top: 5px; animation: fadeIn 0.4s ease; }</span></p>
<p class="p1"><span class="s1">@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.ua-name { font-weight: 900; font-size: 20px; margin-bottom: 8px; color: var(--text-main); }</span></p>
<p class="p1"><span class="s1">.item-category { font-size: 12px; color: var(--text-muted); font-weight: 700; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.5px; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.tech-info { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;}</span></p>
<p class="p1"><span class="s1">.tech-item { display: flex; align-items: center; gap: 14px; padding: 14px; border-radius: 20px; box-shadow: var(--neu-out); background: var(--bg-color); }</span></p>
<p class="p1"><span class="s1">.icon-circle { width: 40px; height: 40px; min-width: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: var(--neu-in); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.bg-complexity { color: #854d0e; }<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">.bg-price { color: #166534; }<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">.bg-garant { color: #1e3a8a; }<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">.bg-negarant { color: #991b1b; }</span></p>
<p class="p1"><span class="s1">.bg-parts { color: #6b21a8; }<span class="Apple-converted-space"> </span></span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.service-list { display: flex; flex-direction: column; gap: 16px; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.service-card { position: relative; padding: 18px; border-radius: 22px; cursor: pointer; transition: 0.2s ease; box-shadow: var(--neu-out); background: var(--bg-color); overflow: hidden; margin-bottom: 2px;}</span></p>
<p class="p1"><span class="s1">.service-card:active { box-shadow: var(--neu-btn-active); transform: scale(0.98); }</span></p>
<p class="p1"><span class="s1">.service-content-left { display: flex; align-items: center; gap: 12px; flex: 1; padding-right: 5px; pointer-events: none; z-index: 2;}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.service-card.brand-support { background: var(--clr-support-bg); color: var(--clr-support-text); }</span></p>
<p class="p1"><span class="s1">.service-card.brand-ekta { background: var(--clr-ekta-bg); color: var(--clr-ekta-text); }</span></p>
<p class="p1"><span class="s1">.service-card.brand-epz { background: var(--clr-epz-bg); color: var(--clr-epz-text); }</span></p>
<p class="p1"><span class="s1">.service-card.brand-settings { background: var(--clr-settings-bg); color: var(--clr-settings-text); }</span></p>
<p class="p1"><span class="s1">.service-card.brand-install { background: var(--clr-install-bg); color: var(--clr-install-text); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.service-title { font-size: 14px; font-weight: 800; line-height: 1.3; color: inherit; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.service-card .brand-tag { font-size: 10px; font-weight: 900; text-transform: uppercase; padding: 6px 10px; border-radius: 10px; margin-bottom: 8px; display: inline-block; background: rgba(255,255,255,0.4); color: inherit; box-shadow: var(--neu-out); }</span></p>
<p class="p1"><span class="s1">[data-theme="dark"] .service-card .brand-tag { background: rgba(0,0,0,0.2); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.price-badge { font-size: 14px; font-weight: 900; background: var(--bg-color); color: var(--text-main); padding: 10px 16px; border-radius: 14px; min-width: 95px; text-align: center; line-height: 1.1; pointer-events: none; box-shadow: var(--neu-in); z-index: 2;}</span></p>
<p class="p1"><span class="s1">.service-card.brand-install .price-badge { background: transparent; box-shadow: none; font-size: 13px; font-weight: 800;}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.focus-icon { font-size: 20px; animation: pulseFocus 2s infinite ease-in-out; margin-left: -2px; text-shadow: 0 0 10px rgba(255,100,0,0.5); }</span></p>
<p class="p1"><span class="s1">@keyframes pulseFocus { 0% { transform: scale(1); } 50% { transform: scale(1.15); } 100% { transform: scale(1); } }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Резерви */</span></p>
<p class="p1"><span class="s1">.rezervy-item { border-radius: 20px; padding: 18px; margin-bottom: 16px; cursor: pointer; transition: 0.2s; display: flex; justify-content: space-between; align-items: center; box-shadow: var(--neu-out); background: var(--bg-color); }</span></p>
<p class="p1"><span class="s1">.rezervy-item:active { box-shadow: var(--neu-btn-active); transform: scale(0.98); }</span></p>
<p class="p1"><span class="s1">.rezervy-name { font-size: 14px; font-weight: 800; color: var(--text-main); margin-bottom: 6px; line-height: 1.3;}</span></p>
<p class="p1"><span class="s1">.rezervy-cat { font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }</span></p>
<p class="p1"><span class="s1">.rezervy-price { font-size: 16px; font-weight: 900; color: var(--primary); white-space: nowrap; padding: 8px 12px; border-radius: 12px; box-shadow: var(--neu-in);}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Навчання (Категорії) */</span></p>
<p class="p1"><span class="s1">.training-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }</span></p>
<p class="p1"><span class="s1">.training-card {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>padding: 24px 16px; border-radius: 24px; text-align: center; cursor: pointer;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>box-shadow: var(--neu-out); background: var(--bg-color); transition: 0.2s;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>display: flex; flex-direction: column; align-items: center; gap: 12px;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">.training-card:active { box-shadow: var(--neu-btn-active); transform: scale(0.96); }</span></p>
<p class="p1"><span class="s1">.training-icon { width: 50px; height: 50px; border-radius: 50%; box-shadow: var(--neu-in); display: flex; align-items: center; justify-content: center; font-size: 24px; }</span></p>
<p class="p1"><span class="s1">.training-title { font-weight: 800; font-size: 14px; color: var(--text-main); }</span></p>
<p class="p1"><span class="s1">.training-card.full-width { grid-column: span 2; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Налаштування */</span></p>
<p class="p1"><span class="s1">.profile-card { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }</span></p>
<p class="p1"><span class="s1">.profile-avatar { width: 60px; height: 60px; border-radius: 50%; box-shadow: var(--neu-in); display: flex; align-items: center; justify-content: center; font-size: 28px; background: var(--bg-color); }</span></p>
<p class="p1"><span class="s1">.profile-info h3 { margin: 0; font-size: 18px; color: var(--text-main); font-weight: 800; }</span></p>
<p class="p1"><span class="s1">.profile-info p { margin: 4px 0 0 0; font-size: 12px; color: var(--text-muted); font-weight: 600; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.settings-row { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-bottom: 2px solid rgba(0,0,0,0.02); }</span></p>
<p class="p1"><span class="s1">[data-theme="dark"] .settings-row { border-bottom-color: rgba(255,255,255,0.02); }</span></p>
<p class="p1"><span class="s1">.settings-label { font-size: 14px; font-weight: 700; color: var(--text-main); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Перемикач теми */</span></p>
<p class="p1"><span class="s1">.neu-switch { width: 60px; height: 32px; border-radius: 20px; box-shadow: var(--neu-in); position: relative; cursor: pointer; display: flex; align-items: center; padding: 4px; }</span></p>
<p class="p1"><span class="s1">.neu-switch-thumb { width: 24px; height: 24px; border-radius: 50%; background: var(--primary); box-shadow: var(--neu-out); transition: 0.3s; transform: translateX(0); }</span></p>
<p class="p1"><span class="s1">[data-theme="dark"] .neu-switch-thumb { transform: translateX(28px); background: #8b5cf6; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Нижня Навігація */</span></p>
<p class="p1"><span class="s1">.bottom-nav {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>position: fixed; bottom: 0; left: 0; right: 0; height: 85px;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>background: var(--bg-color); border-radius: 35px 35px 0 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>box-shadow: 0 -10px 25px rgba(0,0,0,0.05);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>display: flex; justify-content: space-evenly; align-items: center;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>z-index: 1000; padding: 0 10px;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">[data-theme="dark"] .bottom-nav { box-shadow: 0 -10px 25px rgba(0,0,0,0.4); }</span></p>
<p class="p1"><span class="s1">.nav-item {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>width: 54px; height: 54px; border-radius: 18px;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>box-shadow: var(--neu-out); display: flex; justify-content: center; align-items: center;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>font-size: 22px; cursor: pointer; transition: 0.3s; color: var(--text-muted);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">.nav-item.active-nav { box-shadow: var(--neu-in); color: var(--primary); }</span></p>
<p class="p1"><span class="s1">.nav-item.center-nav {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>width: 70px; height: 70px; border-radius: 50%;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>transform: translateY(-20px); font-size: 28px;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>background: var(--bg-color); color: var(--primary);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>box-shadow: var(--neu-out); border: 4px solid var(--bg-color);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">.nav-item.center-nav.active-nav { box-shadow: var(--neu-in); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* Модалки */</span></p>
<p class="p1"><span class="s1">.modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); backdrop-filter: blur(5px); display: none; align-items: flex-end; justify-content: center; z-index: 9999; opacity: 0; transition: opacity 0.3s ease; }</span></p>
<p class="p1"><span class="s1">.modal.show { display: flex; opacity: 1; }</span></p>
<p class="p1"><span class="s1">.modal-content { background: var(--bg-color); width: 100%; max-width: 480px; border-radius: 30px 30px 0 0; padding: 24px; padding-bottom: 40px; display: flex; flex-direction: column; max-height: 90vh; min-height: 45vh; transform: translateY(100%); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1); margin: 0 auto; box-shadow: 0 -15px 40px rgba(0,0,0,0.1);}</span></p>
<p class="p1"><span class="s1">.modal.show .modal-content { transform: translateY(0); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-shrink: 0; }</span></p>
<p class="p1"><span class="s1">.modal-close { width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--neu-out); display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; color: var(--text-muted); cursor: pointer; border: none; background: transparent; transition: 0.2s;}</span></p>
<p class="p1"><span class="s1">.modal-close:active { box-shadow: var(--neu-btn-active); }</span></p>
<p class="p1"><span class="s1">.modal-body { overflow-y: auto; flex-grow: 1; padding: 5px; color: var(--text-main); }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/* PWA Інструкція */</span></p>
<p class="p1"><span class="s1">.pwa-guide-container { margin-top: 20px; }</span></p>
<p class="p1"><span class="s1">.pwa-alert { box-shadow: var(--neu-in); padding: 20px; border-radius: 20px; margin-bottom: 20px; }</span></p>
<p class="p1"><span class="s1">.pwa-alert-title { display: flex; align-items: center; font-size: 15px; font-weight: 800; color: var(--primary); margin-bottom: 12px; }</span></p>
<p class="p1"><span class="s1">.pwa-alert-title svg { width: 20px; height: 20px; margin-right: 8px; fill: var(--primary); }</span></p>
<p class="p1"><span class="s1">.pwa-alert-text { font-size: 13px; line-height: 1.5; color: var(--text-main); font-weight: 500; }</span></p>
<p class="p1"><span class="s1">.pwa-alert-text ul { margin: 10px 0 0 0; padding-left: 20px; }</span></p>
<p class="p1"><span class="s1">.pwa-alert-text li { margin-bottom: 8px; }</span></p>
<p class="p1"><span class="s1">.pwa-device-section { padding: 20px; border-radius: 20px; box-shadow: var(--neu-out); margin-bottom: 20px; }</span></p>
<p class="p1"><span class="s1">.pwa-device-title { display: flex; align-items: center; font-size: 16px; font-weight: 800; margin-bottom: 12px; color: var(--text-main);}</span></p>
<p class="p1"><span class="s1">.pwa-device-title svg { margin-right: 10px; width: 24px; height: 24px; fill: var(--text-main); }</span></p>
<p class="p1"><span class="s1">.pwa-instructions { margin: 0; padding-left: 20px; line-height: 1.6; font-size: 13px; color: var(--text-main); font-weight: 600;}</span></p>
<p class="p1"><span class="s1">.pwa-instructions li { margin-bottom: 10px; }</span></p>
<p class="p1"><span class="s1">.pwa-icon-inline { display: inline-flex; align-items: center; justify-content: center; vertical-align: middle; background: var(--bg-color); border-radius: 8px; padding: 6px; margin: 0 4px; box-shadow: var(--neu-out);}</span></p>
<p class="p1"><span class="s1">.pwa-icon-inline svg { width: 16px; height: 16px; }</span></p>
<p class="p1"><span class="s1">.color-safari-blue { stroke: #007AFF; fill: none; }</span></p>
</body>
</html>
