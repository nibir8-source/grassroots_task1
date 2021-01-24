import { Component, State, h } from '@stencil/core';


@Component({
  tag: 'app-header',
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
                            <i class="fas fa-industry fa-5x mr-5"></i>
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
                                          <a class="nav-link tm-nav-link" href="services.html">Services</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="nav-link tm-nav-link" href="about.html">About</a>
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
      </div>
    );
  }
}