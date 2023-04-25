import './style.css'

const COLOR_PALETTE = {
  "#B95F89": "Mulberry",
  "#20A39E": "Light Sea Green",
  "#5C95FF": "Cornflower Blue",
  "#FFFFEA": "Ivory",
  "#26532B": "Cal Poly Green",
  "#3F4739": "Black Olive",
  "#FFB5C2": "Cherry Blossom Funk",
  "#EC0B43": "Red (Munsell)",
  "#F9B9F2": "Plum (web)",
  "#32936F": "Sea Green",
  "#EF6461": "Bittersweet",
  "#D496A7": "Puce",


};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  })
}


const addEventListenerToColorPIcker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
       const colorName = document.querySelector("#color-name");
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`
     colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";

  });
};

addOptionsToColorPicker()
addEventListenerToColorPIcker();




