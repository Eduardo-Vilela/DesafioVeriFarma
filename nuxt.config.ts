// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // css:[
    //     "@/public/css/global.css"
    // ]
    
    app:{
        head:{
            link:[
                {
                    rel:"stylesheet",
                    href:"/css/global.css"
                },
                {
                    rel:"stylesheet",
                    href:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600;1,700&display=swap"
                },
            ],
            
        },
    }
    
})
