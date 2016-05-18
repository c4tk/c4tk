---
events: 

    
- name:
    Katowice, Poland May 20-22, 2016 
  photo:
    katowice.jpg
  location:
    Katowice, Poland
  date:
    2016 
  link:
   poland-hackathon-2016.html      
   
- name:
   San Francisco, Berkeley, Palo Alto, San Jose September 23-25, 2016
  photo:
    bayarea2016.jpg  
  location:
    San Francisco, Berkeley, Palo Alto, San Jose 
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
   global-hackathon-2016.html  

   
- name:
    Atlanta Oct 21-23, 2016
  photo:
    atlanta.jpg
  location:

  date:
    Oct 21-23, 2016
  link:
   atlanta-hackathon-2016.html    


- name:
    Auckland, New Zealand Oct 21-23, 2016 
  photo:
    auckland.jpg
  location:
    Auckland, New Zealand
  date:
    Oct 21-23, 2016 
  link:
   auckland-hackathon-2016.html
   
- name:
    Austin Oct 21-23, 2016 
  photo:
    austin2.jpg
  location:
    Austin, TX
  date:
    Oct 21-23, 2016 
  link:
   austin-hackathon-2016.html  
   
- name:
    Bengaluru, India Oct 21-23, 2016
  photo:
    bangalore.jpg
  location:

  date:
    Oct 21-23, 2016
  link:
   bangalore-hackathon-2016.html      
       
- name:
    Dallas/Fort Worth Oct 21-23, 2016
  photo:
    dallas.jpg
  location:
    Dallas/Fort Worth
  date:
    2016
  link:
   dfw-hackathon-2016.html   
   
- name:
    Guatemala city, Guatemala Oct 21-23, 2016
  photo:
    guatemala.jpg
  location:

  date:
    Oct 21-23, 2016
  link:
   guatemala-hackathon-2016.html 
      

- name:
    Jakarta Oct 21-23, 2016
  photo:
    Jakarta.jpg
  location:

  date:
    Oct 21-23, 2016
  link:
    jakarta-hackathon-2016.html
    
- name:
    London Oct 21-23, 2016
  photo:
    london.jpg
  location:

  date:
    Oct 21-23, 2016
  link:
    london-hackathon-2016.html
    
    
- name:
    Rocky Mountain Oct 21-23, 2016
  photo:
    denver.jpg
  location:

  date:
    Oct 21-23, 2016 
  link:
    rocky-mountain-hackathon-2016.html
    
- name:
    Seattle Oct 21-23, 2016
  photo:
    seattle1.jpg
  location:
    Seattle, WA
  date:
    Oct 21-23, 2016
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
