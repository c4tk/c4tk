---
events:

- name:
    Addis Ababa, Ethiopia 
  photo:
    addis_ababa.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
    addisababa2015G.html
- name:
    Albuquerque, NM 
  photo:
    Albuquerque.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
   Albuquerque2015G.html
- name:
    Atlanta, GA
  photo:
    atlanta.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
   Atlanta2015G.html
- name:
    Bengaluru, India 
  photo:
    bangalore.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
   bangalore-hackathon-2015.html


- name:
    Guatemala city, Guatemala
  photo:
    guatemala.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
   guatemala2015GEsp.html
- name:
    Houston, TX
  photo:
    Houston.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
   houston2015G.html
- name:
    Jakarta, Indonesia
  photo:
    Jakarta.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
    http://codeforthekingdom.id/

- name:
    London, England
  photo:
    london.jpg
  location:

  date:
    Oct 2-4, 2015 
  link:
    london2015G.html

- name:
    Los Angeles, CA
  photo:
    los_angeles.jpg
  location:

  date:
    Oct 2-4, 2015 
  link:
    losangeles2015G.html    

- name:
    Nairobi, Kenya
  photo:
    nairobi.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
    nairobi2015G.html   

- name:
    Raleigh,NC
  photo:
    raleigh.jpg
  location:

  date:
    Oct 2-4, 2015
  link:
    raleigh2015G.html
- name:
    Seattle, WA
  photo:
    seattle1.jpg
  location:

  date:
    Oct 2-4, 2015 
  link:
    seattle2015G.html
- name:
    Waterloo, Canada
  photo:
    waterloo.jpg
  location:

  date:
    Oct 2-4, 2015 
  link:
    waterloo2015G.html
    
---


<section class="wrapper style3 container special-alt">
  <header class="major">
    <h2><strong>Global Hackathon Participating Cities</strong></h2>
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
