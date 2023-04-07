import axios from 'axios';
import { Video } from '../types';
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';
import { BASE_URL } from '../utils';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

interface IProps {
  videos: Video[]
}


const Home = ({ videos }: IProps) => {

  return (
    <div className='xl:w-[1200px] m-auto overflow-hidden h-[100vh]'>
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">

          <div className='flex flex-col gap-10
            videos h-full'>
            {videos.length ? (
              videos.map((video: Video) => (
                <VideoCard post={video} key={video._id} />
              ))
            ) : (
              <NoResults text={'No Videos'} />
            )}
          </div>

        </div>
      </div>
    </div>

  )
}

export const getServerSideProps = async ({
  query: { topic }
}: {
  query: { topic: string }
}) => {
  let response = null;
  if (topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    response = await axios.get(`${BASE_URL}/api/post`);
  }



  return {
    props: {
      videos: response.data
    }
  }
}

export default Home;
