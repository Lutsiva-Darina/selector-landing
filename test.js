calc.onclick = function() {
    var myform = this.form;
    sum = 0;
    if (myform.q1.value == "good") sum++;
    if (myform.q2.value == "good") sum++;
    if (myform.q3.value == "good") sum++;
    if (myform.q4.value == "good") sum++;
    if (myform.q5.value == "good") sum++;
    if (myform.q6.value == "good") sum++;
    if (myform.q7.value == "good") sum++;
    myform.result.value = sum;
};