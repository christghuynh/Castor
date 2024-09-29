const maxHeight = 250;


        function changeValue(delta) {
            const input = document.getElementById('hoursSpinner');
            let currentValue = parseInt(input.value) || 0;
            input.value = Math.max(0, currentValue + delta);
        }


        function addAssignment() {
            const input = document.getElementById('assignmentInput');
            const assignmentName = input.value.trim();
            if (assignmentName) {
                const checkboxesDiv = document.getElementById('checkboxesContent');
                const newCheckbox = document.createElement('div');
                newCheckbox.innerHTML = `
                    <input type="checkbox" onchange="removeAssignment(this)" id="${assignmentName}" />
                    <label for="${assignmentName}">${assignmentName}</label>
                    <hr style="border: 1px solid #e4d6b0; margin: 1;"/>`;


                checkboxesDiv.appendChild(newCheckbox);
                input.value = '';


                if (checkboxesDiv.offsetHeight > maxHeight) {
                    document.getElementById('checkboxes2').style.display = 'block';
                    const checkboxesDiv2 = document.getElementById('checkboxesContent2');
                    checkboxesDiv2.appendChild(newCheckbox);
                    checkboxesDiv.removeChild(newCheckbox);
                }
            }
        }


        function removeAssignment(checkbox) {
            const assignmentDiv = checkbox.parentElement;
            if (checkbox.checked) {
                assignmentDiv.remove();


                const checkboxesDiv2 = document.getElementById('checkboxesContent2');
                if (checkboxesDiv2.children.length > 0) {
                    const firstAssignment = checkboxesDiv2.firstElementChild;
                    const checkboxesDiv = document.getElementById('checkboxesContent');
                    checkboxesDiv.appendChild(firstAssignment);
                }
            }
        }