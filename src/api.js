
export const fetchJobsFromAPI = async (page) => {
    const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };
  