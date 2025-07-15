
import NavBar from './navBar';
import { useSelector } from 'react-redux';

const Home = () => {
    const { user, isAuthenticated } = useSelector(state => state);
    /*const [userName, setUserName] = useState(null);

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);
    */
  return (
    <div className="min-h-screen bg-gray-100">

        <NavBar userName={user?.userName} isAuthenticated={isAuthenticated} />
        
      <div className="flex justify-center items-center h-[80vh]">
          {isAuthenticated ? (
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            Welcome to the Homepage, {user?.userName}!
          </h2>
        ) : (
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            Please sign up to get started.
          </h2>
        )}
      </div>
    </div>
  )
}

export default Home
