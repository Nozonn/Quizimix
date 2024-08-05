allLessons.forEach(lesson => {
    if (lesson != lessonChosen) {
        if ( lesson.classList.item(1)) {
            lesson.classList.remove("selectedLesson");
        }
    }
})
lessonChosen.classList.add("selectedLesson")


for (let i=0; i<allLessons.length-1; i++) {
    if (allLessons[i] == lessonChosen) {
        next.setAttribute("href", "/cours/"+allLessons[i+1].id)
    }
}

for (let i=allLessons.length-1; i>0; i--) {
    if (allLessons[i] == lessonChosen) {
        previous.setAttribute("href", "/cours/"+allLessons[i-1].id)
    }
}