/* NAVER official mobile URL schemes: https://guide.ncloud-docs.com/docs/en/maps-url-scheme */
window.TripNav={
 build(r,places,{current=false,platform='',origin='https://noric-tw.github.io/seoul-fieldnotes/'}={}){
  const a=places[r.a],b=places[r.b];
  const mode=r.steps.every(s=>s.mode==='walk'||s.mode==='transfer')?'walk':r.steps.some(s=>s.mode==='taxi')&&!r.steps.some(s=>s.mode==='metro'||s.mode==='bus')?'car':'public';
  const q=new URLSearchParams({dlat:String(b.lat),dlng:String(b.lng),dname:b.address,appname:origin});
  if(!current){q.set('slat',String(a.lat));q.set('slng',String(a.lng));q.set('sname',a.address);}
  const exact=b.navVerified===true&&(current||a.navVerified===true);
  const path=exact?'route/'+mode:'search';
  const params=exact?q:new URLSearchParams({query:b.address,appname:origin});
  const query=params.toString();
  const web=r.webUrl||r.url||'https://map.naver.com/p/search/'+encodeURIComponent(b.address);
  const scheme='nmap://'+path+'?'+query;
  const href=platform==='android'?'intent://'+path+'?'+query+'#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;S.browser_fallback_url='+encodeURIComponent(web)+';end':scheme;
  return {href,scheme,web,exact,mode};
 }
};
