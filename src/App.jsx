// import React from 'react'

import Card from './components/Card'


const App = () => {
  const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfGyEcEdPfzca-b4iATLHuHIk80_yYMtRWw&s",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYMgmPlxU4Yc6_TJI2BvIPYJlSYzNsG3Pfw&s",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAodWMcqYfXzKJloC6Dyq6YuWSo_j-P7lWg&s",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8ivjh3jEgWs6uv7DMzADcxPcFaWP00H1hQ&s",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizQq7KJ5NDbGjh-4wklylfJ9hAaOJ5vBtJA&s",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiWRIrL7FmxcuNYXau9zKwNT5jG1tGF17fg&s",
    company: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9b8_1piCT_uFazr99aKKU2jHiEr6m_IaX5A&s",
    company: "OpenAI",
    datePosted: "1 day ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu42wbJpv5_Bp0FNCQxq08MGZ6YnlQ9DT21Q&s",
    company: "NVIDIA",
    datePosted: "10 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDEXuBIhUSRBG1gfGSw6I6dWZm-GGNCah2g&s",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJU5P1pGOioxnqddCZMyZURPv-g-fGmX0y3Q&s",
    company: "Uber",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Pune, India"
  }
];

console.log(jobs);
// export default jobs;
  
  return (
<div className='parent'>

 

{jobs.map(function(elem,idx){

  return <div key={idx}>

  <Card company={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted}/>
  </div>
})}
 
</div>
  )
}

export default App
