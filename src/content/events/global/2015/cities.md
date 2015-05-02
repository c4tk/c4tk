---
events:

- name:
    Addis Ababa, Ethiopia 
  photo:
    addis_ababa.jpg
  location:

  date:

  link:

- name:
    Albuquerque, NM 
  photo:
    Albuquerque.jpg
  location:

  date:

  link:

- name:
    Atlanta, GA
  photo:
    atlanta.jpg
  location:

  date:

  link:

- name:
    Bangalore, India 
  photo:
    bangalore.jpg
  location:

  date:

  link:


- name:
    Guatemala city, Guatemala
  photo:
    guatemala.jpg
  location:

  date:

  link:

- name:
    Houston, TX
  photo:
    Houston.jpg
  location:

  date:

  link:

- name:
    Jakarta, Indonesia
  photo:
    Jakarta.jpg
  location:

  date:

  link:

- name:
    Kansas City, MO
  photo:
    kansas_city.jpg
  location:

  date:
 
  link:


- name:
    London, England
  photo:
    london.jpg
  location:

  date:
 
  link:


- name:
    Los Angeles, CA
  photo:
    los_angeles.jpg
  location:

  date:
 
  link:
    

- name:
    Nairobi, Kenya
  photo:
    nairobi.jpg
  location:

  date:

  link:

- name:
    Orlando, FL 
  photo:
    orlando.jpg
  location:

  date:

  link:


- name:
    Raleigh,NC
  photo:
    raleigh.jpg
  location:

  date:

  link:

- name:
    Seattle, WA
  photo:
    seattle1.jpg
  location:

  date:
 
  link:

- name:
    Waterloo, Canada
  photo:
    waterloo.jpg
  location:

  date:
 
  link:

    
---


<section class="wrapper style3 container special-alt">
  <header class="major">
    <h2><strong>Global Weeekend Participating Cities</strong></h2>
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
