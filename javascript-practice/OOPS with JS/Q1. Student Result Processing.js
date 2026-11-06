class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    }

    getGrade() {
        let avg = this.calculateAverage();

        if (avg >= 80) return "A";
        else if (avg >= 60) return "B";
        else if (avg >= 40) return "C";
        else return "F";
    }
}

let s1 = new Student("Rahul", [85, 90, 80]);
let s2 = new Student("Aman", [65, 70, 60]);
let s3 = new Student("Ravi", [30, 35, 25]);

[s1, s2, s3].forEach(s => {
    console.log(s.name, s.calculateAverage(), s.getGrade());
});