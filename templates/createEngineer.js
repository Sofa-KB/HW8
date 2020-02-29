function createEngineer(data) {
    return `
    <div class="card col-xs-12 col-sm-12 col-md-5 col-lg-3">
        <div class='text-center'>
            <h1>${data.name}</h1>
            <h2>Engineer</h2>
        </div>
        <br>
        <ul>
            <li><strong>ID:</strong> ${data.id}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>GitHub:</strong> ${data.git}</li>
        </ul>
    </div>
    `
}

module.exports = createEngineer;

//final