

let projects = document.querySelectorAll('.project_container div');

// project 1  information
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

// project 2 information

let bimPlatformContent = document.createElement("div");
bimPlatformContent.id = 'project_content';
const bimPlatformHeader = document.createElement("h3");
const bimPlatformPara = document.createElement("p");
bimPlatformPara.id = 'bim_content';
bimPlatformHeader.textContent = "Isha BIM Platform";
bimPlatformPara.textContent = "Research, design and development of multi-functional Platform for stakeholders in construction to better manage their project in a single interface."

const bimPlatformIconContainer = document.createElement("div");
bimPlatformIconContainer.id = 'icon_container';
bimPlatformIconContainer.innerHTML = '<img src="./Images/Html5_css3_styling.png"alt="Css logo"> <img src="./Images/img_255274.png"a lt="Html 5 logo"> <img class="react_icon"id="react_icon"src="./Images/React-icon.png"alt="">';
bimPlatformContent.appendChild(bimPlatformHeader);
bimPlatformContent.appendChild(bimPlatformPara);
bimPlatformContent.appendChild(bimPlatformIconContainer);

// project 3 inofrmation
let eCommerce = document.createElement("div");
eCommerce.id = 'project_content';
const eCommerceHeader = document.createElement("h3");
const eCommercePara = document.createElement("p");
eCommerce.textContent = "E-Commerce Platform";
eCommerce.textContent = "In-progress";

const eCommerceIconContainer = document.createElement("div");
eCommerceIconContainer.id = 'icon_container';
eCommerceIconContainer.innerHTML = '<img src="./Images/Html5_css3_styling.png"alt="Css logo"> <img src="./Images/img_255274.png"a lt="Html 5 logo"> <img class="react_icon"id="react_icon"src="./Images/React-icon.png"alt="">';
eCommerce.appendChild(eCommerceHeader);
eCommerce.appendChild(eCommercePara);
eCommerce.appendChild(eCommerceIconContainer);

// project 4 inofrmation
let reddit = document.createElement("div");
reddit.id = 'project_content';
const redditHeader = document.createElement("h3");
const redditPara = document.createElement("p");
reddit.textContent = "Reddit Client";
reddit.textContent = "In-progress";

const redditIconContainer = document.createElement("div");
redditIconContainer.id = 'icon_container';
redditIconContainer.innerHTML = '<img src="./Images/Html5_css3_styling.png"alt="Css logo"> <img src="./Images/img_255274.png"a lt="Html 5 logo"> <img class="react_icon"id="react_icon"src="./Images/React-icon.png"alt="">';
reddit.appendChild(redditHeader);
reddit.appendChild(redditPara);
reddit.appendChild(redditIconContainer);

// Object.assign(obj.style, styles)

projects.forEach(element => {
    element.addEventListener("mouseover", ()=> {
        //  console.log(element.id)
        if(element.id === 'project_companywebsite'){
            element.firstElementChild.style.display = 'none';
            element.append(companyWebsiteContent);
            element.lastElementChild.style.display ='flex'

            
        }
        else if (element.id ==='project_bim_platform'){
            
            element.firstElementChild.style.display = 'none';
            element.append(bimPlatformContent);
            element.lastElementChild.style.display ='flex'
        }
        else if (element.id ==='project_e_commerce_platform'){
            element.firstElementChild.style.display = 'none';
            element.append(eCommerce);
            element.lastElementChild.style.display ='flex'

        }
        else if (element.id ==='project_reddit'){
            element.firstElementChild.style.display = 'none';
            element.append(reddit);
            element.lastElementChild.style.display ='flex'

        }
        
        
        })
    element.addEventListener("mouseleave", () => {
         element.firstElementChild.style.display = 'inherit'
         element.lastElementChild.style.display ='none'
    } )
})