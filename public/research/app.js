
(function(){
  const KEY='GINSENG_LANG';
  const DEFAULT_LANG='vi';
  function getLang(){return localStorage.getItem(KEY)||DEFAULT_LANG}
  function setLang(lang){localStorage.setItem(KEY,lang);renderI18n();updateLangButtons()}
  function updateLangButtons(){const lang=getLang();Object.entries({de:'btnDe',vi:'btnVi',en:'btnEn'}).forEach(([l,id])=>{const b=document.getElementById(id);if(b)b.classList.toggle('active',l===lang)})}
  function renderI18n(){const lang=getLang();document.documentElement.lang=lang;document.querySelectorAll('[data-de]').forEach(el=>{const txt=el.getAttribute('data-'+lang);if(txt==null)return;if(el.tagName==='INPUT'||el.tagName==='TEXTAREA'){if(el.hasAttribute('placeholder')) el.setAttribute('placeholder',txt);return}el.textContent=txt})}
  window.Research={getLang,setLang,renderI18n};
  document.addEventListener('DOMContentLoaded',()=>{['De','Vi','En'].forEach(x=>{const b=document.getElementById('btn'+x);if(b)b.addEventListener('click',()=>setLang(x.toLowerCase()))});renderI18n();updateLangButtons()})
})();
