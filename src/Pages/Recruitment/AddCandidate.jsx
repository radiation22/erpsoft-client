import React, { useState } from "react";

const HiringForm = () => {
  const [formData, setFormData] = useState({
    personal: {
      firstName: "",
      lastName: "",
      fatherName: "",
      motherName: "",
      birthdate: "",
      nidNumber: "",
      address: "",
      email: "",
      phone: "",
    },
    education: {
      degree: "",
      school: "",
      graduationYear: "",
    },
    experience: {
      companyName: "",
      position: "",
      yearsOfExperience: "",
    },
    photo: null,
  });

  const handleInputChange = (section, field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [field]: value,
      },
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      photo: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to submit the form data
    console.log("Form Data:", formData);
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add Candidate</h2>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.personal.firstName}
                onChange={(e) =>
                  handleInputChange("personal", "firstName", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.personal.lastName}
                onChange={(e) =>
                  handleInputChange("personal", "lastName", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Father's Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.personal.fatherName}
                onChange={(e) =>
                  handleInputChange("personal", "fatherName", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Mother's Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.personal.motherName}
                onChange={(e) =>
                  handleInputChange("personal", "motherName", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Birthdate
              </label>
              <input
                type="date"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.personal.birthdate}
                onChange={(e) =>
                  handleInputChange("personal", "birthdate", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                NID Number
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.personal.nidNumber}
                onChange={(e) =>
                  handleInputChange("personal", "nidNumber", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.personal.address}
                onChange={(e) =>
                  handleInputChange("personal", "address", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.personal.email}
                onChange={(e) =>
                  handleInputChange("personal", "email", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="tel"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.personal.phone}
                onChange={(e) =>
                  handleInputChange("personal", "phone", e.target.value)
                }
                required
              />
            </div>
          </div>
        </div>

        {/* Education Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Education Information</h3>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Degree
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.education.degree}
              onChange={(e) =>
                handleInputChange("education", "degree", e.target.value)
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              School/University
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.education.school}
              onChange={(e) =>
                handleInputChange("education", "school", e.target.value)
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Graduation Year
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.education.graduationYear}
              onChange={(e) =>
                handleInputChange("education", "graduationYear", e.target.value)
              }
              required
            />
          </div>
        </div>

        {/* Experience Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Experience Information</h3>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Company Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.experience.companyName}
              onChange={(e) =>
                handleInputChange("experience", "companyName", e.target.value)
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Position
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.experience.position}
              onChange={(e) =>
                handleInputChange("experience", "position", e.target.value)
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Years of Experience
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.experience.yearsOfExperience}
              onChange={(e) =>
                handleInputChange(
                  "experience",
                  "yearsOfExperience",
                  e.target.value
                )
              }
              required
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Photo Upload</h3>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HiringForm;
