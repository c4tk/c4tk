---
events:

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
    Chicago Oct 21-23, 2016
  photo:
    chicago.jpg
  location:
    Chicago, IL
  date:
    Oct 21-23, 2016
  link:
   chicago-hackathon-2016.html             
- name:
    Dallas/Fort Worth Oct 21-23, 2016
  photo:
    dallas.jpg
  location:
    Dallas/Fort Worth
  date:
    Oct 21-23, 2016
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
    La Paz, Bolivia Oct 21-23, 2016  
  photo:
    bolivia.jpg
  location:
    La Paz, Bolivia
  date:
    Oct 21-23, 2016
  link:
   la-paz-hackathon-2016.html          
- name:
    London Oct 21-23, 2016
  photo:
    london.jpg
  location:

  date:
    Oct 21-23, 2016
  link:
    kingdomcode.uk    
- name:
    Manila Oct 21-23, 2016
  photo:
    manila.jpg
  location:

  date:
    Oct 21-23, 2016
  link:
    manila-hackathon-2016.html        
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
- name:
    Tarija, Bolivia Oct 21-23, 2016  
  photo:
    tarija.jpg
  location:
    tarija, Bolivia
  date:
    Oct 21-23, 2016
  link:
   tarija-hackathon-2016.html          
- name:
    Warsaw, Poland Oct 21-23, 2016 
  photo:
    warsaw.jpg
  location:
    Warsaw, Poland
  date:
    Oct 21-23, 2016
  link:
   warsaw-hackathon-2016.html      
    
                      
    
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
