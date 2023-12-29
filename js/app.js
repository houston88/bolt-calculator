
// just using basic JavaScript form handling
calcForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const bolt_weight = document.getElementById("bolt");
  const yard_weight = document.getElementById("yard");
  const total_weight = document.getElementById("weight");

  // convert to number (should use float?)
  const bolt_weight_num = Number(bolt_weight.value);
  const yard_weight_num = Number(yard_weight.value);
  const total_weight_num = Number(total_weight.value);

  try {
    const calc = (total_weight_num - bolt_weight_num) / total_weight_num;
    const calc_format = calc.toFixed(4)
    document.getElementById("calc").value = calc_format;
  } catch (err) {
    console.error(err);
  }
});
