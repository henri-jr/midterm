(function(){
  var btn=document.querySelector('.night-toggle'),root=document.documentElement,key='rwav-theme';
  var dark=window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches;
  try{var s=localStorage.getItem(key);if(s)dark=(s==='dark');}catch(e){}
  function apply(d){root.setAttribute('data-theme',d?'dark':'light');btn.setAttribute('aria-pressed',String(d));}
  apply(dark);
  btn.addEventListener('click',function(){
    dark=!dark;apply(dark);
    try{localStorage.setItem(key,dark?'dark':'light');}catch(e){}
  });
})();
