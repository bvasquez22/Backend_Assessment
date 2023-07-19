const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const goalBtn = document.getElementById("goalButton")
const goalList = document.querySelector('ul')

let goal = {
    goal: "Buy a car"
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const postGoal = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/goal", {goal: 'Buy a car'})
        .then(res => {
            const newGoal = document.createElement("li");
            newGoal.textContent = res.data.newGoal;
            goalList.appendChild(newGoal);
            alert(`New goal added: "${res.data.newGoal}"`)
        })
        .catch((err) => {
            console.log(err)
        });
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalBtn.addEventListener('click', postGoal)