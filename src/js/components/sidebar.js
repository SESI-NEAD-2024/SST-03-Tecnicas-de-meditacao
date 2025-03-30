import{onMounted,nextTick}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";export default{setup(){return onMounted(()=>{function i(e){e.preventDefault();e=e.target.getAttribute("href"),e=document.querySelector(e).offsetTop;window.scroll({top:e-120,behavior:"smooth"})}document.querySelectorAll(".sidenav a[href^='#']").forEach(e=>{e.addEventListener("click",i)}),nextTick(()=>{var e=document.querySelectorAll(".sidenav");M.Sidenav.init(e,{})})}),{}},template:`

  <ul id="slide-out" class="sidenav">
    <li class="mb-24">
      <div class="user-view">
        <img src="src/img/logo-sesi-vida.webp" alt="logo-sesi-vida" style="max-width: 120px;"/>
        <p class=" blue-deep-text">Segurança e saúde no trabalho</p>
        <h2 class="sidenav__specific-title">
        Técnicas de meditação
        </h2>
        <div class="progress-box">
          <div class="progress">
            <div class="determinate"></div>
          </div> 
          <h3>
            <span class="progress-box__number">1%</span> concluído
          </h3>
        </div>
      </div>
    </li>

    <li>
      <a href="#hero">01: Início</a>
    </li>
    <li>
      <a href="#introducao">02: Introdução</a>
    </li>
    <li>
      <a href="#beneficios">03: Benefícios da meditação</a>
    </li>
    <li>
      <a href="#controle">04: Controle das emoções</a>
    </li>
    <li>
      <a href="#atencao">05: Atenção plena</a>
    </li>
    <li>
      <a href="#pratica">06: Hora da prática</a>
    </li>
    <li>
      <a href="#conclusao-txt">07: Conclusão</a>
    </li>
    
  </ul>
  `};