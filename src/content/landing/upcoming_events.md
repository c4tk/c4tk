---
events:

- name:
    Nashville 2018, Feb 9-11
  photo:
    nashville.jpg  
  location:
     at LifeWay Headquarters
  date:
    February 9-11, 2018
  link:
    http://codeforthekingdomnashville.org  

    
 

 
    
- name:
    Bogota 2018 - Details soon
  photo:
    bogota.jpg
  location:
   Bogota, Colombia   
  date:
    Details soom
  link:
    https://www.facebook.com/c4tkco/
   
   
- name:
    Chicago 2018 - Details soon
  photo:
    chicago.jpg
  location:
    Chicago, IL
  date:
    Details soon
  link:
    https://www.chic4tk.tech  
    
- name:
    Dallas/Fort Worth 2018 - Details soon
  photo:
    dallas.jpg
  location:
    Dallas/Fort Worth
  date:
    Details soon
     
- name:
    Denver 2018 - Details soon
  photo:
    denver.jpg
  location:
    Denver
  date:
    Details soon
    

- name:
    Jakarta 2018 - Details soon
  photo:
    Jakarta.jpg
  location:
    Jakarta
  date:
    Details soon
  link:
    http://codeforthekingdom.id/        

- name:
    La Paz 2018 - Details soon  
  photo:
    bolivia.jpg
  location:
    La Paz, Bolivia
  date:
    Details soon
    
- name:
    London 2018 - Details soon
  photo:
    london.jpg
  location:
    London, England 
  date:
    Details soon
  link:
    http://kingdomcode.uk   

- name:
    Manila 2018 - Details soon
  photo:
    manila.jpg
  location:
    Manila
  date:
    Details soon


- name:
    San Francisco Bay Area 2018 - Details soon
  photo:  
    bayarea.jpg 
  location:
    Bay Area
  date:
    Details soon
  link:
    
        
- name:
    Seattle 2018 - Details soon
  photo:
    seattle1.jpg
  location:
    Seattle, WA
  date:
    Details soon
   
        
- name:
    Warsaw 2018 - Details soon
  photo:
    warsaw.jpg
  location:
    Warsaw, Poland
  date:
    Details soon
   



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
