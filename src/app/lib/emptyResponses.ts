import { JobDbResponse } from "../../../types/jobSearchApiTypes";

const emptyJobsResponse: JobDbResponse = {
  id: 0,
  adzuna_id: "123456789",
  title: "Job Title",
  location: ["Location"],
  description: "This is a job description.",
  created: "01/01/2021",
  company: "This is a company name.",
  salary_min: 20000,
  salary_max: 30000,
  category: "This is a category.",
};

export { emptyJobsResponse };
