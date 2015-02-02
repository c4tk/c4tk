---
events:
- name:

  photo:

  location:
    TBD
  date:
     
  link:
    
- name:


  location:
    
  date:
    
  link:
   
   
---
<section class="wrapper style3 container special">
  <header class="major">
    <h2> <strong>Participating Cities</strong></h2>
  </header>
We are accepting applications from cities all over the world to host a hackathon. Cities accepted to the 2015 Global hackathon event will be announced March, 2015.
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

</section>
