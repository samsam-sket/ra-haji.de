let currentLang='de';
const dict={
  de:{
    brandTitle:'Rechtsanwalt Flah Haji',
    brandSub:'Arbeitsrecht · Strafrecht · Familienrecht',
    heroTitle:'Klare Hilfe. Schnell erreichbar.',
    heroLine:'Deutsch & Arabisch · Dortmund Zentrum · Mo–Fr 8–16 Uhr',
    navAreas:'Rechtsgebiete',
    navAbout:'Flah Haji',
    ctaAreas:'Rechtsgebiete',
    ctaAbout:'Flah Haji',
    strafrechtH:'Strafrecht',
    strafrechtT:'Engagierte Strafverteidigung vom ersten Ermittlungsansatz bis zur Hauptverhandlung. Ich sichere Akteneinsicht, wahre Ihre Rechte im Ermittlungsverfahren und vertrete Sie vor Gericht – diskret, konsequent und mit klarer Strategie.',
    arbeitsrechtH:'Arbeitsrecht',
    arbeitsrechtT:'Kompetente Vertretung bei Kündigung, Lohnansprüchen und Abfindungsverhandlungen. Ich prüfe Fristen, verhandle mit Augenmaß und setze berechtigte Ansprüche – von der Kündigungsschutzklage bis zur einvernehmlichen Lösung.',
    familienrechtH:'Familienrecht',
    familienrechtT:'Rechtssichere Begleitung in Trennungs- und Unterhaltsverfahren. Ich wahre Ihre Interessen bei Sorgerecht, Umgang und Vermögensauseinandersetzung – mit der nötigen Sensibilität und Klarheit.',
    zivilrechtH:'Allgemeines Zivilrecht',
    zivilrechtT:'Verträge, Schadensersatz, Forderungsmanagement: Ich prüfe Ansprüche, gestalte Vereinbarungen und setze Forderungen effizient durch – außergerichtlich und vor Gericht.',
  },
  ar:{
    brandTitle:'المحامي فلاح حاجي',
    brandSub:'قانون العمل · الجنائي · الأسرة',
    heroTitle:'مساعدة واضحة. تواصل سريع.',
    heroLine:'الألمانية والعربية · وسط دورتموند · من الإثنين إلى الجمعة 8–16',
    navAreas:'المجالات القانونية',
    navAbout:'فلاح حاجي',
    ctaAreas:'المجالات القانونية',
    ctaAbout:'فلاح حاجي',
    strafrechtH:'القانون الجنائي',
    strafrechtT:'دفاع ملتزم من أول إجراء تحقيقي حتى جلسة المحاكمة. أحصل على الاطلاع على الملف وأحمي حقوقكم وأمثلكم أمام المحكمة بسرية وحزم وخطة واضحة.',
    arbeitsrechtH:'قانون العمل',
    arbeitsrechtT:'تمثيل مهني في الفصل والمطالبات بالأجور والتفاوض على التعويض. أراجع المواعيد وأتفاوض بميزان وتطبيق الحقوق من دعوى الحماية من الفصل حتى الحل التوافقي.',
    familienrechtH:'قانون الأسرة',
    familienrechtT:'مرافقة قانونية مضمونة في قضايا الطلاق والنفقة. أحمي مصالحكم في الحضانة والزيارة وتقسيم الممتلكات – بوضوح وحساسية.',
    zivilrechtH:'القانون المدني العام',
    zivilrechtT:'العقود والتعويضات وإدارة المطالبات: أراجع الحقوق وأعد الاتفاقات وأنفذ المطالبات بفعالية داخل وخارج المحكمة.',
  }
};

function applyLang(){
  const t=dict[currentLang];
  document.getElementById('brand-title').textContent=t.brandTitle;
  document.getElementById('brand-sub').textContent=t.brandSub;
  document.getElementById('hero-title').textContent=t.heroTitle;
  document.getElementById('hero-line').textContent=t.heroLine;
  document.getElementById('nav-areas').textContent=t.navAreas;
  document.getElementById('nav-about').textContent=t.navAbout;
  document.getElementById('cta-areas').textContent=t.ctaAreas;
  document.getElementById('cta-about').textContent=t.ctaAbout;
  document.getElementById('sec-strafrecht').textContent=t.strafrechtH;
  document.getElementById('txt-strafrecht').textContent=t.strafrechtT;
  document.getElementById('sec-arbeitsrecht').textContent=t.arbeitsrechtH;
  document.getElementById('txt-arbeitsrecht').textContent=t.arbeitsrechtT;
  document.getElementById('sec-familienrecht').textContent=t.familienrechtH;
  document.getElementById('txt-familienrecht').textContent=t.familienrechtT;
  document.getElementById('sec-zivilrecht').textContent=t.zivilrechtH;
  document.getElementById('txt-zivilrecht').textContent=t.zivilrechtT;
  document.documentElement.classList.toggle('rtl', currentLang==='ar');
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn-de').addEventListener('click', ()=>{currentLang='de'; applyLang();});
  document.getElementById('btn-ar').addEventListener('click', ()=>{currentLang='ar'; applyLang();});
  document.getElementById('year').textContent = new Date().getFullYear();
  applyLang();
});
