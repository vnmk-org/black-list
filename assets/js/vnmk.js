var table = document.querySelector("#blacklist");
if (table) {
    let html = "";

    for (let person of blackList) {
        html += `<div class="card m-5" style="width: 20rem;">
        <a href="https://www.facebook.com/profile.php?id=${person.fbid}">
            <img src="https://graph.facebook.com/${person.fbid}/picture?width=500" class="card-img-top">
        </a>
        <div class="card-body">
          <h5 class="card-title">${person.name}</h5>`;
        if (person.phone)
            html += `<p class="card-text" > <i class="fas fa-phone"></i>  ${person.phone}</p >`;
        if (person.address)
            html += `<p class="card-text"><i class="fas fa-home"></i>  ${person.address}</p>`;
        if (person.bank) {
            for (let b of person.bank) {
                html += `<p class="card-text"><i class="far fa-credit-card"></i>  ${b}</p > `;
            }
        }
        html += `<p class="card-text text-primary">${person.description}</p >`;
        if (person.clone) {
            html += '<p class="card-text">';
            for (let c of person.clone) {
                html += `<a href='${c}' title="Clone"><i class="fas fa-user-secret fa-2x"></i></a> `;
            }
            html += '</p>';
        }

        if (person.tags) {
            html += '<p class="card-text text-muted">';
            for (let t of person.tags) {
                html += `${t}; `;
            }
            html += '</p>';
        }

        if (person.post)
            html += `<a href="${person.post}" class="btn btn-primary">Bài viết gốc</a>`;

        if (person.posts) {
            html += '<p class="card-text">';
            for (let p of person.posts) {
                html += `<a href='${p}' title="Bài bóc phốt"><i class="fas fa-link fa-2x"></i></a> `;
            }
            html += '</p>'
        }

        html += `</div></div> `;
    }

    table.innerHTML = html;
}