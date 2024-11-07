let notesVisible = false; // Track if notes are currently visible

function toggleNotes() {
  const notesChart = document.getElementById('notes-chart');
  const notesSections = document.querySelectorAll('.notes-section');
  notesVisible = !notesVisible; // Toggle visibility

  // Show or hide notes sections
  if (notesVisible) {
    notesChart.style.opacity = '1'; // Make chart visible
    // Reveal each section with a delay
    notesSections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = '1'; // Make section visible
        section.style.transform = 'translateY(0)'; // Move to final position
      }, (index + 1) * 400); // Staggered reveal
    });
  } else {
    // Hide all sections
    notesSections.forEach(section => {
      section.style.opacity = '0'; // Fade out section
      section.style.transform = 'translateY(20px)'; // Move out of view
    });
    notesChart.style.opacity = '0'; // Hide chart
  }
}

function toggleContent(contentId, headerElement) {
  const content = document.getElementById(contentId);
  const isActive = content.classList.contains('active');

  // Hide all contents
  document.querySelectorAll('.notes-content').forEach(note => {
    note.classList.remove('active');
    note.style.opacity = '0'; // Hide notes
    note.style.maxHeight = '0'; // Collapse notes
  });

  // Show or hide the clicked content
  if (!isActive) {
    content.classList.add('active');
    content.style.maxHeight = '500px'; // Expand content
    content.style.opacity = '1'; // Fade in content
  }
}


