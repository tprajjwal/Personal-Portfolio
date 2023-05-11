var tabLinks = document.getElementsByClassName("tab-links");
        var  tabContents = document.getElementsByClassName("tab-contents");
        function openTab(tabName){

            for(tabLink of tabLinks) tabLink.classList.remove("active-link"); 

            for(tabContent of tabContents) tabContent.classList.remove("active-tab");

            event.currentTarget.classList.add("active-link");

            document.getElementById(tabName).classList.add("active-tab");
        }

        var sidemenu = document.getElementById("sidemenu");
        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxZM027zkhs2ZuWIjNIMD1CYZQZOWgsMM4ojCpETAhlJtLV6Y8q-xL8pOKIUvt5aXOm/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg = document.getElementById("msg");
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Message sent successfully";
                    setTimeout(function(){
                        msg.innerHTML="";
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
            })