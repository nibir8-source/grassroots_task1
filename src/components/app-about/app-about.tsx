import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-about',
})
export class AppAbout {
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
        <div id="parallax-1" class="parallax-window" data-parallax="scroll" data-image-src="https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o/grcare%2Fregional%2Fin%2F31%2F3100%2Fngo%2FmIiaqDtkgZsgFp2xEgQT%2Foriginal_cover5.jpg?alt=media&token=e68d2eea-1b75-4c63-8c61-630c1efbf92e">
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
                            <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse"
                                data-target="#navbar-nav" aria-controls="navbar-nav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="dark-blue-text"><i class="fas fa-bars"></i></span>
                            </button>
                            <div class="collapse navbar-collapse tm-nav" id="navbar-nav">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item">
                                        <a class="nav-link tm-nav-link" href="../../index.html">Home</a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link tm-nav-link" href="about.html">About <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link tm-nav-link" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    <div class="container-fluid mt-7">
        <div class="row mb-4">
            {this.obj.team.map((value) => (
            <div class="col-lg-4 col-md-6 mb-8 tm-px-3">
                <figure class="effect-milo tm-about-person tm-about-person-layout">
                    <img src={value.photo.url} alt="Image" class="img-fluid"/>
                    <figcaption>
                        <h2><span>{value.name}</span>&nbsp;&nbsp;({value.role})</h2>
                         <p class="mb-4"></p> 
                        <p>
                            <span class="tm-social-link">
                                +91-{value.reachOut.phone1}
                            </span>
                            <a href={value.reachOut.facebook} class="tm-social-link">
                                <i class="fab fa-facebook fa-15x tm-social-icon tm-social-icon-2"></i>
                            </a>
                        </p>
                    </figcaption>
                </figure>
            </div>
            ))}
        </div>
    </div>
    <div id="parallax-3" class="parallax-window parallax-window-2" data-parallax="scroll"
        data-image-src="https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o/grcare%2Fregional%2Fin%2F31%2F3100%2Fngo%2FmIiaqDtkgZsgFp2xEgQT%2Foriginal_cover6.jpg?alt=media&token=16b9dd14-fdba-40b9-b379-59666ceaabb0">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="tm-overlay p-5 mx-auto text-center">
                         <p class="mb-5 text-white">Here is a text paragraph to join our team. This is a parallax image
                            background section. Phasellus interdum lobortis ultrices. Cras nulla nulla, fermentum vel ligula in.</p>
                        <a href="#" class="btn btn-primary">Join Our Team</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-7">
        <div class="row">
            <div class="col-lg-5 col-md-6 mb-4">
                <h3 class="tm-title-gray mb-4">ABOUT THE NGO</h3>
                <hr class="mb-5 tm-hr"/>
                <p class="mb-5">
                  {this.obj.description}</p>
            </div>
            <div class="col-lg-6 col-md-6 mb-4 mr-0 ml-auto">
                <h3 class="tm-title-gray mb-4">ABOUT THE VARIOUS PROJECTS</h3>
                <hr class="mb-5 tm-hr"/>
                {this.obj.projects.map((value) => (
                <p class="mb-5">
                   {value.description}
                </p>
                ))}
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

    {/* <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/parallax.min.js"></script>
    <script src="js/tooplate-script.js"></script>
    <script>
        $(document).ready(function () {
            $('#parallax-1').parallax({ imageSrc: "https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o/grcare%2Fregional%2Fin%2F31%2F3100%2Fngo%2FmIiaqDtkgZsgFp2xEgQT%2Foriginal_cover5.jpg?alt=media&token=e68d2eea-1b75-4c63-8c61-630c1efbf92e" });
            $('#parallax-3').parallax({ imageSrc: "https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o/grcare%2Fregional%2Fin%2F31%2F3100%2Fngo%2FmIiaqDtkgZsgFp2xEgQT%2Foriginal_cover6.jpg?alt=media&token=16b9dd14-fdba-40b9-b379-59666ceaabb0" });
        });
    </script> */}
      </div>
    );
  }
}
