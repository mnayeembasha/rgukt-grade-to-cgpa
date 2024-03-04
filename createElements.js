// Function to create select boxes
function createSelectBoxes() {
    // Get semester data
    const semesterData = getSemesterData();
    // Select the form container
    const formContainer = document.querySelector(".container");

    // Loop through subjects and credits
    for (let i = 0; i < semesterData.subjects.length; i++) {
      const subject = semesterData.subjects[i];
      const credit = semesterData.credits[i];

      // Create select box element
      const selectBox = document.createElement("div");
      selectBox.classList.add("select-box");

      // Create label element
      const label = document.createElement("label");
      label.setAttribute("for", subject);
      label.textContent = subject.toUpperCase();

      // Create select element
      const select = document.createElement("select");
      select.name = subject;
      select.id = subject;
      select.classList.add("form-select");

      // Create default option
      const defaultOption = document.createElement("option");
      defaultOption.value = "syg";
      defaultOption.selected = true;
      defaultOption.disabled = true;
      defaultOption.classList.add("selected");
      defaultOption.textContent = "\u00A0\u00A0Select your Grade";

      // Append default option to select
      select.appendChild(defaultOption);

      // Create options based on fixed set
      const gradeOptions = ["Ex", "A", "B", "C", "D", "E", "R"];
      for (let j = 0; j < gradeOptions.length; j++) {
        const optionValue = gradeOptions[j];
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        select.appendChild(option);
      }
      // Append label and select to select box
     selectBox.appendChild(label);
     selectBox.appendChild(select);

     // Append select box to form container
     formContainer.appendChild(selectBox);
    }

     //create calculate button and resultant paragraph
     const buttonBox = document.createElement("div");
     buttonBox.classList.add("flex-center");
     const calculateBtn = document.createElement("button");
     calculateBtn.type = "button";
     calculateBtn.id = "btn";
     calculateBtn.classList.add("btn");
     calculateBtn.textContent = "Calculate CGPA";
     buttonBox.appendChild(calculateBtn);

     // Create result paragraph

     const resultParaBox = document.createElement("div");
     resultParaBox.classList.add("flex-center");
     const resultPara = document.createElement("p");
     resultPara.style.fontWeight = "550";
     resultPara.id = "para";
     resultPara.style.visibility = "hidden";
     resultPara.textContent = " Your CGPA is : ";
     // Create span for CGPA value
     const cgpaSpan = document.createElement("span");
     cgpaSpan.style.fontSize = "2rem";
     cgpaSpan.id = "cgpa";
     cgpaSpan.textContent = "0";
     resultPara.appendChild(cgpaSpan);
     resultParaBox.appendChild(resultPara);


     formContainer.appendChild(buttonBox);
     formContainer.appendChild(resultParaBox);
  }

  // Call the function to create select boxes
  createSelectBoxes();