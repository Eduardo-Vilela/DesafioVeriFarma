<template>
        <!-- <Navbar/> -->
            <main>
                <slot></slot>
            </main>
        <Footer/>
</template>



<script setup>
useHead({
    title:"Netflix",
    bodyAttrs:[{
        class:""
    }],
    link:[
        {
            rel:"stylesheet",
            href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
            integrity:"sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ",
            crossorigin:"anonymous"
        }
    ],
    script: [
        {
            src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
        }
    ]
})
</script>