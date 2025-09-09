<script>
  import MainHeader from "../components/MainHeader.svelte";
  import About from "../components/About.svelte";
  import Experience from "../components/Experience.md";
  import Projects from "../components/Projects.svelte";
  import Education from "../components/Education.svelte";
</script>

<div>
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <div class="lg:flex lg:justify-between lg:gap-4">
      <MainHeader />
      <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Projects />
        <Experience />
        <Education />
      </main>
    </div>
  </div>
</div>
