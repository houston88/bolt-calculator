
// just using basic JavaScript form handling
calcForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // const bolt_weight = document.getElementById("bolt");
  // using drop down now for bolt weight
  const bolt_weight = document.getElementById("bolt_select");
  const yard_weight = document.getElementById("yard");
  const weight_pounds = document.getElementById("weight_pounds");
  const weight_oz = document.getElementById("weight_oz");


  // convert to number (should use float?)
  const bolt_weight_num = Number(bolt_weight.value);
  const yard_weight_num = Number(yard_weight.value);
  const weight_pounds_num = Number(weight_pounds.value);
  const weight_oz_num = Number(weight_oz.value);

  try {
    const total_weight_num = (weight_pounds_num * 16) + weight_oz_num;
    const calc = (total_weight_num - bolt_weight_num) / yard_weight_num;
    const calc_format = calc.toFixed(4)
    document.getElementById("calc").value = calc_format;
  } catch (err) {
    console.error(err);
  }
});

/*
// update bolt weight if dropdown changes
const boltSelectElement = document.querySelector("#bolt_select");
boltSelectElement.addEventListener("change", (event) => {
  // update bolt input
  document.querySelector("#bolt").value = event.target.value;
});
*/