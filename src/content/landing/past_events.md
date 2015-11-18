---
events:
    
- name:
    Bay Area 2015, Nov 13-15, 2015
  photo:
    sf1.jpg  
  location:
    Cityteam San Jose
  date:
    Nov 13-15, 2015
  link:
    bay-area-hackathon-2015.html   
    
    
- name:
    Rocky Mountain, CO Nov 6-8, 2015
  photo:
    denver.jpg
  location:

  date:
    Nov 6-8, 2015 
  link:
    denver-hackathon-2015.html

- name:
    Global Hackathon Oct 2-4, 2015 
  photo:
    global_weekend.jpg
  location:
    13 Cities around the world
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
   dfw-hackathon-2015.html   


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
    http://www.codeforthekingdomla.com   

- name:
    Nairobi, Kenya   Oct 3-4, 2015
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
    C4TK @ Microsoft July 10-11, 2015
  photo:
    microsoft_logo_for_main.jpg
  location:
    \"The Garage\" at Microsoft
  date:
    July 10-11, 2015
  link:
    microsoft2015.html 
- name:
    Orlando May 22-24, 2015
  photo:
    orlando.jpg
  location:
    Wycliffe Associates, 11450 Translation Way, Orlando, FL
  date:
    May 22-24, 2015 
  link:
    orlando2015.html
- name:
    Dallas/Fort Worth March 20-22, 2015
  photo:
    dallas.jpg
  location:
    The Addison TreeHouse, Addison TX
  date:
    March 20-22, 2015 
  link:
    dfw2015.html
- name:
    Bangalore Oct 31-Nov 2, 2014
  photo:
    bangalore.jpg
  location:
    TBD
  date:
    Oct 31- Nov 2 
  link:
    bangalore2014.html
- name:
    Austin Sep 12-14, 2014
  photo:
    austin2.jpg
  location:
    TBD
  date:
    TBD
  link:
    austin2014.html
- name:
    Bay Area 2014
  photo:
    bayarea.jpg
  location:
    NestGSV
  date:
    May 31st-June 2nd, 2014
  link:
    bayarea2014.html
- name:
    Seattle 2014
  photo:
    seattle1.jpg
  location:
    Impact HUB Seattle
  date:
    March 30th-April 1st, 2014
  link:
    seattle2014.html
- name:
    Austin 2013
  photo:
    austin2.jpg   
  location:
    Action MBA School
  date:
    The Date goes here
  link:
    austin2013.html
- name:
    Bay Area 2013
  photo:
    sf1.jpg  
  location:
    YetiZen
  date:
    Date goes here
  link:
    bayarea2013.html
---
<section class="wrapper style3 container special">
  <header class="major">
    <h2> See <strong>past events</strong></h2>
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
