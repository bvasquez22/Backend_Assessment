const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const goalForm = document.getElementById("goalForm")
let goalData = document.getElementById("goal")
let goalList = document.querySelector('ul')

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
    axios.post("http://localhost:4000/api/goals", goal)
        .then(res => {
            goalList.textContent = ""
            for (let i = 0; i < res.data.length; i++) {
                const newGoal = document.createElement("li");
                newGoal.textContent = res.data[i].goal;
                const deleteBtn = document.createElement('button')
                deleteBtn.textContent = "x"
                deleteBtn.addEventListener('click', () => deleteGoal(res.data[i].id))
                newGoal.appendChild(deleteBtn)
                goalList.appendChild(newGoal);
            }
            alert(`New goal added!`)
        })
        .catch((err) => {
            alert(err.response.data)
        });
    goalData.value = ""
}

const deleteGoal = (id) => {
    console.log(id, "Delete button clicked")
    axios.delete(`http://localhost:4000/api/goals/${id}`)
    .then(res => {
        goalList.textContent = ""
        for (let i = 0; i < res.data.length; i++) {
            const newGoal = document.createElement("li");
            newGoal.textContent = res.data[i].goal;
            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = "x"
            deleteBtn.addEventListener('click', () => deleteGoal(res.data[i].id))
            newGoal.appendChild(deleteBtn)
            goalList.appendChild(newGoal);
        }
        alert(`Goal deleted!`)
    })
    .catch((err) => {
        alert(err.response.data)
    });
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalForm.addEventListener('submit', postGoal)