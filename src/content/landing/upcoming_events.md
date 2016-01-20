---
events: 

- name:
    CBU Riverside, CA March 3-5, 2016
  photo:
    cbu.jpg  
  location:
     at California Baptist University
  date:
    March 3-5, 2016
  link:
   cbu2016.html     
        
        
- name:
    Nashville, TN  March 11-13, 2016
  photo:
    nashville.jpg  
  location:
     at Lipscomb University, Swang Business Building
  date:
    March 11-13, 2016
  link:
    http://codeforthekingdomnashville.org   
        
  
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
