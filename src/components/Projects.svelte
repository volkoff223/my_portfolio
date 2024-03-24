<script>
  import bonesharkImg from "$lib/assets/boneshark.png";
  import userManagementImg from "$lib/assets/userManagement.png";
  import webscraperImg from "$lib/assets/webscraper.png";
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
      class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
    >
      Projects
    </h2>
  </div>

  <!-- User management app -->
  <div>
    <div>
      <ul class="group/list">
        <li class="mb-12">
          <div
            class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div
              class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
            ></div>
            <div class="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                  href="https://rococo-selkie-50917e.netlify.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="User management app"
                  ><span
                    class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                  ></span><span
                    >User profile app
                    <span class="inline-block"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                        ><path
                          fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd"
                        ></path></svg
                      ></span
                    ></span
                  ></a
                >
              </h3>
              <p class="mt-2 text-sm leading-normal">
                This is an application for registering and allowing users to
                sign in. Once signed in the user can update all of their
                information to include name, avatar, email, and password. This
                app has email verification. The frontend was built with Svelte
                and deployed on Netlify. For the backend I used PocketBase and
                deployed on Fly.io. This is by far my favorite tech-stack. Check
                it out, you can register with a fake email to test the features.
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li class="mr-1.5 mt-2">
                  <div
                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                  >
                    SvelteKit
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div
                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                  >
                    PocketBase
                  </div>
                </li>
              </ul>
            </div>
            <img
              alt="User management app"
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style="color:transparent"
              src={userManagementImg}
            />
          </div>
        </li>
      </ul>

      <!-- Small buisness blog -->
      <div>
        <div>
          <ul class="group/list">
            <li class="mb-12">
              <div
                class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
              >
                <div
                  class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                ></div>
                <div class="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href="https://boneshark.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Small buisness blog"
                      ><span
                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                      ></span><span
                        >Small buisness blog
                        <span class="inline-block"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                            ><path
                              fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"
                            ></path></svg
                          ></span
                        ></span
                      ></a
                    >
                  </h3>
                  <p class="mt-2 text-sm leading-normal">
                    This is a site built for a small business that might want to
                    reach customers with articles or blogs. The menu is a little
                    different from the standard hamburger menu. It has an
                    animated landing page with some graphics that I created
                    using GIMP. The contact form is functional and I will
                    receive messages there (probably not as fast as I would with
                    an email). Check out the subtle color animation in the text.
                  </p>
                  <ul
                    class="mt-2 flex flex-wrap"
                    aria-label="Technologies used:"
                  >
                    <li class="mr-1.5 mt-2">
                      <div
                        class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        Astro
                      </div>
                    </li>
                  </ul>
                </div>
                <img
                  alt="Boneshark blog"
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style="color:transparent"
                  src={bonesharkImg}
                />
              </div>
            </li>
          </ul>

          <!-- Python Web Scraper -->
          <div>
            <div>
              <ul class="group/list">
                <li class="mb-12">
                  <div
                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                  >
                    <div
                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                    ></div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a
                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://github.com/volkoff223/DSS-web-scraper"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Python Web Scraper"
                          ><span
                            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                          ></span><span
                            >Python web scraper
                            <span class="inline-block"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                                ><path
                                  fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"
                                ></path></svg
                              ></span
                            ></span
                          ></a
                        >
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        My wife was having to manually collect data from a
                        website for her job. The task would take hours and she
                        asked if I could help. I built this web scraper with
                        Python, Selenium, Tkinter, and Pandas. Tkinter handled
                        the user interface that was easy for her to enter the
                        credentials to log in. Selenium navigated through the
                        website and located the data that needed to be
                        retrieved. Pandas was used to clean the data and return
                        it in a HTML document.
                      </p>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used:"
                      >
                        <li class="mr-1.5 mt-2">
                          <div
                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                          >
                            Python
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div
                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                          >
                            Tkinter
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div
                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                          >
                            Selenium
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div
                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                          >
                            Pandas
                          </div>
                        </li>
                      </ul>
                    </div>
                    <img
                      alt="Python web scraper"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      style="color:transparent"
                      src={webscraperImg}
                    />
                  </div>
                </li>
              </ul>

              <!-- RGB Guessing Games -->

              <ul class="group/list">
                <li class="mb-12">
                  <div
                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                  >
                    <div
                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                    ></div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a
                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://codepen.io/volkoff223/pen/PoaxaOr"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="The great RGB guessing game"
                          ><span
                            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                          ></span><span
                            >The great RGB guessing game
                            <span class="inline-block"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                                ><path
                                  fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"
                                ></path></svg
                              ></span
                            ></span
                          ></a
                        >
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        This is a guessing game that is great for anyone that
                        uses RGB color. It was built using pure HTML, CSS, and
                        JavaScript. It is linked to my CodePen page because I
                        really like being able to showcase the game as well as
                        the logic. Give it a try and see where you RGB guessing
                        skills are.
                      </p>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used:"
                      >
                        <li class="mr-1.5 mt-2">
                          <div
                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                          >
                            HTML
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div
                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                          >
                            JavaScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div
                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                          >
                            CSS
                          </div>
                        </li>
                      </ul>
                    </div>
                    <img
                      alt="Build a Spotify Connected App Newline course marketing card"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      style="color:transparent"
                      src="https://codepen.io/volkoff223/pen/PoaxaOr/image/small.png"
                    />
                  </div>
                </li>
              </ul>
            </div>

            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
