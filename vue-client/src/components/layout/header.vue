<template>
  <!-- <div>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div> -->
<!--  <sidebar-menu :menu="menu" />-->
  <div></div>
</template>
 
<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Menu',
                        hiddenOnCollapse: false
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/about',
                        title: 'About',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/introduce',
                        title: 'Introduce',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/introduce/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script> 