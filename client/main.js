const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const goalForm = document.getElementById("goalForm")
let goalData = document.getElementById("goal")
const goalList = document.querySelector('ul')

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
    let goal = {
        goal: goalData.value
    }
    axios.post("http://localhost:4000/api/goal", goal)
        .then(res => {
            const newGoal = document.createElement("li");
            newGoal.textContent = res.data.newGoal;
            goalList.appendChild(newGoal);
            alert(`New goal added: "${res.data.newGoal}"`)
        })
        .catch((err) => {
            console.log(err)
        });
    goalData.value = ""
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalForm.addEventListener('submit', postGoal)