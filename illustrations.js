/* Original, hand-drawn SVG set. No stock icons or image dependencies. */
const drawings={
 home:'<path fill="#F6D27A" d="M8 28 32 8l24 20v28H8z"/><path d="M24 56V36h16v20" fill="#FFFCF6"/><path d="m4 29 28-24 28 24"/>',
 train:'<rect x="13" y="6" width="38" height="46" rx="12" fill="#A8D3E6"/><path d="M19 52 14 60m31-8 5 8M23 12h18"/><rect x="20" y="19" width="24" height="16" rx="4" fill="#FFFCF6"/><path d="M32 19v16"/><circle cx="23" cy="44" r="3" fill="#F6D27A"/><circle cx="41" cy="44" r="3" fill="#F6D27A"/>',
 metro:'<rect x="13" y="6" width="38" height="46" rx="12" fill="#A8D3E6"/><path d="M19 52 14 60m31-8 5 8M23 12h18"/><rect x="20" y="19" width="24" height="16" rx="4" fill="#FFFCF6"/><path d="M32 19v16"/><circle cx="23" cy="44" r="3"/><circle cx="41" cy="44" r="3"/>',
 plane:'<path d="m7 34 19-6 12-21c3-5 9-2 7 3l-6 17 16 5v6l-18-1-6 13 5 5-2 4-10-5-10 1 1-5 7-3 3-12-17 5z" fill="#A8D3E6"/>',
 pin:'<path d="M32 58S12 38 12 24a20 20 0 0 1 40 0c0 14-20 34-20 34Z" fill="#F2A497"/><circle cx="32" cy="24" r="7" fill="#FFFCF6"/>',
 map:'<path d="m5 14 18-6 18 7 18-6v42l-18 6-18-7-18 6Z" fill="#B9DAA5"/><path d="M23 8v42m18-35v42M13 35l11-5 16 10 10-11" stroke-dasharray="3 5"/>',
 check:'<rect x="10" y="9" width="44" height="48" rx="7" fill="#B9DAA5"/><path d="M23 8V5h18v9H23z" fill="#FFFCF6"/><path d="m20 34 8 8 17-19"/>',
 bed:'<path d="M7 53V24m50 29V24M7 44h50"/><rect x="10" y="30" width="44" height="14" rx="4" fill="#F2A497"/><path d="M13 29V15h38v14" fill="#F6D27A"/><rect x="18" y="22" width="12" height="8" rx="3" fill="#FFFCF6"/>',
 robot:'<path d="M32 16V8m-7 0h14"/><rect x="10" y="16" width="44" height="36" rx="12" fill="#A8D3E6"/><path d="M5 29v11m54-11v11"/><circle cx="23" cy="31" r="3" fill="#3E3A39"/><circle cx="41" cy="31" r="3" fill="#3E3A39"/><path d="M24 41q8 8 16 0"/><path d="M18 52v7m28-7v7"/>',
 tree:'<path d="M32 57V31m0 10L20 30m12 7 13-16"/><path d="M16 42C0 35 9 19 18 20 14 3 39 1 41 14c21-4 25 21 9 27" fill="#F6D27A"/><path d="M32 57V27m0 12L22 30m10 5 9-11"/>',
 building:'<rect x="13" y="6" width="38" height="52" rx="4" fill="#B9DAA5"/><path d="M22 16h4m12 0h4m-20 10h4m12 0h4m-20 10h4m12 0h4"/><path d="M27 58V47h10v11" fill="#FFFCF6"/>',
 museum:'<path d="m5 22 27-17 27 17Z" fill="#F2A497"/><path d="M10 27v25m14-25v25m16-25v25m14-25v25M6 58h52M6 27h52"/><circle cx="32" cy="17" r="3" fill="#FFFCF6"/>',
 camera:'<path d="m22 17 5-8h13l5 8h10v37H9V17Z" fill="#A8D3E6"/><circle cx="32" cy="34" r="11" fill="#FFFCF6"/><path d="M16 24h3"/>',
 shop:'<path d="M11 29v29h42V29M26 58V40h15v18" fill="#F6D27A"/><path d="m6 29 6-20h40l6 20q-7 10-13 0-7 10-13 0-7 10-13 0-7 10-13 0Z" fill="#F2A497"/><path d="m22 9-3 20m13-20v20m10-20 3 20"/>',
 scissors:'<circle cx="16" cy="47" r="8" fill="#F2A497"/><circle cx="45" cy="47" r="8" fill="#A8D3E6"/><path d="m21 41 28-31m-9 31L14 10"/><circle cx="31" cy="29" r="3" fill="#F6D27A"/>',
 walk:'<circle cx="35" cy="11" r="6" fill="#F6D27A"/><path d="m30 23 10 10 11 2M15 32l12-9h8l-5 19 13 15M30 42 17 58"/>',
 transfer:'<path d="M9 23h45L43 12M55 42H10l11 11"/><circle cx="14" cy="12" r="4" fill="#F6D27A"/><circle cx="50" cy="54" r="4" fill="#F2A497"/>',
 bus:'<rect x="8" y="12" width="48" height="39" rx="8" fill="#B9DAA5"/><rect x="15" y="21" width="34" height="15" rx="3" fill="#FFFCF6"/><path d="M32 21v15M17 51v7m30-7v7M4 25v10m56-10v10M17 43h4m22 0h4"/>',
 taxi:'<path d="m12 28 5-14h30l5 14" fill="#F6D27A"/><rect x="6" y="28" width="52" height="22" rx="6" fill="#F6D27A"/><path d="M14 50v8m36-8v8M25 14V7h14v7"/><path d="M14 38h5m26 0h5"/>',
 clock:'<circle cx="32" cy="32" r="25" fill="#F6D27A"/><path d="M32 17v17l13 7M32 7v3m25 22h-3M32 57v-3M7 32h3"/>',
 route:'<circle cx="13" cy="13" r="7" fill="#B9DAA5"/><circle cx="51" cy="51" r="7" fill="#F2A497"/><path d="M24 13h17q15 0 15 10t-16 10H24q-16 0-16 9t16 9h15" stroke-dasharray="4 5"/>',
 arrow:'<path d="M8 32h46L39 17m15 15L39 47"/>',
 copy:'<rect x="21" y="18" width="32" height="39" rx="5" fill="#A8D3E6"/><path d="M40 18V7H9v38h12"/>',
 moon:'<path d="M42 8C11-2-3 41 24 54c14 6 29-2 34-14C33 50 20 24 42 8Z" fill="#F6D27A"/><path d="m49 8 1 7 7 2-7 2-1 7-2-7-7-2 7-2Z" fill="#F2A497"/>',
 bag:'<rect x="14" y="16" width="36" height="40" rx="8" fill="#F2A497"/><path d="M25 16V6h14v10M24 27v17m16-17v17M20 56v5m24-5v5"/>',
 spark:'<path d="m32 5 7 19 20 8-20 7-7 20-8-20-19-7 19-8Z" fill="#F6D27A"/>'
};
function icon(name,cls=''){return `<svg class="doodle ${cls}" viewBox="0 0 64 64" fill="none" stroke="#3E3A39" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawings[name]||drawings.pin}</svg>`;}
function placeIcon(k){return ({wallroad:'museum',ikseon:'shop',ddp:'museum',spa:'moon',jeong:'building',palace:'museum',ewha:'building',namsan:'pin',sim:'museum',phyundai:'shop',jeongja:'shop',hotel:'home',airport:'plane',cca:'scissors',raim:'robot',photo:'camera',forest:'tree',haneul:'tree',sema:'museum',gwang:'museum',temple:'museum',library:'museum',ak:'shop',mangwon:'shop',hyundai:'shop',tfactory:'shop',samsung:'shop',pangyo:'train'})[k]||'building';}
function hydrateIcons(){document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon);});}
function seoulScene(){return `<svg viewBox="0 0 620 440" fill="none" stroke="#3E3A39" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">
<circle cx="465" cy="96" r="53" fill="#F6D27A"/><path d="M85 89c-15-28 20-47 38-25 22-31 56-6 43 18 37-2 35 25 14 25H77c-16-4-11-17 8-18Z" fill="#FFFCF6" class="float-cloud"/>
<path d="M29 355Q168 291 295 347t296-3v60H29Z" fill="#B9DAA5"/>
<path d="M66 371q119-29 224 4t268-2" stroke-dasharray="7 10"/>
<g class="sway-tree"><path d="M530 351v-114"/><path d="M532 161c-70-36-108 67-41 80-46 55 41 84 52 44 68 23 89-56 34-68 26-36-13-70-45-56Z" fill="#F2A497"/><path d="m531 342 3-105m0 46-26-21m25 3 28-24"/></g>
<g><path d="M256 329V199h166v130" fill="#FFFCF6"/><path d="m240 202 93-55 105 55q-100 20-198 0Z" fill="#A8D3E6"/><path d="m265 153 69-44 76 44q-75 16-145 0Z" fill="#B9DAA5"/><path d="M291 155v21m89-21v23M334 109V90"/><path d="M279 222v104m36-104v104m37-104v104m44-104v104"/><path d="M278 250h120"/><path d="M321 329v-49q16-24 33 0v49" fill="#F2A497"/><path d="M244 329h190v13H244z" fill="#F6D27A"/></g>
<g transform="translate(58 240)"><path d="M0 101V27L53 0l52 27v74" fill="#F6D27A"/><path d="m-7 31 60-36 59 36"/><path d="M41 101V63h26v38" fill="#FFFCF6"/><rect x="15" y="43" width="14" height="16" rx="2" fill="#A8D3E6"/><rect x="78" y="43" width="14" height="16" rx="2" fill="#A8D3E6"/></g>
<g class="float-robot" transform="translate(420 305)"><path d="M28 5v-13m-7 0h14"/><rect width="56" height="47" rx="14" fill="#A8D3E6"/><circle cx="17" cy="19" r="3" fill="#3E3A39"/><circle cx="39" cy="19" r="3" fill="#3E3A39"/><path d="m20 31 8 5 8-5M10 48v9m36-9v9M0 23l-8 6m64-6 8-6"/></g>
<g class="float-train" transform="translate(170 288)"><rect width="70" height="85" rx="19" fill="#A8D3E6"/><rect x="10" y="15" width="50" height="35" rx="8" fill="#FFFCF6"/><path d="M35 15v35M22 7h26M15 85l-8 12m48-12 8 12"/><circle cx="19" cy="66" r="5" fill="#F6D27A"/><circle cx="51" cy="66" r="5" fill="#F6D27A"/></g>
<path d="m205 137 6 14 15 5-15 5-6 15-5-15-15-5 15-5Z" fill="#F2A497"/><path d="m459 205 5 10 11 4-11 4-5 11-4-11-11-4 11-4Z" fill="#F6D27A"/>
<g class="float-plane" transform="translate(320 22) rotate(8)"><path d="m0 31 39-7 24-22 10 2-17 24 32 6 3 9-43-3-18 16-8-2 10-16-27 1Z" fill="#FFFCF6"/></g>
<path d="M73 401h466"/><text x="310" y="427" text-anchor="middle" stroke="none" fill="#3E3A39" font-size="13" letter-spacing="4">SEOUL · AUTUMN · 2026</text></svg>`;}
