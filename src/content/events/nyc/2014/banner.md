<section id="banner">

  <!--
    ".inner" is set up as an inline-block so it automatically expands
    in both directions to fit whatever's inside it. This means it won't
    automatically wrap lines, so be sure to use line breaks where
    appropriate (<br />).
  -->
    <div class="inner">
      <header>
        <h2>Create for the Kingdom<br/>&nbsp;{{this.title}}</h2>
      </header>
      <img style="max-width:100%" src="{{assets}}/images/banners/{{this.logo}}"/>
      <p>{{this.location}}</p>
      <p>{{this.date}}</p>
      <p>A collaboration between Leadership Network, The Center for Faith & Work of Redeemer Presbyterian Church, and The King's College.</p>
      <footer>
        <ul class="buttons">
          <li><a href="#about.md" class="button fit scrolly">Tell Me More</a></li>
          <li>{{> register-button}}</li>
        </ul>
      </footer>
    </div>

</section>
