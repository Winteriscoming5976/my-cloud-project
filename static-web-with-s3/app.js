let votes = {
    js: 0,
    python: 0,
    rust: 0
};

function vote(language) {
    votes[language]++;

    updateUI();
}

function updateUI() {
    document.getElementById("js-count").innerText =
        `JavaScript: ${votes.js}`;

    document.getElementById("python-count").innerText =
        `Python: ${votes.python}`;

    document.getElementById("rust-count").innerText =
        `Rust: ${votes.rust}`;
}

function resetVotes() {
    votes.js = 0;
    votes.python = 0;
    votes.rust = 0;

    updateUI();
}