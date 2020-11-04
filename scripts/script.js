function buildPortfolio() {
    for (var i = 0; i < sites.length; i++) {
      var url = sites[i].url;
      var imageLink = sites[i].imageLink;
      var alt = sites[i].alt;
      var title = sites[i].title;
      var githubLink = sites[i].githubLink;
      var subText = sites[i].subText;
      var desc = sites[i].desc;
  
    $("#cards").append(
      `<div class="col-sm-4 pb-3">
        <div class="card">
          <a href="${url}" target="_blank">
            <img src="${imageLink}" class="card-img-top" alt="${alt}"></a>
          <article class="card-body">
            <h5 class="card-title">${title}</h5>
            <a href="${githubLink}" target="_blank">
            <h6 class="sub-title"> ${subText}</h6></a>
            <p class="card-text">${desc}</p>
          </article>
        </div>
      </div>`
      )
    }
  };
  buildPortfolio();
  
  function buildFooter (){
    var email = "mailto:dev.mconvl@gmail.com"
    var linkedIn = "https://www.linkedin.com/in/mchelmcconvillekc/";
    var github = "https://github.com/MichelleMcConville";
    var angelList = "https://angel.co/u/michelle-mcconville";
    var resume = "../images/MichelleMcConville.pdf";
    var copyYr = "&copy; 2020";
    var createdBy = "Designed by Michelle McConville"
    var env = "fa fa-envelope";
    var li = "fa fa-linkedin";
    var gh = "fa fa-github";
    var al = "fa fa-angellist";
    var file = "fa fa-file";
  
    $("#nav-bottom").append(
      `<div class="row footer-row">
         <div class="col footer-col">
           <p>${copyYr} | ${createdBy}</p>
         </div>
       </div>
        
       <div class="row footer-row">
         <div class="col footer-col">
           <!-- Added font awesome social media icons -->
           <a href=${email} target="_blank"><i class="${env}"></i></a>
           <a href=${linkedIn} target="_blank"><i class="${li}"></i></a>
           <a href=${github} target="_blank"><i class="${gh}"></i></a>
           <a href=${angelList} target="_blank"><i class="${al}"></i></a>
           <a href=${resume} target="_blank"><i class="${file}"></i></a> 
         </div>
       </div>`
    )
  };
  buildFooter ()