import postList from "./components/postList.js";
import themeSwitch from "./components/themeSwitch.js";

document.addEventListener('DOMContentLoaded', function () {
    postList('posts','https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7');
    
    themeSwitch()
});