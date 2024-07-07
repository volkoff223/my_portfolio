<script>
  import bonesharkImg from "$lib/assets/boneshark.png";
  import userManagementImg from "$lib/assets/userManagement.png";
  import webscraperImg from "$lib/assets/webscraper.png";
  import garageLogImg from "$lib/assets/garage-log.png";
  import ProjectCard from "./ProjectCard.svelte";
</script>

<section
  id="projects"
  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
  aria-label="Selected projects"
>
  <div
    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
  >
    <h2
      class="text-lg font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
    >
      Projects
    </h2>
  </div>

  <div>
    <ul class="group/list">
      <ProjectCard
        title="Garage Log"
        discription="The Garage Log is an application to track maintenance on a fleet of vehicles. The user is able to add vehicles through a  built in VIN search. Once a vehicle is added it can be modified or deleted. Each user may have multiple vehicles and each vehicle may have multiple maintenance logs associated with it. "
        skills={["Svelte", "PocketBase", "Tailwind"]}
        img={garageLogImg}
        link="https://garage-log.netlify.app"
      />

      <ProjectCard
        title="User profile app"
        discription="This is an application for registering and allowing users to sign
              in. Once signed in the user can update all of their information to
              include name, avatar, email, and password. This app has email
              verification. The frontend was built with Svelte and deployed on
              Netlify. For the backend I used PocketBase and deployed on Fly.io.
              This is by far my favorite tech-stack. Check it out, you can
              register with a fake email to test the features."
        skills={["Svelte", "PocketBase"]}
        img={userManagementImg}
        link="https://rococo-selkie-50917e.netlify.app/"
      />

      <ProjectCard
        title="Small buisness blog"
        discription="This is a site built for a small business that might want to reach
              customers with articles or blogs. The menu is a little different
              from the standard hamburger menu. It has an animated landing page
              with some graphics that I created using GIMP. The contact form is
              functional and I will receive messages there (probably not as fast
              as I would with an email). Check out the subtle color animation in
              the text."
        skills={["Astro"]}
        img={bonesharkImg}
        link="https://boneshark.netlify.app"
      />

      <ProjectCard
        title="Python web scraper"
        discription="My wife grew tired of manually gathering data from a website and
              assembling it into a spreadsheet for her job. The task consumed
              hours of her time, prompting her to seek my assistance. In
              response, I developed a web scraper tailored to her needs. Tkinter
              facilitated the creation of a user-friendly interface, simplifying
              the process of entering login credentials. Selenium efficiently
              navigated the website and extracted the necessary data. Lastly,
              Pandas proved invaluable for data cleaning and formatting,
              ultimately generating an HTML document for easy access and
              analysis."
        skills={["Python", "Tkinter", "Selenium", "Pandas"]}
        img={webscraperImg}
        link="https://github.com/volkoff223/DSS-web-scraper"
      />

      <ProjectCard
        title="RGB Guessing Game"
        discription="This is a guessing game that is great for anyone that uses RGB
              color. It was built using pure HTML, CSS, and JavaScript. It is
              linked to my CodePen page because I really like being able to
              showcase the game as well as the logic. Give it a try and see
              where you RGB guessing skills are."
        skills={["HTML", "JavaScript", "CSS"]}
        img="https://codepen.io/volkoff223/pen/PoaxaOr/image/small.png"
        link="https://codepen.io/volkoff223/pen/PoaxaOr"
      />
    </ul>
  </div>
</section>
