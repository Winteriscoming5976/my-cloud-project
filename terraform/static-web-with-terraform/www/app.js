let votes = {
    aws: 0,
    terraform: 0,
    rust: 0
};

function vote(tech) {
    votes[tech]++;

    updateUI();
}

function updateUI() {
    document.getElementById("aws-count").innerText =
        `AWS ☁️ : ${votes.aws}`;

    document.getElementById("terraform-count").innerText =
        `Terraform 🏗️ : ${votes.terraform}`;

    document.getElementById("rust-count").innerText =
        `Rust 🦀 : ${votes.rust}`;
}

function resetVotes() {
    votes.aws = 0;
    votes.terraform = 0;
    votes.rust = 0;

    updateUI();
}