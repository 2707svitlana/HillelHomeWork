
function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let rnd = Math.random() * 901;  
        rnd = Math.round(rnd) + 100;   
        if (rnd % 2 === 0) {           
            evenCount++;
        } else {                        
            oddCount++;
        }
    }

    
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

  
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + evenCount);
    console.log("Непарних чисел: " + oddCount);
    console.log("Відсоткове співвідношення парних і непарних: " + evenPercentage.toFixed(0) + "%" + oddPercentage.toFixed(0) + "%");
}

checkProbabilityTheory(10);