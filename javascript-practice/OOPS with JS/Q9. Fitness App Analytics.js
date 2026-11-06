let data = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (data.length === 0)
            throw new Error("Dataset is empty");

        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(u => u.steps > 7000);
    }

    getAverageCalories() {
        return this.data.reduce((sum, u) => sum + u.calories, 0) / this.data.length;
    }

    getUserSummary() {
        return this.data.map(u =>
            `${u.user} burned ${u.calories} calories`
        );
    }
}

try {
    let app = new FitnessAnalytics(data);

    console.log("Active Users:", app.getActiveUsers());
    console.log("Average Calories:", app.getAverageCalories());
    console.log("Summary:", app.getUserSummary());

} catch (error) {
    console.log("Error:", error.message);
}