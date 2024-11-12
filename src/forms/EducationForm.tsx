import { useState } from "react";
import { educationPoliciesNigeria } from "./formdata";
import { UserDataProps } from "../components/interfaces/UserInterface";
import countries from "./countries.json";
import { useCreateEducationStatMutation } from "../redux/apiSlice/generalStatsApiSlice";

interface EducationFormProps {
  policyId: string;
  policyTitle: string;
  userData: UserDataProps;
  policyCategory: string;
}

interface StatesProps {
  code: string;
  name: string;
  subdivision?: string | "";
}
const ageGroups = [
  "15-24 years",
  "25-34 years",
  "35-44 years",
  "45-54 years",
  "55-64 years",
];
const EducationForm = ({
  policyTitle,
  policyId,
  userData,
  policyCategory,
}: EducationFormProps) => {
  const [states, setStates] = useState<StatesProps[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [knowsPolicy, setKnowsPolicy] = useState("");
  const [username, setUsername] = useState("");
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([]);
  const [effectiveness, setEffectiveness] = useState<number | null>(null);
  const [recommendations, setRecommendations] = useState("");
  const [selectedAgeRange, setSelectedAgeRange] = useState("");
  const [gender, setGender] = useState("");

  const [createEducationStat, { isLoading }] = useCreateEducationStatMutation();
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const handlePolicyChange = (policy: string) => {
    setSelectedPolicies((prevSelectedPolicies) =>
      prevSelectedPolicies.includes(policy)
        ? prevSelectedPolicies.filter((item) => item !== policy)
        : [...prevSelectedPolicies, policy]
    );
  };

  const handleSelectCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCountry(value);
    const country = countries.find((item) => item.name === value);

    const transformedStates =
      country?.states.map((state) => ({
        ...state,
        subdivision: state.subdivision ?? "", // Replace null with empty string
      })) || [];

    setStates(transformedStates);
  };

  //   const handleFormInput = () => {};
  const handleSubmitSurvey = async () => {
    // if (!username) {
    //   alert("Name is required")
    // } else if () {

    // }

    const res = await createEducationStat({
      userId: userData?._id || "",
      policyId: policyId,
      category: policyCategory,
      surveyFields: {
        name: username,
        age: ageGroups,
        gender: gender,
        country: selectedCountry,
        state: selectedState,
        policyKnowledge: knowsPolicy,
        policiesKnown: selectedPolicies,
        policyEffectiveness: effectiveness,
        recommendations: recommendations,
      },
    });
    console.log("handleSubmitSurvey res ===> ", res);
    if (res.data) {
      alert("Survey submitted");
      setUsername("");
      setRecommendations("");
      setSelectedCountry("");
      setSelectedAgeRange("");
      setSelectedPolicies([]);
      setSelectedState("");
      setEffectiveness(0);
    }

    console.log("setSubmitButtonClicked ==>", setSubmitButtonClicked);
    console.log("setStates ==> ", setStates);

    // setSubmitButtonClicked(!submitButtonClicked);
    // setStates([]);
  };
  return (
    <div>
      <p className="text-blackColor text-2xl md:text-3xl lg:text-[32px] font-bold">
        {policyTitle}
      </p>
      <div className="my-6 p-4 bg-[#EAF4F3] rounded-md flex flex-col">
        <h1 className="text-base md:text-lg lg:text-xl text-black font-bold ">
          Privacy
        </h1>
        <p className="text-sm md:text-base text-black leading-[22px] mt-2">
          Sensitive data provided shall be treated as confidential can only be
          used for advocacy to improve government policies and actions
        </p>
      </div>
      <label
        htmlFor="username"
        className="text-sm md:text-base font-semibold mt-4 md:mt-6 lg:mt-10 text-[#A1A1A1]"
      >
        Your Name
      </label>
      <input
        type="text"
        name="username"
        value={username}
        id="username"
        placeholder="Username"
        className={`mt-2 mb-4 border w-full p-4 outline-none rounded-md focus:border-primaryColor text-xs md:text-sm ${
          username === "" && submitButtonClicked && "border-red-500"
        }`}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* sex */}
      <label
        htmlFor="gender"
        className="text-sm md:text-base font-semibold  text-[#A1A1A1]"
      >
        Gender
      </label>
      <div className="flex flex-row items-center mb-4 ">
        <label htmlFor="gender_female" className="text-xs md:text-sm">
          Female
        </label>
        <input
          name="gender"
          id="gender_female"
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
          className="ml-2"
        />

        <label htmlFor="gender_male" className="ml-4 text-xs md:text-sm">
          Male
        </label>

        <input
          name="gender"
          id="gender_male"
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
          className="ml-2 "
        />
      </div>
      {/* age group */}
      <div className="mb-4 ">
        <label
          htmlFor="username"
          className="text-sm md:text-base font-semibold text-[#A1A1A1]"
        >
          Age Group
        </label>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {ageGroups.map((item, index) => (
            <button
              key={index}
              className={` rounded-md gap-x-2 px-4 py-2  ${
                selectedAgeRange === item
                  ? "border border-primaryColor"
                  : "border "
              }`}
              onClick={() => setSelectedAgeRange(item)}
            >
              <p className="text-xs md:text-sm">{item}</p>
            </button>
          ))}
        </div>
      </div>
      {/* country and state */}
      <div className="flex flow-row items-center justify-between gap-x-4 mb-4">
        {/* country */}
        <div className=" w-1/2 flex flex-col ">
          <label
            htmlFor="country"
            className="text-sm md:text-base font-semibold  text-[#A1A1A1]"
          >
            Your Country
          </label>
          <select
            name="country"
            id="country"
            className="text-[#A1A1A1] border rounded-md p-4 mt-2"
            onChange={handleSelectCountry}
          >
            {countries.map((item, index) => (
              <option
                key={index}
                value={item.name}
                className="text-xs md:text-sm"
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {/* state */}
        <div className="w-1/2 flex flex-col">
          <label
            htmlFor="country"
            className="text-sm md:text-base font-semibold text-[#A1A1A1]"
          >
            Your State
          </label>

          <select
            name="state"
            id="state"
            className="text-sm md:text-bas text-[#A1A1A1] border rounded-md p-4 mt-2"
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {states.length > 0
              ? states.map((item, index) => (
                  <option
                    key={index}
                    value={item.name}
                    className="text-xs md:text-sm"
                  >
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
        className="text-sm md:text-base font-semibold mt-4 md:mt-6 lg:mt-10 text-[#A1A1A1]"
      >
        3. Do you know of the policy around education in Nigeria, Your State,
        and Local Government?
      </label>
      {/* 3 options */}
      <div className="flex flex-row items-center mb-4 ">
        <label htmlFor="knowspolicy_yes" className="ml-4 text-xs md:text-base">
          Yes
        </label>
        <input
          name="knowspolicy"
          id="knowspolicy_yes"
          type="radio"
          value="Yes"
          checked={knowsPolicy === "Yes"}
          onChange={(e) => setKnowsPolicy(e.target.value)}
          className="ml-2"
        />

        <label htmlFor="knowspolicy_no" className="ml-4 text-xs md:text-base">
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
        className="text-sm md:text-base font-semibold mt-4 md:mt-6 lg:mt-10 text-[#A1A1A1]"
      >
        4. Please select the applicable policies from the list below (multiple
        selections allowed):
      </label>
      <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {educationPoliciesNigeria.map((policy, index) => (
          <label
            key={index}
            className={`text-xs md:text-sm rounded-md gap-x-2 p-4  ${
              selectedPolicies.includes(policy)
                ? "border border-primaryColor"
                : "border "
            }`}
          >
            <input
              type="checkbox"
              value={policy}
              checked={selectedPolicies.includes(policy)}
              onChange={() => handlePolicyChange(policy)}
              className="checked:bg-primaryColor mr-2"
            />
            <p>{policy}</p>
          </label>
        ))}
      </div>

      {/* 4. how effective is the policy */}
      <div className="mb-4 ">
        <label
          htmlFor="username"
          className="text-sm md:text-base font-semibold text-[#686868]"
        >
          4. How effective is the policy? (Scale of 1-10)
          <span className=""> 1= Strongly Agree, 10 = Strongly Disagree.</span>
        </label>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {[...Array(10)].map((_, index) => {
            const value = index + 1;
            return (
              <button
                key={value}
                className={` rounded-md gap-x-2 px-4 py-2  ${
                  effectiveness === value
                    ? "border border-primaryColor"
                    : "border "
                }`}
                onClick={() => setEffectiveness(value)}
              >
                <p className="text-xs md:text-sm">{value}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. recommenation */}
      <label
        htmlFor="username"
        className="text-sm md:text-base font-semibold text-[#686868] mt-4 md:mt-6 lg:mt-10"
      >
        5. What are your recommendations?
      </label>
      <input
        type="text"
        name="recommendations"
        value={recommendations}
        id="recommendations"
        placeholder="recommendations"
        className={`mt-2 border w-full p-4 outline-none focus:border-primaryColor text-xs md:text-sm ${
          recommendations === "" && submitButtonClicked && "border-red-500"
        }`}
        onChange={(e) => setRecommendations(e.target.value)}
      />

      <button
        onClick={handleSubmitSurvey}
        className=" w-full lg:w-[70%] bg-primaryColor mt-10"
      >
        <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-medium uppercase px-6 py-4 ">
          {isLoading ? "Loading..." : "Submit"}
        </p>
      </button>
    </div>
  );
};

export default EducationForm;
