let currentLang='de';
const dict={
de:{title:'Rechtsanwalt Flah Haji',subtitle:'Beratung und Vertretung in Arbeitsrecht, Strafrecht und Familienrecht',heroTitle:'Klare Hilfe. Schnell erreichbar.',heroLine:'Deutsch & Arabisch - Dortmund Zentrum - Mo-Fr 8-16 Uhr',ctaCall:'Jetzt anrufen',ctaMsg:'Nachricht senden',arbeitsrecht:'Arbeitsrecht',arbeitsrechtText:'Kuendigungsschutz, Abfindung, Aufhebungsvertrag.',strafrecht:'Strafrecht',strafrechtText:'Vorladung, Durchsuchung, Haft - diskret und stark.',familienrecht:'Familienrecht',familienrechtText:'Scheidung, Unterhalt, Sorgerecht.',weitere:'Weitere Rechtsgebiete auf Anfrage',weitereText:'Sprechen Sie mich an - ich pruefe Ihr Anliegen individuell und ehrlich.',kontakt:'Kontakt',hours:'Oeffnungszeiten: Montag bis Freitag 8 bis 16 Uhr',address:'Hoher Wall 2a, 44137 Dortmund',impressum:'Impressum',datenschutz:'Datenschutzerklaerung'},
ar:{title:'المحامي فلاح حاجي',subtitle:'استشارات وتمثيل في قانون العمل والجنائي والأسرة',heroTitle:'مساعدة واضحة. تواصل سريع.',heroLine:'الألمانية والعربية - مركز دورتموند - من الاثنين إلى الجمعة 8-16',ctaCall:'اتصل الآن',ctaMsg:'أرسل رسالة',arbeitsrecht:'قانون العمل',arbeitsrechtText:'حماية من الفصل، تعويضات، إنهاء بالتراضي.',strafrecht:'القانون الجنائي',strafrechtText:'استدعاء، تفتيش، توقيف - دفاع فعال وسري.',familienrecht:'قانون الأسرة',familienrechtText:'الطلاق، النفقة، الحضانة.',weitere:'مجالات قانونية أخرى عند الطلب',weitereText:'تواصلوا معي - سأدرس قضيتكم بدقة وشفافية.',kontakt:'الاتصال',hours:'ساعات العمل: من الاثنين إلى الجمعة، 8 صباحًا حتى 4 مساءً',address:'هوهر فال ٢أ، ٤٤١٣٧ دورتموند',impressum:'بيانات النشر',datenschutz:'سياسة الخصوصية'}
};
function setLang(lang){
  currentLang=lang; const t=dict[lang];
  document.documentElement.classList.toggle('rtl',lang==='ar');
  document.getElementById('title').textContent=t.title;
  document.getElementById('subtitle').textContent=t.subtitle;
  document.getElementById('hero-title').textContent=t.heroTitle;
  document.getElementById('hero-line').textContent=t.heroLine;
  document.getElementById('cta-call').textContent=t.ctaCall;
  document.getElementById('cta-msg').textContent=t.ctaMsg;
  document.getElementById('sec-arbeitsrecht').textContent=t.arbeitsrecht;
  document.getElementById('txt-arbeitsrecht').textContent=t.arbeitsrechtText;
  document.getElementById('sec-strafrecht').textContent=t.strafrecht;
  document.getElementById('txt-strafrecht').textContent=t.strafrechtText;
  document.getElementById('sec-familienrecht').textContent=t.familienrecht;
  document.getElementById('txt-familienrecht').textContent=t.familienrechtText;
  document.getElementById('sec-weitere').textContent=t.weitere;
  document.getElementById('txt-weitere').textContent=t.weitereText;
  document.getElementById('sec-kontakt').textContent=t.kontakt;
  document.getElementById('hours').textContent=t.hours;
  document.getElementById('address').textContent=t.address;
}
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('btn-de').addEventListener('click',()=>setLang('de'));
  document.getElementById('btn-ar').addEventListener('click',()=>setLang('ar'));
  setLang('de');
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
});