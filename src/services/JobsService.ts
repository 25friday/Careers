import axios from 'axios';

/*
The items object it is mocked data,
it should be replaced by a call to
firebase in order to get all the
available jobs
*/
const MockedJobs =  [
    {
      id: 1,
      title: 'Software Development Engineer',
      hashtags: '#php #aws #architecture',
      img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
      shortDescription: 'We are looking for a PHP Developer who is motivated to develop smart solutions using state-of-the-art technologies.',
    },
    {
      id: 2,
      title: 'Frontend Development Engineer',
      hashtags: '#react #javascript #nodejs',
      img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
      shortDescription: 'Multiple years of professional experience with JavaScript, HTML, CSS, and React are required',
    },
    {
      id: 3,
      title: 'QA Engineer',
      hashtags: '#automation',
      img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
      shortDescription: 'The candidate will play a key role in software development lifecycle and will be responsible for improving overall QA.',
    },
  ];

const API_URL = 'https://api.kanye.rest';


class JobsService {
  public getQuote() {
    return axios.get(`${API_URL}`);
  }

  public getJobs() {
    return MockedJobs;
  }

}

export const jobsService = new JobsService();
