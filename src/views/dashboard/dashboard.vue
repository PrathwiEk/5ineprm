<template>
    <div id="dashboard">
        <Skin  :navitems="navitems"></Skin>
        <projectdashboard></projectdashboard>
    </div>
</template>

<script>
import skin from '../../components/dashboard/skkin.vue';
import projectsDashbaord from '../../components/project/dashboard.vue';

export default {
    components:{Skin: skin, projectdashboard : projectsDashbaord},

    data(){
        return{
            navitems: {
                title : 'Dashboard',
                lt_link: [
                    {
                        path : '/test',
                        icon : 'donut_small',
                        title : 'add New',
                    },
                    {
                        path : '/test',
                        icon : 'open_in_browser',
                        title : 'Edit',
                    },
                    {
                        path : '/test',
                        icon : 'equalizer',
                        title : 'Save',
                    },
                    {
                        path : '/test',
                        icon : 'web',
                        title : 'Delete',
                    },
                    {
                        path : '/test',
                        icon : 'square_foot',
                        title : 'Other',
                    },
                ],
                rt_link:[
                    {
                        path : '/test',
                        icon : 'donut_small',
                        title : 'add New',
                    },
                    {
                        path : '/test',
                        icon : 'open_in_browser',
                        title : 'Edit',
                    },
                    {
                        path : '/test',
                        icon : 'equalizer',
                        title : 'Save',
                    },
                    {
                        path : '/test',
                        icon : 'web',
                        title : 'Delete',
                    },
                    {
                        path : '/test',
                        icon : 'square_foot',
                        title : 'Other',
                    },
                ]
            }
        }
    }
}
</script>
