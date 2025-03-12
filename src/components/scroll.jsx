// Utility function to scroll smoothly to job listings
export const scrollToJob = () => {
    const jobSection = document.getElementById('job-listings');
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  export const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if(aboutSection){
      aboutSection.scrollIntoView({behavior: 'smooth'});
    }
  }