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
    
- name:
    Global Hackathon 2016 
  photo:
    global_weekend.jpg
  location:
    Cities all over the world
  date:
    Fall 2016 
  link:
   global-hackathon-2016.html  

- name:
    Poland 2016 
  photo:
    katowice.jpg
  location:
    Katowice, Poland
  date:
    2016 
  link:
   poland-hackathon-2016.html    
   
- name:
    St. Louis 2016 
  photo:
    saint_louis.jpg
  location:
    St. Louis, MO
  date:
    2016 
  link:
   st-louis-hackathon-2016.html     
   
- name:
    Rochester 2016 
  photo:
    rochester.jpg
  location:
    Rochester, NY
  date:
    2016 
  link:
   rochester-hackathon-2016.html      
   
   
- name:
    Atlanta 2016
  photo:
    atlanta.jpg
  location:

  date:
    2016
  link:
   atlanta-hackathon-2016.html    
   
- name:
    Austin 2016 
  photo:
    austin2.jpg
  location:
    Austin, TX
  date:
    2016 
  link:
   austin-hackathon-2016.html     

- name:
    Jakarta 2016
  photo:
    Jakarta.jpg
  location:

  date:
    2016
  link:
    jakarta-hackathon-2016.html
    
    
- name:
    Rocky Mountain 2016
  photo:
    denver.jpg
  location:

  date:
    2016 
  link:
    rocky-mountain-hackathon-2016.html
    
- name:
    Seattle 2016
  photo:
    seattle1.jpg
  location:
    Seattle, WA
  date:
    2016
  link:  
    seattle-hackathon-2016.html 
        
        
     

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
