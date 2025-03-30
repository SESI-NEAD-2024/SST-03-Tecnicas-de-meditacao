export default{name:"Hero",data(){return{showImg:!1}},mounted(){this.checkWidth(),window.addEventListener("resize",this.checkWidth)},beforeDestroy(){window.removeEventListener("resize",this.checkWidth)},methods:{checkWidth(){window.innerWidth<=600?this.showImg=!0:this.showImg=!1}},template:`
  <div class="blue-light-to-blue-green-bg2">
  <div id="hero" class="scrollspy">
    <div class="container">
      <div class="row">
        <div class="col l5 m6 s12">
          <div class="badge mb-32">Curso</div>
          <div class="display1 white-text">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <img
      v-if="showImg"
      class="mobile-hero"
      src="./src/img/aula/Hero-s.png"
      alt="Hero"
    />
  </div>
</div>
`};