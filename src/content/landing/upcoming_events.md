---
events: 
- name:
    Global Hackathon Oct 2-4, 2015 
  photo:
    global_weekend.jpg
  location:
    12 Cities around the world
  date:
    Oct 2-4, 2015 
  link:
   global2015.html   
- name:
    Addis Ababa, Ethiopia   Oct 2-4, 2015
  photo:
    addis_ababa.jpg
  location:
    
  date:
    Oct 2-4, 2015
  link:
    addisababa2015G.html
- name:
    Albuquerque, NM   Oct 2-4, 2015
  photo:
    Albuquerque.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
   Albuquerque2015G.html
- name:
    Atlanta, GA   Oct 2-4, 2015
  photo:
    atlanta.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
   Atlanta2015G.html
- name:
    Bengaluru, India   Oct 2-4, 2015
  photo:
    bangalore.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
   bangalore-hackathon-2015.html
   
- name:
    Dallas/Fort Worth, TX   Oct 2-4, 2015
  photo:
    dallas.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
   DFW-hackathon-2015.html   


- name:
    Guatemala city, Guatemala   Oct 2-4, 2015
  photo:
    guatemala.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
   guatemala2015GEsp.html

   
- name:
    Jakarta, Indonesia   Oct 2-4, 2015
  photo:
    Jakarta.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
    http://codeforthekingdom.id/

- name:
    London, England   Oct 2-4, 2015
  photo:
    london.jpg
  location:

  date:
    Oct 2-4, 2015 
  link:
    london2015G.html

- name:
    Los Angeles, CA   Oct 2-4, 2015
  photo:
    los_angeles.jpg
  location:

  date:
    Oct 2-4, 2015 
  link:
    losangeles2015G.html    

- name:
    Nairobi, Kenya   Oct 2-4, 2015
  photo:
    nairobi.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
    nairobi2015G.html   

- name:
    Raleigh,NC   Oct 2-4, 2015
  photo:
    raleigh.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
    raleigh2015G.html
- name:
    Seattle, WA   Oct 2-4, 2015
  photo:
    seattle1.jpg
  location:

  date:
    Oct 2-4, 2015 
  link:
    seattle2015G.html
- name:
    Waterloo, Canada   Oct 2-4, 2015
  photo:
    waterloo.jpg
  location:

  date:
    Oct 2-4, 2015 
  link:
    waterloo2015G.html   
    
- name:
    Rocky Mountain, CO Nov 6-8, 2015
  photo:
    denver.jpg
  location:

  date:
    Nov 6-8, 2015 
  link:
    denver-hackathon-2015.html
        
  
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
