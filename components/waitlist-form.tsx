import React from "react";
import { IoExitOutline } from "react-icons/io5";

const FORM_URL = "https://script.google.com/macros/s/AKfycbznSdbmBE7D4pbKiqrEhq9IjAukiAFh2cN55pMdcxnU77qinumzDCPURWmZTvPm-lhY/exec";

function SubmitForm(e: React.FormEvent<HTMLFormElement>) {
  const formEle = document.querySelector("form");
  e.preventDefault();
  const formData = new FormData(formEle as HTMLFormElement);

  // Check that all fields are filled out
  for (let [key, value] of formData.entries()) {
    if (!value) {
      alert(`${key} is required`);
      return;
    }
  }

  // Validate email
  const email = formData.get("Email") as string;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  fetch(FORM_URL, {
    method: "POST",
    body: formData
  }).then(response => {
    if (response.ok) {
      alert("Form submitted successfully!");
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  }).catch(error => {
    alert("There was an error submitting the form. Please try again.");
  });
}

const WaitlistForm = () => {
  return (
    <div className="text-left bg-background border-2 border-transparent-white p-8 w-[60%] h-[60%] rounded-3xl overflow-y-auto mx-auto mt-10">
      <div className="flex justify-between"> 
        <h2 className="space-grotesk-font text-[3.5rem] mb-2">Request Access</h2>
      </div>
      <p className="space-grotesk-font-200 text-md text-grey mb-8">We will be sending out batch invites on a weekly basis.</p>
      <div className="border border-transparent-white py-9 px-5 rounded-lg text-left"> 
        <form className="form flex flex-col" onSubmit={SubmitForm}>
          <div className="mb-1 text-grey text-sm">First Name</div>
          <input className="outline-none rounded-lg h-[5rem] mb-5 bg-background border border-transparent-white p-3 text-sm" name="FirstName" type="text" required />
          <div className="mb-1 text-grey text-sm">Last Name</div>
          <input className="outline-none rounded-lg h-[5rem] mb-5 bg-background border border-transparent-white p-3 text-sm" name="LastName" type="text" required />
          <div className="mb-1 text-grey text-sm">Email</div>
          <input className="outline-none rounded-lg h-[5rem] mb-5 bg-background border border-transparent-white p-3 text-sm" name="Email" type="email" required />
          <div className="mb-1 text-grey text-sm">Company</div>
          <input className="outline-none rounded-lg h-[5rem] mb-5 bg-background border border-transparent-white p-3 text-sm" name="Company" type="text" required />
          <div className="mb-1 text-grey text-sm">Describe the dataset you need labeled. (Ex. the approx. # of images/videos in your dataset, the class names you would like labeled, project deadlines). </div>
          <textarea className="text-left align-top outline-none rounded-lg h-[8rem] mb-8 bg-background border border-transparent-white p-3 text-sm" name="UseCase" required />
          <input className="h-[4.8rem] w-[30%] border border-transparent-white bg-white bg-opacity-[5%] rounded-lg button text-sm hover:bg-opacity-[15%]" type="submit" value="Request Access"/>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;