// https://newsapi.org/v2/everything?q=tesla&from=2023-02-18&sortBy=publishedAt&apiKey=09b8727fd1a34c4b9077f5a6cc4a4c52
// GET by catagory=>  https://newsapi.org/v2/everything?q=bitcoin&apiKey=09b8727fd1a34c4b9077f5a6cc4a4c52


// best api=  >   https://newsapi.org/v2/everything?q=apple&from=2023-03-17&to=2023-03-17&sortBy=relevancy&apiKey={API_KEY}


// const API_KEY="09b8727fd1a34c4b9077f5a6cc4a4c52";
const API_KEY="c7ec3bdf1fed433f8a3c13550dafd39f";
const country=document.querySelector("#country");
const country_drop=document.querySelector("#country_drop");
const state_drop=document.querySelector("#state_drop");
const states=document.querySelector("#states");
const sports=document.querySelector("#sports");
const sport_drop=document.querySelector("#sport_drop");
const country_container=document.querySelector("#country_container");
const india=document.querySelector("#india");
const china=document.querySelector("#china");

const cricket=document.querySelector("#cricket");
const volleyball=document.querySelector("#volleyball");
const badminton=document.querySelector("#badminton");
const athletics=document.querySelector("#athletics");

const up=document.querySelector("#up");
const delhi=document.querySelector("#delhi");
const uk=document.querySelector("#uk");
const jk=document.querySelector("#jk");
 const ne=document.querySelector("#ne");


console.log("j");


const usa=document.querySelector("#usa");

const ukraine=document.querySelector("#ukraine");
const russia=document.querySelector("#russia");


const home =document.querySelector("#home");
const defence=document.querySelector("#defence");
let CATEGORY="india";

// news detail
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
const TO_DATE=`${cYear}-${cMonth}-${cDay-1}`;
const FROM_DATE=`${cYear}-${cMonth}-${cDay}`;



// docc clicked

// const clickeddiv=document.querySelector("#clickeddiv");

// .addEventListener('click',()=>{
//         if(country_drop.classList.contains("active"))
//         {

//             console.log("lolololololololololol");
//                     country_drop.classList.remove("active");

//         }

//         // if(state_drop.classList.contains("active"))
//         // state_drop.classList.remove("active");
//         // country_drop.classList.remove("active");
//         // sport_drop.classList.remove("active");

//     });






// state_drop.style.transition = "all 10s";

// cricket listner
cricket.addEventListener('click',()=>
{

    tabClicked(cricket);

});


//volleyball listner

volleyball.addEventListener('click',()=>
{

    tabClicked(volleyball);

});


// athletics listner

athletics.addEventListener('click',()=>
{

    tabClicked(athletics);

});

// badminton listner


badminton.addEventListener('click',()=>
{

    tabClicked(badminton);

});


// listner for home

home.addEventListener('click',()=>
{

    tabClicked(home);

});

// listner for defence
defence.addEventListener('click',()=>
{

    tabClicked(defence);

});



// indaia listner
india.addEventListener('click',()=>{
    
    tabClicked(india);

    
    });



//usa listner

usa.addEventListener('click',()=>{
    
    tabClicked(usa);

    
    });


// china listner

china.addEventListener('click',()=>{
    
    tabClicked(china);

    
    });

// russia listner
russia.addEventListener('click',()=>{
    
    tabClicked(russia);

    
    });

// ukraine listner

ukraine.addEventListener('click',()=>{
    
    tabClicked(ukraine);

    
    });



// listner for country
country.addEventListener('click',()=>{
    
tabClicked(country);

});

// listner for states

// 

states.addEventListener('click',()=>{
    
    tabClicked(states);
    
    });


    // listne for sports

    sports.addEventListener('click',()=>{
    
        tabClicked(sports);
        
        });


    //    listner for up


    up.addEventListener('click',()=>{
    
        tabClicked(up);
        
        });


    // listner for delhi

    delhi.addEventListener('click',()=>{
    
        tabClicked(delhi);
        
        });

    // listner for uk

    uk.addEventListener('click',()=>{
    
        tabClicked(uk);
        
        });

    // listner for ne
    ne.addEventListener('click',()=>{
    
        tabClicked(ne);
        
        });

        // listner for jk

        jk.addEventListener('click',()=>{
    
            tabClicked(j&k);
            
            });



