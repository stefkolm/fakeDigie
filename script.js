document.addEventListener('DOMContentLoaded', () => {
    const jsonData = {
      "questions": [
        {
          "question": "När skapades WWW?",
          "options": ["Början av 90-talet ", "Slutet av 90-talet", "Slutet av 80-talet"]
        },
        {
          "question": "Vilket av följande var INTE ett problem med XHTML?",
          "options": ["JavaScript funkar inte", "Man kunde få Yellow screen of death", "Det var långsammare"]
        },
        {
            "question": "Vad kan du inte göra med Webben idag (än) i Sverige?",
            "options": ["Köpa böcker", "Läsa sin journal på nätet (journal: det läkare skrivit om dig)", "Rösta i val"]
        },
        {
            "question": "Vad är Git?",
            "options": ["Versionshanteringssystem ", "Krypteringssystem", "Säkerhetskopiering", "Webbhotellssystem"]
        },
        {
            "question": "Vad är Lighthouse?",
            "options": ["Automatiserat verktyg för att förbättra prestanda, kvalitet och korrekthet på webbplatser.", "En program där du skriver HTML och CSS", "En valideringstjänst", "En tjänst där du gör layouten på en webbplats innan du kodar den"]
        },
        {
            "question": "Vilken av dessa element är INTE semantisk?",
            "options": ["header", "article", "div", "section"]
        },
        {
            "question": "Vad är teckenkodning (charset)?",
            "options": ["ett sätt att koda tecken", "ett sätt att koda HTML", "ett sätt att koda bilder", "ett sätt att koda CSS"]
        },
      ]
    };

    function createQuestionItems(data) {
      const questionNav = document.querySelector('.question-nav');

      data.questions.forEach((questionItem, index) => {
        // Create the outer div with class "question-item"
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        // Create the left-blue div
        const leftBlueDiv = document.createElement('div');
        leftBlueDiv.classList.add('left-blue');

        // Create the item-info div
        const itemInfoDiv = document.createElement('div');
        itemInfoDiv.classList.add('item-info');

        // Create the h1 element for the question number
        const questionNumber = document.createElement('h1');
        questionNumber.textContent = (index + 1).toString();

        // Create the h2 element for the question text
        const questionText = document.createElement('h2');
        questionText.textContent = questionItem.question;

        // Append h1 and h2 to the item-info div
        itemInfoDiv.appendChild(questionNumber);
        itemInfoDiv.appendChild(questionText);

        // Append left-blue and item-info to the question-item div
        questionDiv.appendChild(leftBlueDiv);
        questionDiv.appendChild(itemInfoDiv);

        // Add click event to the question-item div
        questionDiv.addEventListener('click', () => updateQuestionDetails(index));

        // Append the question-item div to the question-nav div
        questionNav.appendChild(questionDiv);
      });
    }

    function updateQuestionDetails(index) {
      const questionDetails = document.querySelector('.question-details');
      const questionOptions = document.querySelector('.question-options');

      // Get the selected question
      const selectedQuestion = jsonData.questions[index];

      // Update the question details
      questionDetails.querySelector('h1').textContent = `Question ${index + 1}`;
      questionDetails.querySelector('h2').textContent = selectedQuestion.question;
      questionDetails.querySelector('h3').textContent = 'Max score: 1'; // Update as necessary

      // Clear existing options
      questionOptions.innerHTML = '';

      // Update the question options
      selectedQuestion.options.forEach(option => {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question-${index}`;
        input.value = option;

        const label = document.createElement('h1');
        label.textContent = option;

        inputContainer.appendChild(input);
        inputContainer.appendChild(label);

        questionOptions.appendChild(inputContainer);
      });
    }

    createQuestionItems(jsonData);
  });