<script>
  import { AppShell } from "@skeletonlabs/skeleton";
  import { AppBar } from "@skeletonlabs/skeleton";

  import {
    IconSearch,
    IconBrandFacebookFilled,
    IconBrandTwitterFilled,
    IconBrandInstagram,
    IconBrandDiscordFilled,
  } from "@tabler/icons-svelte";

  // Your custom Skeleton theme:
  import "../theme.postcss";

  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import "../app.postcss";
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar class="h-14">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <a href="#mal" class="flex items-center ml-32 -mt-3">
          <img
            src="https://store-images.s-microsoft.com/image/apps.17083.9007199266506523.adab9a45-6875-4ea0-b145-00abf7f7d397.abfcc7db-df11-4314-a62f-a302f0c4a286"
            class="mr-3 h-6 sm:h-14"
            alt="Flowbite Logo"
          />
        </a>
        <div class="flex items-center lg:order-2" />
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
          style="margin-top: -20px"
        >
          <ul
            class="flex flex-col -mt-36 font-medium lg:flex-row lg:space-x-4 lg:mt-0 ml-6"
          >
            <li>
              <a
                href="#test"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                Anime
              </a>
            </li>
            <li>
              <a
                href="#test"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Manga
              </a>
            </li>
            <li>
              <a
                href="#test"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#test"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Industry
              </a>
            </li>
            <li>
              <a
                href="#test"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Watch
              </a>
            </li>
            <li>
              <a
                href="#test"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Read
              </a>
            </li>
            <li>
              <a
                href="#test"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Help
              </a>
            </li>
          </ul>

          <select class="select ml-6 h-8 text-xs rounded-s-lg rounded-e-lg">
            <option value="1">All</option>
            <option value="2">Anime</option>
            <option value="3">Manga</option>
            <option value="4">Characters</option>
            <option value="5">People</option>
            <option value="5">Companies</option>
            <option value="5">Manga Store</option>
            <option value="5">News</option>
            <option value="5">Featured Articles</option>
            <option value="5">Forum</option>
            <option value="5">Clubs</option>
            <option value="5">Users</option>
          </select>

          <input
            class="input h-8 text-xs ml-1 rounded-s-lg rounded-e-lg w-40"
            title="Input (search)"
            type="search"
            placeholder="Search MAL..."
          />

          <button
            type="button"
            class="btn btn-sm ml-1 variant-filled rounded-l-lg rounded-r-lg"
          >
            <span><IconSearch size={20} /></span>
            <span>Search</span>
          </button>
          <button
            type="button"
            class="btn btn-sm ml-1 variant-secondary rounded-l-lg rounded-r-lg"
          >
            <span>Sign Up</span>
          </button>
          <button
            type="button"
            class="btn btn-sm ml-1 variant-filled rounded-l-lg rounded-r-lg"
          >
            <span>Login</span>
          </button>
        </div>
      </div>
    </AppBar>
  </svelte:fragment>
  <slot />
  <svelte:fragment slot="footer">
    <footer class="">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <div class="sm:flex sm:items-center sm:justify-between">
          <ul
            class="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
          >
            <li>
              <a href="#test" class="mr-32">
                <IconBrandFacebookFilled />
              </a>
            </li>
            <li>
              <a href="#test" class="mr-4 md:mr-32">
                <IconBrandInstagram />
              </a>
            </li>
            <li>
              <a href="#test" class="mr-4 md:mr-32">
                <IconBrandTwitterFilled />
              </a>
            </li>
            <li>
              <a href="#test" class="mr-4 md:mr-32">
                <IconBrandDiscordFilled />
              </a>
            </li>
          </ul>
          <img
            src="https://icon-library.com/images/google-play-store-icon-download/google-play-store-icon-download-6.jpg"
            class="h-16 ml-96"
            alt="MAL Logo"
          />
          <img
            src="https://icon-library.com/images/apple-store-icon/apple-store-icon-4.jpg"
            class="h-16"
            alt="MAL Logo"
          />
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <div class="sm:flex sm:items-center sm:justify-between">
          <img
            src="https://store-images.s-microsoft.com/image/apps.17083.9007199266506523.adab9a45-6875-4ea0-b145-00abf7f7d397.abfcc7db-df11-4314-a62f-a302f0c4a286"
            class="h-16 mr-6"
            alt="MAL Logo"
          />
          <ul
            class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
          >
            <li>
              <a href="#test" class="mr-4 hover:underline md:mr-6"> About </a>
            </li>
            <li>
              <a href="#test" class="mr-4 hover:underline md:mr-6">
                Press Room
              </a>
            </li>
            <li>
              <a href="#test" class="mr-4 hover:underline md:mr-6"> Support </a>
            </li>
            <li>
              <a href="#test" class="mr-4 hover:underline md:mr-6"
                >Advertising</a
              >
            </li>
            <li>
              <a href="#test" class="mr-4 hover:underline md:mr-6">FAQ</a>
            </li>
            <li>
              <a href="#test" class="mr-4 hover:underline md:mr-6">Terms</a>
            </li>
            <li>
              <a href="#test" class="mr-4 hover:underline md:mr-6"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#test" class="hover:underline">Sitemap</a>
            </li>
          </ul>
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <span
          class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >
          <a href="https://flowbite.com/" class="hover:underline"
            >MyAnimeList.net</a
          > is a property of MyAnimeList Co.,Ltd. © 2023 All Rights Reserved.</span
        >
      </div>
    </footer>
  </svelte:fragment>
</AppShell>