function tabClicked(clickedTab)
{

    // console.log("hjkj");
    if(clickedTab==country)
    {
        // console.log("hsssss");

        

        if(country_drop.classList.contains("active"))
        {
            country_drop.classList.remove("active");
        }
        else{
            country_drop.classList.add("active");
        }
        // off others
        state_drop.classList.remove("active");
        sport_drop.classList.remove("active");



        // off after time

        setTimeout(()=>{
            country_drop.classList.remove("active");
        },5000);
        
    }

    if(clickedTab==states)
    {
        // console.log("hsssss");

        
        if(state_drop.classList.contains("active"))
        {
            state_drop.classList.remove("active");
        }
        else{
            state_drop.classList.add("active");
        }

        // off other


        sport_drop.classList.remove("active");
        country_drop.classList.remove("active");


        // off after some time

        setTimeout(()=>{
            state_drop.classList.remove("active");
        },5000);
 

    }

    if(clickedTab==sports)
    {
        // console.log("hsssss");

        
        if(sport_drop.classList.contains("active"))
        {
            sport_drop.classList.remove("active");
        }
        else{
            sport_drop.classList.add("active");
        }

        // off other
        state_drop.classList.remove("active");
        country_drop.classList.remove("active");

// off after some time
        setTimeout(()=>{
            sport_drop.classList.remove("active");
        },5000);

    }

// home clicked

    if(clickedTab==home)
    {
        state_drop.classList.remove("active");
        country_drop.classList.remove("active");
        sport_drop.classList.remove("active");

        CATEGORY="india";
        fetchInfo();

    }





    // defence clicked

    if(clickedTab==defence)
    {
        state_drop.classList.remove("active");
        country_drop.classList.remove("active");
        sport_drop.classList.remove("active");

        
        CATEGORY="armed forces";
        fetchInfo();

    }

    // india clicked clicked

    if(clickedTab==india)
    {
        country_drop.classList.remove("active");

        state_drop.classList.remove("active");
        country_drop.classList.remove("active");
        sport_drop.classList.remove("active");

        
        CATEGORY="india";
        fetchInfo();

    }

    // usa clicked
    if(clickedTab==usa)
    {
        country_drop.classList.remove("active");

        state_drop.classList.remove("active");
        country_drop.classList.remove("active");
        sport_drop.classList.remove("active");

        
        CATEGORY="USA";
        fetchInfo();

    }


    // china clicked

    if(clickedTab==china)
    {
        country_drop.classList.remove("active");

        state_drop.classList.remove("active");
        country_drop.classList.remove("active");
        sport_drop.classList.remove("active");

        
        CATEGORY="china";
        fetchInfo();

    }


    // ukrain clicked
    if(clickedTab==ukraine)
    {
        country_drop.classList.remove("active");

        state_drop.classList.remove("active");
        country_drop.classList.remove("active");
        sport_drop.classList.remove("active");

        
        CATEGORY="ukraine";
        fetchInfo();

    }


    // russian clicked

    if(clickedTab==russia)
    {
        country_drop.classList.remove("active");

        state_drop.classList.remove("active");
        country_drop.classList.remove("active");
        sport_drop.classList.remove("active");

        
        CATEGORY="russia";
        fetchInfo();

    }



    // cricket clicked

    if(clickedTab==cricket)
    {
      
        sport_drop.classList.remove("active");

        console.log("ye sabbas");
        CATEGORY="cricket";
        fetchInfo();

    }

    // volley clicket

    if(clickedTab==volleyball)
    {
        // country_drop.classList.remove("active");

        // state_drop.classList.remove("active");
        // country_drop.classList.remove("active");
        sport_drop.classList.remove("active");

        
        CATEGORY="volleyball";
        fetchInfo();

    }



    // docc clicked





    // badminton clicked

    if(clickedTab==badminton)
    {
        // country_drop.classList.remove("active");

        // state_drop.classList.remove("active");
        // country_drop.classList.remove("active");
        sport_drop.classList.remove("active");

        
        CATEGORY="badminton";

        fetchInfo();

    }


    // athletic clicked

    if(clickedTab==athletics)
    {
        // country_drop.classList.remove("active");

        // state_drop.classList.remove("active");
        // country_drop.classList.remove("active");
        sport_drop.classList.remove("active");

        
        CATEGORY="athletics";
        fetchInfo();

    }


    // delhi clicked

    if(clickedTab==delhi)
    {
        // country_drop.classList.remove("active");

        state_drop.classList.remove("active");
        // country_drop.classList.remove("active");
        // sport_drop.classList.remove("active");

        
        CATEGORY="delhi";
        fetchInfo();

    }

    // up clicked


    if(clickedTab==up)
    {
        // country_drop.classList.remove("active");

        state_drop.classList.remove("active");
        // country_drop.classList.remove("active");
        // sport_drop.classList.remove("active");

        
        CATEGORY="uttar pradesh";
        fetchInfo();

    }

    // uttrakhand

    if(clickedTab==uk)
    {
        // country_drop.classList.remove("active");

        state_drop.classList.remove("active");
        // country_drop.classList.remove("active");
        // sport_drop.classList.remove("active");

        
        CATEGORY="uttrakhand";
        fetchInfo();

    }


    // j&k clicked


    if(clickedTab==jk)
    {
        // country_drop.classList.remove("active");

        state_drop.classList.remove("active");
        // country_drop.classList.remove("active");
        // sport_drop.classList.remove("active");

        
        CATEGORY="kashmir";
        fetchInfo();

    }


    //  north east clicked

    if(clickedTab==ne)
    {
        // country_drop.classList.remove("active");

        state_drop.classList.remove("active");
        // country_drop.classList.remove("active");
        // sport_drop.classList.remove("active");

        
        CATEGORY="assam";
        fetchInfo();


    }








}



