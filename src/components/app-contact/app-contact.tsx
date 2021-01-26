import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-contact',
})
export class AppContact {
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
            <div id="parallax-1" class="parallax-window" data-parallax="scroll" data-image-src="https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o/grcare%2Fregional%2Fin%2F31%2F3100%2Fngo%2FmIiaqDtkgZsgFp2xEgQT%2Foriginal_cover8.jpg?alt=media&token=f21032a3-1c3b-4a94-8000-273028d04cef">
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
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link tm-nav-link" href="contact.html">Contact <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-7 mb-25">
        <div class="row">
            <div class="col-12">
                <section class="tm-contact-form-box mx-auto mb-7">
                    <h3 class="tm-title-gray mb-4 text-center">Contact Information</h3>
                    <hr class="mb-8 tm-hr tm-hr-s mx-auto"/>
                    <form id="contact-form" action="" method="POST" class="tm-contact-form">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control rounded-0" placeholder="Name" required />
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control rounded-0" placeholder="Email" required />
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="contact-select" name="inquiry">
                                <option value="-">Subject</option>
                                <option value="sales">Sales &amp; Marketing</option>
                                <option value="creative">Creative Design</option>
                                <option value="uiux">UI / UX</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <textarea name="message" class="form-control rounded-0" placeholder="Message" required></textarea>
                        </div>

                        <div class="form-group mb-0">
                            <button type="submit" class="btn btn-primary rounded-0 d-block mx-auto">Submit</button>
                        </div>
                    </form>
                </section>
                <section class="tm-address-box mx-auto">
                    <h3 class="tm-title-gray mb-4 text-center">Our Address</h3>
                    <hr class="mb-5 tm-hr tm-hr-s mx-auto"/>
                    <p class="mb-8 mx-auto text-center tm-address-text">{this.obj.address}</p>
                    <div class="mapouter mb-60">
                        <div class="gmap_canvas">
                            <iframe width="100%" height="520" id="gmap_canvas"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.030384798301!2d80.1622049146566!3d13.033737058963919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261f0bcf9d035%3A0x91b70f7c82005d11!2sRehoboth%20House!5e0!3m2!1sen!2sin!4v1611549056417!5m2!1sen!2sin"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                    <h3 class="tm-title-gray mb-4 text-center">Contact Information</h3>
                    <p class="mx-auto text-center tm-address-text">+91-{this.obj.reachOut.phone1} | +91-{this.obj.reachOut.phone2}</p>
                    <p class="mx-auto text-center tm-address-text">EMAIL | <a href="mailto:">{this.obj.reachOut.email}</a></p>
                </section>
            </div>
        </div>
    </div>

    


    <footer class="container-fluid">
        <div class="row">
            <p class="col-lg-9 col-md-8 mb-5 mb-md-0">
                Copyright &copy; 2020
                <span class="tm-text-primary">Business Oriented</span>
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
    <script src="js/parallax.min.js"></script> <!-- https://pixelcog.github.io/parallax.js/ -->
    <script src="js/tooplate-script.js"></script>
    <script>
        $(document).ready(function () {
            $('#parallax-1').parallax({ imageSrc: "https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o/grcare%2Fregional%2Fin%2F31%2F3100%2Fngo%2FmIiaqDtkgZsgFp2xEgQT%2Foriginal_cover8.jpg?alt=media&token=f21032a3-1c3b-4a94-8000-273028d04cef" });
        });
    </script> */}
        </div>
      );
    }
}
