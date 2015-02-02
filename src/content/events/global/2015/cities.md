---
events:
- name:
    London
  photo:
    london.jpg
  location:
    TBD
  date:
     
  link:
    
- name:
    Kansas City 
  photo:
    kansas_city.jpg
  location:
    
  date:
    
  link:
   
   
---
<section class="wrapper style3 container special">
  <header class="major">
    <h2> <strong>Participating Cities</strong> ...so far</h2>
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

</section>
