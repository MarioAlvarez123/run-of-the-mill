

const homePage = document.getElementById("Home-Container");
const shopPage = document.getElementById("Shop-Page");
const contactPage = document.getElementById("Contact-Container");

function pageDisplay(display) {
    switch (display) {
        case "home":
            homePage.style.display = "block";
            shopPage.style.display = "none";
            contactPage.style.display = "none";
            break;
        case "shop":
            homePage.style.display = "none";
            shopPage.style.display = "block";
            contactPage.style.display = "none";
            break;
        case "contact":
            homePage.style.display = "none";
            shopPage.style.display = "none";
            contactPage.style.display = "grid";
            break;
        default:
            console.error("Invalid page display option");
            break;
    }
}