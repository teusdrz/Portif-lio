const emails = []
let selection = ""
function verificaoEmail (){
   
    do{

 

    const email = prompt ("Enter your e-mail: ")
    const verificantion = confirm ("Confirm your E-mail: " + email)


    if(!verificantion){
        alert("E-mail not confirmed")
        return
    }


    


    if(email.includes('@') &&  email.includes(".")){
        alert ("checking email and validating....")
        alert ("e-mail successfully validated")
        console.log("e-mail " + email + " saved successfully")
        alert("e-mail " + email + " saved successfully")
        emails.push(email);


      do {


         
        selection = prompt ("Select one of the options below. \n1. list registered emails \n2Remove registered emails \n3.Exit")

        
        switch(selection){

          
          
          
          
            case"1":
            

           if (emails.indexOf(email) > -1){
            for(let i = 0; i < emails.length; i++){
                alert(
                    "E-mails: " +  (i + 1) + emails[i]
                )
            
      
        }
    } else {
        alert("Email not found")

    }
            break
            case"2":
             const RemoveEmail = prompt ("Enter the email you want to remove:")

             
        if(emails.indexOf(email) > -1){
           alert("Removing the email " + RemoveEmail )
         
           const index = emails.indexOf(RemoveEmail) 
           if (index > -1) {
             emails.splice(index, 1);
           }
           


           alert("Email successfully removed")
        } else {
            alert("Email not found")
        } 
        
        break


        case"3":
        alert("Leaving...")
        break


        default:
            alert("Invalid option!")
            break

   
        }


       
      } while (selection !== "3") 


    } else {
        alert("e-mail contain errors")
    }
} while (true)


}
verificaoEmail()