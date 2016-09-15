---
events:

- name:
   San Francisco, Fremont, Palo Alto September 23-25, 2016
  photo:
    bayarea2016.jpg  
  location:
    San Francisco, Fremont, Palo Alto
  date:
    September 23-25, 2016
  link:
    bay-area-hackathon-2016.html        

- name:
    Global Hackathon Oct 21-23, 2016
  photo:
    global_weekend.jpg
  location:
    Cities all over the world
  date:
    Oct 21-23, 2016
  link:
    global.html  


- name:
    Cape Town Dec 2016
  photo:
    capetown.jpg
  location:

  date:
    December, 2016
  link:
    cape-town-hackathon-2016.html    






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
