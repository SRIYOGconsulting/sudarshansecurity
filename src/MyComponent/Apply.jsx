import React, { useState } from "react";

export default function Apply() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    nationality: "",
    nationalId: "",
    address: "",
    city: "",
    phone: "",
    altPhone: "",
    email: "",
    experience: "",
    securityTraining: "",
    trainingInstitute: "",
    skills: "",
    firstAid: "",
    firearm: "",
    shift: "",
    overtime: "",
    weekends: "",
    medical: "",
    criminalRecord: "",
    referenceName: "",
    referenceContact: "",
    referenceRelation: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert("You must accept the declaration");
      return;
    }
    console.log("Submitted:", formData);
    alert("Application submitted successfully!");
  };

  // UPDATED: Improved input styling with better text visibility
  const inputClass =
    "w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium";

  const labelClass = "block text-sm font-semibold text-gray-700 mb-2 ml-1";

  const sectionHeaderClass = "text-lg font-bold text-red-800 mb-4 pb-2 border-b-2 border-red-100";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 py-10 px-4 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Security Professional Application
          </h1>
          <p className="text-gray-600 text-lg">
            Join our elite security team. Fill out the form below to apply.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-red-700 to-red-900 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Application Form</h2>
                <p className="text-red-200 mt-1">All fields marked with * are required</p>
              </div>
             
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* Personal Information Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className={sectionHeaderClass}>Personal Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative">
                  <label className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      className={inputClass}
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                    <div className="absolute right-3 top-3.5 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className={inputClass + " text-gray-800"}
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select 
                    className={inputClass + " cursor-pointer text-gray-800"} 
                    name="gender" 
                    value={formData.gender}
                    onChange={handleChange} 
                    required
                  >
                    <option value="" disabled className="text-gray-400">Select Gender</option>
                    <option className="text-gray-800">Male</option>
                    <option className="text-gray-800">Female</option>
                    <option className="text-gray-800">Other</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass}
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder="e.g., American"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    National ID / Passport <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass}
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleChange}
                    placeholder="ID Number"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    City / Town <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass}
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g., New York"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className={sectionHeaderClass}>Contact Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Alternative Phone</label>
                  <input
                    className={inputClass}
                    name="altPhone"
                    value={formData.altPhone}
                    onChange={handleChange}
                    placeholder="Optional"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className={inputClass}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={sectionHeaderClass}>Professional Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Years of Experience <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input
                      className={inputClass}
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      type="number"
                      placeholder="e.g., 5"
                    />
                    <div className="absolute right-3 top-3.5 text-gray-400">years</div>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Security Training <span className="text-red-500">*</span></label>
                  <select 
                    className={inputClass + " cursor-pointer text-gray-800"} 
                    name="securityTraining" 
                    value={formData.securityTraining}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="text-gray-400">Select Option</option>
                    <option className="text-gray-800">Yes</option>
                    <option className="text-gray-800">No</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Training Institution<span className="text-red-500">*</span></label>
                  <input
                    className={inputClass}
                    name="trainingInstitute"
                    value={formData.trainingInstitute}
                    onChange={handleChange}
                    placeholder="Institution name"
                  />
                </div>

                <div>
                  <label className={labelClass}>First Aid Training<span className="text-red-500">*</span></label>
                  <select 
                    className={inputClass + " cursor-pointer text-gray-800"} 
                    name="firstAid" 
                    value={formData.firstAid}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="text-gray-400">Select Option</option>
                    <option className="text-gray-800">Yes</option>
                    <option className="text-gray-800">No</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Firearm Training<span className="text-red-500">*</span></label>
                  <select 
                    className={inputClass + " cursor-pointer text-gray-800"} 
                    name="firearm" 
                    value={formData.firearm}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="text-gray-400">Select Option</option>
                    <option className="text-gray-800">Yes</option>
                    <option className="text-gray-800">No</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Preferred Shift<span className="text-red-500">*</span></label>
                  <select 
                    className={inputClass + " cursor-pointer text-gray-800"} 
                    name="shift" 
                    value={formData.shift}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="text-gray-400">Select Shift</option>
                    <option className="text-gray-800">Day</option>
                    <option className="text-gray-800">Night</option>
                    <option className="text-gray-800">Both</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass}>Special Skills</label>
                  <textarea
                    className={inputClass + " min-h-[120px]"}
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="List any special skills, certifications, or qualifications..."
                  />
                </div>
              </div>
            </div>

            {/* Availability & Conditions Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={sectionHeaderClass}>Availability & Conditions</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>Willing to Work Overtime?</label>
                  <select 
                    className={inputClass + " cursor-pointer text-gray-800"} 
                    name="overtime" 
                    value={formData.overtime}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="text-gray-400">Select Option</option>
                    <option className="text-gray-800">Yes</option>
                    <option className="text-gray-800">No</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Work Weekends / Holidays?</label>
                  <select 
                    className={inputClass + " cursor-pointer text-gray-800"} 
                    name="weekends" 
                    value={formData.weekends}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="text-gray-400">Select Option</option>
                    <option className="text-gray-800">Yes</option>
                    <option className="text-gray-800">No</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Medical Conditions<span className="text-red-500">*</span></label>
                  <input
                    className={inputClass}
                    name="medical"
                    value={formData.medical}
                    onChange={handleChange}
                    placeholder="If any, specify"
                  />
                </div>

                <div>
                  <label className={labelClass}>Criminal Record<span className="text-red-500">*</span></label>
                  <select 
                    className={inputClass + " cursor-pointer text-gray-800"} 
                    name="criminalRecord" 
                    value={formData.criminalRecord}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="text-gray-400">Select Option</option>
                    <option className="text-gray-800">Yes</option>
                    <option className="text-gray-800">No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Reference Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className={sectionHeaderClass}>Reference Contact</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>Reference Name</label>
                  <input
                    className={inputClass}
                    name="referenceName"
                    value={formData.referenceName}
                    onChange={handleChange}
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className={labelClass}>Reference Contact</label>
                  <input
                    className={inputClass}
                    name="referenceContact"
                    value={formData.referenceContact}
                    onChange={handleChange}
                    placeholder="Phone number"
                  />
                </div>

                <div>
                  <label className={labelClass}>Relationship</label>
                  <input
                    className={inputClass}
                    name="referenceRelation"
                    value={formData.referenceRelation}
                    onChange={handleChange}
                    placeholder="e.g., Former Employer"
                  />
                </div>
              </div>
            </div>

            {/* Declaration Section */}
            <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-indigo-50 rounded-2xl border border-red-100">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <input
                    type="checkbox"
                    id="declaration"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleChange}
                    className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
                  />
                </div>
                <label htmlFor="declaration" className="ml-3 block">
                  <span className="text-gray-900 font-semibold text-lg">
                    Declaration & Agreement
                  </span>
                  <p className="text-gray-600 mt-2">
                    I hereby declare that all information provided in this application is true, 
                    complete, and accurate to the best of my knowledge. I understand that any 
                    misrepresentation or omission may result in rejection of my application or 
                    termination of employment if discovered at a later date.
                  </p>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-900 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center justify-center mx-auto"
              >
                <span>Submit Application</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                By submitting, you agree to our terms and conditions
              </p>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Your application will be reviewed within 3-5 business days</p>
          <p className="mt-1">For inquiries, contact: hr@securitycompany.com</p>
        </div>
      </div>
    </div>
  );
}