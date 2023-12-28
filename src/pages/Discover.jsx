import { useState } from "react";
import Header from "../components/Header";
import departments from "../data/collection"; // replace with the path to your departments data

const Discover = () => {
  const departmentNames = Object.keys(departments);
  const [step, setStep] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const handleDepartmentSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubjectSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleDifficultySubmit = (e) => {
    e.preventDefault();
    setStep(4);
  };

  const steps = ["Department", "Subject", "Difficulty"];

  const subjects = selectedDepartment
    ? departments[selectedDepartment].map((subject) => subject.name)
    : [];
  console.log(subjects);
  const difficulties = selectedSubject
    ? Object.keys(
        departments[selectedDepartment].find(
          (subject) => subject.name === selectedSubject
        ).difficulty
      )
    : [];

  const books = selectedDifficulty
    ? departments[selectedDepartment].find(
        (subject) => subject.name === selectedSubject
      ).difficulty[selectedDifficulty]
    : [];
  console.log(books);

  return (
    <>
      <Header />
      <div className="department-wrapper py-10">
        {step === 1 && (
          <>
            <h2 className="text-3xl text-center font-semibold p-4 lg:p-10">
              Select Department
            </h2>
            <div className="select-container">
              <form className="flex flex-col items-center ">
                <select
                  name="Select a department"
                  id=""
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="p-2 border-1 "
                >
                  <option value="">Select a department</option>
                  {departmentNames.map((department, index) => (
                    <option key={index} value={department} className="p-2">
                      {department}
                    </option>
                  ))}
                </select>
                <div className="flex justify-center items-center m-4">
                  <button
                    disabled={selectedDepartment === ""}
                    className="px-4 py-2 rounded-xl text-white  hover:bg-blue-800 bg-blue-600 disabled:bg-gray-800 m-2"
                    onClick={handleDepartmentSubmit}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="text-2xl p-2 font-semibold ">
              Department: {selectedDepartment}
            </div>
            <h2 className="text-3xl text-center font-semibold p-4 lg:p-10">
              Select Subject
            </h2>
            <div className="select-container">
              <form className="flex flex-col items-center ">
                <select
                  name="Select a subject"
                  id=""
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="p-2 border-1 "
                >
                  <option value="">Select a subject</option>

                  {subjects.map((subject, index) => (
                    <option key={index} value={subject} className="p-2">
                      {subject}
                    </option>
                  ))}
                </select>
                <div className="flex justify-center items-center m-4">
                  <button
                    disabled={selectedSubject === ""}
                    className="px-4 py-2 rounded-xl text-white bg-blue-600 disabled:bg-gray-800 hover:bg-blue-800 m-2"
                    onClick={handleSubjectSubmit}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <p className="text-2xl font-semibold ">
              Department: {selectedDepartment}
            </p>
            <p className="text-lg font-semibold">Subject: {selectedSubject}</p>
            <h2 className="text-3xl text-center font-semibold p-6 lg:p-10">
              Select Difficulty Level
            </h2>
            <div className="select-container">
              <form className="flex flex-col items-center ">
                <select
                  name="Select a difficulty"
                  id=""
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="p-2 border-1 "
                >
                  <option value="">Select a difficulty</option>
                  {difficulties.map((difficulty, index) => (
                    <option key={index} value={difficulty} className="p-2">
                      {difficulty}
                    </option>
                  ))}
                </select>
                <div className="flex justify-center items-center m-4">
                  <button
                    disabled={selectedDifficulty === ""}
                    className="px-4 py-2 rounded-xl text-white bg-blue-600 disabled:bg-gray-800 hover:bg-blue-800 m-2 cursor-pointer"
                    onClick={handleDifficultySubmit}
                  >
                    Get results
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <h2 className="text-3xl text-center font-semibold p-4 lg:p-10">
              Result
            </h2>
            <div className="text-lg p-1">
              Department:
              <div className="text-2xl font-semibold p-2">
                {selectedDepartment}
              </div>
            </div>
            <p className="text-lg font-semibold">Subject: {selectedSubject}</p>
            <p className="font-semibold text-lg">
              Difficulty Level: {selectedDifficulty}
            </p>
            <div
              className="books-container mx-auto lg:
            lg:grid lg:grid-cols-3 lg:gap-2"
            >
              {books.map((book, index) => (
                <div key={index} className="book p-2">
                  <h3 className="text-center text-lg p-2 font-bold">
                    {book.name}
                  </h3>
                  <p className="text-sm text-center p-2 ">{book.author}</p>
                  <div className="flex justify-center items-center">
                    <img src={book.imageUrl} alt={book.title} width={"200"} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center items-center">
        {step > 1 && (
          <button
            className="px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-800 m-2"
            onClick={() => setStep(step - 1)}
          >
            Change {steps[step - 2]}
          </button>
        )}
      </div>
    </>
  );
};

export default Discover;
