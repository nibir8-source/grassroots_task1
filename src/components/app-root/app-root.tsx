import { State, Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
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
            <div class="container-fluid mt-7">
              <div class="row mb-6">
                  <section class="col-lg-6 mb-lg-0 mb-5">
                      <div class="tm-intro">
                          <h3 class="tm-title-gray mb-4">VISION AND MISSION</h3>
                          <hr class="mb-5 tm-hr"/>
                          <p class="mb-5">{this.obj.description}</p>
                          <img src={this.obj.photos[4]} alt="Company Background Image" class="img-fluid tm-mb-3"/>
                      </div>
                  </section>
                  <section class="col-lg-6">
                      <h3 class="tm-title-gray mb-4">New Focused Strategies</h3>
                      <hr class="mb-5 tm-hr"/>
                      <div class="tm-strategy-box mb-5">
                          <img src="/assets/img/strategy-1.jpg" alt="Image" class="img-fluid tm-strategy-img"/>
                          <div>
                              <h4 class="tm-text-primary">Maecenas molestie varius ipsum</h4>
                              <p class="tm-strategy-text">Quisque consectetur ipsum justo, sed posuere massa pretium nec. In scelerisque, odio et maximus feugiat, nisl libero porta turpis, quis imperdiet odio.</p>
                          </div>
                      </div>
                      <div class="tm-strategy-box mb-5">
                          <img src="/assets/img/strategy-2.jpg" alt="Image" class="img-fluid tm-strategy-img"/>
                          <div>
                              <h4 class="tm-text-primary">Etiam consequat placerat convallis</h4>
                              <p class="tm-strategy-text">Fusce non diam vel diam egestas accumsan quis aliquam metus. Nulla porta ullamcorper mauris maximus feugiat. Donec ac tincidunt dui.</p>
                          </div>
                      </div>
                      <div class="tm-strategy-box mb-5">
                          <img src="/assets/img/strategy-3.jpg" alt="Image" class="img-fluid tm-strategy-img"/>
                          <div>
                              <h4 class="tm-text-primary">Aenean varius velit eu ligula</h4>
                              <p class="tm-strategy-text">Suspendisse gravida, ipsum a gravida euismod, metus enim hendrerit ante, vel hendrerit sapien sem non nisl. Maecenas tempus risus ipsum.</p>
                          </div>
                      </div>
                  </section>
              </div>
              <div class="row mb-7">
                  <div class="col-lg-4 col-md-6">
                      <div class="tm-bg-gray tm-box">
                          <div class="text-center mb-3">
                              <i class="fas fa-cloud-sun fa-5x p-5"></i>
                          </div>
                          <h4 class="tm-text-primary tm-h3 mb-5">Suspendisse at nunc leo</h4>
                          <p>Phasellus malesuada aliquam arcu, et ultricies metus scelerisque id. Curabitur finibus ornare blandit. Donec a luctus nulla. Vivamus ac felis sapien.</p>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="tm-bg-gray tm-box">
                          <div class="text-center mb-3">
                              <i class="fas fa-spa fa-5x p-5"></i>
                          </div>
                          <h4 class="tm-text-primary tm-h3 mb-5">Etiam viverra elit vel efficitur</h4>
                          <p>Nunc ultrices imperdiet orci, a ultrices orci luctus vel. Etiam consequat placerat convallis. Donec consequat consectetur est, eget pretium nisl.</p>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <img src="/assets/img/biz-oriented-2.jpg" alt="Image" class="img-fluid"/>
                      <div class="tm-box tm-box-s">
                          <p class="tm-mb-5">Suspendisse gravida, ipsum a gravida euismod, metus enim hendrerit ante, vel hendrerit sapien sem non nisl. Maecenas tempus risus ipsum.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div id="parallax-2" class="parallax-window parallax-window-2" data-parallax="scroll"
              data-image-src="/assets/img/biz-oriented-footer.jpg">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-12">
                          <div class="tm-overlay tm-bg-white">
                              <h4 class="tm-text-primary mb-5">Parallax Background Section</h4>
                              <p class="mb-5">Suspendisse gravida, ipsum a gravida euismod, metus enim hendrerit ante, vel hendrerit sapien sem non nisl. Maecenas tempus risus ipsum.</p>
                              <a href="contact.html" class="btn btn-primary">Contact Us</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
