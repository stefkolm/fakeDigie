document.addEventListener('DOMContentLoaded', () => {
    let name = prompt('NAMN:');
    if (name === "ibbe") {
    name = "665643ef3b1da3624d3138e2";
    } else if (name === "aayan") {
    name = "665646182aff6a01d4cd59d3";
    }
    // Function to make a GET request and check the status property
    async function fetchDataAndCheckStatus() {
        try {
        const response = await fetch('https://v1.slashapi.com/mealone/mongodb/pq2IYLZ4Sg/hello/' + name);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const responseData = await response.json();
        const { data } = responseData;
        
        // Check if status is 'ready' and call the function if true
        if (data.status === 'ready') {
            console.log('Status is ready. Calling function...');
            myFunction(); // Call your function here
        } else {
            console.log('Status is not ready.');
        }
        } catch (error) {
        console.error('Error:', error);
        }
    }
    
    // Example function to call when status is 'ready'
    function myFunction() {
        const panel = document.getElementById("handed");
        panel.classList.remove('closed');
    }
    
    // Add click event listener to the button
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', fetchDataAndCheckStatus);
  
});
  