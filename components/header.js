class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>


      header h1 {
      	text-transform: uppercase;
      	float:left;
      	padding-left: 30px;
      	padding-top: 8px;
      	padding-bottom: 8px;
      	padding-right: 15px;
      	margin-top: 15px;
      	background: rgba(255, 255, 255, 0.5);
      	border-radius: 0px 20px 20px 0px;
      }

      header a {
      	color: black;
      }

      .hello h2 {
      	margin-top: 20px;
      }
      .header {
      	z-index: 100;
      	position:fixed;
      	width: 100%;
      	height: 45px;
      }

      .selected {
      	color: black;
      	border-bottom: 4px solid black;
      	padding-bottom: 4px;
      }

      .header h1 a:hover {
        color: #568056;
        border-bottom: 0px;
      }

      .header a:hover{
      	text-decoration: none;
      	color:#568056;
      	border-bottom: 4px solid #568056;
      	padding-bottom: 4px;
      }



      .main_nav {
      	margin-top: -50px;
      	height:65px;
      	clear:both;
      	float: right;
      }

      .main_nav ul li {
      	float: left;
      	top: 6px;
      	position: relative;
      	background: rgba(255, 255, 255, 0.5);
      	padding: 6px 10px;
      	padding-right: 30px;
      }

      .main_nav ul li:first-child{
      	border-radius: 20px 0px 0px 20px;
      	padding-left: 15px;
      }


      .intro {
      	font-size: 4rem;
      	font-weight: 400;
      	font-family: 'IBM Plex Sans', sans-serif;
      	color: black;
      	padding-bottom: 30px;
      }



      </style>
      <header class="header">
  			<div class="moveover">
        <h1 class="h6"><strong><a href="index.html">Julia Paranay</a></strong></h1>
  			<nav class='main_nav'>
  				<ul>
  					<li> <a href="index.html">Experience Design</a> </li>
            <!-- <li> <a href="gdprojects.html">Other Projects</a></li> -->
            <li> <a href="feed.html">Creative Feed</a> </li>
            <li> <a href="about.html">About Me</a> </li>
            <li> <a href="images/resume/Resume_Julia_Paranay.pdf" target="_blank">Resume</a></li>
  				</ul>
  			</nav>
        </div>
        <div class="hamburger">
  				<div class="line"></div>
  				<div class="line"></div>
  				<div class="line"></div>
  			</div>
  		</header>
    `;
  }
}

customElements.define('header-component', Header);

var active = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        active = i;
    }
}

  document.links[active].className = 'selected';
