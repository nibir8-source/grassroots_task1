import { Component, Prop, h } from '@stencil/core';



@Component({
  tag: 'app-footer',
})
export class AppRoot {
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
                      <a rel="nofollow" target="_blank" href="https://fb.com/templatemo" class="tm-social-link">
                          <i class="fab fa-facebook fa-2x tm-social-icon"></i>
                      </a>
                      <a href="https://twitter.com" class="tm-social-link">
                          <i class="fab fa-twitter fa-2x tm-social-icon"></i>
                      </a>
                      <a href="https://linkedin.com" class="tm-social-link">
                          <i class="fab fa-linkedin fa-2x tm-social-icon"></i>
                      </a>
                  </div>
              </div>
          </footer>
          
      </div>
    );
  }
}