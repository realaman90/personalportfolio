

let projects = document.querySelectorAll('.project_container div');
let projectContent = document.querySelector('.project_container')
// project 1 more information
let companyWebsiteContent = document.createElement("div");
companyWebsiteContent.id = 'project_content';
const companyWebsiteHeader = document.createElement("h3");
const companyWebsitePara = document.createElement("p");
companyWebsiteHeader.textContent = "Company Website";
companyWebsitePara.textContent = "Built a company portfolio website Codecademy project using CSS and HTML"

// project 1 icons

const companyWebsiteIconContainer = document.createElement("div");
companyWebsiteIconContainer.id = 'icon_container';
companyWebsiteIconContainer.innerHTML = '<img src="./Images/Html5_css3_styling.png"alt="Css logo"> <img src="./Images/img_255274.png"a lt="Html 5 logo">';
companyWebsiteContent.appendChild(companyWebsiteHeader);
companyWebsiteContent.appendChild(companyWebsitePara);
companyWebsiteContent.appendChild(companyWebsiteIconContainer);





// Object.assign(obj.style, styles)

projects.forEach(element => {
    element.addEventListener("mouseover", ()=> {
        //  console.log(element.id)
        if(element.id === 'project_companywebsite'){
            element.firstElementChild.style.display = 'none';
            element.appendChild(companyWebsiteContent);

            element.lastElementChild.style.display ='flex'

            
        }
        else if (element.id ==='project_bim_platform'){
            element.firstElementChild.style.display = 'none'
        }
        else if (element.id ==='project_e_commerce_platform'){
            element.firstElementChild.style.display = 'none'
        }
        else if (element.id ==='project_reddit'){
            element.firstElementChild.style.display = 'none'
        }
        
        
        })
    element.addEventListener("mouseleave", () => {
       
         element.firstElementChild.style.display = 'flex'
         element.lastElementChild.style.display ='none'
    } )
})