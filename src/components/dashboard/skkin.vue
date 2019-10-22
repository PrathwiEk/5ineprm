<template >
  <div class>
    <div class="navbar-fixed">
        <nav class="z-depth-0 brand theme-top-nav">
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">
                    {{ navitems.title }}
                </a>
                <ul class="right hide-on-med-and-down">
                <li>
                    <a  href="/projects" >
                        Projects
                    </a>
                </li>
                <!-- <li>
                    <a  href="/projects" >
                        Projects
                    </a>
                </li> -->
                
                <li>
                    <a class="dropdown-trigger" href="#!" data-target="orgdroup">
                        Organization
                    </a>
                </li>
                <li>
                    <a href="badges.html">
                    <i class="material-icons">view_module</i>
                    </a>
                </li>
                <li>
                    <a href="collapsible.html">
                    <i class="material-icons">refresh</i>
                    </a>
                </li>
                <li>
                    <a href="mobile.html">
                    <i class="material-icons">more_vert</i>
                    </a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
<!-- organization -->
    <ul id="orgdroup" class="dropdown-content">
        <li><a href="/organization/department">Department</a></li>
        <li><a href="/organization/designation">Designation</a></li>
        <li><a href="/organization/group">Group</a></li>
        <li><a href="/organization/employee">Employee</a></li>
    </ul>
        
  </div>
</template>

<script>
export default {
    props: ['navitems'],

    mounted(){
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {constrainWidth:false, hover: true});
    }
};
</script>

<style >
.theme-top-nav, .theme-top-nav .nav-wrapper i{height: 50px !important;  line-height: 50px !important;}
.theme-top-nav .brand-logo { position: absolute; color: #fff; display: inline-block; font-size: 18px; padding: 0; font-weight: 600; left: 20px; }
.navbar-fixed { height: 50px !important; }
.theme-second-nav nav{padding: 0 10px;border-bottom:1px solid #cacaca; height: 50px;}
.theme-second-nav nav li a {color:#333; line-height:10px; height: auto; text-align: center}
.theme-second-nav nav li a i{line-height:38px; height: auto;}
.theme-second-nav nav li a span{font-size: 10px; color:#939393;position: relative; top: -8px;}
.theme-second-nav { position: relative;  z-index: 99; width: 100%;height: 55px; }
.theme-second-nav nav{position:fixed}
.theme-second-nav nav a.waves-effect{display: block;}
.navdroup li a i{line-height: 12px !important; float: right; margin: 0; font-size: 14px;}
.navdroup li a {font-size: 14px;}
.navdroup li { min-height: 38px !important; line-height: 38px !important;}
</style>