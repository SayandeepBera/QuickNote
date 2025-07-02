import React from 'react'

const About = () => {

  return (
    <div style={{marginTop : "150px"}}>
      <h1 className="text-center mb-2" style={{fontFamily : "fangsome"}}>QuickNote</h1>
      <div style={{padding : "20px", borderRadius : "15px", background : "#e7e5e5"}}>
        <p>
          This Notebook Application is a fully functional, user-friendly note management system developed using React.
          It allows users to securely create an account, log in, and manage their personal notes in an organized manner.
          Once authenticated, users can:
        </p>

        <ul>
          <li><strong>Add Notes:</strong> Create new notes with a title and description to store important information, reminders, or ideas.</li>
          <li><strong>Edit Notes:</strong> Modify any existing note with updated content whenever needed.</li>
          <li><strong>Delete Notes:</strong> Remove notes that are no longer relevant or needed.</li>
        </ul>

        <p>
          The application uses local storage or backend authentication (depending on your setup) to ensure that each user’s notes
          are private and accessible only after login. This adds an extra layer of security and personalization.
        </p>

        <p>
          Designed with a clean and modern UI, the application is also responsive, ensuring it works smoothly across desktop, tablet,
          and mobile devices. It’s an ideal tool for students, professionals, or anyone who wants to quickly jot down and manage notes digitally.
        </p>
      </div>


      {/* Accordion items */}
      <div className="accordion mt-5 mb-5" id="accordionExample">
        <h2 className="mb-3" style={{fontFamily : "fangsome"}}>QuickNote – Frequently Asked Questions</h2>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong style={{fontFamily : "serif", fontSize : "18px"}}>1. What is QuickNote?</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>QuickNote</strong> is a simple and secure web application that allows users to create, update, and manage their personal notes after logging in.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong style={{fontFamily : "serif", fontSize : "18px"}}>2. Do I need to sign up to use QuickNote?</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Yes, users must sign up or log in to access the note-taking features to ensure data privacy and personalized access.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong style={{fontFamily : "serif", fontSize : "18px"}}>3. Can I edit or delete a note after creating it?</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Absolutely! You can update any note at any time or delete it if it's no longer needed.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <strong style={{fontFamily : "serif", fontSize : "18px"}}>4. Are my notes stored securely?</strong>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Yes. Your data is securely handled, and each user's notes are private and accessible only after authentication.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <strong style={{fontFamily : "serif", fontSize : "18px"}}>5. Is QuickNote mobile-friendly?</strong>
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Yes, <strong>QuickNote</strong> is designed to be responsive and works well on all devices including desktops, tablets, and smartphones.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About