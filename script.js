/* ============================================================
   TREBALL DE RECERCA
   Víctor Molero Alonso
   Anàlisi d'un pressupost públic
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    iniciarAnimacions();

    iniciarNavegacio();

    crearGraficsBase();

});



/* ============================================================
   ANIMACIONS
============================================================ */

function iniciarAnimacions(){

    const seccions=document.querySelectorAll(".section");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },{

        threshold:0.15

    });

    seccions.forEach(sec=>{

        sec.classList.add("hidden");

        observer.observe(sec);

    });

}



/* ============================================================
   NAVEGACIÓ
============================================================ */

function iniciarNavegacio(){

    const links=document.querySelectorAll("nav a");

    links.forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const desti=document.querySelector(link.getAttribute("href"));

            desti.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}
/* ============================================================
   GRÀFIC 1
   Evolució del pressupost municipal
============================================================ */

function crearGraficsBase(){

    const pressupost=document.getElementById("evolucioPressupost");

    if(pressupost){

        new Chart(pressupost,{

            type:"bar",

            data:{

                labels:[

                    "2024",

                    "2025",

                    "2026"

                ],

                datasets:[{

                    label:"Pressupost (€)",

                    data:[

                        16750872.97,

                        16185901.83,

                        17340448.83

                    ],

                    borderRadius:12,

                    backgroundColor:[

                        "#1565C0",

                        "#1E88E5",

                        "#42A5F5"

                    ]

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false,

                plugins:{

                    legend:{

                        display:false

                    },

                    title:{

                        display:true,

                        text:"Evolució del pressupost municipal"

                    }

                },

                scales:{

                    y:{

                        beginAtZero:true

                    }

                }

            }

        });

    }




/* ============================================================
   EDUCACIÓ
============================================================ */

const educacio=document.getElementById("educacioChart");

if(educacio){

new Chart(educacio,{

type:"line",

data:{

labels:[

"2024",

"2025",

"2026"

],

datasets:[{

label:"Inversió educativa (€)",

data:[

1158349.21,

1300000,

1389721.16

],

borderWidth:4,

fill:true,

tension:.35,

backgroundColor:"rgba(30,136,229,.15)",

borderColor:"#1565C0"

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

title:{

display:true,

text:"Evolució de la inversió educativa"

}

}

}

});

}



/* ============================================================
   SANITAT
============================================================ */

const sanitat=document.getElementById("sanitatChart");

if(sanitat){

new Chart(sanitat,{

type:"line",

data:{

labels:[

"2024",

"2025",

"2026"

],

datasets:[{

label:"Benestar social (€)",

data:[

511955.24,

550000,

1222622.85

],

borderColor:"#2E7D32",

backgroundColor:"rgba(46,125,50,.18)",

fill:true,

borderWidth:4,

tension:.35

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

title:{

display:true,

text:"Inversió en sanitat i benestar"

}

}

}

});

}




/* ============================================================
   SEGURETAT
============================================================ */

const seguretat=document.getElementById("seguretatChart");

if(seguretat){

new Chart(seguretat,{

type:"bar",

data:{

labels:[

"2024",

"2025",

"2026"

],

datasets:[{

label:"Seguretat (€)",

data:[

1171364.01,

1300000,

1450000

],

backgroundColor:[

"#ef5350",

"#e53935",

"#c62828"

],

borderRadius:10

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

title:{

display:true,

text:"Inversió en seguretat"

},

legend:{

display:false

}

}

}

});

}

}
