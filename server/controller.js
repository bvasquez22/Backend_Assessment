globalid = 1
let goals = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        console.log(randomCompliment)
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A lifetime friend shall soon be made.", "A pleasant surprise is waiting for you.", "All your hard work will soon pay off.", "Good news is on its way.", "You will enjoy good health."]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        console.log(randomFortune)
        res.status(200).send(randomFortune);
    },

    postGoal: (req, res) => {

        if (req.body.goal == "") {
            res.status(400).send("You forgot to input a goal!")
        } else {
            let newGoal = {id: globalid, goal: req.body.goal}
            goals.push(newGoal)
            globalid++
            res.status(200).send(goals);
        }
    },

    deleteGoal: (req, res) => {
        for (let i = 0; i < goals.length; i++) {
            if (goals[i].id == req.params.id) {
                goals.splice(i, 1)
                res.status(200).send(goals)
            }
        }
    }

}