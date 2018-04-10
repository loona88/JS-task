let min = 6,
    max = 9;
let bool = false;

function size() {
  let wid = Math.floor(Math.random() * (max - min+1) ) + min;
  let line1 = document.getElementById('line1');
  line1.value = wid;
  line1.style.width = (wid * 29) + 'px';
}

function myFunc1(val) {
  let div1 = document.getElementById("div1");
  let line1 = document.getElementById('line1');

  if(line1.value == val) {
    div1.innerHTML = line1.value;
    div1.setAttribute('class', 'true');

    let line2 = document.getElementById('line2');
    line2.setAttribute('class', 'line');
    document.getElementById('inp2').style.display = 'inline';
    let div3 = document.getElementById('div3');
    div3.innerHTML = `${val} + `;

    let wid2;
    if(val == 6) {
      wid2 = Math.floor(Math.random() * (8 - 6) ) + 5;
      line2.style.width = (wid2 * 29) + 'px';
      line2.value = wid2
    } else if(val == 7) {
      wid2 = Math.floor(Math.random() * (7 - 5) ) + 4;
      line2.style.width = (wid2 * 29) + 'px';
      line2.value = wid2
    } else if(val == 8) {
      wid2 = Math.floor(Math.random() * (6 - 4) ) + 3;
      line2.style.width = (wid2 * 29) + 'px';
      line2.value = wid2
    } else {
      wid2 = Math.floor(Math.random() * (5 - 3) ) + 2;
      line2.style.width = (wid2 * 29) + 'px';
      line2.value = wid2
    }
    
  } else if(line1.value !== val) {
      document.getElementById('inp1').style.color = 'red'
  } 
}
function myFunc2(val) {
  let line1 = document.getElementById('line1');

  let div2 = document.getElementById("div2");
  let line2 = document.getElementById('line2');

  if(line2.value == val) {
    div2.innerHTML = line2.value;
    div2.setAttribute('class', 'true');

    let div3 = document.getElementById('div3');
    div3.innerHTML = `${line1.value} + ${line2.value} = `;
    let inp3 = document.createElement('input');
    div3.appendChild(inp3);
    inp3.setAttribute('id', 'inp3')
    inp3.setAttribute('onchange', 'myFunc3(value)')

  } else if(line2.value !== val) {
    document.getElementById('inp2').style.color = 'red'
  } 
}
function myFunc3(val) {
  let line1 = document.getElementById('line1');
  let line2 = document.getElementById('line2');

  if((line1.value + line2.value) == val) {
    div3.innerHTML = `${line1.value} + ${line2.value} = ${val}`;
    div3.setAttribute('class', 'true');
  } else {
    document.getElementById('inp3').style.color = 'red'
  }
}