document.addEventListener('DOMContentLoaded', function() {
    console.log("gfdsdfgfds");
    

      fetchInfo();

}, false);



 async function fetchInfo(){

   

    try{
        let response=await fetch(`https://newsapi.org/v2/everything?q=${CATEGORY}&from=${FROM_DATE}&to=${TO_DATE}&sortBy=relevancy&apiKey=${API_KEY}`);


        let data=await response.json();

        renderIndiaNews(data);

        console.log(data);

       


    }
    catch(e)
    {

    }






}
const arr=[

    [
        [document.querySelector("#news_type1")],
        [document.querySelector("#headline1")],
        [document.querySelector("#news_des1")],
        [document.querySelector("#news_img1")],
        [document.querySelector("#link1")]
        

    ],
    [ 
        [document.querySelector("#news_type2")],
        [document.querySelector("#headline2")],
        [document.querySelector("#news_des2")],
        [document.querySelector("#news_img2")],
        [document.querySelector("#link2")]
    ],
    [
        [document.querySelector("#news_type3")],
        [document.querySelector("#headline3")],
        [document.querySelector("#news_des3")],
        [document.querySelector("#news_img3")],
        [document.querySelector("#link3")]
    ],
    [
        [document.querySelector("#news_type4")],
        [document.querySelector("#headline4")],
        [document.querySelector("#news_des4")],
        [document.querySelector("#news_img4")],
        [document.querySelector("#link4")]
    ],
    [
        [document.querySelector("#news_type5")],
        [document.querySelector("#headline5")],
        [document.querySelector("#news_des5")],
        [document.querySelector("#news_img5")],
        [document.querySelector("#link5")]
    ],
    [
        [document.querySelector("#news_type6")],
        [document.querySelector("#headline6")],
        [document.querySelector("#news_des6")],
        [document.querySelector("#news_img6")],
        [document.querySelector("#link6")]
    ]

];


// console.log(arr[0][0]);

function  renderIndiaNews(data)
{

  

    


console.log("moj krdi");


console.log("jkjkkkkkkkk");

for(let i=0;i<6;i++)
{
    // console.log("jkjkkkkkkkk");
    arr[i][0][0].innerText= data?.articles?.[i]?.source?.name;
    arr[i][1][0].innerText= data?.articles?.[i]?.title;
    arr[i][2][0].innerText=data?.articles?.[i]?.description;
    
    arr[i][4][0].href=data?.articles?.[i]?.url;
    

    if(data?.articles?.[i]?.urlToImage==null)
{
    
    arr[i][3][0].src="https://th.bing.com/th?id=OIP.O21Q6ByDjlqd7OoD0LWpCwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2";

}
else{
    arr[i][3][0].src=data?.articles?.[i]?.urlToImage;
}

   
    
}



// jhgfdsdfghjkkjhgfdsdfghjkjhgfdssdfghjkjhgfdsdfghjkjhgfdfghjhgf
// news_type1.innerText=data?.articles?.[0]?.source?.name;

// headline1.innerText=data?.articles?.[0]?.title;

// news_des1.innerText=data?.articles?.[0]?.description;
// let imgUrl1=data?.articles?.urlToImage;
// if(imgUrl1==null)
// {
    
//     news_img1.src=;

// }
// else{
//     news_img1.src=data?.articles?.[0]?.urlToImage;

// }
// link1.href=data?.articles?.[0]?.url;


// asdfghjkjhgfdsdfghjkjhgfdkjhgfdfghjkjhgfdfghjhgfdfghjhgfc
// const link1=document.querySelector("#link1");





/////////







}


