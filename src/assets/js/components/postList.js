const postList = (selector, url) => {
    let posts = [];

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then((response) => response.json())
    .then(data => {
        posts.push(...data);
        const html = data.map(post => {
            return `
                <div id="post_${post.id}" class="card col-12 col-sm-6 col-lg-4 mb-4">
                    <label class="card__label">
                        <input type="checkbox" class="card__checkbox">
                        <div class="card__body pl-5 pr-3 py-3  h-100">
                            <div class="card__icon">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="card__icon-svg">
                                    <path stroke="#fff" fill="none" stroke-width="2" d="M5 12.205L11 17l8-9.59" stroke-dasharray="21" stroke-dashoffset="21"/>
                                </svg>
                            </div>
                            <div class="card__title mb-3">${post.title}</div>
                            <div class="card__content">${post.body}</div>
                        </div>
                    </label>
                </div>`
        }).join(' ');
        document.getElementById(selector).insertAdjacentHTML('beforeend', html);
    });

    const btn = document.getElementById("btnSearch");
    btn.addEventListener("click", () => {
        const inputValue = document.getElementById("searchTitle").value;
        
        const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        const newUrl = baseUrl + `?search=${inputValue}`;
        history.pushState(null, null, newUrl);

        let filtered_posts = posts.filter(post => {
            let title = post.title.toLowerCase();
            return (title.includes(inputValue.toLowerCase()) || post.id == inputValue);
        });
        posts.forEach(function (post) {
            let post_html = document.getElementById(`post_${post.id}`);
            post_html.style.display = 'none';
        });
        filtered_posts.forEach(function (post) {
            let post_html = document.getElementById(`post_${post.id}`);
            post_html.style.display = 'block';
        });
    });

}

export default postList;