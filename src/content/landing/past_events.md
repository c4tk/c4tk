---
events:
- name:
    Bangalore Oct 31-Nov 2, 2014
  photo:
    bangalore.jpg
  location:
    TBD
  date:
    Oct 31- Nov 2 
  link:
    bangalore2014.html
- name:
    Austin Sep 12-14, 2014
  photo:
    austin2.jpg
  location:
    TBD
  date:
    TBD
  link:
    austin2014.html
- name:
    Bay Area 2014
  photo:
    bayarea.jpg
  location:
    NestGSV
  date:
    May 31st-June 2nd, 2014
  link:
    bayarea2014.html
- name:
    Seattle 2014
  photo:
    seattle1.jpg
  location:
    Impact HUB Seattle
  date:
    March 30th-April 1st, 2014
  link:
    seattle2014.html
- name:
    Austin 2013
  photo:
    austin2.jpg   
  location:
    Action MBA School
  date:
    The Date goes here
  link:
    austin2013.html
- name:
    Bay Area 2013
  photo:
    sf1.jpg  
  location:
    YetiZen
  date:
    Date goes here
  link:
    bayarea2013.html
---
<section class="wrapper style3 container special">
  <header class="major">
    <h2> See <strong>past events</strong></h2>
  </header>
  <div class="row">
    {{#each events}}
      <div class="6u">
        <a href="{{this.link}}">
          <section class="event-image" style="background-image: url({{../assets}}/images/events/{{this.photo}});">
            <div class="image-overlay">
              <h3>{{this.name}}</h3>
            </div>
          </section>
        </a>
      </div>
    {{/each}}
  </div>
<!--
       <footer class="major">
        <ul class="buttons">
          <li><a href="#" class="button">See More</a></li>
        </ul>
      </footer>
      -->
</section>