<template>
  <div>
    <div class="theme-second-nav">
      <nav class="white z-depth-0">
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="left nav-item-left">
            <li>Department</li>
          </ul>
          <ul id="nav-mobile" class="right">
            <li>
              <router-link
                to="/organization/department/create"
                class="waves-effect waves-green"
              >
                <i class="material-icons">add</i>
                <span>Create</span>
              </router-link>
            </li>
            <li>
              <router-link to="/organization/department" class="waves-effect waves-green">
                <i class="material-icons">list</i>
                <span>list</span>
              </router-link>
            </li>
            <!-- <li>
              <a class="dropdown-trigger" href="#" data-target="dropdown1">
                <i class="material-icons">filter_list</i>
                <span>Filter</span>
              </a>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
}
</script>