const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

export default async function Prediction({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <div className="items-centerw-full h-full">
      <div className="text-left">
        <div className="font-bold text-2xl">Personal Info</div>
        <div className="text-xl">Age: {age?.age}</div>
        <div className="text-xl">Gender: {gender?.gender}</div>
        <div className="text-xl">Country: {country?.country[0]?.country_id}</div>
      </div>
    </div>
  );
}
