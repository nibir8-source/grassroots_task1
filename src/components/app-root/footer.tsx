import { Component, State, h } from '@stencil/core';


@Component({
  tag: 'app-footer',
})
export class AppRoot {

  @State() obj: any = {
    name:"",
    vision:"",
  };
  async componentWillLoad(){
    const response = await fetch("/assets/lit-the-light.json");
    this.obj = await response.json();
  }

  render() {
    return (
      <div>
          <footer class="container-fluid">
              <div class="row">
                  <p class="col-lg-9 col-md-8 mb-5 mb-md-0">
                      Copyright &copy; 2020 <span class="tm-text-primary">Business Oriented</span>
                      - designed by <a rel="nofollow" target="_parent" href="https://templatemo.com" class="tm-link-primary">TemplateMo</a>
                  </p>
                  <div class="col-lg-3 col-md-4 text-right">
                      <a rel="nofollow" target="_blank" href={this.obj.reachOut.facebook} class="tm-social-link">
                          <i class="fab fa-facebook fa-2x tm-social-icon"></i>
                      </a>
                      <a href={this.obj.reachOut.twitter} class="tm-social-link">
                          <i class="fab fa-twitter fa-2x tm-social-icon"></i>
                      </a>
                      <a href={this.obj.reachOut.linkedin} class="tm-social-link">
                          <i class="fab fa-linkedin fa-2x tm-social-icon"></i>
                      </a>
                  </div>
              </div>
          </footer>
          <script src="/assets/js/jquery-3.4.1.min.js"></script>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/parallax.min.js"></script>
          <script src="/assets/js/tooplate-script.js"></script>
  
          <script>
          $(document).ready(function () {
              $('#parallax-1').parallax({ imageSrc: '/assets/img/biz-oriented-header.jpg' });
              $('#parallax-2').parallax({ imageSrc: '/assets/img/biz-oriented-footer.jpg' });
          });
          </script> 

      </div>
    );
  }
}