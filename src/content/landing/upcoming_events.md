---
events:
- name:
    Austin Hackathon Sep 12-14, 2014
  photo:
    austin2.jpg
  location:
    TBD
  date:
    TBD
  link:
    austin2014.html
- name:
    Bangalore Oct 31-Nov 2, 2014
  photo:
    bangalore.jpg
  location:
    TBD
  date:
    Oct 31- Nov 2 
  link:

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
