

AOS.init({
    duration: 1200,
  })
//for px to other

function convipx() {  
    if( document.getElementById("px1").value=="")
    {
        document.getElementById("px1").value='0';
    }  
    else{
        
    }   
    let px= document.getElementById("px1").value 
//     let emsum =parseInt(em)*parseInt(16);
//  document.getElementById("a1").value = emsum;
   And_This(px);
  
}  





//for em to other

function conviem() {    
    if( document.getElementById("em1").value=="")
    {
        document.getElementById("em1").value='0';
    }  
    else{
        
    }
    

    let em= document.getElementById("em1").value 
    let emsum =parseInt(em)*parseInt(16);
 document.getElementById("px1").value = emsum;
   And_This(emsum);
}  



//for rem to other

function convirem() {   
    if( document.getElementById("rem1").value=="")
    {
        document.getElementById("rem1").value='0';
    }  
    else{

    }
    let em= document.getElementById("rem1").value 
   
    let emsum =parseInt(em)*parseInt(16);
 document.getElementById("px1").value = emsum;
   And_This(emsum);
}  




// //for mm to other

// function convimm() {   
//     if( document.getElementById("a4").value=="")
//     {
//         document.getElementById("a4").value='0';
//     }  
//     else{

//     }
//     let mm= document.getElementById("a4").value 
//     let cm= mm/10
   
//     let emsum =parseInt(cm)*parseInt(37.795280352161);
//  document.getElementById("a1").value = emsum;
//    And_This(emsum);
// }  




//for cm to other

// function convicm() {   
//     if( document.getElementById("a5").value=="")
//     {
//         document.getElementById("a5").value='0';
//     }  
//     else{

//     }
//     let cm= document.getElementById("a5").value 
   
   
//     let emsum =parseInt(cm)*parseInt(37.795280352161);
//  document.getElementById("a1").value = emsum;
//    And_This(emsum);
// }  



//for in to other

function conviin() {   
    if( document.getElementById("inch1").value=="")
    {
        document.getElementById("inch1").value='0';
    }  
    else{

    }

    let inch= document.getElementById("inch1").value 
    let emsum =parseInt(inch)*parseInt(96);
 document.getElementById("px1").value = parseFloat(emsum);
   And_This(emsum);
}  


//for pc to other
function convipc() {   
    if( document.getElementById("pc1").value=="")
    {
        document.getElementById("pc1").value='0';
    }  
    else{
    }


    let pc= document.getElementById("pc1").value
   
    let emsum =parseInt(pc)*parseInt(16);
 document.getElementById("px1").value = emsum;
   And_This(emsum);
}  



//for pt to other
function convipt() {   
    if( document.getElementById("pt1").value=="" )
    {
        document.getElementById("pt1").value="0";
    }  
    else{
    }


    let pt= document.getElementById("pt1").value
   
    let emsum =parseFloat(pt)/parseFloat(96)*parseFloat(72);
 document.getElementById("px1").value =emsum;
   And_This(emsum);
}  







//for % to other
function conviper() {   
    if( document.getElementById("per1").value=="" )
    {
        document.getElementById("per1").value="0";
    }  
    else{
    }


    let per= document.getElementById("per1").value
   
    let emsum =parseFloat(per)*parseFloat(0.16);
 document.getElementById("px1").value =emsum;
   And_This(emsum);
}  



//for rad to other
function convirad() {   
    if( document.getElementById("rad1").value=="" )
    {
        document.getElementById("rad1").value="0";
    }  
    else{
    }


    let radi= document.getElementById("rad1").value
    let emsum =parseFloat(radi)*parseFloat(0.093);
 document.getElementById("px1").value =emsum;
   And_This(emsum);
}  






function And_This(num) {
  let pixels=num;

 

  let Pixelsum =parseInt(pixels)/parseInt(16);
   document.getElementById("em1").value = Pixelsum;

 let remsum =parseInt(pixels)/parseInt(16);
 document.getElementById("rem1").value = parseFloat(remsum);





 let insum =parseFloat(pixels)*parseFloat(0.0104166666667);
 document.getElementById("inch1").value = parseInt(insum);

let inch1=insum.toFixed(2);

 let mmsum =parseFloat(inch1)* parseFloat(25.4); 
//  document.getElementById("a4").value = mmsum.toFixed(2);

 let cmsum =parseFloat(inch1)* parseFloat(2.54); 

//  document.getElementById("a5").value = cmsum.toFixed(2);

//  let centimeter=cmsum;
 
 
 let pcsum =parseFloat(pixels)*parseFloat(0.0625);
 document.getElementById("pc1").value = parseFloat(pcsum);

 let ptsum =parseFloat(pixels)*parseFloat(96)/parseFloat(72);
 document.getElementById("pt1").value =parseFloat(ptsum);

 let pertisum =parseFloat(pixels)* parseFloat(6.25)
 document.getElementById("per1").value = parseFloat(pertisum );

 
 let radsum =parseFloat(pixels)/parseFloat(0.093)
 document.getElementById("rad1").value = parseFloat(radsum );



}
