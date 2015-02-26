---
events:
- name:
    Dallas/Fort Worth March 20-22, 2015
  photo:
    dallas.jpg
  location:
    The Addison TreeHouse, Addison TX
  date:
    March 20-22, 2015 
  link:
    dfw2015.html

- name:
    Orlando May 22-24, 2015
  photo:
    orlando.jpg
  location:
    Wycliffe Associates, 11450 Translation Way, Orlando, FL
  date:
    May 22-24, 2015 
  link:
    orlando2015.html
    

- name:
    Global Weekend Oct 2-4, 2015 
  photo:
    global_weekend.jpg
  location:
    12 Cities around the world
  date:
    Oct 2-4, 2015 
  link:
   global2015.html
    
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
