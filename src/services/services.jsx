import axios from 'axios';

const fetchTeklifData = async () => {
  try {
    const response = await axios.get('./assets/json/teklif-data.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching policies:', error);
    throw error;
  }
};

export { fetchTeklifData };
