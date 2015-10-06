---
events: 
- name:
    Best of Global Hackathon announcement Nov 5, 2015
  photo:
    global_weekend.jpg
  location:
    13 Cities around the world
  date:
    Best of Global announcement Nov 5, 2015 
  link:
   global2015.html   

- name:
    Rocky Mountain, CO Nov 6-8, 2015
  photo:
    denver.jpg
  location:

  date:
    Nov 6-8, 2015 
  link:
    denver-hackathon-2015.html
    
- name:
    Bay Area 2015, Nov 13-15, 2015
  photo:
    sf1.jpg  
  location:
    Cityteam San Jose
  date:
    Nov 13-15, 2015
  link:
    bay-area-hackathon-2015.html    
        
  
---


<section class="wrapper style3 container special-alt">
  <header class="major">
    <h2>Check out <strong>upcoming events</strong></h2>
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
