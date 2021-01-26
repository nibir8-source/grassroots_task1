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
            <div id="parallax-1" class="parallax-window" data-parallax="scroll" data-image-src="/assets/img/biz-oriented-header.jpg">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="tm-logo">
                                <img src={this.obj.logo.url} alt="Image" class="img-fluid tm-strategy-img"/>
                                <span class="text-uppercase tm-logo-text">{this.obj.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tm-nav-container-outer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <nav class="navbar navbar-expand-lg" id="tm-main-nav">
                                <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbar-nav" 
                                    aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="dark-blue-text"><i class="fas fa-bars"></i></span>
                                </button>
                                <div class="collapse navbar-collapse tm-nav" id="navbar-nav">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link tm-nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link tm-nav-link" href="/assets/pages/about.html">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link tm-nav-link" href="/assets/pages/contact.html">Contact</a>
                                        </li>
                                    </ul>                            
                                </div>                        
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid mt-7">
              <div class="row mb-6">
                  <section class="col-lg-6 mb-lg-0 mb-5">
                      <div class="tm-intro">
                          <h3 class="tm-title-gray mb-4">VISION AND MISSION</h3>
                          <hr class="mb-5 tm-hr"/>
                          <p class="mb-5">{this.obj.vision} and our mission includes
                          {this.obj.mission.map((value) => (
                              <span> {value}, </span> 
                          ))}
                          </p>
                          {/* <img src={this.obj.photos[4]} alt="Company Background Image" class="img-fluid tm-mb-3"/> */}
                      </div>
                      <div class="tm-intro">
                          <h3 class="tm-title-gray mb-4">WHY YOUR HELP MATTERS</h3>
                          <hr class="mb-5 tm-hr"/>
                          <p class="mb-5">
                            <ul>
                                {this.obj.whyHelpMatters.map((value) => (
                                    <li>{value.text}</li> 
                                ))}
                            </ul>
                          </p>
                      </div>
                      <div class="tm-intro">
                          <h3 class="tm-title-gray mb-4">WHY VOLUNTEER HERE</h3>
                          <hr class="mb-5 tm-hr"/>
                          <p class="mb-5">
                            <ul>
                                {this.obj.whyVolunteerHere.map((value) => (
                                    <li>{value.text}</li> 
                                ))}
                            </ul>
                          </p>
                      </div>
                  </section>
                  <section class="col-lg-6">
                      <h3 class="tm-title-gray mb-4">CAUSES WE CARE ABOUT</h3>
                      <hr class="mb-5 tm-hr"/>
                      <div>
                        {this.obj.sdg.map((value) => (
                        <div class="tm-strategy-box mb-5">
                            <img src={value.photo.url} alt="Image" class="img-fluid tm-strategy-img"/>
                            <div>
                                <h4 class="tm-text-primary">{value.name}</h4>
                                <p class="tm-strategy-text">{value.description}</p>
                            </div>
                        </div>
                        ))}
                      </div>
                  </section>
              </div>
              <div class="row mb-6">
                  <div>
                    <h3 class="tm-title-gray mb-4">PRESS COVERAGE</h3>
                    <hr class="mb-5 tm-hr"/>
                  </div>
              </div>
              <div class="row mb-7">
                  {this.obj.media.map((value) => (
                      <div class="col-lg-4 col-md-6">
                      <div class="tm-bg-gray tm-box">
                          <div class="text-center mb-3">
                          <i class="fas fa-5x p-5"><img src={value.photo.url} alt="Image" class="img-fluid1 tm-strategy-img"/></i>
                          </div>
                          <h4 class="tm-text-primary tm-h3 mb-5"><a href={value.link}>{value.name}</a></h4>
                          <p>{value.publicationName}</p>
                      </div>
                      </div>
                  ))}
              </div>
              <div class="row mb-6">
                <section class="col-lg-6">
                    <h3 class="tm-title-gray mb-4">VOLUNTEER EXPERIENCE</h3>
                    <hr class="mb-5 tm-hr"/>
                    {this.obj.review.map((value) => (
                        <div class="tm-strategy-box mb-5">
                            <img src={value.volunteer.photo.url} alt="Image" class="img-fluid tm-strategy-img"/>
                            <div>
                                <h4 class="tm-text-primary">{value.name}</h4>
                                <p class="tm-strategy-text">{value.feedback}</p>
                            </div>
                        </div>
                    ))}
                </section>
                <section class="col-lg-6">
                    <h3 class="tm-title-gray mb-4">PHOTOS</h3>
                    <hr class="mb-5 tm-hr"/>
                    {this.obj.photos.map((photo) => (
                        <img src={photo} alt="Image" class="img-fluid1 tm-strategy-img"/>
                    ))}
                </section>
              </div>
          </div>

          <div id="parallax-2" class="parallax-window parallax-window-2" data-parallax="scroll"
              data-image-src="/assets/img/biz-oriented-footer.jpg">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-12">
                          <div class="tm-overlay tm-bg-white">
                              {/* <h4 class="tm-text-primary mb-5">Parallax Background Section</h4>
                              <p class="mb-5">Suspendisse gravida, ipsum a gravida euismod, metus enim hendrerit ante, vel hendrerit sapien sem non nisl. Maecenas tempus risus ipsum.</p> */}
                              <a href="contact.html" class="btn btn-primary">Contact Us</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

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
                      <a href={this.obj.reachOut.youtube} class="tm-social-link">
                          <i class="fab fa-youtube fa-2x tm-social-icon"></i>
                      </a>
                      <a href={this.obj.reachOut.instagram} class="tm-social-link">
                          <i class="fab fa-instagram fa-2x tm-social-icon"></i>
                      </a>
                  </div>
              </div>
          </footer>
          {/* <script src="/assets/js/jquery-3.4.1.min.js"></script>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/parallax.min.js"></script>
          <script src="/assets/js/tooplate-script.js"></script>
  
          <script>
            $(document).ready(function () {
                $('#parallax-1').parallax({ imageSrc: '/assets/img/biz-oriented-header.jpg' });
                $('#parallax-2').parallax({ imageSrc: '/assets/img/biz-oriented-footer.jpg' });
            });
          </script> */}
      </div>
    );
  }
}
