<template>
  <div class="sm:bg-transparent sm:pt-5 top-0 z-10 sticky">
    <nav
      class="pl-0 px-6 pt-3 sm:py-8 mr-4 md:mr-32 mx-auto md:flex md:justify-between md:items-center sm:order-first"
    >
      <div class="flex items-center justify-between mt-0">
        <!-- Mobile menu button -->
        <div
          @click="toggleNav"
          class="flex md:hidden ml-auto active:bg-[#D9D9D9]"
        >
          <button
            type="button"
            class="text-[#003368] hover:text-gray-900 focus:outline-none focus:text-gray-800"
          >
            <svg viewBox="0 0 24 24" class="w-14 h-14 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
          <div
            v-if="showMenu"
            class="opacity-30 fixed inset-0 z-40 bg-black backdrop-filter backdrop-opacity-30"
          ></div>
        </div>
      </div>
      <div class="w-auto relative">
        <img
          src="../assets/ODMenvios.webp"
          onerror="this.src='../assets/ODMenvios.png'"
          class="sm:hidden w-52 h-auto m-5 bg-gray-200"
          :class="showMenu ? 'flex' : 'hidden'"
        />

        <ul
          :class="
            showMenu
              ? 'flex flex-col justify-start items-center opacity-100'
              : 'hidden'
          "
          class="flex-col mt-0 mr-20 md:flex md:flex-row md:items-center md:space-x-10 spacey- md:mt-0 bg-[#003368] h-screen sm:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368] z-0"
        >
          <li
            class="hover:text-blue-600 mt-3 mb-3 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"
          >
            <router-link to="/Envios"
              >Tipos <br />
              de envíos</router-link
            >
          </li>

          <li
            class="hover:text-blue-600 mt-3 mb-3 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"
          >
            <a href="#"
              >Cobertura <br />
              de envíos</a
            >
          </li>
          <li
            class="hover:text-blue-600 mt-3 mb-3 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"
          >
            <a href="#"
              >Calcula<br />
              tu paquete</a
            >
          </li>
          <li
            class="hover:text-blue-600 mt-3 mb-3 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"
          >
            <a href="#"
              >Tarifas<br />
              preferenciales</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Navbar",
  inject: ["isSticky"],
  computed: {
    navbarClass() {
      return this.isSticky ? "sticky top-0" : "";
    },
  },
  setup() {
    let showMenu = ref(false);

    const toggleNav = () => {
      showMenu.value = !showMenu.value;
    };

    return { showMenu, toggleNav };
  },
};
</script>
