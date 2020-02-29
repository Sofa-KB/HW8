function createIntern(data) {
    return `
    <div class="card col-xs-12 col-sm-12 col-md-5 col-lg-3">
        <div>
            <h1>${data.name}</h1>
            <h2>Intern</h2>
        </div>
        <ul>
            <li>ID: ${data.id}</li>
            <li>Email: ${data.email}</li>
            <li>School: ${data.school}</li>
        </ul>
    </div>
    `
}

module.exports = createIntern