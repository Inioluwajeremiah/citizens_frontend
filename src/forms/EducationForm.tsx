import { useState } from "react";
import { educationPoliciesNigeria } from "./formdata";
import { UserDataProps } from "../components/interfaces/UserInterface";
import countries from "./countries.json";

interface EducationFormProps {
  policyId: string;
  policyTitle: string;
  usertData: UserDataProps;
}

interface StatesProps {
  code: string;
  name: string;
  subdivision: null;
}

const EducationForm = ({
  policyId,
  usertData,
  policyTitle,
}: EducationFormProps) => {
  const [states, setStates] = useState<StatesProps[]>([]);
  const [knowsPolicy, setKnowsPolicy] = useState("");
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([]);
  const [effectiveness, setEffectiveness] = useState<number | null>(null);
  const [effectiveness2, setEffectiveness2] = useState<number>(5);
  const [recommendations, setRecommendations] = useState("");
  const [formData, setFormData] = useState<any>({
    userId: usertData._id,
    policyId: policyId,
    title: "",
    country: "",
    state: "",
    surveyFields: {},
  });
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const handlePolicyChange = (policy: string) => {
    setSelectedPolicies((prevSelectedPolicies) =>
      prevSelectedPolicies.includes(policy)
        ? prevSelectedPolicies.filter((item) => item !== policy)
        : [...prevSelectedPolicies, policy]
    );
  };

  const handleChangePolicyEffectiveness = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEffectiveness(Number(event.target.value));
  };

  const handleFormInput = () => {};
  return (
    <div>
      <p className="text-blackColor text-[32px] font-bold">{policyTitle}</p>
      <div className="my-6 p-4 bg-[#EAF4F3] rounded-md flex flex-col">
        <h1 className="text-xl text-black font-bold ">Privacy</h1>
        <p className="text-base text-black leading-[22px] mt-2">
          Sensitive data provided shall be treated as confidential can only be
          used for advocacy to improve government policies and actions
        </p>
      </div>
      <label
        htmlFor="username"
        className="text-sm mt-4 md:mt-6 lg:mt-10 text-[#A1A1A1]"
      >
        Your Name
      </label>
      <input
        type="text"
        name="username"
        value={formData.name}
        id="username"
        placeholder="Username"
        className={`mt-2 border w-full p-4 outline-none rounded-md focus:border-primaryColor text-sm ${
          formData.name === "" && submitButtonClicked && "border-red-500"
        }`}
        onChange={handleFormInput}
      />
      {/* country and state */}
      <div className="flex flow-row items-center justify-between gap-x-4 mb-4">
        {/* country */}
        <div className=" w-1/2 flex flex-col ">
          <label
            htmlFor="country"
            className="text-sm mt-4 md:mt-6 lg:mt-10 text-[#A1A1A1]"
          >
            Your Country
          </label>
          <select
            name="country"
            id="country"
            className="text-[#A1A1A1] border rounded-md p-4 mt-2"
          >
            {countries.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {/* state */}
        <div className="w-1/2 flex flex-col">
          <label
            htmlFor="country"
            className="text-sm mt-4 md:mt-6 lg:mt-10 text-[#A1A1A1]"
          >
            Your State
          </label>

          <select
            name="state"
            id="state"
            className="text-[#A1A1A1] border rounded-md p-4 mt-2"
          >
            {states.length > 0
              ? states.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
        </div>
      </div>

      {/* 3.  */}
      <label
        htmlFor="knowspolicy"
        className="text-sm mt-4 md:mt-6 lg:mt-10 text-[#A1A1A1]"
      >
        3. Do you know of the policy around education in Nigeria, Your State,
        and Local Government?
      </label>
      {/* 3 options */}
      <div className="flex flex-row items-center mb-4 ">
        <label htmlFor="knowspolicy_yes">Yes</label>
        <input
          name="knowspolicy"
          id="knowspolicy_yes"
          type="radio"
          value="Yes"
          checked={knowsPolicy === "Yes"}
          onChange={(e) => setKnowsPolicy(e.target.value)}
          className="ml-2"
        />

        <label htmlFor="knowspolicy_no" className="ml-4">
          No
        </label>

        <input
          name="knowspolicy"
          id="knowspolicy_no"
          type="radio"
          value="No"
          checked={knowsPolicy === "No"}
          onChange={(e) => setKnowsPolicy(e.target.value)}
          className="ml-2"
        />
      </div>

      {/* 4. select policies */}
      <label
        htmlFor="policylist"
        className="text-sm mt-4 md:mt-6 lg:mt-10 text-[#A1A1A1]"
      >
        4. Please select the applicable policies from the list below (multiple
        selections allowed):
      </label>
      <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {educationPoliciesNigeria.map((policy) => (
          <label key={policy}>
            <input
              type="checkbox"
              value={policy}
              checked={selectedPolicies.includes(policy)}
              onChange={() => handlePolicyChange(policy)}
            />
            {policy}
          </label>
        ))}
      </div>

      {/* 4. how effective is the policy */}
      <label htmlFor="username" className="text-sm mt-4 md:mt-6 lg:mt-10">
        4. How effective is the policy? (Scale of 1-10)
        <span className="text-[#686868]">
          1= Strongly Agree, 5 = Strongly Disagree.
        </span>
      </label>
      {[...Array(10)].map((_, index) => {
        const value = index + 1;
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={effectiveness === value}
              onChange={() => setEffectiveness(value)}
            />
            {value}
          </label>
        );
      })}
      <div>
        <p>How effective is the policy? (Scale of 1-10)</p>
        <p>1 = Strongly Agree, 10 = Strongly Disagree</p>

        <input
          type="range"
          min="1"
          max="10"
          value={effectiveness2}
          onChange={handleChangePolicyEffectiveness}
        />

        <p>Selected Effectiveness: {effectiveness2}</p>
        <p>
          Rating Interpretation:{" "}
          {effectiveness2 === 1
            ? "Strongly Agree"
            : effectiveness2 === 10
            ? "Strongly Disagree"
            : "Neutral"}
        </p>
      </div>
      {/* 5. recommenation */}
      <label htmlFor="username" className="text-sm mt-4 md:mt-6 lg:mt-10">
        5. What are your recommendations?
      </label>
      <input
        type="text"
        name="recommendations"
        value={recommendations}
        id="recommendations"
        placeholder="recommendations"
        className={`mt-2 border w-full p-4 outline-none focus:border-primaryColor text-sm ${
          recommendations === "" && submitButtonClicked && "border-red-500"
        }`}
        onChange={handleFormInput}
      />
    </div>
  );
};

export default EducationForm;
