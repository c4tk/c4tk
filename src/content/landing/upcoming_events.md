---
events:


 
- name:
    Jakarta 2017
  photo:
    Jakarta.jpg
  location:
     Jakarta, Indonesia
  event: latest    
  date:
    Oct 20-22, 2017
  link:
    http://codeforthekingdom.id/  


- name:
    London 2017
  photo:
    london.jpg
  location:
    London, England
  event: latest   
  date:
    Oct 20-22, 2017
  link:
    http://kingdomcode.uk/build/ 
 



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
